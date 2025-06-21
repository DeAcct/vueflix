import {
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";

export function useLiquidGlass(options = {}) {
  const $root = ref(null);
  const radius = options.radius ?? 0.6;

  const state = reactive({
    width: 0,
    height: 0,
    mouse: { x: 0.5, y: 0.5 },
    mouseUsed: false,
  });

  const id = "liquid-glass-" + Math.random().toString(36).substr(2, 9);

  let svg, canvas, ctx;
  let feImage, feDisplacementMap;

  // util 함수 (원본 그대로)
  function smoothStep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  function length(x, y) {
    return Math.sqrt(x * x + y * y);
  }

  function roundedRectSDF(x, y, width, height, radius) {
    const qx = Math.abs(x) - width + radius;
    const qy = Math.abs(y) - height + radius;
    return (
      Math.min(Math.max(qx, qy), 0) +
      length(Math.max(qx, 0), Math.max(qy, 0)) -
      radius
    );
  }

  function texture(x, y) {
    return { type: "t", x, y };
  }

  // 쉐이더 역할 함수
  function fragment(uv) {
    const ix = uv.x - 0.5;
    const iy = uv.y - 0.5;
    const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, radius);
    const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
    const scaled = smoothStep(0, 1, displacement);
    return texture(ix * scaled + 0.5, iy * scaled + 0.5);
  }

  // 변위맵 업데이트
  function updateShader() {
    if (state.width <= 0 || state.height <= 0) return;

    const w = state.width;
    const h = state.height;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const rawValues = [];

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);

      const uv = { x: x / w, y: y / h };
      const pos = fragment(uv);

      // 노이즈 생성 (간단 랜덤 노이즈)
      const noise = (Math.random() - 0.5) * 0.05; // -0.025 ~ +0.025 정도 미세 변위

      const dx = -(pos.x * w - x) + noise * w;
      const dy = -(pos.y * h - y) + noise * h;

      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);

      // 입체감 밝기는 이전처럼
      const lightFactor = 0.8 * (1 - uv.x) + 0.2 * (1 - uv.y);
      const brightness = Math.floor(lightFactor * 255);
    }

    maxScale *= 0.5;

    let index = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;

      const pixelIndex = i / 4;
      const py = Math.floor(pixelIndex / w);
      const px = pixelIndex % w;
      const uv = { x: px / w, y: py / h };
      const lightFactor = 0.8 * (1 - uv.x) + 0.2 * (1 - uv.y);
      const brightness = Math.floor(lightFactor * 255);

      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = brightness; // B 채널에 입체감 밝기 넣기
      data[i + 3] = 255;
    }

    ctx.putImageData(new ImageData(data, w, h), 0, 0);
    feImage.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      canvas.toDataURL()
    );
    feDisplacementMap.setAttribute("scale", maxScale.toString());
  }

  function createSVGElement(name, attrs = {}) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attrs).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
    return el;
  }

  function createElements() {
    const svgMarkup = `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"
     style="position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;">
  <defs>
    <filter id="${id}_filter" filterUnits="userSpaceOnUse" x="0" y="0" width="${state.width}" height="${state.height}" color-interpolation-filters="sRGB">
      <feImage id="${id}_map" width="${state.width}" height="${state.height}" />
      <feDisplacementMap in="SourceGraphic" in2="${id}_map" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
</svg>
`;

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "0";
    container.style.height = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";

    container.innerHTML = svgMarkup;
    document.body.appendChild(container);

    // 2. 주요 엘리먼트 변수에 할당 (참조 유지)
    feImage = container.querySelector(`#${id}_map`);
    feDisplacementMap = container.querySelector("feDisplacementMap");

    // canvas 생성 부분은 그대로
    canvas = document.createElement("canvas");
    canvas.width = state.width;
    canvas.height = state.height;
    canvas.style.display = "none";

    ctx = canvas.getContext("2d");
  }

  onMounted(() => {
    nextTick(() => {
      if (!$root.value) return;

      const rect = $root.value.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      state.width = Math.floor(rect.width);
      state.height = Math.floor(rect.height);

      createElements();
      updateShader();

      // 타깃 엘리먼트에 필터 적용
      const bgFilter = `url(#${id}_filter) blur(1px) contrast(1.5) brightness(1.05) saturate(1.1)`;
      $root.value.style.webkitBackdropFilter = bgFilter;
      $root.value.style.backdropFilter = bgFilter;
    });
  });

  onBeforeUnmount(() => {
    if (svg && svg.parentNode) svg.parentNode.removeChild(svg);
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    if ($root.value) {
      $root.value.style.backdropFilter = "";
      $root.value.style.webkitBackdropFilter = "";
    }
  });

  return {
    $root,
    state,
    updateShader, // 필요 시 외부에서 수동 호출 가능
  };
}

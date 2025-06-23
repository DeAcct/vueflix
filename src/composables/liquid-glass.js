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
  let animationFrame;
  let lastUpdateTime = 0;
  const frameInterval = 1000 / 12;

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

  function fragment(uv, time = 0) {
    const ix = uv.x - 0.5;
    const iy = uv.y - 0.5;
    const wave = Math.sin(10 * (ix + iy) + time * 0.0025) * 0.01;
    const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, radius);
    const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
    const scaled = smoothStep(0, 1, displacement);
    return texture(ix * scaled + 0.5 + wave, iy * scaled + 0.5 + wave);
  }

  function updateShader(timestamp = 0) {
    animationFrame = requestAnimationFrame(updateShader);

    if (timestamp - lastUpdateTime < frameInterval) return;
    lastUpdateTime = timestamp;

    if (state.width <= 0 || state.height <= 0) return;

    const w = state.width;
    const h = state.height;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const rawValues = [];
    // let totalLuminance = 0;

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);

      const uv = { x: x / w, y: y / h };
      const pos = fragment(uv, timestamp);

      const dx = -(pos.x * w - x);
      const dy = -(pos.y * h - y);

      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
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
      data[i + 2] = brightness;
      data[i + 3] = 255;

      // totalLuminance += brightness;
    }

    ctx.putImageData(new ImageData(data, w, h), 0, 0);
    feImage.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      canvas.toDataURL()
    );
    feDisplacementMap.setAttribute("scale", maxScale.toString());

    // const avgLuminance = totalLuminance / (w * h);
    // console.log(avgLuminance);
    // state.isDark = avgLuminance < 128;
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

    feImage = container.querySelector(`#${id}_map`);
    feDisplacementMap = container.querySelector("feDisplacementMap");

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

      const bgFilter = `url(#${id}_filter) blur(1px) contrast(1.5) brightness(1.2) saturate(1.1)`;
      Object.assign($root.value.style, {
        backdropFilter: bgFilter,
        webkitBackdropFilter: bgFilter,
        boxShadow: `inset -1px -1px 2px rgba(0, 0, 0, 0.1),
      inset 1px 1px 2px rgba(255, 255, 255, 0.2)`,
        border: `1px solid rgba(255 255 255 / 0.5)`,
        borderRadius: "9999px",
      });
    });
  });

  onBeforeUnmount(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
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
    updateShader,
  };
}

import { ref, unref, onMounted, onBeforeUnmount, watchEffect } from "vue";

/**
 * displacement map SVG를 data URL로 생성
 * @param {Object} opts
 * @param {number} opts.height
 * @param {number} opts.width
 * @param {number} opts.radius
 * @param {number} opts.depth
 * @returns {string}
 */
export const getDisplacementMap = ({ height, width, radius, depth }) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg
  height="${height}"
  width="${width}"
  viewBox="0 0 ${width} ${height}"
  xmlns="http://www.w3.org/2000/svg"
>
  <style>
    .mix { mix-blend-mode: screen; }
  </style>

  <defs>
    <linearGradient
      id="Y"
      x1="0"
      x2="0"
      y1="${Math.ceil((radius / height) * 15)}%"
      y2="${Math.floor(100 - (radius / height) * 15)}%"
    >
      <stop offset="0%" stop-color="#0F0" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>

    <linearGradient
      id="X"
      x1="${Math.ceil((radius / width) * 15)}%"
      x2="${Math.floor(100 - (radius / width) * 15)}%"
      y1="0"
      y2="0"
    >
      <stop offset="0%" stop-color="#F00" />
      <stop offset="100%" stop-color="#000" />
    </linearGradient>
  </defs>

  <rect x="0" y="0" height="${height}" width="${width}" fill="#808080" />

  <g filter="blur(2px)">
    <rect x="0" y="0" height="${height}" width="${width}" fill="#000080" />

    <rect
      x="0"
      y="0"
      height="${height}"
      width="${width}"
      fill="url(#Y)"
      class="mix"
    />

    <rect
      x="0"
      y="0"
      height="${height}"
      width="${width}"
      fill="url(#X)"
      class="mix"
    />

    <rect
      x="${depth}"
      y="${depth}"
      height="${height - 2 * depth}"
      width="${width - 2 * depth}"
      fill="#808080"
      rx="${radius}"
      ry="${radius}"
      filter="blur(${depth}px)"
    />
  </g>
</svg>`
  );

/**
 * DOM 요소(el 또는 ref)를 기반으로 displacement filter를 실시간 계산해서 반환한다.
 * 반환값: { filter: Ref<string> } – 적용할 SVG filter URL.
 * 입력 파라미터:
 *   el: HTMLElement | Ref<HTMLElement|null>
 *   radius: (optional) override border-radius 계산
 *   depth: (optional) override depth
 *   strength: number
 *   chromaticAberration: number
 */
export function getDisplacementFilter({
  el,
  radius: overrideRadius,
  depth: overrideDepth,
  strength = 100,
  chromaticAberration = 0,
}) {
  const filter = ref("");
  let resizeObs = null;
  let styleObserver = null;

  const parsePx = (v) => {
    const m = /^([\d.]+)px$/.exec(v);
    return m ? parseFloat(m[1]) : 0;
  };

  const rebuild = () => {
    console.log("rebuild : ", el.value);
    const _el = unref(el);
    if (!(_el instanceof HTMLElement)) {
      filter.value = "";
      return;
    }

    const rect = _el.getBoundingClientRect();
    const computed = getComputedStyle(_el);

    const width = rect.width || parsePx(computed.width) || 0;
    const height = rect.height || parsePx(computed.height) || 0;

    // radius 계산: override가 없으면 borderRadius 중 최대값
    let radius = 0;
    if (overrideRadius != null) {
      radius = overrideRadius;
    } else if (computed.borderRadius) {
      const parts = computed.borderRadius
        .split(/\s+/)
        .map((v) => parsePx(v))
        .filter((n) => !isNaN(n));
      if (parts.length) radius = Math.max(...parts);
    }

    // depth 기본값: 요소 크기의 5%, 최소 1
    const defaultDepth = Math.max(1, Math.min(width, height) * 0.05);
    const depth = overrideDepth != null ? overrideDepth : defaultDepth;

    if (width <= 0 || height <= 0) {
      filter.value = "";
      return;
    }

    const displacementMapHref = getDisplacementMap({
      height,
      width,
      radius,
      depth,
    });

    const svgFilter = `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displace" color-interpolation-filters="sRGB">
      <feImage
        x="0"
        y="0"
        height="${height}"
        width="${width}"
        href="${displacementMapHref}"
        result="displacementMap"
      />

      <feDisplacementMap
        transform-origin="center"
        in="SourceGraphic"
        in2="displacementMap"
        scale="${strength + chromaticAberration * 2}"
        xChannelSelector="R"
        yChannelSelector="G"
      />
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
        result="displacedR"
      />

      <feDisplacementMap
        in="SourceGraphic"
        in2="displacementMap"
        scale="${strength + chromaticAberration}"
        xChannelSelector="R"
        yChannelSelector="G"
      />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0
                0 1 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
        result="displacedG"
      />

      <feDisplacementMap
        in="SourceGraphic"
        in2="displacementMap"
        scale="${strength}"
        xChannelSelector="R"
        yChannelSelector="G"
      />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 1 0 0
                0 0 0 1 0"
        result="displacedB"
      />

      <feBlend in="displacedR" in2="displacedG" mode="screen" />
      <feBlend in2="displacedB" mode="screen" />
    </filter>
  </defs>
</svg>`;

    filter.value =
      "data:image/svg+xml;utf8," + encodeURIComponent(svgFilter) + "#displace";
    console.log(filter.value);
  };

  onMounted(() => {
    watchEffect(() => {
      rebuild();
    });

    const _el = unref(el);
    if (!(_el instanceof HTMLElement)) return;

    if (window.ResizeObserver) {
      resizeObs = new ResizeObserver(() => {
        rebuild();
      });
      resizeObs.observe(_el);
    }

    styleObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (
          m.type === "attributes" &&
          (m.attributeName === "style" || m.attributeName === "class")
        ) {
          rebuild();

          break;
        }
      }
    });
    styleObserver.observe(_el, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
  });

  onBeforeUnmount(() => {
    if (resizeObs && resizeObs.disconnect) resizeObs.disconnect();
    if (styleObserver && styleObserver.disconnect) styleObserver.disconnect();
  });

  return filter;
}

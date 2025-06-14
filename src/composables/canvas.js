import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useEventListener } from "@vueuse/core";

export function useAmbient() {
  const $video = ref(null);
  const $effect = ref(null);
  const isVideoLoaded = ref(false);
  let step;
  let ctx;

  function draw() {
    if ($effect.value) {
      ctx.drawImage(
        $video.value,
        0,
        0,
        $effect.value.width,
        $effect.value.height
      );
    }
  }
  function drawLoop() {
    draw();
    step = window.requestAnimationFrame(drawLoop);
  }
  function drawPause() {
    window.cancelAnimationFrame(step);
    step = undefined;
  }

  function start() {
    $video.value.addEventListener(
      "loadeddata",
      () => {
        draw();
        isVideoLoaded.value = true;
      },
      false
    );
    $video.value.addEventListener("seeked", draw, false);
    $video.value.addEventListener("play", drawLoop, false);
    $video.value.addEventListener("pause", drawPause, false);
    $video.value.addEventListener("ended", drawPause, false);
  }

  function cleanup() {
    if ($video.value) {
      $video.value.removeEventListener("loadeddata", draw);
      $video.value.removeEventListener("seeked", draw);
      $video.value.removeEventListener("play", drawLoop);
      $video.value.removeEventListener("pause", drawPause);
      $video.value.removeEventListener("ended", drawPause);
    }
  }

  onMounted(() => {
    ctx = $effect.value.getContext("2d");
    start();
  });
  onUnmounted(() => {
    cleanup();
  });

  return {
    $video,
    $effect,
    isVideoLoaded,
  };
}

/**
 *  부모 엘리먼트의 크기에 맞게 캔버스를 조정하고, confetti 애니메이션을 생성 및 실행합니다.
 * @param {{
 * amount:number,
 * colors: Array<`${number} ${number} ${number}` | `#${string}`>
 * }} param0
 * @returns {{$canvas: import("vue").Ref<HTMLCanvasElement|null>, start: () => void}}
 */
export function useFanfare({ amount = 100, colors = [] }) {
  const $canvas = ref(null);

  function resize() {
    $canvas.value.width = $canvas.value.parentElement.offsetWidth;
    $canvas.value.height = $canvas.value.parentElement.offsetHeight;
  }
  let ctx;
  onMounted(() => {
    resize();
    ctx = $canvas.value.getContext("2d");
  });
  useEventListener("resize", resize);

  const confetti = ref([]);

  function createConfetti() {
    return {
      x: Math.floor(Math.random() * $canvas.value.width),
      y: Math.floor(Math.random() * $canvas.value.height),
      size: 10,
      angle: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
      speed: Math.random() * 50 + 1,
      opacity: 1,
      opacitySpeed: Math.random() * 0.01 + 0.005,
    };
  }

  function drawConfetti({ x, y, size, color, opacity }) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    const currentColor = `rgb(${color} / ${opacity})`;
    ctx.fillStyle = currentColor;
    ctx.fill();
  }

  function updateConfetti(confetto) {
    confetto.y += confetto.speed;
    confetto.x += Math.cos(confetto.angle) * confetto.speed;
    confetto.angle += 0.05;
    confetto.opacity -= confetto.opacitySpeed;
    if (confetto.y + 5 > $canvas.value.height || confetto.opacity === 0) {
      confetti.value = confetti.value.filter(({ id }) => id !== confetto.id);
    }
  }

  function fanfareEffect() {
    for (let i = 0; i < amount; i++) {
      confetti.value.push({ ...createConfetti(), id: i });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, $canvas.value.width, $canvas.value.height);

    confetti.value.forEach((confetto) => {
      drawConfetti(confetto);
      updateConfetti(confetto);
    });

    requestAnimationFrame(animate);
  }

  function start() {
    fanfareEffect();
    animate();
  }

  watch(confetti, (_value) => {
    if (_value.length === 0) {
      $canvas.value.remove();
    }
  });

  onUnmounted(() => {
    confetti.value = [];
  });

  return { $canvas, start };
}

export function useRGB2HSL(r, g, b) {
  // RGB 값을 0~1 범위로 변환
  r /= 255;
  g /= 255;
  b /= 255;

  // 최대값과 최소값을 구함
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h, s;
  // 명도는 r,g,b중 최대값과 최소값의 평균
  // 인간이 느끼는 밝기와 잘 맞음
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // 무채색
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    // 뒤에 더하는 숫자는 음수 보정용
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

import { ref, onMounted, onUnmounted, watch } from "vue";
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

export function useImageAccentColor() {
  const $image = ref(null);
  const accentColor = ref("");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  function getImageData() {
    canvas.width = $image.value.width;
    canvas.height = $image.value.height;
    ctx.drawImage($image.value, 0, 0, canvas.width, canvas.height);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const color = [0, 0, 0];
    for (let i = 0; i < data.length; i += 4) {
      color[0] += data[i];
      color[1] += data[i + 1];
      color[2] += data[i + 2];
    }
    color[0] = Math.floor(color[0] / (data.length / 4));
    color[1] = Math.floor(color[1] / (data.length / 4));
    color[2] = Math.floor(color[2] / (data.length / 4));
    accentColor.value = `rgb(${color.join(",")})`;
  }

  onMounted(() => {
    getImageData();
  });

  return { accentColor, $image };
}

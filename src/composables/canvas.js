import { ref, onMounted, onUnmounted } from "vue";
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

  function init() {
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
    init();
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

export function useFanfare({ amount = 100, colors = [] }) {
  const $canvas = ref(null);

  function resize() {
    $canvas.value.width = window.innerWidth;
    $canvas.value.height = window.innerHeight;
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
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
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

  function init() {
    fanfareEffect();
    animate();
  }

  return { $canvas, init };
}

import { ref, onMounted, onUnmounted } from "vue";

export default function useAmbient() {
  const $video = ref(null);
  const $effect = ref(null);
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
    $video.value.addEventListener("loadeddata", draw, false);
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
  };
}

<template>
  <div class="AmbientPlayer">
    <video
      ref="$video"
      :src="src"
      crossorigin="anonymous"
      class="AmbientPlayer__Video"
      autoplay
      muted
    ></video>
    <VideoControlBar v-on="videoEvents"></VideoControlBar>
    <canvas
      ref="$effect"
      class="AmbientPlayer__Effect"
      width="16"
      height="9"
      aria-hidden="true"
    ></canvas>
  </div>
</template>

<script setup>
import VideoControlBar from "./VideoControlBar.vue";
import useAmbient from "@/composables/ambient";

const props = defineProps({
  src: String,
});

const { $video, $effect } = useAmbient();

const videoEvents = {
  playToggle,
};
function playToggle() {
  if (!$video.paused) {
    $video.value.pause();
  }
  $video.value.play();
}
</script>

<style lang="scss" scoped>
.AmbientPlayer {
  position: relative;
  z-index: 1;
  &__Video {
    z-index: 2;
    width: 100%;
  }
  &__Effect {
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0.6;
    filter: blur(30px);
    transform: translate(-50%, calc(-50% + 3rem));
  }
}

@media screen and (min-width: 1080px) {
  .AmbientPlayer {
    &__Effect {
      filter: blur(100px);
    }
  }
}
</style>

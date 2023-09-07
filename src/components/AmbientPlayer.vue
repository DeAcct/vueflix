<template>
  <div class="AmbientPlayer">
    <div class="AmbientPlayer__FullscreenRoot" ref="$fullscreenRoot">
      <video
        ref="$video"
        :src="src"
        crossorigin="anonymous"
        class="AmbientPlayer__Video"
        autoplay
        muted
      ></video>
      <VideoControlBar
        v-on="videoEvents"
        class="AmbientPlayer__Control"
        :progress="progress"
        :is-playing="playing"
      >
        <template #time>{{ time.current }} / {{ time.duration }}</template>
      </VideoControlBar>
    </div>
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
// todo
// - 전체화면 (구현 완료)
// - PIP (구현됨, 실제 비디오 테스트 필요)
// - 영화관모드
// - 다음 에피소드 이동
// - 단축키
// f:전체화면,
// p:PIP,
// w:영화관모드(emit),
// 상/하 화살표:볼륨 상/하,
// 좌/우 화살표:재생위치 10초씩 감소/증가
// m:음소거,
// >:다음 에피소드,
// <:이전 에피소드,
// e:에피소드 목록 페이지(/episodes/:title/episodes)로 가기

import { reactive, ref } from "vue";
import VideoControlBar from "./VideoControlBar.vue";
import useAmbient from "@/composables/ambient";
import { useEventListener } from "@vueuse/core";
import { useSecToHourMinSec } from "@/composables/formatter";

const props = defineProps({
  src: String,
});

const { $video, $effect, isVideoLoaded } = useAmbient();

const videoEvents = {
  playToggle,
  requestFullscreen,
  requestPip,
  requestTheater,
};

function playToggle() {
  console.log("dd");
  if ($video.value.paused) {
    $video.value.play();
    return;
  }
  $video.value.pause();
}

const $fullscreenRoot = ref(null);
function requestFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
  $fullscreenRoot.value.requestFullscreen();
}

function requestPip() {
  console.log("pip");
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
    return;
  }
  $video.value.requestPictureInPicture();
}

const emits = defineEmits(["toggle-theater"]);
function requestTheater() {
  emits("toggle-theater");
}

const progress = ref("0%");
const time = reactive({ current: "00:00", duration: "00:00" });
function timeChange() {
  if (!isVideoLoaded.value) {
    return;
  }
  progress.value = `${
    ($video.value.currentTime / $video.value.duration) * 100
  }%`;
  time.current = useSecToHourMinSec($video.value.currentTime);
  time.duration = useSecToHourMinSec($video.value.duration);
  console.log(time);
}
useEventListener($video, "timeupdate", timeChange);

const playing = ref(false);
function setPlaying() {
  if (!isVideoLoaded.value) {
    playing.value = false;
    return;
  }
  playing.value = $video.value.paused;
}
useEventListener($video, ["play", "pause"], setPlaying);
</script>

<style lang="scss" scoped>
.AmbientPlayer {
  z-index: 1;
  display: flex;
  align-items: center;

  &__FullscreenRoot {
    position: relative;
    //개발용 임시
    aspect-ratio: 16/9;
    width: 100%;
  }
  &__Video {
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  &__Control {
    position: absolute;
    bottom: 0;
  }
  &__Effect {
    position: absolute;
    z-index: -100;
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

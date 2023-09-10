<template>
  <div class="AmbientPlayer">
    <div class="AmbientPlayer__FullscreenRoot" ref="$fullscreenRoot">
      <video
        ref="$video"
        :src="src"
        crossorigin="anonymous"
        class="AmbientPlayer__Video"
        @timeupdate="timeChange"
        @play="setPlaying"
        @pause="setPlaying"
        autoplay
        muted
      ></video>
      <VideoControlBar
        v-on="videoEvents"
        class="AmbientPlayer__Control"
        :progress="progress"
        :is-playing="playing"
        :next-episode="nextEpisode"
        @change-play-progress="onChangePlayProgress"
        @change-volume="onVolumeChange"
        :volume="`${volume}%`"
      >
        <template #time>{{ time.current }} / {{ time.duration }}</template>
      </VideoControlBar>
    </div>
    <canvas
      ref="$effect"
      class="AmbientPlayer__Effect"
      v-show="ambient"
      width="16"
      height="9"
      aria-hidden="true"
    ></canvas>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import VideoControlBar from "./VideoControlBar.vue";
import useAmbient from "@/composables/ambient";
import { useSecToHourMinSec } from "@/composables/formatter";
import { useEventListener } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  src: {
    type: String,
  },
  nextEpisode: {
    type: [Object, String],
  },
  prevEpisode: {
    type: [Object, String],
  },
  ambient: {
    type: Boolean,
  },
});

const keyBinding = {
  // f: 전체화면
  f: requestFullscreen,

  // p: PIP
  p: requestPip,

  // - 영화관모드
  w: requestTheater,

  // m: 음소거
  m: toggleMute,

  // e: 에피소드 목록 페이지
  e: goToAnime,

  // 상/하 화살표: 볼륨 상/하
  ArrowUp: volumeUp,
  ArrowDown: volumeDown,

  // 좌/우 화살표: 재생위치 5초씩 감소/증가
  ArrowLeft: moveBeforeFiveSec,
  ArrowRight: moveAfterFiveSec,

  // 좌/우 부등호: 이전/다음 에피소드
  ">": requestNextEpisode,
  "<": requestPrevEpisode,

  // 스페이스 바: 일시정지/재생
  " ": playToggle,
};

useEventListener(window, "keydown", (e) => {
  if (!Object.keys(keyBinding).includes(e.key)) {
    return;
  }
  keyBinding[e.key]();
});

const { $video, $effect, isVideoLoaded } = useAmbient();

const videoEvents = {
  playToggle,
  requestFullscreen,
  requestPip,
  requestTheater,
};

function playToggle() {
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

const emits = defineEmits([
  "toggle-theater",
  "request-next-episode",
  "request-prev-episode",
]);
function requestTheater() {
  emits("toggle-theater");
}

const progress = ref("0%");
const time = reactive({ current: "00:00", duration: "00:00" });
function timeChange() {
  if (!$video.value) {
    return;
  }
  if (!isVideoLoaded.value) {
    return;
  }
  progress.value = `${
    ($video.value.currentTime / $video.value.duration) * 100
  }%`;
  time.current = useSecToHourMinSec($video.value.currentTime);
  if (time.duration === "00:00") {
    time.duration = useSecToHourMinSec($video.value.duration);
  }
}

const playing = ref(false);
function setPlaying() {
  if (!$video.value) {
    return;
  }
  if (!isVideoLoaded.value) {
    playing.value = false;
    return;
  }
  playing.value = $video.value.paused;
}

function onChangePlayProgress(e) {
  $video.value.currentTime = ($video.value.duration * e) / 100;
}
function moveBeforeFiveSec() {
  $video.value.currentTime -= 5;
}
function moveAfterFiveSec() {
  $video.value.currentTime += 5;
}

const volume = ref(100);
function onVolumeChange(e) {
  volume.value = e;
  $video.value.volume = volume.value / 100;
}
function volumeDown() {
  if (volume.value / 100 <= 0) {
    return;
  }
  volume.value -= 10;
  $video.value.volume = volume.value / 100;
}
function volumeUp() {
  if (volume.value / 100 >= 1) {
    return;
  }
  volume.value += 10;
  $video.value.volume = volume.value / 100;
}
function toggleMute() {
  volume.value = volume.value === 0 ? 100 : 0;
  $video.value.volume = volume.value / 100;
}

const route = useRoute();
const router = useRouter();
const nextLink = computed(() => {
  if (props.nextEpisode === "다음 화 없음" || !props.nextEpisode) {
    return "#";
  }
  return `/player/${route.params.title}/${props.nextEpisode.part}/${props.nextEpisode.index}`;
});
const prevLink = computed(() => {
  if (props.prevEpisode === "이전 화 없음" || !props.prevEpisode) {
    return "#";
  }
  return `/player/${route.params.title}/${props.prevEpisode.part}/${props.prevEpisode.index}`;
});
function requestNextEpisode() {
  router.push(nextLink.value);
}
function requestPrevEpisode() {
  router.push(prevLink.value);
}

function goToAnime() {
  router.push(`/anime/${route.params.title}/episodes`);
}
</script>

<style lang="scss" scoped>
.AmbientPlayer {
  z-index: 1;
  display: flex;
  align-items: center;

  &__FullscreenRoot {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__Video {
    width: 100%;
    height: 100%;
    background-color: #000;
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

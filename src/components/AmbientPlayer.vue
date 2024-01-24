<template>
  <div class="AmbientPlayer">
    <div class="AmbientPlayer__FullscreenRoot" ref="$fullscreenRoot">
      <LoadingSpinner :is-loading="isLoading" class="AmbientPlayer__Loading" />
      <video
        ref="$video"
        :src="src"
        crossorigin="anonymous"
        class="AmbientPlayer__Video"
        @loadeddata="onLoadedVideo"
        @timeupdate="timeChange"
        @play="setPlaying"
        @pause="setPlaying"
        autoplay
        muted
      />
      <GestureArea
        class="AmbientPlayer__GestureArea"
        :before-move="moveBeforeFiveSec"
        :after-move="moveAfterFiveSec"
      />
      <VideoControlBar
        v-on="videoEvents"
        class="AmbientPlayer__Control"
        :progress="progress"
        :is-playing="playing"
        :next-episode="nextEpisode"
        @play-setting="onChangePlaySetting"
        @change-play-progress="onChangePlayProgress"
        @change-volume="onVolumeChange"
        @prev-sec="moveBeforeFiveSec"
        @next-sec="moveAfterFiveSec"
        :volume="volume"
        :meta="meta"
      >
        <template #time>{{ time.current }} / {{ time.duration }}</template>
      </VideoControlBar>
      <div class="AmbientPlayer__TakeScreenshot">
        <button class="AmbientPlayer__ScreenshotButton" @click="takeScreenshot">
          <IconBase>
            <IconScreenshot />
          </IconBase>
        </button>
        <Transition name="player-alert">
          <div class="AmbientPlayer__Alert" v-if="screenshotAlert">
            스크린샷이 기록되었어요
          </div>
        </Transition>
      </div>
    </div>
    <canvas
      ref="$effect"
      class="AmbientPlayer__Effect"
      v-show="ambient"
      width="16"
      height="9"
      aria-hidden="true"
    ></canvas>
    <Teleport to="#Overay">
      <DialogSet :show="screenshotPreview.show" class="ScreenshotDialog">
        <template #content>
          <Transition name="new-screenshot">
            <img
              :src="screenshotPreview.imgSrc"
              :key="screenshotPreview.imgSrc"
              class="ScreenshotDialog__Preview"
            />
          </Transition>
        </template>
        <template #control>
          <button
            class="ScreenshotDialog__Delete"
            @click="closeScreenshotPreview"
          >
            <IconBase>
              <IconTrash />
            </IconBase>
          </button>
          <div class="ScreenshotDialog__TextButtons">
            <button class="ScreenshotDialog__Action" @click="download">
              다운로드
            </button>
            <button class="ScreenshotDialog__Action" @click="share">
              다른 앱으로 공유
            </button>
          </div>
        </template>
      </DialogSet>
    </Teleport>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEventListener } from "@vueuse/core";
import useAmbient from "@/composables/ambient";
import { useSecToFormat } from "@/composables/formatter";
import { useVideoScreenshot } from "@/composables/screenshot";

import DialogSet from "./DialogSet.vue";
import GestureArea from "./GestureArea.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import VideoControlBar from "./VideoControlBar.vue";

import IconBase from "./IconBase.vue";
import IconScreenshot from "./icons/IconScreenshot.vue";
import IconTrash from "./icons/IconTrash.vue";

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
  preventKeyBinding: {
    type: Boolean,
  },
  meta: {
    type: Object,
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
  e: goToAnimeList,

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
  if (props.preventKeyBinding) {
    return;
  }
  if (!Object.keys(keyBinding).includes(e.key)) {
    return;
  }
  keyBinding[e.key]();
});

const playSetting = ref({
  quality: "1080p",
  speed: 1.0,
});
function onChangePlaySetting(e) {
  playSetting.value = { ...playSetting.value, ...e };
  $video.value.playbackRate = playSetting.value.speed;
}
// watch(
//   () => playSetting.value.quality,
//   () => {
//     $video.value.src = `${props.meta.title}/${playSetting.value.quality}.mp4`
//   }
// );

const isLoading = ref(true);
function onLoadedVideo() {
  isLoading.value = false;
}

const { $video, $effect, isVideoLoaded } = useAmbient();
defineExpose({
  $video,
});

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
  "time-update",
]);
function requestTheater() {
  emits("toggle-theater");
}

const progress = reactive({
  current: 0,
  max: 0,
});
const time = reactive({ current: "00:00", duration: "00:00" });
function timeChange() {
  if (!$video.value) {
    return;
  }
  if (!isVideoLoaded.value) {
    return;
  }
  emits("time-update", $video.value.currentTime);
  progress.current = $video.value.currentTime;
  progress.max = $video.value.duration;
  time.current = useSecToFormat($video.value.currentTime);
  if (time.duration === "00:00") {
    time.duration = useSecToFormat($video.value.duration);
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
  $video.value.currentTime = $video.value.duration * e;
}
function moveBeforeFiveSec() {
  $video.value.currentTime -= 5;
}
function moveAfterFiveSec() {
  $video.value.currentTime += 5;
}

const volume = reactive({
  current: 1,
  max: 1,
});
function onVolumeChange(e) {
  volume.current = e.target.value;
  $video.value.volume = volume.current;
}
function volumeDown() {
  if (volume.current <= 0) {
    return;
  }
  volume.current -= 0.1;
  $video.value.volume = volume.current;
}
function volumeUp() {
  if (volume.current >= 1) {
    return;
  }
  volume.current += 0.1;
  $video.value.volume = volume.current;
}
function toggleMute() {
  volume.current = volume.current === 0 ? 1 : 0;
  $video.value.volume = volume.current;
}

const route = useRoute();
const router = useRouter();

const nextLink = computed(() => {
  if (props.nextEpisode === "다음 화 없음" || !props.nextEpisode) {
    return "#";
  }
  return `/anime-play/${route.params.title}/${props.nextEpisode.part}/${props.nextEpisode.index}`;
});
const prevLink = computed(() => {
  if (props.prevEpisode === "이전 화 없음" || !props.prevEpisode) {
    return "#";
  }
  return `/anime-play/${route.params.title}/${props.prevEpisode.part}/${props.prevEpisode.index}`;
});
function requestNextEpisode() {
  router.push(nextLink.value);
}
function requestPrevEpisode() {
  router.push(prevLink.value);
}

function goToAnimeList() {
  router.push(`/anime/${route.params.title}/episodes`);
}

const screenshotAlert = ref(false);
const screenshotPreview = ref({
  show: false,
  imgSrc: "",
});
function takeScreenshot() {
  screenshotAlert.value = true;
  const { downloadURL } = useVideoScreenshot($video);
  screenshotPreview.value.imgSrc = downloadURL.value;
  screenshotPreview.value.show = true;
  $video.value.style.transform = "scale(0.95)";
  setTimeout(() => {
    $video.value.style.transform = "scale(1)";
  }, 300);
  setTimeout(() => {
    screenshotAlert.value = false;
  }, 1200);
}
function closeScreenshotPreview() {
  screenshotPreview.value.show = false;
}

function download() {
  const temporalAnchor = document.createElement("a");
  temporalAnchor.href = screenshotPreview.value.imgSrc;
  temporalAnchor.download = `${route.params.title} ${route.params.part} ${route.params.index} 스크린샷`;
  temporalAnchor.click();
}

async function share() {
  if (!("canShare" in navigator)) {
    return;
  }
  const blob = await (await fetch(screenshotPreview.value.imgSrc)).blob();
  const file = new File(
    [blob],
    `${route.params.title} ${route.params.part} ${route.params.index} 스크린샷.png`,
    {
      type: blob.type,
    }
  );
  navigator.share({
    title: `스크린샷`,
    files: [file],
  });
}
</script>

<style lang="scss" scoped>
.AmbientPlayer {
  z-index: 1;
  display: flex;
  align-items: center;

  overflow: hidden;

  &__FullscreenRoot {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #000;
  }
  &__Loading {
    width: 4.8rem;
    height: 4.8rem;
    position: absolute;
    top: calc(50% - 2.4rem);
    left: calc(50% - 2.4rem);
    color: #fff;
  }
  &__TakeScreenshot {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  &__ScreenshotButton {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    background-color: hsl(0 0 0% / 0.5);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    color: #fff;
  }
  &__Alert {
    display: flex;
    height: 3.6rem;
    align-items: center;
    white-space: nowrap;
    position: absolute;
    top: 0;
    right: 4.6rem;
    background-color: hsl(0 0 0% / 0.5);
    backdrop-filter: blur(10px);
    border-radius: 9999px;
    padding: 0.8rem 1.2rem;
    font-size: 1.6rem;
    color: #fff;
  }
  &__Video {
    width: 100%;
    height: 100%;
    background-color: #000;
    transition: transform 150ms ease-out;
    transform-origin: center bottom;
  }
  &__GestureArea {
    position: absolute;
    inset: 0;
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

.ScreenshotDialog {
  &__Delete {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: auto;
  }
  &__TextButtons {
    display: flex;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__Action {
    background-color: hsl(var(--bg-300));
    padding: 0 1.2rem;
    & + & {
      border-left: 1px solid hsl(var(--bg-200));
    }
  }

  &__Preview {
    border-radius: var(--global-radius);
  }
}

.player-alert-enter-active,
.player-alert-leave-active {
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
}

.player-alert-enter-from {
  transform: translateY(-1rem);
  opacity: 0;
}

.player-alert-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

.new-screenshot-enter-active,
.new-screenshot-leave-active {
  transition: all 300ms ease-out;
}

.new-screenshot-enter-from {
  transform: translateY(-3rem);
  opacity: 0;
}
.new-screenshot-from {
  opacity: 0;
}
.new-screenshot-leave-active {
  display: none;
}

@media screen and (min-width: 1080px) {
  .AmbientPlayer {
    &__Effect {
      filter: blur(100px);
    }
  }
}
</style>

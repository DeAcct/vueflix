<template>
  <div class="AmbientPlayer" @mousemove="onMouseMove">
    <div class="AmbientPlayer__FullscreenRoot" ref="$fullscreenRoot">
      <LoadAnimation
        class="AmbientPlayer__Loading"
        :class="isLoading && 'AmbientPlayer__Loading--Show'"
      />
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
        playsinline
        x-webkit-airplay
      />
      <GestureArea
        class="AmbientPlayer__GestureArea"
        :action="timeMove"
        v-model="nowInteraction"
      />
      <Transition name="control-fade">
        <VideoControlBar
          v-on="videoEvents"
          class="AmbientPlayer__Control"
          :progress="progress"
          :is-playing="playing"
          :next-episode="nextEpisode"
          @play-setting="onChangePlaySetting"
          @change-play-progress="onChangePlayProgress"
          @change-volume="onVolumeChange"
          :sec-action="{
            before: () => timeMove(-5),
            after: () => timeMove(5),
          }"
          :volume="volume"
          :meta="meta"
          v-if="controlShow"
          @mouseenter="pointerOver"
          @mouseout="pointerOut"
        >
          <template #time>{{ time.current }} / {{ time.duration }}</template>
        </VideoControlBar>
      </Transition>
      <div class="AmbientPlayer__TakeScreenshot" v-if="controlShow">
        <button
          class="AmbientPlayer__ScreenshotButton"
          @click="takeScreenshot"
          type="button"
        >
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
      <slot name="time-limit"></slot>
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
      <NativeDialog ref="$root" class="ScreenshotDialog">
        <template #content>
          <Transition name="new-screenshot">
            <img
              :src="screenshotSrc"
              :key="screenshotSrc"
              class="ScreenshotDialog__Preview"
            />
          </Transition>
        </template>
        <template #control>
          <div class="ScreenshotDialog__Actions">
            <button
              class="ScreenshotDialog__Delete"
              @click="$root.close"
              type="button"
            >
              <IconBase>
                <IconTrash />
              </IconBase>
            </button>
            <div class="ScreenshotDialog__TextButtons">
              <button
                class="ScreenshotDialog__Action"
                @click="download"
                type="button"
              >
                다운로드
              </button>
              <button
                class="ScreenshotDialog__Action"
                @click="share"
                type="button"
              >
                다른 앱으로 공유
              </button>
            </div>
          </div>
        </template>
      </NativeDialog>
    </Teleport>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { now, useEventListener } from "@vueuse/core";

import { useAmbient } from "@/composables/canvas";
import { useSecToFormat } from "@/composables/formatter";
import { useVideoScreenshot } from "@/composables/screenshot";

import GestureArea from "./GestureArea.vue";
import LoadAnimation from "./LoadAnimation.vue";
import VideoControlBar from "./VideoControlBar.vue";

import IconBase from "./IconBase.vue";
import IconScreenshot from "./icons/IconScreenshot.vue";
import IconTrash from "./icons/IconTrash.vue";
import NativeDialog from "./NativeDialog.vue";

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
  controls: {
    type: Boolean,
    default: true,
  },
});

const controlShow = ref(props.controls);
const isPointerOverControl = ref(false);
function pointerOver() {
  isPointerOverControl.value = true;
}
function pointerOut() {
  isPointerOverControl.value = false;
}
function onMouseMove() {
  if (!props.controls && controlShow.value) {
    return;
  }
  controlShow.value = true;
  delayVanish(1500);
}
onMounted(() => {
  delayVanish(1500);
});
function delayVanish(ms) {
  if (isPointerOverControl.value) {
    return;
  }
  setTimeout(() => {
    controlShow.value = false;
  }, ms);
}

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
  // ArrowLeft: moveBeforeFiveSec,
  // ArrowRight: moveAfterFiveSec,
  ArrowLeft: () => timeMove(-5),
  ArrowRight: () => timeMove(5),

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

const nowInteraction = ref("");
function onChangePlayProgress(e) {
  $video.value.currentTime = $video.value.duration * e;
}
// function moveBeforeFiveSec() {
//   nowInteraction.value = "before";
//   $video.value.currentTime -= 5;
// }
// function moveAfterFiveSec() {
//   nowInteraction.value = "after";
//   $video.value.currentTime += 5;
// }
function timeMove(time) {
  $video.value.currentTime += time;
  nowInteraction.value = time > 0 ? "after" : "before";
}

const volume = reactive({
  current: 1,
  max: 1,
});
function onVolumeChange(e) {
  volume.current = e;
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
  // router.push(`/anime/${route.params.title}/episodes`);
  router.push({ query: { modal: route.params.title, route: "episodes" } });
}

const $root = ref(null);
const screenshotAlert = ref(false);
const screenshotSrc = ref("");
function takeScreenshot() {
  screenshotAlert.value = true;
  const { downloadURL } = useVideoScreenshot($video);
  screenshotSrc.value = downloadURL.value;
  $root.value.show();
  $video.value.style.transform = "scale(0.95)";
  setTimeout(() => {
    $video.value.style.transform = "scale(1)";
  }, 300);
  setTimeout(() => {
    screenshotAlert.value = false;
  }, 1200);
}

function download() {
  const temporalAnchor = document.createElement("a");
  temporalAnchor.href = screenshotSrc.value;
  temporalAnchor.download = `${route.params.title} ${route.params.part} ${route.params.index} 스크린샷`;
  temporalAnchor.click();
  temporalAnchor.remove();
}

async function share() {
  if (!("canShare" in navigator)) {
    return;
  }
  const blob = await (await fetch(screenshotSrc.value)).blob();
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
  z-index: var(--z-index-s1);
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: var(--global-radius);

  &__FullscreenRoot {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #000;
  }
  &__Loading {
    position: absolute;
    opacity: 0;
    display: block;
    width: 4.8rem;
    left: calc(50% - 2.4rem);
    color: #fff;
    &--Show {
      opacity: 1;
    }
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
    background-color: hsl(0 0% 0% / 0.5);
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
    background-color: hsl(0 0% 0% / 0.5);
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
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  --dialog-shadow: 0 0 1.6rem 0.2rem hsl(var(--bg-900) / 0.15);

  &__Preview {
    border-radius: var(--global-radius);
    margin-bottom: 0.8rem;
  }
  &__Actions {
    display: flex;
  }
  &__Delete {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: auto;
  }
  &__Action {
    background-color: hsl(var(--bg-300));
    padding: 0 1.2rem;
    & + & {
      border-left: 1px solid hsl(var(--bg-200));
    }
  }
  &__TextButtons {
    border-radius: var(--global-radius);
    overflow: hidden;
    display: flex;
  }
}

.control-fade-enter-active,
.control-fade-leave-active {
  transition: opacity 150ms ease-in-out;
}
.control-fade-enter-from,
.control-fade-leave-to {
  opacity: 0;
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
  .ScreenshotDialog {
    --dialog-inset: auto max(calc((100 * 1px * var(--vw) - 1920px) / 2), 2rem) 0
      auto;
    --dialog-translate: 0 0;
    --dialog-starting-translate: 0 3rem;
    --dialog-max-width: 40rem;
    --dialog-padding: 2rem;
  }
}
</style>

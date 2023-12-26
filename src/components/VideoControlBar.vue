<template>
  <div class="VideoControlBar">
    <ProgressBar
      :progress="progress"
      class="VideoControlBar__Progress"
      @input="onChangePlayProgress"
      @keydown.left.prevent
      @keydown.right.prevent
    />
    <div class="VideoControlBar__Control">
      <div class="VideoControlBar__PlayState">
        <ToolTip class="VideoControlBar__ControlItem" align="flex-start">
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              {{ isPlaying ? "재생" : "일시정지" }}
            </div>
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" @click="togglePlay">
              <IconBase>
                <IconPlay v-if="isPlaying" />
                <IconPause v-else />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <div class="VideoControlBar__QuickMove">
          <ToolTip class="VideoControlBar__ControlItem" align="flex-start">
            <template #content
              ><div class="VideoControlBar__ToolTipContent">
                5초 앞으로
              </div></template
            >
            <template #trigger>
              <button class="VideoControlBar__Button" @click="prevSec">
                <IconBase>
                  <IconPrevFiveSec />
                </IconBase>
              </button>
            </template>
          </ToolTip>
          <ToolTip class="VideoControlBar__ControlItem" align="flex-start">
            <template #content>
              <div class="VideoControlBar__ToolTipContent">5초 뒤로</div>
            </template>
            <template #trigger>
              <button class="VideoControlBar__Button" @click="nextSec">
                <IconBase>
                  <IconNextFiveSec />
                </IconBase>
              </button>
            </template>
          </ToolTip>
        </div>
        <ToolTip direction="row" class="VideoControlBar__ControlItem">
          <template #content>
            <div
              class="VideoControlBar__ToolTipContent VideoControlBar__ToolTipContent--Volume"
              v-if="!deviceInfo.isTouch"
            >
              <ProgressBar
                class="VideoControlBar__VolumeSlide"
                :progress="volume"
                @input="onVolumeChange"
              ></ProgressBar>
            </div>
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" @click="toggleMuted">
              <IconBase>
                <IconMuteOn v-if="isMuted" />
                <IconMuteOff v-else />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <ToolTip
          class="VideoControlBar__ControlItem"
          v-if="nextEpisode !== undefined && nextEpisode !== '다음화 없음'"
          align="flex-start"
        >
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              <p class="VideoControlBar__ToolTipText">다음화</p>
              <ThumbnailSet
                :link="`/anime-play/${route.params.title}/${nextEpisode.part}/${nextEpisode.index}`"
                :key="`${route.params.title}-${nextEpisode.part}-${nextEpisode.index}`"
                :ani-title="route.params.title"
                :data="{
                  thumbnail: nextEpisode.thumbnail,
                  part: nextEpisode.part,
                  index: nextEpisode.index,
                  title: nextEpisode.title,
                }"
                type="episode"
                watch-percent="0%"
                :replace="{
                  main: true,
                  sub: true,
                }"
              />
            </div>
          </template>
          <template #trigger>
            <RouterLink
              :class="[
                'VideoControlBar__Button',
                { 'VideoControlBar__Button--Disabled': nextLink === '#' },
              ]"
              :to="nextLink"
              replace
            >
              <IconBase>
                <IconNextEpisode />
              </IconBase>
            </RouterLink>
          </template>
        </ToolTip>

        <p class="VideoControlBar__Time">
          <slot name="time"></slot>
        </p>
      </div>
      <div class="VideoControlBar__Meta" v-if="isFull">
        <strong class="VideoControlBar__Episode">{{ meta.episode }}</strong>
        <p class="VideoControlBar__Title">
          {{ meta.title }}
        </p>
      </div>

      <div class="VideoControlBar__HowWatch">
        <ToolTip v-if="!isFull && !deviceInfo.isMobile" align="flex-end">
          <template #content>
            <div class="VideoControlBar__ToolTipContent">영화관 모드</div>
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" @click="toggleTheater">
              <IconBase>
                <IconShirink v-if="isTheater" />
                <IconExpand v-else />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <ToolTip align="flex-end">
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              작은 화면으로 보기(PIP)
            </div>
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" @click="togglePIP">
              <IconBase>
                <IconPIP />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <ToolTip align="flex-end">
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              전체 화면 {{ isFull ? "나가기" : "" }}
            </div>
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" @click="toggleFullScreen">
              <IconBase>
                <IconFullScreenOff v-if="isFull" />
                <IconFullScreenOn v-else />
              </IconBase>
            </button>
          </template>
        </ToolTip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, inject } from "vue";
import { useEventListener } from "@vueuse/core";
import { useRoute } from "vue-router";

import ProgressBar from "./ProgressBar.vue";
import ToolTip from "./ToolTip.vue";
import ThumbnailSet from "./ThumbnailSet.vue";

import IconBase from "./IconBase.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconNextEpisode from "./icons/IconNextEpisode.vue";
import IconPause from "./icons/IconPause.vue";
import IconFullScreenOff from "./icons/IconFullScreenOff.vue";
import IconFullScreenOn from "./icons/IconFullScreenOn.vue";
import IconPIP from "./icons/IconPIP.vue";
import IconMuteOn from "./icons/IconMuteOn.vue";
import IconMuteOff from "./icons/IconMuteOff.vue";
import IconExpand from "./icons/IconExpand.vue";
import IconShirink from "./icons/IconShirink.vue";
import IconPrevFiveSec from "./icons/IconPrevFiveSec.vue";
import IconNextFiveSec from "./icons/IconNextFiveSec.vue";

const deviceInfo = inject("device-info");

const emits = defineEmits([
  "play-toggle",
  "request-fullscreen",
  "request-pip",
  "request-theater",
  "change-play-progress",
  "change-volume",
  "prev-sec",
  "next-sec",
]);

const props = defineProps({
  progress: {
    type: Object,
  },
  isPlaying: {
    type: Boolean,
  },
  nextEpisode: {
    type: [Object, String],
    validator(value) {
      return (
        value === "다음 화 없음" ||
        value === undefined ||
        ("index" in value &&
          "part" in value &&
          "title" in value &&
          "date" in value &&
          "thumbnail" in value)
      );
    },
  },
  volume: {
    type: Object,
  },
  meta: {
    type: Object,
  },
});

const route = useRoute();
const nextLink = computed(() => {
  if (props.nextEpisode === "다음 화 없음" || !props.nextEpisode) {
    return "#";
  }
  return `/anime-play/${route.params.title}/${props.nextEpisode.part}/${props.nextEpisode.index}`;
});

function togglePlay() {
  emits("play-toggle");
}
function toggleFullScreen() {
  emits("request-fullscreen");
}
function togglePIP() {
  emits("request-pip");
}
const isTheater = ref(false);
function toggleTheater() {
  isTheater.value = !isTheater.value;
  emits("request-theater");
}

function prevSec() {
  emits("prev-sec");
}
function nextSec() {
  emits("next-sec");
}

const isFull = ref(document.fullscreenElement);
useEventListener(document, "fullscreenchange", () => {
  isFull.value = document.fullscreenElement;
  if (isFull) {
    screen.orientation.lock("landscape");
    return;
  }
  screen.orientation.lock("natural");
});

const isMuted = ref(false);
function toggleMuted() {
  isMuted.value = !isMuted.value;
  emits("change-volume", isMuted.value ? 0 : 100);
}
watch(
  () => props.volume,
  () => {
    isMuted.value = props.volume === 0;
  }
);

function onChangePlayProgress(e) {
  emits("change-play-progress", Number(e.target.value) / props.progress.max);
}
function onVolumeChange(e) {
  emits("change-volume", e);
}
</script>

<style lang="scss" scoped>
.VideoControlBar {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  width: 100%;
  background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 0.5));

  &__Progress {
    margin-bottom: -0.9rem;
  }

  &__Control {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 3.2rem;
  }
  &__ControlItem {
    height: 2.4rem;
  }
  &__PlayState {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  &__QuickMove {
    display: none;
  }
  &__Meta {
    display: none;
  }

  &__Button {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
    &--Disabled {
      color: hsl(0 100% 100% / 0.5);
    }
  }

  &__ToolTipContent {
    padding: 1rem;
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) + 1rem);
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    --thumbnail-width: 20rem;
    &--Volume {
      background-color: transparent;
    }
  }
  &__ToolTipText {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem;
  }
  &__VolumeSlide {
    width: 7.2rem;
  }
  &__Time {
    display: none;
  }

  &__HowWatch {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 1.6rem;
  }
}

@media screen and (min-width: 768px) {
  .VideoControlBar {
    &__Time {
      display: block;
      font-size: 1.3rem;
      font-weight: 500;
      color: #fff;
    }
  }
}

@media screen and (min-width: 1080px) {
  .VideoControlBar {
    gap: 2rem;
    padding-bottom: 2rem;
    &__QuickMove {
      display: flex;
      gap: 1.2rem;
    }
    &__Meta {
      display: flex;
      position: absolute;
      transform: translate(-50%);
      left: 50%;
      font-size: 1.6rem;
      > * {
        padding: 0 1.2rem;
        border-right: 2px solid #fff;
        &:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>

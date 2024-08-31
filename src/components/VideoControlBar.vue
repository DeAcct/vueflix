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
            <button
              class="VideoControlBar__Button"
              @click="togglePlay"
              type="button"
            >
              <IconBase>
                <component :is="isPlaying ? IconPlay : IconPause" />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <QuickTimeMove class="VideoControlBar__QuickTimeMove" :sec-action />
        <ToolTip class="VideoControlBar__ControlItem">
          <template #content>
            <div
              class="VideoControlBar__ToolTipContent VideoControlBar__ToolTipContent--Volume"
              v-if="!isTouchable"
            >
              <ProgressBar
                class="VideoControlBar__VolumeSlide"
                :progress="volume"
                @input="onVolumeChange"
              />
            </div>
          </template>
          <template #trigger>
            <button
              class="VideoControlBar__Button"
              @click="toggleMuted"
              type="button"
            >
              <IconBase>
                <component :is="isMuted ? IconMuteOn : IconMuteOff" />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <ToolTip
          class="VideoControlBar__ControlItem"
          v-if="nextEpisode !== '다음 화 없음' && nextEpisode"
          align="flex-start"
        >
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              <p class="VideoControlBar__ToolTipText">다음화</p>
              <ThumbnailSet component="div" class="VideoControlBar__Next">
                <template #image>
                  <RouterLink
                    class="VideoControlBar__NextThumbnail"
                    :to="`/anime-play/${route.params.title}/${nextEpisode.part}/${nextEpisode.index}`"
                  >
                    <OptimizedMedia
                      :src="`anime/${route.params.title}/${nextEpisode.thumbnail}`"
                      :alt="`${route.params.title} ${nextEpisode.part} ${nextEpisode.index} 미리보기 이미지`"
                      skelleton
                    >
                    </OptimizedMedia>
                  </RouterLink>
                </template>
                <template #text>
                  <RouterLink
                    :to="`/anime-play/${route.params.title}/${nextEpisode.part}/${nextEpisode.index}`"
                    class="VideoControlBar__ToolTipText VideoControlBar__ToolTipText--Next"
                  >
                    <strong
                      >{{ nextEpisode.part }} {{ nextEpisode.index }}</strong
                    >
                    <span>{{ nextEpisode.title }}</span>
                  </RouterLink>
                </template>
              </ThumbnailSet>
            </div>
          </template>
          <template #trigger>
            <RouterLink
              class="VideoControlBar__Button"
              :class="nextLink === '#' && 'VideoControlBar__Button--Disabled'"
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

      <div class="VideoControlBar__Watch">
        <ToolTip direction="row-reverse" align="flex-end" show>
          <template #content>
            <VideoSetting
              class="VideoControlBar__ToolTipContent VideoControlBar__ToolTipContent--PlaySetting"
              @update:selected="changeSetting"
              :data="settingModel"
            />
          </template>
          <template #trigger>
            <button class="VideoControlBar__Button" type="button">
              <IconBase>
                <IconSetting />
              </IconBase>
            </button>
          </template>
        </ToolTip>
        <ToolTip v-if="!isFull && !isSmall" align="flex-end">
          <template #content>
            <div class="VideoControlBar__ToolTipContent">
              {{ isTheater ? "일반" : "영화관" }} 모드
            </div>
          </template>
          <template #trigger>
            <button
              class="VideoControlBar__Button"
              @click="toggleTheater"
              type="button"
            >
              <IconBase>
                <component :is="isTheater ? IconShirink : IconExpand" />
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
            <button
              class="VideoControlBar__Button"
              @click="togglePIP"
              type="button"
            >
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
            <button
              class="VideoControlBar__Button"
              @click="toggleFullScreen"
              type="button"
            >
              <IconBase>
                <component
                  :is="isFull ? IconFullScreenOff : IconFullScreenOn"
                />
              </IconBase>
            </button>
          </template>
        </ToolTip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useEventListener } from "@vueuse/core";

import { useMediaQuery } from "../composables/device";

import ProgressBar from "./ProgressBar.vue";
import OptimizedMedia from "./OptimizedMedia.vue";
import QuickTimeMove from "./QuickTimeMove.vue";
import ToolTip from "./ToolTip.vue";
import ThumbnailSet from "./ThumbnailSet.vue";
import VideoSetting from "./VideoSetting.vue";

import IconBase from "./IconBase.vue";
import IconExpand from "./icons/IconExpand.vue";
import IconFullScreenOff from "./icons/IconFullScreenOff.vue";
import IconFullScreenOn from "./icons/IconFullScreenOn.vue";
import IconMuteOn from "./icons/IconMuteOn.vue";
import IconMuteOff from "./icons/IconMuteOff.vue";
import IconNextEpisode from "./icons/IconNextEpisode.vue";
import IconPause from "./icons/IconPause.vue";
import IconPIP from "./icons/IconPIP.vue";
import IconPlay from "./icons/IconPlay.vue";
import IconSetting from "./icons/IconSetting.vue";
import IconShirink from "./icons/IconShirink.vue";

const isTouchable = useMediaQuery("not (hover: hover) and (pointer: fine)");
const isSmall = useMediaQuery("(max-width: 1080px)");

const settingModel = [
  {
    title: "영상 화질",
    key: "quality",
    items: [
      { text: "1080p", key: "1080p" },
      { text: "720p", key: "720p" },
      { text: "480p", key: "480p" },
    ],
  },
  {
    title: "재생 속도",
    key: "speed",
    items: [
      { text: "x 0.5", key: 0.5 },
      { text: "x 1.0", key: 1.0 },
      { text: "x 1.2", key: 1.2 },
      { text: "x 1.5", key: 1.5 },
      { text: "x 2.0", key: 2.0 },
    ],
  },
];
function changeSetting(e) {
  emits("play-setting", e);
}

const emits = defineEmits([
  "play-toggle",
  "request-fullscreen",
  "request-pip",
  "request-theater",
  "change-play-progress",
  "change-volume",
  "play-setting",
]);

const props = defineProps({
  progress: {
    type: Object,
  },
  isPlaying: {
    type: Boolean,
  },
  nextEpisode: {
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
  secAction: {
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
  emits("change-volume", isMuted.value ? 0 : 1);
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
  emits("change-volume", e.target.value);
}
</script>

<style lang="scss" scoped>
.VideoControlBar {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  width: 100%;
  background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 1));

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
  &__QuickTimeMove {
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
    padding: 1.6rem;
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) + 1rem);
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    --thumbnail-width: 20rem;
    &--Volume {
      rotate: -90deg;
      margin-bottom: -1.5rem;
      cursor: s-resize;
    }
    &--PlaySetting {
      gap: 1.2rem;
      flex-direction: row;
      margin-right: 3.6rem;
    }
  }
  &__ToolTipText {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem;
    &--Next {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
  &__VolumeSlide {
    width: 7.2rem;
    cursor: s-resize;
    --progress-bg-color: hsl(var(--bg-300));
  }
  &__Time {
    display: none;
  }
  &__Next {
    flex-direction: column;
    gap: 0.4rem;
  }
  &__NextThumbnail {
    width: min(30rem, 20vw);
  }

  &__SettingItem {
    display: flex;
  }

  &__Watch {
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
    &__Episode,
    &__Title {
      color: #fff;
    }
  }
}

@media screen and (min-width: 1080px) {
  .VideoControlBar {
    &__QuickTimeMove {
      display: flex;
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
./QuickTimeMove.vue

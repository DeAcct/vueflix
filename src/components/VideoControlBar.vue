<template>
  <div class="VideoControlBar">
    <ProgressBar
      class="VideoControlBar__Progress"
      :percent="progress"
    ></ProgressBar>
    <div class="VideoControlBar__Info">
      <div class="VideoControlBar__PlayState">
        <button class="VideoControlBar__Button" @click="togglePlay">
          <IconBase>
            <IconPlay v-if="isPlaying" />
            <IconPause v-else />
          </IconBase>
        </button>
        <RouterLink
          :class="[
            'VideoControlBar__Button',
            { 'VideoControlBar__Button--Disabled': nextLink === '#' },
          ]"
          :to="nextLink"
        >
          <IconBase>
            <IconNextEpisode />
          </IconBase>
        </RouterLink>
        <button class="VideoControlBar__Button" @click="toggleMuted">
          <IconBase>
            <IconMuteOn v-if="isMuted" />
            <IconMuteOff v-else />
          </IconBase>
        </button>
      </div>
      <p class="VideoControlBar__Time">
        <slot name="time"></slot>
      </p>
      <div class="VideoControlBar__HowWatch">
        <button class="VideoControlBar__Button" @click="toggleTheater">
          <IconBase>
            <IconShirink v-if="isTheater" />
            <IconExpand v-else />
          </IconBase>
        </button>
        <button class="VideoControlBar__Button" @click="togglePIP">
          <IconBase>
            <IconPIP />
          </IconBase>
        </button>
        <button class="VideoControlBar__Button" @click="toggleFullScreen">
          <IconBase>
            <IconFullScreenOff v-if="isFull" />
            <IconFullScreenOn v-else />
          </IconBase>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useEventListener } from "@vueuse/core";
import { useRoute } from "vue-router";

import ProgressBar from "./ProgressBar.vue";

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

const emits = defineEmits([
  "play-toggle",
  "request-fullscreen",
  "request-pip",
  "request-theater",
  "request-mute",
]);

const props = defineProps({
  progress: {
    type: String,
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
});

const route = useRoute();
const nextLink = computed(() => {
  if (props.nextEpisode === "다음 화 없음" || !props.nextEpisode) {
    return "#";
  }
  return `/player/${route.params.title}/${props.nextEpisode.part}/${props.nextEpisode.index}`;
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
  emits("request-mute");
}
</script>

<style lang="scss" scoped>
.VideoControlBar {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-bottom: 0.8rem;
  width: 100%;
  background: linear-gradient(
    hsl(var(--text-900) / 0),
    hsl(var(--text-900) / 0.5)
  );
  &__Progress {
    width: calc(100% - 4rem);
    margin: 0 auto;
    height: 0.4rem;
    border-radius: 9999px;
  }

  &__Info {
    display: flex;
    align-items: center;
    padding: 0 3.2rem;
    gap: 2.4rem;
  }
  &__PlayState {
    display: flex;
    gap: 1.6rem;
  }
  &__Button {
    color: #fff;
    &--Disabled {
      color: hsl(0 100% 100% / 0.5);
    }
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

@media screen and (min-width: 1080px) {
  .VideoControlBar {
    gap: 2rem;
    padding-bottom: 2rem;
    &__Time {
      display: block;
      font-size: 1.3rem;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>

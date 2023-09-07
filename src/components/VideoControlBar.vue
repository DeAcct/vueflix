<template>
  <div class="VideoControlBar">
    <ProgressBar
      class="VideoControlBar__Progress"
      :percent="progress"
    ></ProgressBar>
    <div class="VideoControlBar__Info">
      <div class="VideoControlBar__PlayState">
        <button class="VideoControlBar__Button" @click="playToggle">
          <IconBase>
            <IconPlay v-if="isPlaying" />
            <IconPause v-else />
          </IconBase>
        </button>
        <button class="VideoControlBar__Button">
          <IconBase>
            <IconNextEpisode />
          </IconBase>
        </button>
        <button class="VideoControlBar__Button" @click="setMuted">
          <IconBase>
            <IconMuteOff v-if="true" />
            <IconMuteOn v-else />
          </IconBase>
        </button>
      </div>
      <p class="VideoControlBar__Time">
        <slot name="time"></slot>
      </p>
      <div class="VideoControlBar__HowWatch">
        <button class="VideoControlBar__Button" @click="toggleTheater">
          영화관 모드
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
import { ref } from "vue";

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
import { useEventListener } from "@vueuse/core";

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
});

function playToggle() {
  emits("play-toggle");
}

function toggleFullScreen() {
  emits("request-fullscreen");
}
function togglePIP() {
  emits("request-pip");
}
function toggleTheater() {
  emits("request-theater");
}

const isFull = ref(document.fullscreenElement);
useEventListener(document, "fullscreenchange", (event) => {
  isFull.value = document.fullscreenElement;
  if (isFull) {
    screen.orientation.lock("landscape");
    return;
  }
  screen.orientation.lock("natural");
});

function setMuted() {
  emits("request-mute");
}
</script>

<style lang="scss" scoped>
.VideoControlBar {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
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
    margin-bottom: 2rem;
    &__Time {
      display: block;
      font-size: 1.3rem;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="VideoControlBar">
    <ProgressBar
      class="VideoControlBar__Progress"
      :percent="progress"
    ></ProgressBar>
    <div class="VideoControlBar__Info">
      <div class="VideoControlBar__PlayStateButton">
        <button class="VideoControlBar__Button" @click="playToggle">
          <IconBase>
            <IconPlay v-if="playing" />
            <IconPause v-else />
          </IconBase>
        </button>
        <button class="VideoControlBar__Button">
          <IconBase>
            <IconNextEpisode />
          </IconBase>
        </button>
      </div>
      <p class="VideoControlBar__Time">
        <slot name="time"></slot>
      </p>
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

const emits = defineEmits(["play-toggle"]);

const props = defineProps({
  progress: {
    type: String,
  },
  playing: {
    type: Boolean,
  },
});

function playToggle() {
  emits("play-toggle");
}

const expanded = ref(false);
</script>

<style lang="scss" scoped>
.VideoControlBar {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 1.2rem 0;
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
    padding: 0 2rem;
    gap: 1.2rem;
  }
  &__PlayStateButton {
    display: flex;
    gap: 0.4rem;
  }
  &__Button {
    color: #fff;
  }
  &__Time {
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
  }
}
</style>

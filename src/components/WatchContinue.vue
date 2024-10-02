<template>
  <div class="WatchContinue">
    <div class="WatchContinue__Icon">
      <ProgressCircle class="WatchContinue__Progress" :progress />
      <IconBase class="WatchContinue__PlayIcon">
        <IconPlay />
      </IconBase>
    </div>
  </div>
</template>

<script setup>
import IconBase from "@/components/IconBase.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

import ProgressCircle from "@/components/ProgressCircle.vue";

const props = defineProps({
  progress: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.WatchContinue {
  display: flex;
  align-items: center;
  width: 4rem;
  height: 4rem;
  gap: 0.4rem;

  display: flex;
  border-radius: 9999px;
  &__Icon {
    position: relative;
  }
  &__Progress {
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    color: #fff;
    border-radius: var(--global-radius);
    translate: 0 0.1rem;
  }
  &__PlayIcon {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }

  &__Text {
    font-size: 1.4rem;
    font-weight: 700;
  }
}
</style>

<template>
  <div class="WatchContinue">
    <ProgressCircle class="WatchContinue__Progress" :progress />
    <IconBase class="WatchContinue__PlayIcon">
      <IconPlay />
    </IconBase>
  </div>
</template>

<script setup>
import ProgressCircle from "@/components/ProgressCircle.vue";
import IconBase from "@/components/IconBase.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

const props = defineProps({
  progress: {
    validator(value) {
      return "current" in value && "max" in value;
    },
  },
});
</script>

<style lang="scss" scoped>
.WatchContinue {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  display: flex;
  position: relative;
  &__Progress {
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    color: #fff;
    border-radius: var(--global-radius);
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

<template>
  <div class="ProgressBar" ref="$progressBar">
    <div class="ProgressBar__Body"></div>
    <button class="ProgressBar__Knob" type="button"></button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useResizeObserver } from "@vueuse/core";
const props = defineProps({
  percent: String,
});

const knobX = ref("0px");
const $progressBar = ref(null);
watch(() => props.percent, setKnobPosition);
function setKnobPosition() {
  if (!$progressBar.value) {
    return;
  }
  knobX.value = `${
    ($progressBar.value.offsetWidth * props.percent.split("%")[0]) / 100
  }px`;
}
useResizeObserver($progressBar, setKnobPosition);
</script>

<style lang="scss" scoped>
.ProgressBar {
  position: relative;
  background-color: hsl(var(--bg-100) / 0.5);
  backdrop-filter: blur(10px);
  &__Body {
    background-color: hsl(var(--theme-500));
    width: v-bind("percent");
    border-radius: 9999px;
    height: 100%;
  }
  &__Knob {
    position: absolute;
    --progress-bar-knob-r: 0.8rem;
    top: calc(50% - var(--progress-bar-knob-r));
    left: calc(-1 * var(--progress-bar-knob-r));
    width: calc(2 * var(--progress-bar-knob-r));
    height: calc(2 * var(--progress-bar-knob-r));
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(v-bind("knobX"));
    box-shadow: 1px 1px 3px hsl(var(--text-900) / 0.3);
  }
}
</style>

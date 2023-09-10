<template>
  <div
    class="ProgressBar"
    ref="$progressBar"
    @mousedown="dragStart"
    @mousemove="dragMove"
    @mouseup="dragEnd"
    @mouseleave="disableDragging"
    @touchstart="dragStart"
    @touchmove="dragMove"
    @touchend="dragEnd"
  >
    <div class="ProgressBar__Track">
      <div
        :class="[
          'ProgressBar__Body',
          { 'ProgressBar__Body--Dragging': isDragging },
        ]"
      ></div>
      <button
        :class="[
          'ProgressBar__Knob',
          { 'ProgressBar__Knob--Dragging': isDragging },
        ]"
        type="button"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject } from "vue";
import { useResizeObserver } from "@vueuse/core";
const props = defineProps({
  percent: String,
});

const knobX = ref(0);
const $progressBar = ref(null);
watch(() => props.percent, setKnobPosition);
function setKnobPosition() {
  if (!$progressBar.value) {
    return;
  }
  knobX.value =
    ($progressBar.value.offsetWidth * props.percent.split("%")[0]) / 100;
}
useResizeObserver($progressBar, setKnobPosition);

const deviceInfo = inject("device-info");

const emits = defineEmits(["value-change"]);
const isDragging = ref(false);
function dragStart() {
  isDragging.value = true;
}
function dragMove(e) {
  if (deviceInfo.isTouch) {
    knobX.value = e.clientX - 20;
    return;
  }
  if (!isDragging.value || e.target.tagName === "BUTTON") {
    return;
  }
  knobX.value = e.offsetX;
}
function dragEnd(e) {
  if (!deviceInfo.isTouch) {
    knobX.value = e.offsetX;
  }
  disableDragging();
  emits("value-change", (knobX.value / $progressBar.value.offsetWidth) * 100);
}
function disableDragging() {
  isDragging.value = false;
}
</script>

<style lang="scss" scoped>
.ProgressBar {
  position: relative;
  display: flex;
  align-items: center;
  &__Track {
    background-color: var(--progress-track, hsl(var(--bg-100) / 0.5));
    border-radius: 9999px;
    width: 100%;
    height: 20%;
  }
  &__Body {
    position: absolute;
    left: 0;
    width: calc(v-bind("knobX") * 1px);
    height: 25%;
    border-radius: 9999px;
    background-color: hsl(var(--theme-500));
    transition: 150ms ease-out;
    &--Dragging {
      transition: none;
    }
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
    transform: translateX(calc(v-bind("knobX") * 1px));
    box-shadow: 1px 1px 3px hsl(var(--text-900) / 0.3);
    transition: 150ms ease-out;
    &--Dragging {
      transition: none;
    }
  }
}
</style>

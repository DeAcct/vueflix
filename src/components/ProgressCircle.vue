<template>
  <figure class="progress-circle">
    <svg viewBox="0 0 24 24" class="progress-circle__graph">
      <circle class="progress-circle__track" cx="12" cy="12" r="9" />
      <circle class="progress-circle__body" cx="12" cy="12" r="9" ref="$body" />
    </svg>
    <figcaption class="progress-circle__percent">
      {{ Math.floor(Number(percent.slice(0, -1))) }}%
    </figcaption>
  </figure>
</template>

<script setup>
import usePercentToSVGRound from "@/composables/svg";

const props = defineProps({
  percent: String,
});

const { $body, trackLength, bodyLength } = usePercentToSVGRound(props.percent);
</script>

<style lang="scss" scoped>
.progress-circle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap, 0);
  &__graph {
    width: 100%;
    height: 100%;
  }
  &__track {
    fill: none;
    stroke: hsl(var(--bg-200));
    stroke-width: 2px;
  }
  &__body {
    fill: none;
    stroke: hsl(var(--theme-500));
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: calc(v-bind(trackLength) * 1px);
    stroke-dashoffset: calc(v-bind(bodyLength) * 1px);
    transform: rotate(-90deg) rotateX(180deg);
    transform-origin: center;
    animation: 300ms fill;
  }
  &__percent {
    position: var(--position, absolute);
    font-weight: 500;
    font-size: var(--font-size, 1rem);
  }
}

@keyframes fill {
  from {
    stroke-dashoffset: calc(v-bind(trackLength) * 1px);
  }
}
</style>

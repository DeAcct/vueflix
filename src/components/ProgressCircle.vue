<template>
  <figure class="ProgressCircle">
    <svg viewBox="0 0 24 24" class="ProgressCircle__Graph">
      <circle class="ProgressCircle__Track" cx="12" cy="12" r="9" />
      <circle class="ProgressCircle__Body" cx="12" cy="12" r="9" ref="$body" />
    </svg>
    <figcaption class="ProgressCircle__Percent">
      {{ Math.floor(Number(percent.slice(0, -1))) }}%
    </figcaption>
  </figure>
</template>

<script setup>
import usePercentToSVGRound from "@/composables/svg";

const props = defineProps({
  percent: {
    type: String,
  },
  direction: {
    type: String,
    validator(value) {
      return ["left-fill", "right-fill"].includes(value);
    },
  },
});

const { $body, trackLength, bodyLength } = usePercentToSVGRound(props.percent);
</script>

<style lang="scss" scoped>
.ProgressCircle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--progress-gap, 0);
  &__Graph {
    width: 2.4rem;
    height: 2.4rem;
  }
  &__Track {
    fill: none;
    stroke: hsl(0 0% 100% / 0.5);
    stroke-width: 2px;
  }
  &__Body {
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
  &__Percent {
    font-weight: 500;
    font-size: inherit;
    color: inherit;
  }
}

@keyframes fill {
  from {
    stroke-dashoffset: calc(v-bind(trackLength) * 1px);
  }
}
</style>

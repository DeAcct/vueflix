<template>
  <svg viewBox="0 0 24 24" class="ProgressCircle">
    <circle class="ProgressCircle__Track" cx="12" cy="12" r="11" />
    <circle class="ProgressCircle__Body" cx="12" cy="12" r="11" ref="$body" />
  </svg>
</template>

<script setup>
import { computed, onMounted } from "vue";
import usePercentToSVGRound from "@/composables/svg";

const props = defineProps({
  progress: {
    type: Object,
    required: true,
    validator(value) {
      return "current" in value && "max" in value;
    },
  },
  direction: {
    type: String,
    validator(value) {
      return ["left-fill", "right-fill"].includes(value);
    },
  },
});

const percent = computed(() =>
  Math.floor((props.progress.current / props.progress.max) * 100)
);

const { $body, trackLength, bodyLength } = usePercentToSVGRound(percent);
</script>

<style lang="scss" scoped>
.ProgressCircle {
  width: 2.4rem;
  height: 2.4rem;
  &__Track {
    fill: none;
    stroke: var(--progress-circle-track-color, hsl(0 0% 100% / 0.5));
    stroke-width: 2px;
  }
  &__Body {
    fill: none;
    stroke: var(--progress-circle-body-color, hsl(var(--theme-500)));
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: calc(v-bind(trackLength) * 1px);
    stroke-dashoffset: calc(v-bind(bodyLength) * 1px);
    // transform: rotate(-90deg);
    rotate: -90deg 0 0;
    transform-origin: center;
    animation: 300ms fill;
  }
}

@keyframes fill {
  from {
    stroke-dashoffset: calc(v-bind(trackLength) * 1px);
  }
}
</style>

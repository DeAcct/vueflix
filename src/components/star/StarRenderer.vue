<template>
  <div class="StarRenderer">
    <svg class="StarRenderer__Stars" viewBox="0 0 280 48">
      <clipPath :id="`StarRenderer-${starId}`">
        <!--별 gap은 10px-->
        <path
          d="M47.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88L.81,20.86c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03L21.44,1.63c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM105.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM163.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM221.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0ZM279.19,20.86l-9.68,9.96,2.25,13.88c.38,2.34-2.09,4.09-4.16,2.94l-11.62-6.45-11.62,6.45c-2.06,1.15-4.54-.6-4.16-2.94l2.25-13.88-9.64-9.96c-1.61-1.65-.68-4.44,1.6-4.79l13.24-2.03,5.79-12.41c.51-1.09,1.54-1.63,2.56-1.63s2.05.54,2.56,1.63l5.8,12.4,13.24,2.03c2.27.35,3.2,3.13,1.6,4.79h0Z"
        />
      </clipPath>
      <g :clip-path="`url(#StarRenderer-${starId})`">
        <rect x="0" y="0" width="100%" height="100%" class="StarRenderer__BG" />
        <rect
          x="0"
          y="0"
          :width="`${renderedProgress}%`"
          height="100%"
          class="StarRenderer__Progress"
        />
      </g>
    </svg>
    <p class="StarRenderer__Number">{{ progress.toFixed(1) }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  starId: {
    type: String,
    default: "",
  },
  progress: {
    type: Number,
    default: 0,
  },
});

const STARS = 5;
const STAR_GAP = 10;
const STAR_WIDTH = 48;

const renderedProgress = computed(() => {
  const total = STARS * STAR_WIDTH + (STARS - 1) * STAR_GAP;

  const fullStars = Math.floor(props.progress);
  const halfStar = props.progress % 1 >= 0.5 ? 1 : 0;

  const filledGaps = fullStars + halfStar - 1;
  const filledGapWidth = filledGaps > 0 ? filledGaps * STAR_GAP : 0;

  const filled = props.progress * STAR_WIDTH + filledGapWidth;
  return (filled / total) * 100;
});
</script>

<style lang="scss" scoped>
.StarRenderer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &__Stars {
    height: 1.6rem;
  }
  &__BG {
    fill: var(--stars-bg, transparent);
  }
  &__Progress {
    fill: var(--stars-progress, hsl(var(--theme-500)));
    animation: filling 500ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  &__Number {
    font-size: 1.6rem;
    font-weight: 700;
    z-index: 2;
    line-height: 2rem;
  }
  &__Reset {
    margin-left: auto;
  }
}
</style>

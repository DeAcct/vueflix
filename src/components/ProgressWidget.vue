<template>
  <figure class="progress-widget">
    <svg viewBox="0 0 24 24" class="progress-widget__graph">
      <!-- <style>
                .cls-1 {
                    opacity: 0.1;
                }
                .cls-2 {
                    fill: none;
                    stroke: #000;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                }
            </style> -->
      <circle class="progress-widget__track" cx="12" cy="12" r="9" />
      <circle class="progress-widget__body" cx="12" cy="12" r="9" ref="body" />
    </svg>
    <figcaption class="progress-widget__percent">
      {{ flooredPercent }}%
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "ProgressWidget",
  computed: {
    trackLength() {
      return this.$refs.body.getTotalLength();
    },
    flooredPercent() {
      return Math.floor(Number(this.percent.slice(0, -1)));
    },
    bodyLength() {
      return this.trackLength * 0.01 * (100 - this.flooredPercent);
    },
  },
  props: {
    percent: String,
  },
};
</script>

<style lang="scss" scoped>
.progress-widget {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &__graph {
    width: 100%;
    height: 100%;
  }
  &__track {
    fill: none;
    stroke: var(--bg-200);
    stroke-width: 2px;
  }
  &__body {
    fill: none;
    stroke: var(--theme-500);
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: calc(v-bind(trackLength) * 1px);
    stroke-dashoffset: calc(v-bind(bodyLength) * 1px);
    transform: rotate(-90deg) rotateX(180deg);
    transform-origin: center;
    animation: 300ms ani;
  }
  &__percent {
    position: absolute;
    font-weight: 500;
  }
}

@keyframes ani {
  from {
    stroke-dashoffset: calc(v-bind(trackLength) * 1px);
  }
}
</style>

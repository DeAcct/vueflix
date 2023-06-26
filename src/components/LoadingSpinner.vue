<template>
  <svg viewBox="0 0 64 64" :class="['loader', { 'loader--show': isLoading }]">
    <circle cx="32" cy="32" r="30"></circle>
  </svg>
</template>

<script setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
  },
});
</script>
<style lang="scss" scoped>
.loader {
  fill: transparent;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 4px;
  visibility: hidden;
  circle {
    stroke-dashoffset: 200;
    stroke-dasharray: 200;
    animation: spinner-line 1500ms infinite, spinner-rotate 1500ms infinite;
    transform-origin: 3.2rem;
  }
  &--show {
    visibility: visible;
  }
}

@keyframes spinner-line {
  0% {
    stroke-dashoffset: 200;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -200;
  }
}
@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>

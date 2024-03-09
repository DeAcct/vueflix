<template>
  <polyline
    points="8 4 20 4 20 16"
    class="Back"
    :class="isActive && 'Back--Active'"
  />
  <rect x="4" y="8" width="12" height="12" />
  <path
    d="M11.83,13.11,9.07,11.72a1,1,0,0,0-1.45.9v2.76a1,1,0,0,0,1.45.9l2.76-1.39A1,1,0,0,0,11.83,13.11Z"
  />
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
path {
  fill: currentColor;
  stroke: transparent;
}
.Back {
  transition: 150ms ease-out;
  &--Active {
    transform-origin: top right;
    transform: translate(-4px, 4px);
  }
}
</style>

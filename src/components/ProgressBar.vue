<template>
  <div class="ProgressBar">
    <div class="ProgressBar__Body"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  percent: String,
});
</script>

<style lang="scss" scoped>
.ProgressBar {
  background-color: hsl(var(--bg-100) / 0.5);
  backdrop-filter: blur(10px);
  &__Body {
    background-color: hsl(var(--theme-500));
    width: v-bind("percent");
    border-radius: 9999px;
    height: 100%;
  }
}
</style>

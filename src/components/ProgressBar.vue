<template>
  <input
    type="range"
    class="ProgressBar"
    :max="progress.max"
    :value="progress.current"
    step="0.001"
  />
</template>

<script setup>
const props = defineProps({
  progress: Object,
});
</script>

<style lang="scss" scoped>
.ProgressBar {
  width: calc(100% - 4rem);
  margin: 0 auto;
  height: 2.4rem;
  border-radius: 9999px;
  -webkit-appearance: none;
  appearance: none;
  overflow: hidden;
  background-color: transparent;
  &::-webkit-slider-runnable-track {
    height: 0.6rem;
    border-radius: 9999px;
    background: linear-gradient(
      90deg,
      hsl(var(--theme-500))
        calc(
          v-bind("props.progress.current") / v-bind("props.progress.max") * 100%
        ),
      var(--progress-bg-color, hsl(var(--bg-100) / 0.5))
        calc(
          v-bind("props.progress.current") / v-bind("props.progress.max") * 100%
        )
    );
    backdrop-filter: blur(10px);
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    background-color: #fff;
    box-shadow: 1px 1px 3px hsl(var(--text-900) / 0.5);
    margin-top: -0.6rem;
    border-radius: 9999px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .ProgressBar {
    &:hover::-webkit-slider-runnable-track {
      background: linear-gradient(
        90deg,
        hsl(var(--theme-600))
          calc(
            v-bind("props.progress.current") / v-bind("props.progress.max") *
              100%
          ),
        var(--progress-bg-color, hsl(var(--bg-100) / 0.5))
          calc(
            v-bind("props.progress.current") / v-bind("props.progress.max") *
              100%
          )
      );
    }
  }
}
</style>

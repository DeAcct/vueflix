<template>
  <div class="SlimProgress"></div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: String,
    required: true,
  },
});
</script>

<style>
.SlimProgress {
  background: linear-gradient(
    to right,
    hsl(var(--theme-500)) v-bind(progress),
    transparent v-bind(progress)
  );
  filter: drop-shadow(0 0 5px hsl(var(--bg-900)));
  height: 0.2rem;
}
</style>

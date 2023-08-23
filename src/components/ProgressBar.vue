<template>
  <div class="progress-bar">
    <div class="progress-bar__body"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  percent: String,
});
console.log(props.target);
</script>

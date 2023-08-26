<template>
  <div class="ProgressBar">
    <div class="ProgressBar__Body"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  percent: String,
});
console.log(props.target);
</script>

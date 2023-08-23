<template>
  <div class="video-control-bar">
    <ProgressBar
      class="video-control-bar__progress"
      :percent="progress"
    ></ProgressBar>
    <div class="row-bottom">
      <button class="video-control-bar__play-toggle">
        <IconBase></IconBase>
      </button>
    </div>
  </div>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import ProgressBar from "./ProgressBar.vue";

const emits = defineEmits(["play-toggle"]);
</script>

<template>
  <div class="VideoControlBar">
    <ProgressBar
      class="VideoControlBar__Progress"
      :percent="progress"
    ></ProgressBar>
    <div class="row-bottom">
      <button class="VideoControlBar__PlayToggle">
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

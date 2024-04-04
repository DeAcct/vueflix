<template>
  <button class="DialogNavigation__Button" @click="goBack" type="button">
    <slot name="content"></slot>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function goBack() {
  if (window.history.state.back === null) {
    router.push({ path: "/" });
    return;
  }
  router.back();
}
</script>

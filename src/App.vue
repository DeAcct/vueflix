<template>
  <RouterView v-slot="{ Component, route }">
    <VueflixHeader v-if="route.meta.appBar" :is-touch-device="device.isTouch" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && device.isMobile" />
    <Transition
      :name="route.meta.transition || `root-move-${transition.direction}`"
    >
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<script setup>
import { onMounted, onUnmounted, provide, reactive } from "vue";

import { useTheme } from "./store/theme";
import { useRootTransition } from "@/composables/transition";

import VueflixHeader from "@/components/VueflixHeader.vue";
import BottomTabMenu from "@/components/BottomTabMenu.vue";

const pointerDeviceQuery = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
);
const mobileDeviceQuery = window.matchMedia("screen and (max-width: 1080px)");
const device = reactive({
  isTouch: !pointerDeviceQuery.matches,
  isMobile: mobileDeviceQuery.matches,
});
function setDeviceInfo() {
  pointerDeviceQuery.addEventListener("change", (e) => {
    device.isTouch = !e.matches;
  });
  mobileDeviceQuery.addEventListener("change", (e) => {
    device.isMobile = e.matches;
  });
}

function setViewPort() {
  document.documentElement.style.setProperty("--vw", window.innerWidth / 100);
  document.documentElement.style.setProperty("--vh", window.innerHeight / 100);
}

provide("device-info", device);

const theme = useTheme();
onMounted(() => {
  setDeviceInfo();
  setViewPort();
  window.addEventListener("resize", () => {
    setViewPort();
  });
  const saved = localStorage.getItem("theme") || "light";
  theme.setMode(saved);
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    setViewPort();
  });
});

const transition = useRootTransition();
</script>

<style lang="scss" scoped>
.root-move {
  &-right {
    &-enter-active,
    &-leave-active {
      transition: all calc(200ms * v-bind("transition.weight")) ease-out;
      opacity: 0;
    }
    &-enter-from,
    &-leave-to {
      translate: -2rem 0;
      opacity: 0;
    }
  }
  &-left {
    &-enter-active,
    &-leave-active {
      transition: all calc(200ms * v-bind("transition.weight")) ease-out;
      opacity: 0;
    }
    &-enter-from,
    &-leave-to {
      translate: 2rem 0;
      opacity: 0;
    }
  }
}
</style>

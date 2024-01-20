<template>
  <RouterView v-slot="{ Component }">
    <VueflixHeader v-if="route.meta.appBar" :is-touch-device="device.isTouch" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && device.isMobile" />
    <Transition :name="route.meta.transition || 'app-fade'">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, onUnmounted, provide, reactive } from "vue";

import VueflixHeader from "@/components/VueflixHeader.vue";
import BottomTabMenu from "@/components/BottomTabMenu.vue";
import { useTheme } from "./store/theme";

const route = useRoute();

function changeTitle() {
  document.title = route.meta.title || import.meta.env.VITE_KR_NAME;
}

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
  changeTitle();
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
</script>

<style lang="scss" scoped>
.app-fade-enter-active,
.app-fade-leave-active {
  transition: opacity 75ms ease-in-out;
}
.app-fade-enter-from,
.app-fade-leave-to {
  opacity: 0;
}
</style>

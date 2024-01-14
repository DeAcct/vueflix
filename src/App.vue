<template>
  <RouterView v-slot="{ Component }">
    <VueflixHeader v-if="route.meta.appBar" :is-touch-device="device.isTouch" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && device.isMobile" />
    <Transition :name="route.meta.transition || 'fade'">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, provide, reactive } from "vue";

import VueflixHeader from "@/components/VueflixHeader.vue";
import BottomTabMenu from "@/components/BottomTabMenu.vue";

const route = useRoute();

function changeTitle() {
  document.title = route.meta.title || import.meta.env.VITE_KR_NAME;
}

function setTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    // store.commit("theme/setTheme", currentTheme);
  } else {
    const deviceTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "dark"
      : "light";
    // store.commit("theme/setTheme", deviceTheme);
  }
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

onMounted(() => {
  // setUser();
  changeTitle();
  setDeviceInfo();
  setTheme();
  setViewPort();
  window.addEventListener("resize", () => {
    setViewPort();
  });
});
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <VueflixHeader v-if="route.meta.appBar" :is-touch-device="device.isTouch" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && device.isMobile" />
    <Transition
      :name="route.meta.transition || `root-move-${transition.direction}`"
    >
      <component :is="Component"></component>
    </Transition>
    <NativeDialog ref="$root" class="AnimeDialog" v-if="route.query?.modal">
      <template #content>
        <AnimeLayout :anime-info />
      </template>
    </NativeDialog>
  </RouterView>
</template>

<script setup>
import { onMounted, onUnmounted, provide, reactive } from "vue";

import { useTheme } from "@/store/theme";
import { useRootTransition } from "@/composables/transition";
import { useAnimeModal } from "@/composables/overay";

import AnimeLayout from "./layout/Anime.layout.vue";
import BottomTabMenu from "@/components/BottomTabMenu.vue";
import NativeDialog from "./components/NativeDialog.vue";
import VueflixHeader from "@/components/VueflixHeader.vue";

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

const { $root, animeInfo } = useAnimeModal();
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

.AnimeDialog {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  --dialog-padding: 0;
  --dialog-min-height: calc(var(--vh) * 100 * 1px);
}

@media screen and (min-width: 1080px) {
  .AnimeDialog {
    --dialog-max-width: 1080px;
    --dialog-min-height: 0;
    --dialog-max-height: 80vh;
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% calc(-50% + 3rem);
    --dialog-starting-opacity: 0;
  }
}
</style>

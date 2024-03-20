<template>
  <RouterView v-slot="{ Component, route }">
    <span class="AnimeLoading" v-if="isLoading"></span>
    <VueflixHeader v-if="route.meta.appBar" :is-touch-device="device.isTouch" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && device.isMobile" />
    <Transition
      :name="route.meta.transition || `root-move-${transition.direction}`"
    >
      <component :is="Component"></component>
    </Transition>
    <NativeDialog ref="$root" class="AnimeDialog" v-if="route.query?.modal">
      <template #title>
        <DialogNavigation class="AnimeDialog__Navigation" :scroll-state>
          <template #activity-name>
            {{ animeInfo?.name }}
          </template>
        </DialogNavigation>
      </template>
      <template #content>
        <AnimeLayout :anime-info />
        <div class="AnimeDialog__TopWrap">
          <ToTop
            class="AnimeDialog__ToTop"
            :class="scrollState !== 'top' && 'AnimeDialog__ToTop--Show'"
          />
        </div>
      </template>
    </NativeDialog>
  </RouterView>
</template>

<script setup>
import { computed, onMounted, onUnmounted, provide, reactive } from "vue";

import { useTheme } from "@/store/theme";

import { useRootTransition } from "@/composables/transition";
import { useAnimeModal } from "@/composables/overay";
import { useScroll } from "./composables/scroll";

import AnimeLayout from "./layout/Anime.layout.vue";

import BottomTabMenu from "@/components/BottomTabMenu.vue";
import DialogNavigation from "./components/DialogNavigation.vue";
import NativeDialog from "./components/NativeDialog.vue";
import ToTop from "@/components/ToTop.vue";
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

const { $root, animeInfo, isLoading } = useAnimeModal();
const $body = computed(() => $root.value?.dialogBody);
const { state: scrollState } = useScroll($body);

// const padding = computed(() => {
//   if (state.value === "top") {
//     return "2rem";
//   }
//   return "4rem";
// });
// onMounted(() => {
//   $body.value = $root.value?.dialogBody;
// });
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

.AnimeLoading {
  display: block;
  width: calc(var(--vw) * 1px * 100);
  height: 0.2rem;
  position: fixed;
  top: 0;
  z-index: 101;
  background-color: hsl(var(--theme-500));
  box-shadow: 0 0 1.2rem hsl(var(--theme-500));
  animation: loading-animation 1s infinite;
  transform-origin: left;
  pointer-events: none;
  touch-action: none;
}
@keyframes loading-animation {
  0% {
    scale: 0 1;
  }
  50% {
    scale: 1 1;
    translate: 0 0;
  }
  100% {
    translate: 100% 0;
  }
}

.AnimeDialog {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-padding: 0;
  --dialog-bg: var(--anime-layout-bg);
  --dialog-overflow: scroll;
  --dialog-height: calc(var(--vh) * 100 * 1px);
  &__Navigation {
    flex-shrink: 0;
    position: sticky;
    z-index: 20;
    left: 0;
    top: -1px;
    margin-bottom: -12rem;

    width: 100%;
    height: 12rem;
  }
  &__TopWrap {
    width: 100%;
    height: 0;
    position: sticky;
    bottom: 0;
  }
  &__ToTop {
    position: absolute;
    left: 50%;
    bottom: var(--bottom-tab-safe-margin);
    z-index: 100;
    background-color: hsl(var(--theme-500));
    translate: -50% 10rem;
    transition: 150ms ease-out;
    box-shadow: var(--box-shadow);
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;
    opacity: 0;

    &--Show {
      opacity: 1;
      translate: -50% 0;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeDialog {
    --dialog-max-width: 1080px;
    --dialog-height: calc(var(--vh) * 100 * 1px - 2rem);
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% calc(-50% + 3rem);
    --dialog-starting-opacity: 0;
    --dialog-border-radius: var(--global-radius);
    &__ToTop {
      left: auto;
      right: 4rem;
      bottom: 4rem;
      translate: 0 10rem;
      &--Show {
        translate: 0 0;
      }
    }
  }
}
</style>

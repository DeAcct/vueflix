<template>
  <RouterView v-slot="{ Component, route }">
    <span class="AnimeLoading" v-if="isLoading"></span>
    <VueflixHeader v-if="route.meta.appBar" />
    <BottomTabMenu v-if="route.meta.bottomTabMenu && isSmall" />
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
    <NativeDialog
      ref="$AnimeDialog"
      :close-side-effect
      class="AnimeDialog"
      shade
    >
      <template #title>
        <DialogNavigation class="AnimeDialog__Navigation" :scroll-state>
          <template #activity-name>
            {{ animeInfo?.name }}
          </template>
        </DialogNavigation>
      </template>
      <template #content>
        <AnimeLayout :anime-info :sync-function />
        <div class="AnimeDialog__TopWrap">
          <ToTop
            :scroll-target="$body"
            class="AnimeDialog__ToTop"
            :class="scrollState !== 'top' && 'AnimeDialog__ToTop--Show'"
          />
        </div>
      </template>
    </NativeDialog>
    <div id="AnotherOveray"></div>
  </RouterView>
</template>

<script setup>
import { onMounted, watch, ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useTheme } from "@/store/theme";

import { useRootTransition } from "@/composables/transition";
import { useAnimeModal } from "@/composables/overay";
import { useScroll } from "@/composables/scroll";
import { useMediaQuery, useViewport } from "@/composables/device";

import AnimeLayout from "./layout/Anime.layout.vue";

import BottomTabMenu from "@/components/BottomTabMenu.vue";
import DialogNavigation from "@/components/DialogNavigation.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import ToTop from "@/components/ToTop.vue";
import VueflixHeader from "@/components/VueflixHeader.vue";

// const isTouchable = useMediaQuery("not (hover: hover) and (pointer: fine)");
const isSmall = useMediaQuery("(max-width: 1080px)");

const router = useRouter();
function closeSideEffect() {
  router.push({ query: null });
}

const theme = useTheme();
onMounted(() => {
  const nativeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const saved = localStorage.getItem("theme") || nativeTheme;
  theme.setMode(saved);
});

// const transition = useRootTransition();

const $AnimeDialog = ref(null);
const { animeInfo, isLoading } = useAnimeModal($AnimeDialog);
const $body = computed(() => $AnimeDialog.value?.$body);
const { state: scrollState } = useScroll($body);

function syncFunction(data) {
  animeInfo.value = data;
}

const { viewportBase } = useViewport();
const $docu = document.documentElement;
watch(
  viewportBase,
  () => {
    $docu.style.setProperty("--vw", viewportBase.vw);
    $docu.style.setProperty("--vh", viewportBase.vh);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
// .root-move {
//   &-right {
//     &-enter-active,
//     &-leave-active {
//       transition: all calc(200ms * v-bind("transition.weight")) ease-out;
//       opacity: 0;
//     }
//     &-enter-from,
//     &-leave-to {
//       translate: -2rem 0;
//       opacity: 0;
//     }
//   }
//   &-left {
//     &-enter-active,
//     &-leave-active {
//       transition: all calc(200ms * v-bind("transition.weight")) ease-out;
//       opacity: 0;
//     }
//     &-enter-from,
//     &-leave-to {
//       translate: 2rem 0;
//       opacity: 0;
//     }
//   }
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.AnimeLoading {
  display: block;
  width: 100dvh;
  height: 0.2rem;
  position: fixed;
  top: 0;
  z-index: calc(var(--z-index-1) + 1);
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
    z-index: calc(var(--z-index-overay-1) + 1);
    left: 0;
    top: -1px;
    margin-bottom: -6rem;
    background: linear-gradient(var(--anime-layout-bg), transparent);

    width: 100%;
    height: 6rem;
  }
  &__TopWrap {
    width: 100%;
    height: 0;
    position: sticky;
    z-index: calc(var(--z-index-overay-1) + 2);
    bottom: 0;
  }
  &__ToTop {
    position: absolute;
    left: 50%;
    bottom: var(--bottom-tab-safe-margin);
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
    --dialog-height: calc(100dvh - 4rem);
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% calc(-50% + 3rem);
    --dialog-starting-opacity: 0;
    --dialog-border-radius: var(--global-radius);
    &__Navigation {
      margin-bottom: -8rem;
      height: 8rem;
    }
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

@media (display-mode: window-controls-overlay) {
  .AnimeDialog {
    --dialog-height: calc(100dvh - var(--header-height) - 4rem);
    --dialog-inset: calc(var(--header-height) + 2rem) auto auto 50%;
    --dialog-translate: -50% 0;
    --dialog-starting-translate: -50% 3rem;
    --dialog-close-inset: var(--header-height) 0 0 0;
  }
}
</style>

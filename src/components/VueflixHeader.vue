<template>
  <header
    class="VueflixHeader"
    :class="scrollPercent > 0 && 'VueflixHeader--Scrolled'"
  >
    <h1 class="blind">데레</h1>
    <p class="VueflixHeader__Activity">
      <template v-if="activity !== 'Logo' && !isPC">
        {{ activity }}
      </template>
      <template v-else>
        <RouterLink to="/" class="VueflixHeader__Logo">
          <VueflixLogo />
        </RouterLink>
      </template>
    </p>
    <ul class="VueflixHeader__GNB">
      <li v-for="{ text, to } in gnbItems" :key="text">
        <RouterLink class="VueflixHeader__GNBLink" :to>
          {{ text }}
        </RouterLink>
      </li>
    </ul>
    <button
      class="VueflixHeader__Action"
      v-if="route.meta.appBar.backButton && isSmall"
      @click="back"
      type="button"
    >
      <IconBase>
        <IconArrowPrev />
      </IconBase>
    </button>
    <button
      type="button"
      class="VueflixHeader__Action VueflixHeader__Action--SearchMobileBtn"
      @click="toggleSearchMode"
    >
      <IconBase>
        <IconSearch></IconSearch>
      </IconBase>
    </button>
    <SearchBar
      class="VueflixHeader__SearchBar VueflixHeader__SearchBar--PCOnly"
    />
    <ProfileCombo to="/my" class="VueflixHeader__ProfileCombo">
      <template #text="nickname">
        <span class="VueflixHeader__UserName">{{ nickname }}</span>
      </template>
    </ProfileCombo>

    <div
      class="VueflixHeader__SearchCombo"
      :class="searchMode && 'VueflixHeader__SearchCombo--Open'"
    >
      <SearchBar class="VueflixHeader__SearchBar" />
      <button
        @click="toggleSearchMode"
        class="VueflixHeader__SearchCloseBtn"
        type="button"
      >
        <span class="blind">닫기</span>
        <IconBase>
          <IconClose />
        </IconBase>
      </button>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEventListener } from "@vueuse/core";

import { useMediaQuery } from "@/composables/device";
import { switcher } from "@/utility/extArray";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconClose from "./icons/IconClose.vue";
import IconSearch from "./icons/IconSearch.vue";
import SearchBar from "./SearchBar.vue";
import VueflixLogo from "./VueflixLogo.vue";
import ProfileCombo from "./ProfileCombo.vue";

const isPC = useMediaQuery("(hover: hover) and (pointer: fine)");
const isSmall = useMediaQuery("(max-width: 1080px)");

const route = useRoute();
const activity = computed(() => route.meta.appBar?.activityContent);
watch(
  () => route.meta,
  () => {
    scrollPercent.value = 0;
    handleScroll();
  }
);

const gnbItems = [
  {
    text: "보관함",
    to: "/basket",
  },
];

const scrollPercent = ref(0);
const elementColor = computed(() => {
  return `color-mix(in srgb, hsl(var(--bg-100)), hsl(var(--text-800)) ${
    scrollPercent.value * 100
  }%)`;
});
function handleScroll() {
  if (activity.value !== "Logo" || route.name === "anime-play") {
    scrollPercent.value = 1;
    return;
  }
  const slideHeight = switcher(window.innerWidth)
    .case(
      (w) => w < 768,
      (w) => (w * 4) / 3 - 90
    )
    .default((w) => (w * 9) / 21 - 90);

  scrollPercent.value = Math.min(window.scrollY / slideHeight, 1);
}
onMounted(handleScroll);
useEventListener(window, "scroll", handleScroll);

const router = useRouter();
function back() {
  router.back();
}

const searchMode = ref(false);
function toggleSearchMode() {
  searchMode.value = !searchMode.value;
}

const backbuttonBlank = computed(
  () => route.meta.appBar.backButton && "2.4rem"
);
</script>

<style lang="scss" scoped>
.VueflixHeader {
  width: 100%;
  position: fixed;
  top: env(titlebar-area-y, 0);
  left: env(titlebar-area-x, 0);
  z-index: var(--z-index-2);
  background: linear-gradient(hsl(var(--bg-900) / 0.2), transparent);
  padding: 0 var(--inner-padding);
  display: flex;
  align-items: center;
  height: var(--header-height);
  &--Scrolled {
    background: hsl(var(--bg-100) / calc(v-bind(scrollPercent)));
  }

  &__Activity {
    font-size: 1.7rem;
    font-weight: 700;
    position: absolute;
    left: 50%;
    translate: -50%;
  }
  &__Logo {
    display: flex;
    width: 10rem;
    flex-shrink: 0;
    color: v-bind(elementColor);
  }

  &__Action {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    border-radius: 9999px;
    &--SearchMobileBtn {
      margin-left: auto;
      color: v-bind(elementColor);
    }
  }

  &__SearchCombo {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    position: absolute;
    left: 0;
    background-color: hsl(var(--bg-100) / 0.8);
    backdrop-filter: blur(10px);
    translate: 0 calc(var(--header-height) * -1);
    transition: translate 150ms ease-in-out;
    &--Open {
      translate: 0 0;
    }
  }
  &__SearchBar {
    gap: 1.2rem;
    width: calc(100% - 4rem);
    --searchbar-icon-color: hsl(var(--bg-700));
    --searchbar-text-color: inherit;
    --searchbar-placeholder-color: hsl(var(--bg-600));
    //flex-grow: 1;
    &--PCOnly {
      display: none;
    }
  }
  &__SearchCloseBtn {
    width: 2.4rem;
    height: 2.4rem;
  }
  &__ProfileCombo {
    transition: translate 150ms ease-out;
    position: absolute;
    left: calc(var(--inner-padding));
    translate: calc(v-bind(backbuttonBlank) + 0.4rem) 0;
    display: flex;
    gap: 0.8rem;
    --profile-size: 2.8rem;
    font-size: 1.5rem;
  }
  &__UserName {
    display: none;
  }
  &__GNB {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .VueflixHeader {
    &__Activity {
      opacity: 1;
      &:hover {
        color: hsl(var(--text-600));
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .VueflixHeader {
    transition: 150ms ease-out;
    --elements-text-color: hsl(var(--text-800));
    &--Scrolled {
      background: hsl(var(--bg-100));
      --elements-color: hsl(var(--bg-200));
    }

    &__Logo {
      align-items: center;
      height: 4.8rem;
      border-radius: 9999px;
      border: 2px solid transparent;
      transition: 150ms ease-out;
      &:hover {
        background-color: var(--elements-color, hsl(var(--bg-100) / 0.2));
      }
      &:focus-visible {
        border-color: hsl(var(--theme-500));
      }
    }
    &__Activity {
      position: static;
      translate: none;
      a:focus-visible {
        color: hsl(var(--theme-500));
      }
    }
    &__Action {
      color: inherit;
      width: 3.6rem;
      height: 3.6rem;
      border: 2px solid transparent;
      transition: border-color 150ms ease-out;

      &--SearchMobileBtn {
        display: none;
      }
    }
    &__GNB {
      display: flex;
      gap: 1.6rem;
      margin-left: 4rem;
    }
    &__GNBLink {
      font-size: 1.6rem;
      transition: color 150ms ease-out;
      color: v-bind(elementColor);
      &:focus-visible {
        color: hsl(var(--theme-500));
      }
    }
    &__SearchCombo {
      display: none;
    }

    &__SearchBar {
      margin-left: auto;
      &--PCOnly {
        display: flex;
        gap: 0.8rem;
        flex-grow: 0;
        width: 30rem;
        height: 4.6rem;
        padding: 0 1.2rem;
        background-color: var(--elements-color, hsl(var(--bg-100) / 0.3));
        --searchbar-placeholder-color: var(--elements-text-color, inherit);
        border-radius: 9999px;
        border: 2px solid transparent;
        transition: border-color 150ms ease-out;
        &:focus-within {
          border-color: hsl(var(--theme-500));
        }
      }
    }
    &__ProfileCombo {
      position: static;
      translate: none;
      display: flex;
      gap: 0.8rem;
      background-color: var(--elements-color, hsl(var(--bg-100) / 0.3));
      color: var(--elements-text-color, inherit);
      --profile-size: 3.6rem;
      height: 4.6rem;
      padding-left: 1rem;
      padding-right: 0.5rem;
      margin-left: 1.6rem;
    }
    &__UserName {
      display: block;
      font-size: 1.6rem;
    }
  }
}

@media (display-mode: window-controls-overlay) {
  .VueflixHeader {
    -webkit-app-region: drag;
    app-region: drag;
    background-color: hsl(var(--bg-100));
  }
}

@media (display-mode: window-controls-overlay) and (max-width: 1079px) {
  .VueflixHeader {
    &__Activity {
      opacity: 1;
      left: var(--inner-padding);
      translate: 0;
    }
  }
}

// .VueflixHeader {
//   background-color: hsl(var(--bg-100));
//   -webkit-app-region: drag;
//   app-region: drag;
//   --icon-color: inherit;

//   &__Activity {
//     opacity: 1;
//   }
// }
</style>

<template>
  <header
    class="VueflixHeader"
    :class="scrollPercent > 0 && 'VueflixHeader--Fill'"
  >
    <div class="VueflixHeader__Inner">
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
      <ProfileCombo to="/my" class="VueflixHeader__ProfileCombo" />

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
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useMediaQuery } from "@/composables/device";

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
const activity = ref(route.meta.appBar.activityContent);
const actions = ref(route.meta.appBar.actions);
watch(
  () => route.meta,
  () => {
    scrollPercent.value = 0;
    activity.value = route.meta.appBar?.activityContent;
    actions.value = route.meta.appBar?.actions;
    handleScroll();
  }
);

const gnbItems = [
  {
    text: "보관함",
    to: "/basket",
  },
  {
    text: "칵테일",
    to: "/cocktail",
  },
];

const scrollPercent = ref(0);
function handleScroll() {
  if (
    window.scrollY >= 500 ||
    activity.value !== "Logo" ||
    route.name === "anime-play"
  ) {
    scrollPercent.value = 1;
    return;
  }
  scrollPercent.value = window.scrollY / 500;
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const router = useRouter();
function back() {
  router.back();
}

const searchMode = ref(false);
function toggleSearchMode() {
  searchMode.value = !searchMode.value;
}
</script>

<style lang="scss" scoped>
.VueflixHeader {
  width: 100%;
  position: fixed;
  top: env(titlebar-area-y, 0);
  left: env(titlebar-area-x, 0);
  z-index: var(--z-index-1);
  border-bottom: 1px solid hsl(var(--bg-200) / v-bind(scrollPercent));
  background-color: hsl(var(--bg-100) / calc(v-bind(scrollPercent)));
  --icon-color: #fff;

  &__Inner {
    display: flex;
    align-items: center;
    height: var(--header-height);
    width: env(titlebar-area-width, 100%);
    padding: 0 var(--inner-padding);
    // transition: width 150ms ease-out;
  }

  &__Activity {
    font-size: 1.7rem;
    font-weight: 700;
    opacity: v-bind(scrollPercent);
    position: absolute;
    left: 50%;
    translate: -50%;
  }
  &__Logo {
    display: flex;
    width: 10rem;
    flex-shrink: 0;
  }

  // &__Actions {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   margin-left: auto;
  // .right {
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   flex-grow: 1;
  //   margin-right: 0;
  //   gap: 0.8rem;
  // }
  // }

  &__Action {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--icon-color);
    border-radius: 9999px;
    &--SearchMobileBtn {
      margin-left: auto;
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
    translate: 0 -6rem;
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
    display: none;
  }
  &--Fill {
    --icon-color: inherit;
  }
  &__GNB {
    display: none;
  }
}
@media screen and (min-width: 769px) {
  .VueflixHeader {
    color: hsl(var(--header-content));
    transition: color 150ms ease-out;
    &--Fill {
      color: hsl(var(--header-content-fill));
    }
    &__Activity {
      opacity: 1;
      color: inherit;
      a {
        color: inherit;
        transition: 100ms ease-out;
      }
      &:hover {
        color: hsl(var(--text-600));
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .VueflixHeader {
    background-color: hsl(var(--bg-100));
    color: inherit;
    &__Logo {
      align-items: center;
      height: 4.8rem;
      border-radius: 9999px;
      border: 2px solid transparent;
      transition: 150ms ease-out;
      &:hover {
        background-color: hsl(var(--bg-200));
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
        background-color: hsl(var(--bg-200));
        border-radius: 9999px;
        border: 2px solid transparent;
        transition: border-color 150ms ease-out;
        &:focus-within {
          border-color: hsl(var(--theme-500));
        }
      }
    }
    &__ProfileCombo {
      display: flex;
      gap: 0.8rem;
      background-color: hsl(var(--bg-200));
      border: 2px solid hsl(var(--bg-200));
      --profile-size: 3.6rem;
      font-size: 1.5rem;
      padding-left: 0.8rem;
      margin-left: 1.6rem;
    }
  }
}

@media (display-mode: window-controls-overlay) {
  .VueflixHeader {
    -webkit-app-region: drag;
    app-region: drag;
    --icon-color: inherit;
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

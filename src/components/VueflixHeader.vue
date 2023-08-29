<template>
  <header
    :class="[
      'VueflixHeader',
      'inner',
      { 'VueflixHeader--Fill': scrollPercent > 0 },
    ]"
  >
    <h1
      :class="[
        'VueflixHeader__Activity',
        {
          'VueflixHeader__Activity--Logo':
            activity === 'Logo' || !isTouchDevice,
        },
        ,
      ]"
    >
      <template v-if="activity === 'Logo' || !isTouchDevice">
        <RouterLink to="/">
          <VueflixLogo>뷰플릭스</VueflixLogo>
        </RouterLink>
      </template>
      <template v-else>
        {{ activity }}
      </template>
    </h1>
    <SearchBar
      class="VueflixHeader__SearchBar VueflixHeader__SearchBar--PCOnly"
    />
    <div class="VueflixHeader__Actions">
      <button
        class="VueflixHeader__Action"
        v-if="route.meta.appBar.backButton && isTouchDevice"
        @click="back"
      >
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </button>

      <div class="right">
        <RouterLink to="/notification" class="VueflixHeader__Action">
          <IconBase>
            <IconNotification></IconNotification>
          </IconBase>
        </RouterLink>
        <button
          type="button"
          class="VueflixHeader__Action VueflixHeader__Action--MobileOnly"
          @click="toggleSearchMode"
        >
          <IconBase>
            <IconSearch></IconSearch>
          </IconBase>
        </button>
        <ProfileCombo
          :to="user ? '/my' : '/auth'"
          class="VueflixHeader__ProfileCombo"
        />
      </div>
    </div>
    <div
      :class="[
        'VueflixHeader__SearchCombo',
        'inner',
        { 'VueflixHeader__SearchCombo--Open': searchMode },
      ]"
    >
      <SearchBar
        class="VueflixHeader__SearchBar VueflixHeader__SearchBar--MobileOnly"
      />
      <button @click="toggleSearchMode" class="VueflixHeader__SearchCloseBtn">
        <span class="blind">닫기</span>
        <IconBase>
          <IconClose />
        </IconBase>
      </button>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconClose from "./icons/IconClose.vue";
import IconNotification from "./icons/IconNotification.vue";
import IconSearch from "./icons/IconSearch.vue";
import SearchBar from "./SearchBar.vue";
import VueflixLogo from "./VueflixLogo.vue";
import ProfileCombo from "./ProfileCombo.vue";

defineProps({ isTouchDevice: Boolean, isMobile: Boolean });

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

const scrollPercent = ref(0);
function handleScroll() {
  if (window.scrollY >= 500 || activity.value !== "Logo") {
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

const store = useStore();
const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.VueflixHeader {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  height: 6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(var(--bg-200) / v-bind(scrollPercent));
  background-color: hsl(var(--bg-100) / calc(v-bind(scrollPercent)));

  &__Activity {
    font-size: 1.7rem;
    font-weight: 700;
    opacity: v-bind(scrollPercent);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    &--Logo {
      width: 6.5rem;
    }
  }

  &__Actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;
      margin-right: 0;
      gap: 0.8rem;
    }
  }

  --icon-color: hsl(var(--bg-100));
  &__Action {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--icon-color);
    border-radius: 9999px;
  }

  &__SearchCombo {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: hsl(var(--bg-100) / 0.8);
    backdrop-filter: blur(10px);
    transform: translateY(-6rem);
    transition: transform 150ms ease-out;
    &--Open {
      transform: translateY(0);
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
}
@media screen and (min-width: 769px) {
  .VueflixHeader {
    justify-content: space-between;
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
    height: 7.2rem;
    background-color: hsl(var(--bg-100));
    color: inherit;
    &__Actions {
      width: auto;
      .right {
        gap: 4px;
      }
    }
    &__Activity {
      position: static;
      transform: none;
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

      &--MobileOnly {
        display: none;
      }
    }
    &__SearchCombo {
      display: none;
    }

    &__ProfileCombo {
      display: flex;
      gap: 0.8rem;
      background-color: hsl(var(--bg-200));
      border: 2px solid hsl(var(--bg-200));
      --profile-size: 3.6rem;
      font-size: 1.5rem;
      padding-left: 0.8rem;
    }

    &__SearchBar {
      &--PCOnly {
        display: flex;
        gap: 0.8rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        flex-grow: 0;
        width: 50rem;
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
  }
}
</style>

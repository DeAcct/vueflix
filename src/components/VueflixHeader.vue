<template>
  <header :class="['header', 'inner', { 'header--fill': scrollPercent > 0 }]">
    <h2
      :class="[
        'header__activity',
        {
          'header__activity--logo': activity === 'Logo' || !isTouchDevice,
        },
        ,
      ]"
    >
      <template v-if="activity === 'Logo' || !isTouchDevice">
        <router-link to="/">
          <vueflix-logo></vueflix-logo>
        </router-link>
      </template>
      <template v-else>
        {{ activity }}
      </template>
    </h2>
    <div class="header__actions">
      <button
        class="header__back-btn"
        v-if="route.meta.appBar.backButton && isTouchDevice"
        @click="back"
      >
        <icon-base>
          <icon-arrow-prev />
        </icon-base>
      </button>
      <div class="right">
        <notification-action-btn
          :is-scroll="scrollPercent > 0"
          icon-color-default="hsl(var(--header-content))"
          icon-color-fill="hsl(var(--header-content-fill))"
        ></notification-action-btn>
        <search-bar
          :is-scroll="scrollPercent > 0"
          icon-color-default="hsl(var(--header-content))"
          icon-color-fill="hsl(var(--header-content-fill))"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import VueflixLogo from "./VueflixLogo.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchBar from "./SearchBar.vue";
import NotificationActionBtn from "./NotificationActionBtn.vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

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
    scrollPercent.value = 100;
    return;
  }
  scrollPercent.value = (window.scrollY / 500) * 100;
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
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  user-select: none;
  height: 6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(var(--bg-200), calc(v-bind(scrollPercent) * 1%));
  background-color: hsl(var(--bg-100), calc(v-bind(scrollPercent) * 1%));

  &__activity {
    font-size: 1.7rem;
    font-weight: 700;
    opacity: calc(v-bind(scrollPercent) * 1%);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    &--logo {
      width: 6.5rem;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    width: 100%;
    .right {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      margin-right: 0;
    }
  }
  &__back-btn {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
@media screen and (min-width: 769px) {
  .header {
    justify-content: space-between;
    color: hsl(var(--header-content));
    transition: color 150ms ease-out;
    &--fill {
      color: hsl(var(--header-content-fill));
    }
    &__activity {
      position: static;
      transform: none;
      opacity: 1;
      color: inherit;
      a {
        color: inherit;
      }
    }
  }
}
</style>

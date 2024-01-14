<template>
  <nav
    :class="[
      'BottomTabMenu',
      {
        'BottomTabMenu--Show': scrollBehavior !== 'down',
      },
    ]"
  >
    <h2 class="blind">하단메뉴</h2>
    <div class="BottomTabMenu__Items">
      <RouterLink
        v-for="({ to, name, icon }, index) in items"
        :key="index"
        class="BottomTabMenu__Item"
        :to="to === 'home' ? '/' : `/${to}`"
        exact-active-class="BottomTabMenu__Item--Active"
      >
        <i class="BottomTabMenu__Icon">
          <template v-if="to !== 'my'">
            <IconBase>
              <component :is="icon" :key="name" />
            </IconBase>
          </template>
          <template v-else> </template>
        </i>
        <span class="blind">{{ name }}</span>
      </RouterLink>
    </div>
    <ProfileCombo
      to="/my"
      class="BottomTabMenu__Profile"
      exact-active-class="BottomTabMenu__Profile--Active"
    />
    <ToTop class="BottomTabMenu__ToTop" v-if="scrollBehavior !== 'top'" />
  </nav>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconHome from "./icons/IconHome.vue";
import IconBasket from "./icons/IconBasket.vue";
import ToTop from "./ToTop.vue";

import { useScroll } from "@/composables/scroll";
import ProfileCombo from "./ProfileCombo.vue";

const items = [
  {
    to: "home",
    name: "홈",
    icon: IconHome,
  },
  {
    to: "basket",
    name: "보관함",
    icon: IconBasket,
  },
];

const { scrollBehavior } = useScroll();
</script>

<style lang="scss" scoped>
.BottomTabMenu {
  position: fixed;
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 100;
  bottom: var(--bottom-tab-safe-margin);
  left: 50%;
  transform: translate(
    -50%,
    calc(var(--bottom-tab-safe-margin) + var(--bottom-tab-height))
  );
  transition: 150ms ease-out;
  &--Show {
    transform: translate(-50%, 0);
  }

  &__Items {
    display: flex;
    background-color: hsl(var(--bg-100) / 0.8);
    backdrop-filter: blur(10px);
    border-radius: 9999px;
  }
  &__Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: var(--bottom-tab-height);
    font-size: 1.1rem;
    color: transparent;
    --indicator-size: 0;
    --bottom-tab-active-color: hsl(var(--text-800));
    &--Active {
      --indicator-size: 0.4rem;
      --bottom-tab-active-color: hsl(var(--theme-500));
    }
  }
  &__Icon {
    color: var(--bottom-tab-active-color);
  }
  &__Profile {
    --profile-size: 3.8rem;
    flex-direction: row-reverse;
    gap: 0.8rem;
    background-color: hsl(var(--bg-100) / 0.8);
    backdrop-filter: blur(10px);
    height: 4.8rem;
    border: 2px solid transparent;
    border-radius: 9999px;
    font-size: 1.5rem;
    font-weight: 700;
    padding-right: 1.2rem;
    &--Active {
      --bottom-tab-active-color: hsl(var(--theme-500));
      border-color: var(--bottom-tab-active-color);
    }
  }
  &__ProfileImg {
    width: 100%;
    height: 100%;
  }
  &__ToTop {
    width: 4.6rem;
    height: 4.6rem;
    flex-shrink: 0;
    position: static;
    background-color: hsl(var(--theme-500));
    box-shadow: none;
  }
}
</style>

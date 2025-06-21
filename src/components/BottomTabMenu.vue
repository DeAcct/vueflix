<template>
  <TransitionGroup tag="nav" class="BottomTabMenu" name="bottom-tab">
    <div class="BottomTabMenu__Items" key="items" ref="$Items">
      <div v-for="({ to, name, icon }, index) in items" :key="index">
        <RouterLink
          class="BottomTabMenu__Item"
          :to="to === 'home' ? '/' : `/${to}`"
          exact-active-class="BottomTabMenu__Item--Active"
        >
          <i class="BottomTabMenu__Icon">
            <IconBase>
              <component :is="icon" :key="name" />
            </IconBase>
          </i>
          <span class="blind">{{ name }}</span>
        </RouterLink>
      </div>
    </div>
    <div v-if="scrollState !== 'top'" key="to-top">
      <ToTop class="BottomTabMenu__ToTop" ref="$root" />
    </div>
  </TransitionGroup>
</template>

<script setup>
import { useScroll } from "@/composables/scroll";

import ToTop from "@/components/ToTop.vue";

import IconBase from "./IconBase.vue";
import IconHome from "./icons/IconHome.vue";
import IconBasket from "./icons/IconBasket.vue";
import { useLiquidGlass } from "@/composables/liquid-glass";

const { $root: $Items } = useLiquidGlass();

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
  // {
  //   to: "cocktail",
  //   name: "칵테일",
  //   icon: IconCocktail,
  // },
];

const { state: scrollState } = useScroll();
</script>

<style lang="scss" scoped>
.BottomTabMenu {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-1);
  bottom: var(--bottom-tab-safe-margin);
  transition: 150ms ease-out;
  border-radius: 9999px;
  width: 100%;

  &__Items {
    display: flex;
    // background-color: hsl(var(--bg-100) / 0.2);
    // backdrop-filter: blur(0.4rem);
    // box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.3),
    //   inset -1px -1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: 1px solid hsl(var(--bg-200));
    border-radius: 9999px;
  }
  &__Item {
    &--Active {
      color: hsl(var(--theme-500));
    }
  }
  &__Icon {
    display: block;
    width: 4.8rem;
    height: var(--bottom-tab-height);
    text-align: center;
    align-content: center;
    color: inherit;
  }
  &__ToTop {
    width: 4.6rem;
    height: 4.6rem;
    background-color: hsl(var(--theme-500));
    flex-shrink: 0;
  }
}

.bottom-tab-move,
.bottom-tab-enter-active,
.bottom-tab-leave-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.bottom-tab-enter-from,
.bottom-tab-leave-to {
  opacity: 0;
  scale: 0;
}
.bottom-tab-leave-active {
  position: absolute;
  z-index: -1;
}
</style>

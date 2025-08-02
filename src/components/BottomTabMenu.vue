<template>
  <TransitionGroup
    tag="nav"
    class="BottomTabMenu"
    :class="scrollState !== 'top' && 'BottomTabMenu--Scrolled'"
    name="bottom-tab"
  >
    <LiquidGlass class="BottomTabMenu__Items" key="items" tag="div" radius="24">
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
    </LiquidGlass>
    <LiquidGlass
      v-if="scrollState !== 'top'"
      key="to-top"
      tag="div"
      radius="24"
      depth="4"
      class="BottomTabMenu__ToTopWrap"
      background-color="hsl(var(--theme-500) / 0.85)"
    >
      <ToTop class="BottomTabMenu__ToTop" ref="$ToTop" />
    </LiquidGlass>
  </TransitionGroup>
</template>

<script setup>
import { useScroll } from "@/composables/scroll";

import ToTop from "@/components/ToTop.vue";

import IconBase from "./IconBase.vue";
import IconHome from "./icons/IconHome.vue";
import IconBasket from "./icons/IconBasket.vue";
import LiquidGlass from "./LiquidGlass.vue";
// import { useLiquidGlass } from "@/composables/liquid-glass";

// const { $root: $Items } = useLiquidGlass({ radius: 0.6 });

// 탭 메뉴 아이템 정의
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
  // 주석 처리된 칵테일 아이템 (필요시 활성화)
  // {
  //   to: "cocktail",
  //   name: "칵테일",
  //   icon: IconCocktail,
  // },
];

// 스크롤 상태 가져오기
const { state: scrollState } = useScroll();
</script>

<style lang="scss" scoped>
@supports not (backdrop-filter: blur) {
  .BottomTabMenu {
    &__Items {
      background: linear-gradient(
        to bottom,
        hsl(var(--bg-100) / 0.2),
        hsl(var(--bg-100) / 0.1)
      );
    }
  }
}

.BottomTabMenu {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  z-index: var(--z-index-1);
  // bottom: var(--bottom-tab-safe-margin);
  bottom: 0;
  padding: 2rem 0 var(--bottom-tab-safe-margin);
  transition: 150ms ease-out;
  width: 100%;
  pointer-events: none;

  &__Items {
    display: flex;
    pointer-events: initial;
    border-radius: 9999px;
    box-shadow: inset -1px -1px 4px hsl(var(--text-900) / 0.1);
  }
  &__Item {
    // color: #fff;
    mix-blend-mode: luminosity;
    filter: drop-shadow(0.1rem 0.1rem 0.1rem hsl(var(--text-900) / 0.3));
    &--Active {
      mix-blend-mode: normal;
      color: hsl(var(--theme-500));
      filter: drop-shadow(0 0 0.5rem hsl(var(--theme-500) / 0.5))
        drop-shadow(0.1rem 0.1rem 0.1rem hsl(var(--theme-500) / 0.3));
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
  &__ToTopWrap {
    border-radius: 9999px;
    background-color: hsl(var(--theme-500) / 0.8);
  }
  &__ToTop {
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;
    color: hsl(var(--bg-100) / 0.9);
    pointer-events: initial;
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

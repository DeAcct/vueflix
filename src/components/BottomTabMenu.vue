<template>
  <nav class="BottomTabMenu">
    <h2 class="blind">하단메뉴</h2>
    <ul class="BottomTabMenu__Items">
      <li
        v-for="({ to, item, icon }, index) in items"
        :key="index"
        class="BottomTabMenu__Item"
      >
        <RouterLink
          :to="to === 'home' ? '/' : `/${to}`"
          class="BottomTabMenu__Link"
          exact-active-class="BottomTabMenu__Link--Active"
        >
          <i class="BottomTabMenu__Icon">
            <template v-if="to !== 'my'">
              <IconBase>
                <component :is="icon" :key="item" />
              </IconBase>
            </template>
            <template v-else>
              <component
                :is="icon"
                :key="item"
                class="BottomTabMenu__Profile"
              />
            </template>
          </i>
          <span class="blind">{{ item }}</span>
          <i class="BottomTabMenu__Indicator"> </i>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import IconBase from "./IconBase.vue";
import IconHome from "./icons/IconHome.vue";
import IconBasket from "./icons/IconBasket.vue";
import ProfileImg from "./ProfileImg.vue";

const items = [
  {
    to: "home",
    item: "홈",
    icon: IconHome,
  },
  {
    to: "basket",
    item: "보관함",
    icon: IconBasket,
  },
  {
    to: "my",
    item: "MY",
    icon: ProfileImg,
  },
];

const store = useStore();
</script>

<style lang="scss" scoped>
.BottomTabMenu {
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  background-color: var(--top-item);
  border-radius: 0.6rem 0.6rem 0 0;
  border: 1px solid hsl(var(--bg-200));
  border-bottom: none;
  overflow: hidden;
  user-select: none;

  &__Items {
    display: flex;
  }
  &__Link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--bottom-tab-height);
    font-size: 1.1rem;
    gap: 0.2rem;
    color: transparent;
    --indicator-size: 0;
    &--Active {
      color: hsl(var(--theme-500));
      --indicator-size: 0.4rem;
    }
  }

  &__Item {
    flex-grow: 1;
  }
  &__Icon {
    margin-top: -0.4rem;
  }
  &__Profile {
    color: inherit;
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.2rem;
  }
  &__Indicator {
    display: flex;
    width: var(--indicator-size);
    height: var(--indicator-size);
    color: inherit;
    background-color: currentColor;
    border-radius: 9999px;
    transition: 100ms ease-out;
  }
}
</style>

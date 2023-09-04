<template>
  <RouterLink
    class="LevelRenderer"
    :style="`background-color:hsl(var(--level-color-${level.styleIdentifier}))`"
  >
    <div class="LevelRenderer__Icon"></div>
    <span class="LevelRenderer__Number">Lv.{{ level.number }}</span>
    <strong class="LevelRenderer__Name">{{ level.text }}</strong>
    <IconBase class="LevelRenderer__InfoIcon">
      <IconInfo />
    </IconBase>
  </RouterLink>
</template>

<script setup>
import { useUserLevel } from "@/composables/level";

import IconBase from "./IconBase.vue";
import IconInfo from "./icons/IconInfo.vue";

const { level } = useUserLevel();
</script>

<style lang="scss" scoped>
.LevelRenderer {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: var(--global-radius);
  gap: 0.8rem;

  &__Icon {
    width: 3.2rem;
    height: 3.2rem;
  }
  &__Number {
    font-size: 1.3rem;
    font-weight: 400;
  }
  &__Name {
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__InfoIcon {
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    margin-left: auto;
  }
}
</style>

<template>
  <div
    class="LevelRenderer"
    :style="`background-color:hsl(var(--level-color-${level?.styleIdentifier}))`"
  >
    <span class="LevelRenderer__Number">Lv.{{ level?.number }}</span>
    <strong class="LevelRenderer__Name">{{ level?.text }}</strong>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserLevel } from "@/composables/level";

import { Timestamp } from "firebase/firestore";

const props = defineProps({
  initDate: {
    type: Timestamp,
  },
});

const date = computed(() => props.initDate);
const { level } = useUserLevel(date);
</script>

<style lang="scss" scoped>
.LevelRenderer {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: var(--global-radius);
  gap: 0.8rem;

  &__Icon {
    width: 4.8rem;
    height: 4.8rem;
  }
  &__Number {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--level-renderer);
  }
  &__Name {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--level-renderer);
  }
  &__InfoIcon {
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    margin-left: auto;
    color: var(--level-renderer);
  }
}
</style>

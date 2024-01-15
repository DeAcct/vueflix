<template>
  <RouterLink
    class="LevelRenderer"
    :style="`background-color:hsl(var(--level-color-${level?.styleIdentifier}))`"
  >
    <span class="LevelRenderer__Number">Lv.{{ level?.number }}</span>
    <strong class="LevelRenderer__Name">{{ level?.text }}</strong>
    <!-- <strong>다음 등급까지</strong>
    <ul>
      남은 기간, 남은 리뷰 수 표시
    </ul> -->
  </RouterLink>
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
  align-items: center;
  padding: 0 2rem;
  border-radius: var(--global-radius);
  gap: 0.8rem;

  &__Icon {
    width: 4.8rem;
    height: 4.8rem;
  }
  &__Number {
    font-size: 1.6rem;
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

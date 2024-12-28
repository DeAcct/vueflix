<template>
  <div class="LevelRenderer">
    <!-- <span class="LevelRenderer__Number">{{ level }}</span> -->
    <MembershipSymbol :level class="LevelRenderer__Icon" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserLevel } from "@/composables/level";

import { Timestamp } from "firebase/firestore";
import MembershipSymbol from "./membership/MembershipSymbol.vue";

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
  &__Icon {
    width: 4.8rem;
    height: 4.8rem;
  }
}
</style>

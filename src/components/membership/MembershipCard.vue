<template>
  <section class="MembershipCard">
    <MembershipSymbol :level="level.value" class="MembershipCard__Icon" />
    <div class="MembershipCard__Left">
      <p class="MembershipCard__Title">애니장교 계급</p>
      <strong class="MembershipCard__Level">{{ level.value }}</strong>
    </div>
    <p class="MembershipCard__Started">
      데레와 함께
      <span class="MembershipCard__Counter">{{ days }}일</span>
    </p>
  </section>
</template>

<script setup>
import { computed } from "vue";

import { useUserLevel } from "@/composables/level";

import MembershipSymbol from "@/components/membership/MembershipSymbol.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const date = computed(() => props.data?.membership?.initDate);
const { level, days } = useUserLevel(date);
</script>

<style lang="scss" scoped>
.MembershipCard {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  &__Left {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__Icon {
    width: 3.6rem;
    height: 3.6rem;
  }
  &__Title {
    font-size: 1.2rem;
  }
  &__Level {
    font-size: 1.6rem;
    font-weight: 700;
  }

  &__Started {
    margin-left: auto;
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
  }
  &__Counter {
    font-weight: 900;
  }
}
</style>

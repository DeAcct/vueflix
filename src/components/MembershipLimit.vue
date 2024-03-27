<template>
  <div class="MembershipLimit">
    <p class="MembershipLimit__Title">남은 시청권</p>
    <strong class="MembershipLimit__Value">
      {{ limit === Infinity ? "∞" : limit - used }}
    </strong>
  </div>
</template>

<script setup>
import { useMembershipLimit } from "@/composables/membership";

const props = defineProps({
  tier: {
    type: String,
    required: true,
  },
});

const { limit, used } = useMembershipLimit(props.tier);
</script>

<style lang="scss" scoped>
.MembershipLimit {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 0.8rem;
  &__Title {
    font-size: 1.4rem;
  }
  &__Value {
    font-size: 1.8rem;
  }
}
</style>

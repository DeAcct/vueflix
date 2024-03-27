<template>
  <RouterLink class="HistoryInfo" :to="`/history/${uid}`">
    <div class="HistoryInfo__Item" :class="{ 'loading-target': loading }">
      <h3 class="HistoryInfo__Name">보고싶다</h3>
      <p class="HistoryInfo__Value">{{ data?.wannaSee.length }}개</p>
    </div>
    <div class="HistoryInfo__Item" :class="{ 'loading-target': loading }">
      <h3 class="HistoryInfo__Name">리뷰</h3>
      <p class="HistoryInfo__Value">{{ data?.reaction.length }}개</p>
    </div>
    <IconBase class="HistoryInfo__Icon">
      <IconArrowNext />
    </IconBase>
  </RouterLink>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";

const props = defineProps({
  uid: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      reaction: [],
      wannaSee: [],
    }),
  },
});
</script>

<style lang="scss" scoped>
.HistoryInfo {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  &__Item {
    display: flex;
    gap: 0.4rem;
    text-align: center;
    &.loading-target {
      width: 8rem;
      height: 2rem;
      text-overflow: hidden;
      color: transparent;
    }
  }
  &__Name {
    font-size: 1.6rem;
    font-weight: 500;
    color: inherit;
  }
  &__Value {
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
  }
  &__Icon {
    width: 1.8rem;
    height: 1.8rem;
    margin-left: -0.6rem;
  }
}
</style>

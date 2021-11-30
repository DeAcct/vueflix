<template>
  <div class="inner result">
    <strong class="guide-text">
      관심없음을 표시한 작품이 아직 없어요
    </strong>
  </div>
</template>

<script>
export default {
  name: "BasketTabNotInterested",
};
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .guide-text {
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.3;
    color: var(--bg-400);
    .icon {
      color: var(--theme-500);
    }
  }
}
</style>

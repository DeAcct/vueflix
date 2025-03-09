<template>
  <div class="ProductCard">
    <div class="ProductCard__Row">
      <MembershipSymbol level="사관생도" class="ProductCard__Thumbnail" />
      <h2 class="ProductCard__Name">애니장교</h2>
    </div>
    <div class="ProductCard__Row">
      <div class="ProductCard__Group">
        <p>결제일</p>
        <strong>매월 {{ new Date().getDate() }}일</strong>
      </div>
      <div class="ProductCard__Group">
        <p>금액</p>
        <strong>9,900원</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import MembershipSymbol from "@/components/membership/MembershipSymbol.vue";
</script>

<style lang="scss" scoped>
.ProductCard {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  &__Name {
    font-size: 1.8rem;
    flex-shrink: 0;
    flex-basis: 0;
  }
  &__Thumbnail {
    width: 6rem;
    height: 6rem;
  }
  &__Row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem;
    flex-basis: 100%;
    justify-content: space-between;
    & + & {
      padding-top: 1.8rem;
      margin-top: 1.8rem;
      border-top: 1px solid hsl(var(--bg-300));
    }
  }
  &__Group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    flex-grow: 1;
    width: 100%;
    flex-shrink: 0;
  }
}
</style>

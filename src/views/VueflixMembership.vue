<template>
  <main class="Membership">
    <section class="Membership__Item inner">
      <h2 class="Membership__Title">멤버십</h2>
      <MembershipCard class="Membership__Card Membership__Card--Card">
        <template v-slot:method>
          <div class="Membership__Method">
            <strong class="Membership__MethodName">우리카드</strong>
            <p class="Membership__Serial">****-****-****-1234</p>
          </div>
        </template>
        <template v-slot:sub>
          <div class="Membership__Sub">
            <p class="Membership__NextDate">2021.07.10 ~ 2021.08.10</p>
          </div>
        </template>
      </MembershipCard>
    </section>
    <section class="inner">
      <h2>이용안내</h2>
      <ul class="Membership__CautionList">
        <li class="Membership__CautionItem">
          멤버십은 구매한 시점부터 바로 적용됩니다.
        </li>
        <li class="Membership__CautionItem">
          멤버십(정기결제)의 경우 등록한 결제수단으로 30일마다 결제 예정일에
          자동 결제됩니다.
        </li>
        <li class="Membership__CautionItem">
          멤버십(정기결제)의 경우 언제든 해지 가능합니다. 해지하셔도 결제
          만료일까지 사용이 가능합니다.
        </li>
        <li class="Membership__CautionItem">
          포인트는 멤버십에 포함되지 않은 작품을 결제할 때 사용할 수 있습니다.
        </li>
        <li class="Membership__CautionItem">
          멤버십은 포인트로 구매할 수 없습니다.
        </li>
        <li class="Membership__CautionItem">
          친구초대로 무료체험 추가일을 획득할 경우, 추가일을 더하여 다음
          결제일에 반영합니다.
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import MembershipCard from "@/components/MembershipCard.vue";
</script>

<style lang="scss" scoped>
.Membership {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 9rem 0 8.6rem;
  &__Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  &__Title {
    font-size: 2rem;
  }
  &__Card {
    &--Card {
      background-color: hsl(var(--text-500));
      border: 2px solid hsl(var(--text-600));
    }
    &--Point {
      background-color: hsl(var(--point-500));
      border: 2px solid hsl(var(--point-700));
    }
  }
  &__Method {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__MethodName {
    font-size: 1.5rem;
    font-weight: 900;
    color: #fff;
  }
  &__Serial {
    font-size: 1.3rem;
    color: #fff;
  }

  &__Sub {
    display: flex;
    justify-content: space-between;
  }
  &__NextDate {
    font-size: 1.2rem;
    color: #fff;
  }

  &__CautionList {
    padding-left: 2rem;
  }
  &__CautionItem {
    font-size: 1.2rem;
    line-height: 1.6;
    list-style-type: disc;
  }
}
</style>

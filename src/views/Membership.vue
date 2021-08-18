<template>
  <div class="wrap">
    <main>
      <section class="membership inner">
        <h2>멤버십</h2>
        <membership-card
          type="membership"
          card-company="우리카드"
          card-number="1234123412341234"
          next-payment="2021.08.10"
        />
      </section>
      <section class="point inner">
        <h2>포인트</h2>
        <membership-card type="point" :point="10000" />
      </section>
      <section class="caution inner">
        <h2>이용안내</h2>
        <ul class="caution-items">
          <li class="caution-item">
            멤버십은 구매한 시점부터 바로 적용됩니다.
          </li>
          <li class="caution-item">
            멤버십(정기결제)의 경우 등록한 결제수단으로 30일마다 결제 예정일에
            자동 결제됩니다.
          </li>
          <li class="caution-item">
            멤버십(정기결제)의 경우 언제든 해지 가능합니다. 해지하셔도 결제
            만료일까지 사용이 가능합니다.
          </li>
          <li class="caution-item">
            포인트는 멤버십에 포함되지 않은 작품을 결제할 때 사용할 수 있습니다.
          </li>
          <li class="caution-item">멤버십은 포인트로 구매할 수 없습니다.</li>
          <li class="caution-item">
            친구초대로 무료체험 추가일을 획득할 경우, 추가일을 더하여 다음
            결제일에 반영합니다.
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import MembershipCard from "../components/MembershipCard.vue";
export default {
  name: "Membership",
  components: {
    MembershipCard,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 9rem 0 8.6rem;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h2 {
      font-size: 2rem;
    }
    &.membership .membership-card {
      background-color: var(--text-500);
      border: 2px solid var(--text-600);
    }
    &.point .membership-card {
      background-color: var(--point-500);
      border: 2px solid var(--point-700);
    }
    &.caution .caution-items {
      padding-left: 2rem;
      .caution-item {
        font-size: 1.2rem;
        line-height: 1.6;
        list-style-type: disc;
      }
    }
  }
}
</style>

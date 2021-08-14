<template>
  <div class="wrap">
    <main>
      <section class="contents inner">
        <h2>멤버십</h2>
        <membership-card
          card-company="우리카드"
          card-number="1234-1234-1234-1234"
          next-payment="2021.08.10"
        />
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
  padding: 6rem 0 5.6rem;
  .contents {
    margin-top: 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h2 {
      font-size: 2rem;
      font-weight: 900;
    }
  }
}
</style>

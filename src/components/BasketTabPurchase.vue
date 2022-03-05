<template>
  <div class="inner result">
    <div class="wrap" v-if="purchased.length">
      <strong class="result-number"> 총 {{ purchased.length }}개 </strong>
      <ul class="basket-items">
        <carousel-item
          v-for="purchasedItem in purchased"
          :key="purchasedItem.aniTitle"
          :ani-title="purchasedItem.aniTitle"
          :episode-thumbnail="`${purchasedItem.aniTitle}.webp`"
          class="basket-item"
          :develop-firebase="true"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarouselItem from "./CarouselItem.vue";

export default {
  name: "BasketTabPurchase",
  components: {
    CarouselItem,
  },
  computed: {
    ...mapState({
      purchased: (state) => (state.auth ? state.auth.user.purchased : []),
    }),
  },
};
</script>

<style lang="scss" scoped>
.result-number {
  font-size: 1.3rem;
}
.basket-items {
  margin-top: 1.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row dense;
  gap: 2rem 1rem;
  .basket-item {
    width: auto;
    margin: 0;
  }
}
.fallback {
  font-size: 1.3rem;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .result-number {
    font-size: 1.5rem;
  }
  .basket-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .result-number {
    font-size: 2rem;
  }
  .basket-items {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (min-width: 1920px) {
  .basket-items {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>

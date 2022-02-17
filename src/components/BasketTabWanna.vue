<template>
  <div class="inner result">
    <strong class="result-number"> 총 {{ wannaSee.length }}개 </strong>
    <ul class="basket-items">
      <carousel-item
        v-for="wannaItem in wannaSee"
        :key="wannaItem.aniTitle"
        :ani-title="wannaItem.aniTitle"
        :episode-thumbnail="`${wannaItem.aniTitle}.webp`"
        class="basket-item"
        :develop-firebase="true"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarouselItem from "./CarouselItem.vue";
export default {
  name: "BasketTabWanna",
  components: {
    CarouselItem,
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    wannaSee() {
      return this.user ? this.user.wannaSee : [];
    },
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

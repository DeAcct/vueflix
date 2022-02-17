<template>
  <div class="inner result">
    <strong class="result-number"> 총 {{ recentItems.length }}개 </strong>
    <ul class="basket-items">
      <carousel-item
        v-for="recentItem in recentItems"
        :key="recentItem.aniTitle"
        :ani-title="recentItem.aniTitle"
        :part="recentItem.part"
        :index="recentItem.index"
        :episode-thumbnail="recentItem.episodeThumbnail"
        :isRecent="true"
        :progress="recentItem.watchedPercent"
        class="basket-item"
        :develop-firebase="true"
      />
      <li class="basket-item"></li>
      <li class="basket-item"></li>
      <li class="basket-item"></li>
      <li class="basket-item"></li>
      <li class="basket-item"></li>
      <li class="basket-item"></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarouselItem from "./CarouselItem.vue";
export default {
  components: {
    CarouselItem,
  },
  computed: {
    ...mapState({
      recentItems: (state) =>
        state.auth.user ? state.auth.user.recentWatched : [],
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

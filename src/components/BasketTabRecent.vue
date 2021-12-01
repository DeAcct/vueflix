<template>
  <div class="inner result">
    <strong class="result-number">총 {{ recentItems.length }}개</strong>
    <ul class="basket-items">
      <carousel-item
        v-for="recentItem in recentItems"
        :key="recentItem.title"
        :title="recentItem.title"
        :episode="recentItem.episode"
        :img="recentItem.img"
        :url="recentItem.url"
        :isMovie="recentItem.isMovie"
        :isRecent="true"
        :progress="recentItem.progress"
        class="basket-item"
      />
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
  computed: mapState({
    recentItems: (state) => state.anime.recentAnime,
  }),
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
</style>

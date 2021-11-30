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
.basket {
  .result-number {
    font-size: 1.3rem;
  }
  .basket-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    .basket-item {
      width: calc((100% - 1rem) / 2);
      margin: {
        right: 0;
        bottom: 2.3rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .basket {
    .result-number {
      font-size: 1.5rem;
    }
    .basket-items .basket-item {
      width: calc((100% - 2rem) / 3);
    }
  }
}
</style>

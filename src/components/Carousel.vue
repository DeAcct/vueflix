<template>
  <section class="carousel">
    <h2>최근 본 작품</h2>
    <div class="wrap">
      <div class="btn-wrap">
        <button class="prev-btn" title="이전"></button>
        <button class="next-btn" title="다음"></button>
      </div>
      <ul class="items">
        <carousel-item
          v-for="anime in animeList"
          :key="anime.title"
          :title="anime.title"
          :episode="anime.episode"
          :img="anime.img"
          :url="anime.url"
          :isMovie="anime.isMovie"
          :isRecent="type === 'recent'"
          :progress="anime.progress"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  name: "Carousel",
  components: {
    CarouselItem,
  },
  props: {
    animeList: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  h2 {
    padding-left: 2rem;
    font-size: 1.8rem;
  }
  .wrap {
    width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    .btn-wrap {
      display: none;
    }
  }
  .items {
    display: flex;
    width: fit-content;
    padding: 0 2rem;
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    h2 {
      font-size: 2.3rem;
      padding-left: 5rem;
    }
    .wrap {
      width: 100%;
      margin-top: 1.5rem;
    }
    .items {
      padding: 0 5rem;
    }
  }
}
@media screen and (min-width: 1024px) {
  .carousel {
    h2 {
      font-size: 2.8rem;
    }
    .wrap {
      width: 100%;
      margin-top: 2rem;
    }
  }
}
</style>

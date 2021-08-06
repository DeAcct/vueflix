<template>
  <section class="recent-carousel">
    <h2>최근 본 작품</h2>
    <div class="wrap">
      <button class="next-btn"></button>
      <button class="prev-btn"></button>
      <ul class="items">
        <carousel-item
          v-for="anime in anime"
          :key="anime.title"
          :title="anime.title"
          :episode="anime.episode"
          :img="anime.img"
          :url="anime.url"
          :isMovie="anime.isMovie"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  name: "RecentCarousel",
  components: {
    CarouselItem,
  },
  data() {
    return {
      anime: [
        {
          title: "쟈히님은 기죽지 않아",
          episode: "1화",
          img: "",
          url: "#none",
          isMovie: false,
        },
        {
          title: "그날 본 꽃의 이름을 우리는 아직 모른다",
          episode: "11화",
          img: "",
          url: "#none",
          isMovie: false,
        },
        {
          title: "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ 2기",
          episode: "12화",
          img: "",
          url: "#none",
          isMovie: false,
        },
        {
          title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
          episode: "1화",
          img: "",
          url: "#none",
          isMovie: false,
        },
        {
          title: "이 멋진 세계에 축복을! 붉은 전설",
          episode: "없음",
          img: "",
          url: "#none",
          isMovie: true,
        },
        {
          title: "(더빙) 강철의 연금술사 BROTHERHOOD",
          episode: "64화",
          img: "",
          url: "#none",
          isMovie: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recent-carousel {
  width: 100vw;
  h2 {
    padding-left: 2rem;
    font-size: 1.8rem;
  }
  .wrap {
    width: 100vw;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .prev-btn,
    .next-btn {
      width: 3rem;
      height: 100%; /*부모요소 따라가게...*/
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .items {
    display: flex;
    width: fit-content;
    padding: 0 2rem;
    margin-top: 0.3rem;
  }
}
</style>

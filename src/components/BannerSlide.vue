<template>
  <section class="slide">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper
      effect="fade"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="animeID in animeIDArray"
        :key="`slide-${animeID}`"
        class="slide-item"
      >
        <slide-content :anime-id="animeID"> </slide-content>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import SlideContent from "./SlideContent.vue";

import SwiperCore, {
  Autoplay,
  Pagination,
  A11y,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Autoplay, Pagination, A11y, Navigation, EffectFade]);
import "swiper/swiper-bundle.min.css";

export default {
  name: "BannerSlide",
  components: {
    Swiper,
    SwiperSlide,
    SlideContent,
  },
  data() {
    return {
      animeIDArray: [],
      slideImgLoaded: false,
      randomMaxNumber: 0,
    };
  },
  watch: {
    randomMaxNumber: {
      async handler() {
        const db = getFirestore();
        const docRef = doc(db, "statistics", "statistics");
        const res = await getDoc(docRef);
        if (res) {
          this.randomMaxNumber = res.data().numbersofAnime;
          this.animeIDArray = await this.useAnimeIDArray(5);
        }
      },
      immediate: true,
    },
  },
  methods: {
    useAnimeIDArray(max) {
      // 슬라이드의 개수가 많아질 경우를 대응하기 위해
      // 비동기적으로 배열을 반환한다.
      return new Promise((resolve, reject) => {
        let idArray = [];
        if (this.randomMaxNumber !== 0) {
          while (idArray.length < max) {
            const candidateNum = Math.floor(Math.random() * max + 1);
            const isDuplicated = idArray.includes(candidateNum);
            if (!isDuplicated) {
              idArray.push(candidateNum);
            }
          }
        } else {
          reject(idArray);
        }
        resolve(idArray);
      });
    },
  },
};
</script>

<style lang="scss">
.swiper-pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(255, 255, 255, 0.5);
    width: 0.6rem;
    height: 0.6rem;

    &-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.slide-item {
  position: relative;
}
@media screen and (min-width: 768px) {
  .swiper-container-horizontal
    .swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 1vw;
    height: 1vw;
    max-width: 1.5rem;
    max-height: 1.5rem;
    margin: 0 0.6rem;
  }
}
@media screen and (min-width: 769px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    transition: 150ms ease-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &::after {
      font-size: 3rem;
    }
  }
  .swiper-pagination {
    justify-content: flex-end;
    padding: 0 5rem 4rem;
  }
}
</style>

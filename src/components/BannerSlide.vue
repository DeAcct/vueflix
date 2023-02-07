<template>
  <section class="slide loading-target">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper effect="fade" :loop="true" navigation>
      <swiper-slide
        v-for="animeID in animeIDArray"
        :key="`slide-${animeID}`"
        class="slide-item loading-target"
      >
        <slide-content :anime-id="animeID"> </slide-content>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { getFirestore, getDoc, doc } from "firebase/firestore";
import SlideContent from "./SlideContent.vue";

import SwiperCore, { Autoplay, A11y, Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Autoplay, A11y, Navigation, EffectFade]);
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
          this.animeIDArray = await this.useAnimeIDArray(this.randomMaxNumber);
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
.swiper {
  position: relative;
  padding-bottom: 133.333%;
  .swiper-wrapper {
    position: absolute;
  }
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.slide-item {
  position: relative;
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
}

@media screen and (min-width: 1025px) {
  .swiper {
    height: calc(100vw / 2560 * 1043);
    padding-bottom: 24.545%;
  }
}
</style>

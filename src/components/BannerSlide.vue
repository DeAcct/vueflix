<template>
  <section class="slide loading-target">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper-container
      effect="fade"
      :loop="true"
      :autoplay-delay="2500"
      :autoplay-disable-on-interaction="false"
    >
      <swiper-slide
        v-for="animeID in animeIDArray"
        :key="`slide-${animeID}`"
        class="slide-item loading-target"
      >
        <slide-content :anime-id="animeID"> </slide-content>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script>
import { getFirestore, getDoc, doc } from "firebase/firestore";
import SlideContent from "./SlideContent.vue";

// todo::
// swiper 수동 네비게이션 버튼 제작.
import { register } from "swiper/element/bundle";
register();

export default {
  name: "BannerSlide",
  components: {
    //Swiper,
    //SwiperSlide,
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

<style lang="scss" scoped>
swiper-container {
  aspect-ratio: 3/4;
}

@media screen and (min-width: 1025px) {
  swiper-container {
    aspect-ratio: 2560/1043;
  }
}
</style>

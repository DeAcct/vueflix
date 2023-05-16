<template>
  <section class="slide loading-target">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper-container
      effect="fade"
      :loop="true"
      :autoplay-delay="5000"
      :autoplay-disable-on-interaction="false"
      class="slide__container"
      ref="$swiper"
      @autoplaytimeleft="onLeft"
    >
      <swiper-slide
        v-for="animeID in randomIDs"
        :key="`slide-${animeID}`"
        class="slide-item loading-target"
      >
        <slide-content :anime-id="animeID"></slide-content>
      </swiper-slide>
    </swiper-container>
    <button class="slide__button slide__button--prev" @click="prevClick">
      <span class="blind">이전</span>
      <i class="slide__icon">
        <icon-base>
          <icon-arrow-prev></icon-arrow-prev>
        </icon-base>
      </i>
    </button>
    <button class="slide__button slide__button--next" @click="nextClick">
      <span class="blind">다음</span>
      <i class="slide__icon">
        <icon-base>
          <icon-arrow-next></icon-arrow-next>
        </icon-base>
      </i>
    </button>
    <div class="slide__progress"></div>
  </section>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import SlideContent from "./SlideContent.vue";

import { getFirestore, getDoc, doc } from "firebase/firestore";

import { register } from "swiper/element/bundle";
import { onMounted, ref } from "vue";

const randomMaxNumber = ref(0);
const randomIDs = ref([]);
const $swiper = ref(null);
onMounted(async () => {
  register();
  const db = getFirestore();
  const docRef = doc(db, "statistics", "statistics");
  const res = await getDoc(docRef);
  randomMaxNumber.value = res.data().numbersofAnime;
  randomIDs.value = slideRandomID(5);
});

function slideRandomID(max) {
  let idArray = [];
  if (randomMaxNumber.value !== 0) {
    while (idArray.length < max) {
      const candidateNum = Math.floor(
        Math.random() * randomMaxNumber.value + 1
      );
      const isDuplicated = idArray.includes(candidateNum);
      if (!isDuplicated) {
        idArray.push(candidateNum);
      }
    }
  }
  return idArray;
}

function prevClick() {
  $swiper.value.swiper.slidePrev();
}
function nextClick() {
  $swiper.value.swiper.slideNext();
}
const autoPlayProgress = ref(0);
function onLeft({ detail }) {
  const [, , progress] = detail;
  autoPlayProgress.value = progress;
}

// export default {
//   name: "BannerSlide",
//   components: {
//     SlideContent,
//     IconBase,
//     IconArrowNext,
//     IconArrowPrev,
//   },
//   data() {
//     return {
//       animeIDArray: [],
//       slideImgLoaded: false,
//       randomMaxNumber: 0,
//       progress: 0,
//     };
//   },
//   watch: {
//     randomMaxNumber: {
//       async handler() {
//         const db = getFirestore();
//         const docRef = doc(db, "statistics", "statistics");
//         const res = await getDoc(docRef);
//         this.randomMaxNumber = res?.data().numbersofAnime;
//         this.animeIDArray = this.useAnimeIDArray(5);
//       },
//       immediate: true,
//     },
//   },
//   mounted() {
//     register();
//   },
//   methods: {
//     useAnimeIDArray(max) {
//       let idArray = [];
//       if (this.randomMaxNumber !== 0) {
//         while (idArray.length < max) {
//           const candidateNum = Math.floor(
//             Math.random() * this.randomMaxNumber + 1
//           );
//           const isDuplicated = idArray.includes(candidateNum);
//           if (!isDuplicated) {
//             idArray.push(candidateNum);
//           }
//         }
//       }
//       return idArray;
//     },
//
//   },
// };
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  &__container {
    aspect-ratio: 3/4;
  }
  &__progress {
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    transform-origin: left;
    transform: scaleX(calc(1 - v-bind(autoPlayProgress)));
    height: 0.2rem;
    background-color: hsl(var(--bg-900));
    z-index: 20;
  }
  &__button {
    display: none;
  }
}

@media screen and (min-width: 1025px) {
  .slide {
    &__container {
      aspect-ratio: 2560/1043;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .slide {
    &__button {
      display: block;
      position: absolute;
      z-index: 20;
      top: 50%;
      width: 3.6rem;
      height: 3.6rem;
      &--prev {
        left: 0;
      }
      &--next {
        right: 0;
      }
    }
    &__icon {
      display: block;
      transition: transform 150ms ease-out;
      color: #fff;
      filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    }
    &__button:hover &__icon {
      transform: scale(1.2);
      color: hsl(var(--theme-500));
    }
  }
}
</style>

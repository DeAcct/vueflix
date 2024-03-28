<template>
  <section class="BannerSlide loading-target">
    <h2 class="blind">이미지 슬라이드</h2>
    <swiper-container
      effect="fade"
      :loop="true"
      :autoplay-delay="5000"
      :autoplay-disable-on-interaction="false"
      class="BannerSlide__Container"
      ref="$swiper"
    >
      <swiper-slide
        v-for="animeID in randomIDs"
        :key="`BannerSlide-${animeID}`"
        class="loading-target"
      >
        <SlideContent :anime-id="animeID"></SlideContent>
      </swiper-slide>
    </swiper-container>
    <button
      class="BannerSlide__Button BannerSlide__Button--Prev"
      @click="prevClick"
      type="button"
    >
      <span class="blind">이전</span>
      <i class="BannerSlide__Icon">
        <IconBase>
          <IconArrowPrev></IconArrowPrev>
        </IconBase>
      </i>
    </button>
    <button
      class="BannerSlide__Button BannerSlide__Button--Next"
      @click="nextClick"
      type="button"
    >
      <span class="blind">다음</span>
      <i class="BannerSlide__Icon">
        <IconBase>
          <IconArrowNext></IconArrowNext>
        </IconBase>
      </i>
    </button>
  </section>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import SlideContent from "./SlideContent.vue";

import { getDoc, doc } from "firebase/firestore";
import { db } from "@/utility/firebase";

// import { register } from "swiper/element/bundle";
import { onMounted, ref } from "vue";

const randomMaxNumber = ref(0);
const randomIDs = ref([]);
const $swiper = ref(null);
onMounted(async () => {
  const docRef = doc(db, "statistics", "statistics");
  const res = await getDoc(docRef);
  randomMaxNumber.value = res.data().numbersofAnime;
  randomIDs.value = slideRandomID(5);
  register();
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
</script>

<style lang="scss" scoped>
.BannerSlide {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  &__Container {
    aspect-ratio: 3/4;
  }
  &__Button {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .BannerSlide {
    aspect-ratio: 2560/1043;
    &__Container {
      aspect-ratio: 2560/1043;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .BannerSlide {
    &__Button {
      display: block;
      position: absolute;
      z-index: 20;
      top: 50%;
      width: 3.6rem;
      height: 3.6rem;
      &--Prev {
        left: 0;
      }
      &--Next {
        right: 0;
      }
    }
    &__Icon {
      display: block;
      transition: transform 150ms ease-out;
      color: #fff;
      filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    }
    &__Button:hover &__Icon {
      transform: scale(1.2);
      color: hsl(var(--theme-500));
    }
  }
}

@media screen and (min-width: 1080px) {
  .BannerSlide {
    margin-top: var(--header-height);
  }
}
</style>

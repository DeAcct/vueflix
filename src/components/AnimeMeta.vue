<template>
  <section class="anime-meta">
    <h2 class="blind">{{ animeInfo.aniTitle }} 관련 정보</h2>
    <p
      :class="[
        'anime-meta__summary',
        { 'anime-meta__summary--loaded': isLoaded },
      ]"
    >
      {{ animeInfo.summary }}
    </p>
    <vueflix-carousel type="break" class="anime-meta__tags">
      <template v-if="!isLoaded">
        <li
          class="anime-meta__item anime-meta__item--dummy loading-target"
          v-for="_ in 5"
        >
          <span class="blind">로딩중</span>
        </li>
      </template>
      <li v-for="madeBy in animeInfo.madeBy" :key="madeBy">
        <router-link to="#none" class="anime-meta__item">
          {{ madeBy }}
        </router-link>
      </li>
      <li>
        <router-link to="#none" class="anime-meta__item">
          {{ animeInfo.director }}
        </router-link>
      </li>
      <li v-for="genre in animeInfo.genre" :key="genre">
        <router-link to="#none" class="anime-meta__item">
          {{ genre }}
        </router-link>
      </li>
    </vueflix-carousel>
  </section>
</template>

<script>
import ArrowBtnWidget from "./ArrowBtnWidget.vue";
import IconBase from "./IconBase.vue";
import IconReview from "./icons/IconReview.vue";
import IconShortContent from "./icons/IconShortContent.vue";
import VueflixCarousel from "./VueflixCarousel.vue";
export default {
  props: {
    animeInfo: {
      type: Object,
    },
  },
  components: {
    ArrowBtnWidget,
    IconBase,
    IconReview,
    IconShortContent,
    VueflixCarousel,
  },
  computed: {
    isLoaded() {
      return Object.keys(this.animeInfo).length !== 0;
    },
  },
  // watch: {
  //   animeInfo() {
  //     this.pickTheme();
  //   },
  // },
  // methods: {
  //   async pickTheme() {
  //     const image = new Image();
  //     const src = await fetch(this.animeInfo.poster);
  //     image.src = URL.createObjectURL(await src.blob());

  //     image.addEventListener("load", () => {
  //       const canvas = document.createElement("canvas");
  //       const DOWNSAMPLING_RATIO = 1;

  //       canvas.width = Math.floor(image.width / DOWNSAMPLING_RATIO);
  //       canvas.height = Math.floor(image.height / DOWNSAMPLING_RATIO);

  //       const ctx = canvas.getContext("2d");
  //       ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  //       const pixelData = ctx.getImageData(
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height
  //       ).data;

  //       let r = 0;
  //       let g = 0;
  //       let b = 0;
  //       for (let i = 0; i < pixelData.length; i += 4) {
  //         r += pixelData[i];
  //         g += pixelData[i + 1];
  //         b += pixelData[i + 2];
  //       }
  //       const pixelCount = pixelData.length / 4;
  //       r = Math.floor(r / pixelCount);
  //       g = Math.floor(g / pixelCount);
  //       b = Math.floor(b / pixelCount);
  //       this.bgAvgColor = `rgb(${r}, ${g}, ${b})`;
  //     });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.anime-meta {
  &__summary {
    padding: 0 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--anime-layout-text);
    height: 1.3rem;
    &--loaded {
      height: auto;
    }
  }
  &__tags {
    --carousel-padding: 2rem;
  }
  &__item {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 1.5rem;
    height: 3.5rem;
    white-space: nowrap;
    transition: background-color 150ms ease-out;
    background-color: hsl(var(--bg-200));
    border-radius: 9999px;
    &--dummy {
      width: 10rem;
      &:nth-child(2n) {
        width: 5rem;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .anime-meta {
    width: 50rem;
    padding: 2rem 0;
    border-radius: 0.6rem;
    border: 1px solid hsl(var(--bg-200));
    &__tags {
      height: auto;
      --carousel-padding: 2rem;
      --carousel-gap: 1rem;
    }
  }
}
</style>

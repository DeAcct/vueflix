<template>
  <section class="carousel">
    <div class="carousel__track">
      <ul class="carousel__body">
        <carousel-item
          v-for="anime in animeList"
          :key="anime.aniTitle"
          :data="anime"
          :progress="progress"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import IconBase from "./IconBase.vue";
import DaySelector from "./DaySelector.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "VueflixCarousel",
  components: {
    CarouselItem,
    IconBase,
    IconArrowNext,
    IconArrowPrev,
    DaySelector,
  },
  props: {
    animeList: {
      type: Array,
    },
    progress: {
      type: Boolean,
    },
  },
  mounted() {
    console.log(this.progress);
  },
  data() {
    return {
      resolution: window.innerWidth,
      carouselNumber: 0,
      isRecent: this.type === "recent",
      isDaily: this.type === "daily",
      isRecommend: this.type === "recommend",
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
  &__track {
    width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__body {
    display: flex;
    width: fit-content;
    padding: 0 2rem;
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    &:not(:first-of-type) {
      margin-top: 3rem;
    }
    &__head-control {
      padding: 0 5rem;
      h2 {
        font-size: 2.3rem;
      }
    }
    &__track {
      width: 100%;
      margin-top: 1.5rem;
    }
    &__body {
      padding: 0 5rem;
    }
  }
}
@media screen and (min-width: 1024px) {
  .carousel {
    position: relative;
    &__head-control h2 {
      font-size: 2.8rem;
    }
    &__track {
      width: 100%;
      margin-top: 2rem;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .carousel {
    &__head-control .btn-wrap {
      display: flex;
      justify-content: flex-end;
      height: 4rem;
      button {
        width: 4rem;
        height: 4rem;
        background-color: var(--theme-500);
        border-radius: 50%;
        color: #fff;
        &:disabled {
          cursor: not-allowed;
          background-color: var(--bg-300);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .carousel {
    &__head-control {
      h2 {
        font-size: 3.2rem;
      }
    }
  }
}
</style>

<template>
  <section class="vueflix-carousel">
    <div class="vueflix-carousel__track">
      <ul class="vueflix-carousel__body">
        <carousel-item
          v-for="anime in animeList"
          :key="anime.aniTitle"
          :data="anime"
          :progress="progress"
        />
      </ul>
      <button
        class="vueflix-carousel__button vueflix-carousel__button--prev"
        v-if="prevActive"
        @click="prev"
      >
        <icon-base class="icon">
          <icon-arrow-prev></icon-arrow-prev>
        </icon-base>
        <span class="blind">이전</span>
      </button>
      <button
        class="vueflix-carousel__button vueflix-carousel__button--next"
        v-if="nextActive"
        @click="next"
      >
        <icon-base class="icon">
          <icon-arrow-next></icon-arrow-next>
        </icon-base>
        <span class="blind">다음</span>
      </button>
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
  data: () => ({
    resolution: window.innerWidth,
    carouselNumber: 0,
  }),
  computed: {
    carouselLimit() {
      return Math.floor(this.animeList.length / this.shownItems);
    },
    nextActive() {
      return this.carouselNumber < this.carouselLimit;
    },
    prevActive() {
      return this.carouselNumber > 0;
    },
    shownItems() {
      if (this.resolution >= 1920) {
        return 7;
      }
      if (this.resolution >= 1080) {
        return 4;
      }
      if (this.resolution >= 768) {
        return 3;
      }
      return 2;
    },
  },
  methods: {
    next() {
      this.carouselNumber++;
    },
    prev() {
      this.carouselNumber--;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resolution = window.innerWidth;
    });
  },
  unmounted() {
    window.removeEventListener("resize", () => {
      this.resolution = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.vueflix-carousel {
  width: 100%;
  min-height: 21rem;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
  &__track {
    width: 100%;
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
    transition: 300ms ease-out;
    transform: translate(
      calc(v-bind(carouselNumber) * -1px * v-bind(resolution))
    );
    user-select: none;
    cursor: pointer;
  }
  &__button {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .vueflix-carousel {
    &:not(:first-of-type) {
      margin-top: 3rem;
    }
    &__track {
      width: 100%;
    }
    &__body {
      padding: 0 5rem;
    }
  }
}
@media screen and (min-width: 1024px) {
  .vueflix-carousel {
    position: relative;
    &__track {
      width: 100%;
    }
  }
}
@media (hover: hover) and (pointer: fine) {
  .vueflix-carousel {
    &__button {
      position: absolute;
      top: 0;
      width: 12rem;
      height: 100%;
      background: linear-gradient(
        calc(var(--direction) * 90deg),
        transparent,
        var(--bg-100)
      );
      display: flex;
      justify-content: center;
      align-items: center;
      &--next {
        --direction: 1;
        right: 0;
      }
      &--prev {
        --direction: -1;
        left: 0;
      }
      &:hover {
        color: var(--theme-500);
        .icon {
          width: 3.6rem;
          height: 3.6rem;
        }
      }
    }
  }
}
</style>

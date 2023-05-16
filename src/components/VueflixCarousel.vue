<template>
  <div class="vueflix-carousel">
    <div
      :class="['vueflix-carousel__track', `vueflix-carousel__track--${type}`]"
    >
      <ul
        :class="['vueflix-carousel__body', `vueflix-carousel__body--${type}`]"
      >
        <slot></slot>
      </ul>
      <template v-if="type === 'arrow'">
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
      </template>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import DaySelector from "./DaySelector.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "VueflixCarousel",
  components: {
    IconBase,
    IconArrowNext,
    IconArrowPrev,
    DaySelector,
  },
  props: {
    length: {
      type: Number,
    },
    type: {
      validator(value) {
        return ["arrow", "break"].includes(value);
      },
      default() {
        return "arrow";
      },
    },
  },
  data: () => ({
    resolution: window.innerWidth,
    carouselNumber: 0,
  }),
  computed: {
    carouselLimit() {
      return this.length ? Math.floor(this.length / this.shownItems) : 0;
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
  watch: {
    length() {
      this.carouselNumber = 0;
    },
  },
  mounted() {
    if (this.type === "break") return;
    window.addEventListener("resize", () => {
      this.resolution = window.innerWidth;
    });
  },
  unmounted() {
    if (this.type === "break") return;
    window.removeEventListener("resize", () => {
      this.resolution = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.vueflix-carousel {
  width: 100%;
  height: 100%;
  &__track {
    width: 100%;
    height: 100%;
    position: relative;
    scrollbar-width: none;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__body {
    display: flex;
    gap: var(--carousel-gap, 1rem);
    width: fit-content;
    padding: 0 var(--carousel-padding, 2rem);
    margin: 0;

    &--arrow {
      transition: 300ms ease-out;
      transform: translate(
        calc(v-bind(carouselNumber) * -1px * v-bind(resolution))
      );
    }
  }
  &__button {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .vueflix-carousel {
    &__track {
      width: 100%;
    }
    &__body {
      padding: 0 var(--carousel-padding, 5rem);
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
    &__track {
      &--break {
        overflow: visible;
      }
    }
    &__body {
      &--break {
        flex-wrap: wrap;
      }
    }

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
        color: hsl(var(--theme-500));
        .icon {
          width: 3.6rem;
          height: 3.6rem;
        }
      }
    }
  }
}
</style>

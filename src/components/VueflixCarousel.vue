<template>
  <div class="VueflixCarousel">
    <div :class="['VueflixCarousel__Body', `VueflixCarousel__Body--${type}`]">
      <slot></slot>
    </div>
    <template v-if="type === 'arrow'">
      <button
        class="VueflixCarousel__Button VueflixCarousel__Button--prev"
        v-if="active.prev"
        @click="prev"
        type="button"
      >
        <IconBase class="VueflixCarousel__Icon">
          <IconArrowPrev></IconArrowPrev>
        </IconBase>
        <span class="blind">이전</span>
      </button>
      <button
        class="VueflixCarousel__Button VueflixCarousel__Button--next"
        v-if="active.next"
        @click="next"
        type="button"
      >
        <IconBase class="VueflixCarousel__Icon">
          <IconArrowNext></IconArrowNext>
        </IconBase>
        <span class="blind">다음</span>
      </button>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useEventListener, useDebounceFn } from "@vueuse/core";

import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

const props = defineProps({
  length: {
    type: Number,
  },
  media: {
    type: Object,
    validator(value) {
      return Object.keys(value).includes("default");
    },
  },
  type: {
    validator(value) {
      return ["arrow", "break", "nobutton"].includes(value);
    },
    default() {
      return "nobutton";
    },
  },
});

const carouselNumber = ref(0);
defineExpose({
  next,
  prev,
});

function next() {
  carouselNumber.value++;
}
function prev() {
  carouselNumber.value--;
}

const resolution = ref(window.innerWidth);
useEventListener("resize", () => {
  useDebounceFn(() => {
    resolution.value = window.innerWidth;
    carouselNumber.value = 0;
  });
});
const carouselLimit = computed(() => {
  if (!props.media) {
    return 0;
  }

  const shownItems = Object.keys(props.media).reduce((acc, key) => {
    if (resolution.value >= key) {
      acc = props.media[key];
    }
    return acc;
  }, props.media.default);

  return Math.ceil(props.length / shownItems) - 1;
});
const active = computed(() => ({
  prev: carouselNumber.value > 0,
  next: carouselNumber.value < carouselLimit.value,
}));
</script>

<style lang="scss" scoped>
.VueflixCarousel {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  position: relative;
  &__Track {
    width: 100%;
    height: 100%;
    position: relative;
    scrollbar-width: none;
    border-radius: var(--carousel-clip-radius);
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__Body {
    // display: block;
    // display: flex;
    // flex-direction: row;
    // gap: var(--carousel-gap, 1rem);
    width: var(--carousel-body-width, max-content);
    padding: 0 var(--carousel-padding, var(--inner-padding));
    overflow: var(--carousel-overflow);

    &--arrow {
      transition: 300ms ease-out;
      // padding을 제외한 너비 * carouselNumber
      translate: calc(
          ((100dvw - var(--inner-padding) * 2) + var(--carousel-gap)) * -1 *
            v-bind(carouselNumber)
        )
        0;
    }
  }
  &__Button {
    display: none;
  }
  &__Track--nobutton &__Button {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .VueflixCarousel {
    &__Track {
      width: 100%;
    }
  }
}
@media screen and (min-width: 1080px) {
  .VueflixCarousel {
    position: relative;
    &__Track {
      width: 100%;
    }
  }
}
@media (hover: hover) and (pointer: fine) {
  .VueflixCarousel {
    &__Track {
      &--break {
        overflow: visible;
      }
    }
    &__Body {
      width: auto;
      &--break {
        flex-wrap: wrap;
      }
    }

    &__Button {
      position: absolute;
      top: 0;
      width: 5rem;
      height: 100%;
      background: linear-gradient(
        calc(var(--direction) * 90deg),
        transparent,
        hsl(var(--bg-100))
      );
      display: flex;
      justify-content: center;
      align-items: center;
      --carousel-arrow-size: 2.4rem;

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
        --carousel-arrow-size: 3.6rem;
      }
    }

    &__Icon {
      width: var(--carousel-arrow-size);
      height: var(--carousel-arrow-size);
    }
  }
}
</style>

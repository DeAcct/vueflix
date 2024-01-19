<template>
  <div class="VueflixCarousel">
    <div :class="['VueflixCarousel__Track', `VueflixCarousel__Track--${type}`]">
      <ul :class="['VueflixCarousel__Body', `VueflixCarousel__Body--${type}`]">
        <slot></slot>
      </ul>
      <template v-if="type === 'arrow'">
        <button
          class="VueflixCarousel__Button VueflixCarousel__Button--prev"
          v-if="prevActive"
          @click="prev"
        >
          <IconBase class="VueflixCarousel__Icon">
            <IconArrowPrev></IconArrowPrev>
          </IconBase>
          <span class="blind">이전</span>
        </button>
        <button
          class="VueflixCarousel__Button VueflixCarousel__Button--next"
          v-if="nextActive"
          @click="next"
        >
          <IconBase class="VueflixCarousel__Icon">
            <IconArrowNext></IconArrowNext>
          </IconBase>
          <span class="blind">다음</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  length: {
    type: Number,
  },
  type: {
    validator(value) {
      return ["arrow", "break", "nobutton"].includes(value);
    },
    default() {
      return "nobutton";
    },
  },
  direction: {
    type: String,
    default: "row",
    validator(value) {
      return ["column", "row"].includes(value);
    },
  },
});

const resolution = ref(window.innerWidth);

onMounted(() => {
  if (props.type === "break") return;
  window.addEventListener("resize", () => {
    resolution.value = window.innerWidth;
  });
});
onUnmounted(() => {
  if (props.type === "break") return;
  window.addEventListener("resize", () => {
    resolution.value = window.innerWidth;
  });
});

const carouselNumber = ref(0);
watch(
  () => props.length,
  () => {
    carouselNumber.value = 0;
  }
);

function next() {
  carouselNumber.value++;
}
function prev() {
  carouselNumber.value--;
}

const shownItems = computed(() => {
  if (resolution.value >= 1920) {
    return 7;
  }
  if (resolution.value >= 1080) {
    return 4;
  }
  if (resolution.value >= 768) {
    return 3;
  }
  return 2;
});
const carouselLimit = computed(() =>
  props.length ? Math.floor(props.length / shownItems.value) : 0
);
const prevActive = computed(() => carouselNumber.value > 0);
const nextActive = computed(() => carouselNumber.value < carouselLimit.value);
</script>

<style lang="scss" scoped>
.VueflixCarousel {
  width: 100%;
  height: 100%;
  &__Track {
    width: 100%;
    height: 100%;
    position: relative;
    scrollbar-width: none;
    overflow-x: scroll;
    border-radius: var(--carousel-clip-radius);
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__Body {
    display: flex;
    flex-direction: v-bind("direction");
    gap: var(--carousel-gap, 1rem);
    width: 100%;
    padding: 0 var(--carousel-padding, var(--inner-padding));
    overflow: var(--carousel-overflow);

    &--arrow {
      transition: 300ms ease-out;
      transform: translate(
        calc(v-bind(carouselNumber) * -1px * v-bind(resolution))
      );
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
    &__Body {
      padding: 0 var(--carousel-padding, var(--inner-padding));
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
      &--break {
        flex-wrap: wrap;
      }
    }

    &__Button {
      position: absolute;
      top: 0;
      width: 12rem;
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

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
          <IconBase class="icon">
            <IconArrowPrev></IconArrowPrev>
          </IconBase>
          <span class="blind">이전</span>
        </button>
        <button
          class="vueflix-carousel__button vueflix-carousel__button--next"
          v-if="nextActive"
          @click="next"
        >
          <IconBase class="icon">
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
      return ["arrow", "break"].includes(value);
    },
    default() {
      return "arrow";
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
    padding: 0 var(--carousel-padding, var(--inner-padding));
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
      padding: 0 var(--carousel-padding, var(--inner-padding));
    }
  }
}
@media screen and (min-width: 1080px) {
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
        hsl(var(--bg-100))
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

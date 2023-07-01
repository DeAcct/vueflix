<template>
  <section class="accordion-widget">
    <h3 class="accordion-widget__part-wrap">
      <button @click="toggle" type="button" class="accordion-widget__open-btn">
        <span class="accordion-widget__part-title"
          ><slot name="title"></slot
        ></span>
        <i
          :class="[
            'accordion-widget__open-icon',
            { 'accordion-widget__open-icon--widget-opened': isOpen },
          ]"
        >
          <icon-base :icon-name="isOpen ? '닫기' : '열기'">
            <icon-arrow-prev />
          </icon-base>
        </i>
      </button>
    </h3>
    <ul
      :class="[
        'accordion-widget__body',
        'inner',
        { 'accordion-widget__body--opened': isOpen },
      ]"
    >
      <slot name="content"></slot>
    </ul>
  </section>
</template>

<script setup>
import { toRef } from "vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
const props = defineProps({
  open: Boolean,
});
const isOpen = toRef(props.open);
function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.accordion-widget {
  border-radius: 0.6rem;
  &__part-wrap {
    position: sticky;
    top: 6rem;
    z-index: 50;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    background-color: var(--anime-layout-parts);
    backdrop-filter: blur(10px);
    border-radius: 0.6rem;
    width: calc(100% - var(--inner-padding) * 2);
  }
  &__open-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem var(--inner-padding);
    width: 100%;
  }
  &__part-title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__open-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    transition: 150ms ease-in-out;
    transform: rotate(-90deg);
    &--widget-opened {
      transform: rotate(0);
    }
  }
  &__body {
    height: 0;
    overflow: hidden;
    transition: 150ms ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: {
      top: 0;
      bottom: 0;
    }
    .episode-card {
      transition: 150ms ease-in-out;
      opacity: 0;
    }
    &--opened {
      padding: {
        top: 1.5rem;
        bottom: 2rem;
      }
      height: auto;
      .episode-card {
        opacity: 1;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .accordion-widget {
    &__part-wrap {
      width: 100%;
      width: calc(100% - 4rem);
    }
    &__part-title {
      font-size: 1.5rem;
    }
    &__open-btn {
      width: 100%;
      padding: 2rem;
    }
    &__open-icon {
      width: 2rem;
      height: 2rem;
    }
    &__body {
      gap: 2.5rem;
      padding: {
        left: 2rem;
        right: 2rem;
      }
      &--opened {
        padding: {
          top: 2.5rem;
          bottom: 3rem;
        }
      }
    }
  }
}
</style>

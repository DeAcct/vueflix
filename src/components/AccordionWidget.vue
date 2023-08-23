<template>
  <section class="AccordionWidget">
    <h3 class="AccordionWidget__PartWrap">
      <button @click="toggle" type="button" class="AccordionWidget__OpenBtn">
        <span class="AccordionWidget__PartTitle"
          ><slot name="title"></slot
        ></span>
        <i
          :class="[
            'AccordionWidget__OpenIcon',
            { 'AccordionWidget__OpenIcon--WidgetOpened': isOpen },
          ]"
        >
          <IconBase :icon-name="isOpen ? '닫기' : '열기'">
            <IconArrowPrev />
          </IconBase>
        </i>
      </button>
    </h3>
    <ul
      :class="[
        'AccordionWidget__Body',
        'inner',
        { 'AccordionWidget__Body--Opened': isOpen },
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
.AccordionWidget {
  border-radius: 0.6rem;
  &__PartWrap {
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
  &__OpenBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem var(--inner-padding);
    width: 100%;
  }
  &__PartTitle {
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__OpenIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    transition: 150ms ease-in-out;
    transform: rotate(-90deg);
    &--WidgetOpened {
      transform: rotate(0);
    }
  }
  &__Body {
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
    &--Opened {
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
  .AccordionWidget {
    &__PartWrap {
      width: 100%;
      width: calc(100% - 4rem);
    }
    &__PartTitle {
      font-size: 1.5rem;
    }
    &__OpenBtn {
      width: 100%;
      padding: 2rem;
    }
    &__OpenIcon {
      width: 2rem;
      height: 2rem;
    }
    &__Body {
      gap: 2.5rem;
      padding: {
        left: 2rem;
        right: 2rem;
      }
      &--Opened {
        padding: {
          top: 2.5rem;
          bottom: 3rem;
        }
      }
    }
  }
}
</style>

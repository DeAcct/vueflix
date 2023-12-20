<template>
  <section class="AccordionWidget">
    <button class="AccordionWidget__PartTitle" @click="toggle">
      <div class="border-wrap">
        <slot name="title"></slot>
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
      </div>
    </button>
    <div
      :class="[
        'AccordionWidget__Body',
        { 'AccordionWidget__Body--Opened': isOpen },
      ]"
    >
      <slot name="content"></slot>
    </div>
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
  border-radius: var(--global-radius);
  margin: 0 auto;
  &__PartTitle {
    position: sticky;
    top: var(--accordion-sticky-top, 6rem);
    z-index: 50;
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    backdrop-filter: blur(10px);
    border-radius: var(--global-radius);
    padding: 1px;
    width: 100%;
    .border-wrap {
      display: flex;
      justify-content: space-between;
      border-radius: calc(var(--global-radius) - 1px);
      align-items: center;
      padding: 1.4rem 1.9rem;
      background-color: hsl(var(--bg-200) / 0.5);
    }
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
    flex-direction: var(--accordion-direction, column);
    gap: var(--episode-gap, 1rem);
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
        top: var(--open-top-padding, 1.2rem);
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
    &__PartTitle {
      width: 100%;
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
      gap: var(--episode-gap, 2.5rem);
      &--Opened {
        padding: {
          top: var(--open-top-padding, 2.8rem);
        }
      }
    }
  }
}
</style>

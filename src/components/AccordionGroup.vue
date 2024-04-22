<template>
  <details class="AccordionGroup">
    <summary class="AccordionGroup__PartTitle" data-pointer="true">
      <slot name="title"></slot>
      <i class="AccordionGroup__OpenIcon">
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </i>
    </summary>
    <div class="AccordionGroup__Body">
      <slot name="content"></slot>
    </div>
  </details>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
</script>

<style lang="scss" scoped>
.AccordionGroup {
  border-radius: var(--global-radius);
  margin: 0 auto;
  &__PartTitle {
    position: sticky;
    top: var(--accordion-sticky-top, 6rem);
    z-index: var(--accordion-z-index, var(--z-index-s1));
    background: linear-gradient(
      150deg,
      hsl(var(--bg-400) / 0.75),
      hsl(var(--bg-400) / 0.5)
    );
    backdrop-filter: blur(10px);
    border-radius: var(--global-radius);
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 900;
  }
  &__OpenIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    transition: 150ms ease-in-out;
    transform: rotate(-90deg);
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
  }

  &[open] {
    .AccordionGroup__OpenIcon {
      transform: rotate(90deg);
    }
    .AccordionGroup__Body {
      height: auto;
      padding: {
        top: var(--open-top-padding, 1.2rem);
      }
      .episode-card {
        opacity: 1;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .AccordionGroup {
    &__PartTitle {
      width: 100%;
      font-size: 1.6rem;
      margin: 0 auto;
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

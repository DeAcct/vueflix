<template>
  <details class="AccordionGroup" ref="$root">
    <summary class="AccordionGroup__Title" data-pointer="true" ref="$summary">
      <slot name="title"></slot>
      <i class="AccordionGroup__OpenIcon">
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </i>
    </summary>
    <div class="AccordionGroup__Content" ref="$content">
      <slot name="content"></slot>
    </div>
  </details>
</template>

<script setup>
import useAccordion from "@/composables/progressive-polyfill";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

const ACCORDION_ANIMATION_DURATION = 300;

const { $root, $summary, $content } = useAccordion(
  ACCORDION_ANIMATION_DURATION
);
</script>

<style lang="scss" scoped>
.AccordionGroup {
  border-radius: var(--global-radius);
  margin: 0 auto;
  contain: paint;
  &__Title {
    position: sticky;
    top: var(--accordion-sticky-top, 6rem);
    z-index: var(--accordion-z-index, var(--z-index-s1));
    background: var(
      --accordion-bg,
      linear-gradient(150deg, hsl(var(--bg-200)), hsl(var(--bg-200)))
    );
    backdrop-filter: blur(10px);
    border-radius: var(--global-radius);
    padding: var(--accordion-title-padding, 1.5rem 2rem);
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: var(--accordion-title-weight, 900);
  }
  &__OpenIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    transition: calc(1ms * v-bind(ACCORDION_ANIMATION_DURATION)) ease-in-out;
    transform: rotate(-90deg);
    margin-left: auto;
  }
  &__Content {
    padding-top: var(--open-top-padding, 1.2rem);
    // display: flex;
    // flex-direction: var(--accordion-direction, column);
    // gap: var(--episode-gap, 1rem);

    // height: 0;
    // transition: all calc(1ms * v-bind(ACCORDION_ANIMATION_DURATION)) ease-in-out;
  }
  // &::details-content {
  //   background-color: red;
  //   block-size: 0;
  //   transition: calc(1ms * v-bind(ACCORDION_ANIMATION_DURATION)) cubic-bezier(0.83, 0, 0.17, 1);
  // }

  &[open] {
    .AccordionGroup__OpenIcon {
      transform: rotate(90deg);
    }
    .AccordionGroup__Content {
      .episode-card {
        opacity: 1;
      }
    }
  }
}

@supports selector(::details-content) {
  .AccordionGroup {
    &::details-content {
      block-size: 0;
      transition: block-size calc(1ms * v-bind(ACCORDION_ANIMATION_DURATION))
          cubic-bezier(0.83, 0, 0.17, 1),
        content-visibility calc(1ms * v-bind(ACCORDION_ANIMATION_DURATION));
      transition-behavior: allow-discrete;
    }
    &[open]::details-content {
      block-size: auto;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AccordionGroup {
    &__Title {
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
    &__Content {
      gap: var(--episode-gap, 2.5rem);
    }
  }
}
</style>

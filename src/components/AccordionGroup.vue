<template>
  <details class="AccordionGroup">
    <summary class="AccordionGroup__Title" data-pointer="true" ref="$Sticky">
      <span
        class="AccordionGroup__TitleText"
        :class="liquid ?? 'AccordionGroup__TitleText--Liquid'"
      >
        <slot name="title"></slot>
      </span>
      <i class="AccordionGroup__OpenIcon">
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </i>
    </summary>
    <div class="AccordionGroup__Content">
      <slot name="content"></slot>
    </div>
  </details>
</template>

<script setup>
import { computed } from "vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import { useLiquidGlass } from "../composables/liquid-glass";

const ACCORDION_ANIMATION_DURATION = 300;

// const { $root, $summary, $content } = useAccordion(
//   ACCORDION_ANIMATION_DURATION
// );

const props = defineProps({
  liquid: {
    type: Boolean,
    default: false,
  },
});

const _liquid = computed(() => props.liquid);
const { $root: $Sticky } = _liquid.value
  ? useLiquidGlass({ radius: 0.3 })
  : { $root: null };
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
    border-radius: 9999px;
    padding: var(--accordion-title-padding, 2rem);
    width: 100%;
    display: flex;
    align-items: center;
    mix-blend-mode: luminosity;
  }
  &__TitleText {
    font-weight: var(--accordion-title-weight, 900);
    font-size: 1.4rem;
    &--Liquid {
      color: hsl(var(--text-700));
      filter: drop-shadow(0.1rem 0.1rem 0.1rem hsl(var(--text-900) / 0.1));
    }
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
    display: flex;
    flex-direction: column;
    padding-top: var(--open-top-padding, 1.2rem);
    gap: var(--content-gap, 1.2rem);
  }

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

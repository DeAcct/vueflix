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
import useAccordion from "@/composables/accordion";

import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";

defineProps({
  duration: {
    type: Object,
    default: {
      expand: 300,
      shrink: 300,
    },
    validator(value) {
      return Object.keys(value).every((key) =>
        ["expand", "shrink"].includes(key)
      );
    },
  },
});

const { $root, $summary, $content } = useAccordion();
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
    justify-content: space-between;
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
    transition: 150ms ease-in-out;
    transform: rotate(-90deg);
  }
  &__Content {
    display: flex;
    flex-direction: var(--accordion-direction, column);
    gap: var(--episode-gap, 1rem);
    padding: {
      top: 0;
      bottom: 0;
    }
  }

  &[open] {
    .AccordionGroup__OpenIcon {
      transform: rotate(90deg);
    }
    .AccordionGroup__Content {
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
      &--Opened {
        padding: {
          top: var(--open-top-padding, 2.8rem);
        }
      }
    }
  }
}
</style>

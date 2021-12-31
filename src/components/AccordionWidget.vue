<template>
  <div class="accordion-widget">
    <details>
      <summary>
        <i class="icon">
          <icon-base width="2rem" height="2rem"><icon-arrow-next /></icon-base>
        </i>
        <slot name="title"></slot>
      </summary>
      <ul class="sub-tags">
        <slot name="content"></slot>
      </ul>
    </details>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
export default {
  name: "AccordionWidget",
  components: {
    IconArrowNext,
    IconBase,
  },
  props: {
    selectorItems: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
details {
  summary {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    .icon {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      transition: 150ms ease-out;
    }
  }
  &[open] {
    summary {
      margin-bottom: 1rem;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
  .sub-tags {
    display: flex;
    flex-direction: column;
  }
}
</style>

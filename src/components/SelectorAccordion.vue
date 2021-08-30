<template>
  <li class="selector">
    <details>
      <summary>
        <i class="icon">
          <icon-base width="2rem" height="2rem"><icon-arrow-next /></icon-base>
        </i>
        <slot></slot>
      </summary>
      <ul class="sub-tags">
        <triple-checkbox
          v-for="selectorItem in selectorItems"
          :key="selectorItem"
          :label="selectorItem"
        />
      </ul>
    </details>
  </li>
</template>

<script>
import TripleCheckbox from './TripleCheckbox.vue';
import IconBase from './IconBase.vue';
import IconArrowNext from './icons/IconArrowNext.vue';
export default {
  name: 'SelectorAccordion',
  components: {
    IconArrowNext,
    IconBase,
    TripleCheckbox,
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
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    .icon {
      width: 2rem;
      height: 2rem;
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
}
.sub-tags {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

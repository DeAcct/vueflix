<template>
    <li class="selector">
      <details>
        <summary>
          <i class="icon">
            <icon-base width="2rem" height="2rem"><icon-arrow-next/></icon-base>
          </i>
          <slot></slot>
        </summary>
        <ul class="sub-tags">
          <selector-item v-for="selectorItem in selectorItems" :key="selectorItem" :label="selectorItem" />
        </ul>
      </details>
    </li>
</template>

<script>

import SelectorItem from "./SelectorItem.vue";
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
export default {
    name: "SelectorAccordion",
    components: {
        IconArrowNext,
        IconBase,
        SelectorItem,
    },
    props: {
        selectorItems: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
details{
  summary{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    .icon{
      width: 2rem;
      height: 2rem;
      transition: 150ms ease-out;
    }
  }
  &[open]{
    summary{
      margin-bottom: 2rem;
      .icon{
        transform: rotate(90deg);
      }
    }
  } 
}
.sub-tags{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 15rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
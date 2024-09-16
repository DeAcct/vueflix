<template>
  <component :is="component" class="ThumbnailSet">
    <slot name="image"></slot>
    <slot name="text"></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  component: {
    default: "li",
  },
});
</script>

<style lang="scss" scoped>
.ThumbnailSet {
  display: flex;
  flex-shrink: 0;
  position: relative;
  gap: 0.8rem;
  border-radius: var(--global-radius);
  box-sizing: border-box;
  // &::after {
  //   transition: 150ms ease-in-out;
  //   content: "";
  //   z-index: -1;
  //   position: absolute;
  //   inset: 0;
  //   border-radius: var(--global-radius);
  // }
  // &:focus-within,
  // &:hover {
  //   &::after {
  //     background-color: hsl(var(--theme-500));
  //     translate: 2rem 2rem;
  //   }
  // }
}
@media screen and (min-width: 768px) {
  .ThumbnailSet {
    gap: 1.2rem;
  }
}
</style>

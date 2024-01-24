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
}
@media screen and (min-width: 768px) {
  .ThumbnailSet {
    gap: 1.2rem;
  }
}
</style>

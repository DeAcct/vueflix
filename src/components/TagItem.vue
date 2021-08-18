<template>
  <li class="tag-item">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "TagItem",
};
</script>

<style lang="scss" scoped>
.tag-item {
  width: fit-content;
  border-radius: 1.6rem;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
  border: 1px solid var(--bg-300);
}
</style>

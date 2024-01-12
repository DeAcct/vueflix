<template>
  <li class="ThumbnailSet">
    <slot name="image"></slot>
    <div class="ThumbnailSet__Info">
      <slot name="text"></slot>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.ThumbnailSet {
  display: flex;
  flex-shrink: 0;
  position: relative;
  gap: 0.8rem;
  border-radius: var(--global-radius);

  &__Info {
    display: flex;
    min-width: 0;
    height: auto;
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .ThumbnailSet {
    gap: 1.2rem;
  }
}
</style>

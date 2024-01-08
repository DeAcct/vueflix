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
  &:has(&__Image--Selected) {
    background-color: hsl(var(--theme-500) / 0.1);
  }

  &--column {
    width: var(--thumbnail-width, 55vw);
  }

  &__SkeletonInfo {
    width: 100%;
    height: 3rem;
    border-radius: var(--global-radius);
  }
  &__Info {
    display: flex;
    align-items: center;
    min-width: 0;
    height: auto;
    justify-content: space-between;
    width: 100%;
  }
  &__Text {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  &__Title {
    display: block;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    white-space: nowrap;
  }
  &__PartIndex {
    font-size: 1.3rem;
  }
}
@media screen and (min-width: 768px) {
  .ThumbnailSet {
    gap: 1.2rem;
  }
}
</style>

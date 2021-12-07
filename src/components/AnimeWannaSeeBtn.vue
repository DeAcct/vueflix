<template>
  <button
    :class="['anime-interact-btn', { 'anime-interact-btn--on': isEnabled }]"
  >
    <icon-base iconName="ddd" class="icon">
      <slot name="icon"></slot>
    </icon-base>
    <slot name="label"></slot>
  </button>
</template>

<script>
import IconBase from "./IconBase.vue";

export default {
  name: "AnimeInteractBtn",
  components: {
    IconBase,
  },
  props: {
    isEnabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-interact-btn {
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  color: var(--top-item);
  font-weight: 500;
  transition: opacity 150ms ease-out;
  .icon {
    color: transparent;
    stroke: var(--top-item);
    stroke-width: 0.2rem;
    stroke-linejoin: round;
    width: 2rem;
    margin-bottom: 0.1rem;
  }
  &:active {
    opacity: 0.6;
  }
  &--on .icon {
    color: var(--anime-wanna-see-icon);
    stroke: var(--anime-wanna-see-icon);
  }
}
</style>

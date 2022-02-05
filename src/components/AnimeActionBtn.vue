<template>
  <button
    :class="[
      'anime-interact-btn',
      { 'anime-interact-btn--wanna-see': isEnabled && type === 'wanna-see' },
    ]"
    :title="label"
  >
    <icon-base icon-name="label" class="icon">
      <slot name="icon"></slot>
    </icon-base>
    <span class="label">
      <slot name="label"></slot>
    </span>
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
    type: {
      type: String,
    },
    label: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-interact-btn {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--top-item);
  color: var(--top-item);
  transition: opacity 150ms ease-out;
  .icon {
    color: transparent;
    stroke: var(--text-900);
    stroke-width: 0.2rem;
    stroke-linejoin: round;
    width: 4.8rem;
  }
  &--wanna-see .icon {
    fill: var(--anime-wanna-see-icon);
    stroke: var(--anime-wanna-see-icon);
  }
}

@media screen and (min-width: 1080px) {
  .anime-interact-btn {
    flex-direction: row;
    justify-content: center;
    font-size: 1.5rem;
    .icon {
      width: 2.4rem;
      stroke: var(--top-item);
      margin: {
        bottom: 0;
        right: 0.6rem;
      }
    }
    &--wanna-see .icon {
      stroke: var(--anime-wanna-see-icon);
    }
    .label {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>

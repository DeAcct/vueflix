<template>
  <span class="optimized-image loading-target">
    <img
      :src="src"
      :alt="alt"
      :class="[
        'optimized-image__body',
        { 'optimized-image__body--loaded': isLoaded },
      ]"
      @load="loadTrigger"
      loading="lazy"
    />
  </span>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    loadTrigger() {
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.optimized-image {
  position: relative;
  display: block;
  width: 100%;
  border-radius: var(--radius, 0.3rem);
  padding-bottom: var(--aspect-ratio, 56.25%);
  &__body {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    visibility: hidden;
    border-radius: var(--radius, 0.3rem);
    transition: 150ms ease-out;
    &--loaded {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>

<template>
  <span class="OptimizedImage loading-target">
    <component
      :is="type"
      :src="src"
      :alt="alt"
      :class="[
        'OptimizedImage__Body',
        { 'OptimizedImage__Body--Loaded': isLoaded },
      ]"
      @load="loadTrigger"
      loading="lazy"
    />
  </span>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  type: {
    type: String,
    default: "img",
    validator(value) {
      return ["img", "video", "iframe"].includes(value);
    },
  },
  poster: {
    type: String,
  },
});

const isLoaded = ref(false);
function loadTrigger() {
  isLoaded.value = true;
}
</script>

<style lang="scss" scoped>
.OptimizedImage {
  position: relative;
  display: block;
  width: 100%;
  border-radius: var(--radius, var(--global-radius));
  padding-bottom: var(--aspect-ratio, 56.25%);
  &__Body {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    visibility: hidden;
    border-radius: var(--radius, var(--global-radius));
    transition: 150ms ease-out;
    &--Loaded {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>

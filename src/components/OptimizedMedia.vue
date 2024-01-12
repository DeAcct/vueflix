<template>
  <span class="OptimizedMedia">
    <span class="OptimizedMedia__Wrap loading-target">
      <component
        :is="type"
        :src="fileSrc"
        :alt="type === 'img' ? alt : undefined"
        :class="[
          'OptimizedMedia__Body',
          { 'OptimizedMedia__Body--Loaded': isLoaded },
        ]"
        @load="loadTrigger"
        loading="lazy"
      />
    </span>
  </span>
</template>

<script setup>
import { ref } from "vue";
import { useFirebaseStorage } from "@/composables/firebase";

const props = defineProps({
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

const { fileSrc } = useFirebaseStorage(props.src);
</script>

<style lang="scss" scoped>
.OptimizedMedia {
  &__Wrap {
    position: relative;
    display: block;
    width: 100%;
    border-radius: var(--radius, var(--global-radius));
    padding-bottom: var(--aspect-ratio, 56.25%);
  }
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

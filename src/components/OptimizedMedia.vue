<template>
  <span class="OptimizedMedia">
    <span class="OptimizedMedia__Wrap" :class="skelleton && 'loading-target'">
      <component
        :is="type"
        :src="fileSrc"
        :alt="type === 'img' ? alt : undefined"
        class="OptimizedMedia__Body"
        :class="isLoaded && 'OptimizedMedia__Body--Loaded'"
        :poster
        @load="loadTrigger"
      />
    </span>
  </span>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { ref as fireRef, getDownloadURL } from "firebase/storage";
import { storage } from "@/utility/firebase";

import Thumb404 from "@/assets/Thumb404.webp";

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
  skelleton: {
    type: Boolean,
    default: false,
  },
});

const isLoaded = ref(false);
function loadTrigger() {
  isLoaded.value = true;
}

const fileSrc = ref();
watchEffect(async () => {
  if (!props.src) {
    return;
  }
  const fileRef = fireRef(storage, props.src);
  try {
    fileSrc.value = await getDownloadURL(fileRef);
  } catch (error) {
    switch (error.code) {
      case "storage/object-not-found":
        fileSrc.value = Thumb404;
        break;
      default:
        console.error(e);
    }
  }
});
</script>

<style lang="scss" scoped>
.OptimizedMedia {
  position: relative;
  display: block;
  &__Wrap {
    display: block;
    width: 100%;
    border-radius: var(--radius, var(--global-radius));
    padding-bottom: var(--aspect-ratio, 56.25%);
  }
  &__Body {
    position: absolute;
    top: 0;
    left: 0;
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

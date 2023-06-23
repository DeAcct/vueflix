<template>
  <li class="thumbnail-set">
    <router-link :to="link" @click.prevent class="thumbnail-set__thumbnail">
      <optimized-image :src="thumbnailSrc" :alt="alt"></optimized-image>
    </router-link>
    <div class="thumbnail-set__info">
      <template v-if="type === 'skeleton'">
        <div class="thumbnail-set__skeleton-info loading-target"></div>
      </template>
      <template v-else>
        <router-link
          class="thumbnail-set__text"
          :to="`/anime/${data.aniTitle}/episodes`"
          :style="titleWidth"
        >
          <span class="thumbnail-set__title" :style="titleBreak">
            {{ data.aniTitle }}
          </span>
          <strong class="thumbnail-set__part-index" v-if="type === 'episode'">
            {{ data.part }}기 {{ data.index }}화
          </strong>
        </router-link>
        <progress-widget
          class="thumbnail-set__watched-percent"
          :percent="data.watchedPercent"
          v-if="type === 'episode'"
        ></progress-widget>
      </template>
    </div>
  </li>
</template>

<script setup>
import ProgressWidget from "./ProgressWidget.vue";

import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import OptimizedImage from "./OptimizedImage.vue";
import { computed, onMounted, ref } from "vue";
import { useAsyncState } from "@vueuse/core";

const props = defineProps({
  type: {
    validator(value) {
      return ["series", "episode", "skeleton"].includes(value);
    },
  },
  data: {
    type: Object,
  },
});

const { aniTitle, episodeThumbnail } = props.data;
const storage = getStorage();
const thumbnailRef = fireRef(
  storage,
  `${aniTitle}/${
    props.type === "episode"
      ? episodeThumbnail
      : `${aniTitle.replaceAll(/:/g, "_")}.webp`
  }`
);
const { state: thumbnailSrc } = useAsyncState(getDownloadURL(thumbnailRef));

const titleWidth = computed(
  () => `width: ${props.type === "series" ? "100%" : "calc(100% - 3.6rem)"};`
);

const link = computed(() => {
  if (!props.data) {
    return "#none";
  }
  return props.data.continueLink || `/anime/${props.data.aniTitle}/episodes`;
});

const alt = computed(() => {
  if (!props.data) {
    return "로딩중";
  }
  return `${props.data.aniTitle} 바로보기`;
});
</script>

<style lang="scss" scoped>
.thumbnail-set {
  display: flex;
  flex-direction: column;
  width: 55vw;
  position: relative;
  &__thumbnail {
    --radius: 0.3rem;
    --aspect-ratio: calc(9 / 16 * 100%);
    margin-bottom: var(--thumbnail-bottom, 1rem);
  }
  &__watched-percent {
    position: absolute;
    right: 0;
    width: 3.6rem;
    height: 3.6rem;
    flex-shrink: 0;
  }
  &__skeleton-info {
    width: 100%;
    height: 3rem;
    border-radius: 0.3rem;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  &__title {
    display: block;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    --episode-title-width: 20ch;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    white-space: nowrap;
  }
  &__part-index {
    font-size: 1.3rem;
  }
}
@media all and (min-width: 768px) {
  .thumbnail-set {
    width: 32vw;
  }
}

@media all and (min-width: 1024px) {
  .thumbnail-set {
    width: 28vw;
    &__title {
      font-size: 1.7rem;
      --episode-title-width: 30ch;
    }
    &__part-index {
      font-size: 1.5rem;
    }
  }
}

@media all and (min-width: 1920px) {
  .thumbnail-set {
    width: 15vw;
    &__ratio-holder {
      margin-bottom: 1.7rem;
    }
    &__text {
      gap: 1rem;
    }
    &__title {
      --episode-title-width: 20ch;
      font-size: 2rem;
    }
  }
}
</style>

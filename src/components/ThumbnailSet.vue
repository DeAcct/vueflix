<template>
  <li class="ThumbnailSet">
    <RouterLink :to="link" @click.prevent class="ThumbnailSet__Image">
      <OptimizedImage :src="thumbnailSrc" :alt="alt"></OptimizedImage>
    </RouterLink>
    <div class="ThumbnailSet__Info">
      <template v-if="type === 'skeleton'">
        <div class="ThumbnailSet__SkeletonInfo loading-target"></div>
      </template>
      <template v-else>
        <RouterLink
          class="ThumbnailSet__Text"
          :to="`/anime/${aniTitle}/episodes`"
          :style="titleWidth"
        >
          <span class="ThumbnailSet__Title">
            {{ aniTitle }}
          </span>
          <strong class="ThumbnailSet__PartIndex" v-if="type === 'episode'">
            {{ part }}기 {{ index }}화
          </strong>
        </RouterLink>
        <ProgressCircle
          class="ThumbnailSet__WatchPercent"
          :percent="watchPercent"
          v-if="type === 'episode'"
        ></ProgressCircle>
      </template>
    </div>
  </li>
</template>

<script setup>
import ProgressCircle from "./ProgressCircle.vue";

import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import OptimizedImage from "./OptimizedImage.vue";
import { computed } from "vue";
import { useAsyncState } from "@vueuse/core";

const props = defineProps({
  type: {
    validator(value) {
      return ["series", "episode", "skeleton"].includes(value);
    },
  },
  aniTitle: {
    type: String,
  },
  shortTitle: {
    type: String,
  },
  part: {
    type: String,
  },
  index: {
    type: String,
  },
  watchPercent: {
    type: String,
  },
});

const storage = getStorage();
const formattedTitle = props.aniTitle.replaceAll(/:/g, "_");
const thumbnailRef = fireRef(
  storage,
  `${props.aniTitle}/${
    props.type === "episode"
      ? `${props.shortTitle}Sr${props.part}Ep${props.index}.jpg`
      : `${formattedTitle}.webp`
  }`
);
const { state: thumbnailSrc } = useAsyncState(getDownloadURL(thumbnailRef));

const titleWidth = computed(
  () => `width: ${props.type === "series" ? "100%" : "calc(100% - 3.6rem)"};`
);

const link = computed(() => {
  if (!props.aniTitle) {
    return "#none";
  }
  return props.continueLink || `/anime/${props.aniTitle}/episodes`;
});

const alt = computed(() => {
  if (!props.aniTitle) {
    return "로딩중";
  }
  return `${props.aniTitle} 바로보기`;
});
</script>

<style lang="scss" scoped>
.ThumbnailSet {
  display: flex;
  flex-direction: column;
  width: 55vw;
  position: relative;
  &__Image {
    --radius: 0.3rem;
    --aspect-ratio: calc(9 / 16 * 100%);
    margin-bottom: var(--thumbnail-bottom, 1rem);
  }
  &__WatchPercent {
    position: absolute;
    right: 0;
    width: 3.6rem;
    height: 3.6rem;
    flex-shrink: 0;
  }
  &__SkeletonInfo {
    width: 100%;
    height: 3rem;
    border-radius: 0.3rem;
  }
  &__Info {
    display: flex;
    justify-content: space-between;
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
    --episode-title-width: 20ch;
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
@media all and (min-width: 768px) {
  .ThumbnailSet {
    width: 32vw;
  }
}

@media all and (min-width: 1080px) {
  .ThumbnailSet {
    width: 28vw;
    &__Title {
      font-size: 1.7rem;
      --episode-title-width: 30ch;
    }
    &__PartIndex {
      font-size: 1.5rem;
    }
  }
}

@media all and (min-width: 1920px) {
  .ThumbnailSet {
    width: 15vw;
    &__ratio-holder {
      margin-bottom: 1.7rem;
    }
    &__Text {
      gap: 1rem;
    }
    &__Title {
      --episode-title-width: 20ch;
      font-size: 2rem;
    }
  }
}
</style>

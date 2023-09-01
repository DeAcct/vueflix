<template>
  <li :class="['ThumbnailSet', `ThumbnailSet--${direction}`]">
    <RouterLink :to="link" @click.prevent class="ThumbnailSet__Image">
      <OptimizedImage :src="thumbnailURL" :alt="alt"></OptimizedImage>
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
          <span class="ThumbnailSet__Title" v-if="type !== 'episode'">
            {{ aniTitle }}
          </span>
          <template v-if="type === 'episode'">
            <strong class="ThumbnailSet__PartIndex">
              {{ data.part }} {{ data.index }}
            </strong>
            <span class="ThumbnailSet__Title">{{ data.title }}</span>
          </template>
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
import OptimizedImage from "./OptimizedImage.vue";
import { computed } from "vue";
import { useFirebaseStorage } from "@/composables/firebase";

const props = defineProps({
  type: {
    validator(value) {
      return ["series", "episode", "skeleton"].includes(value);
    },
  },
  aniTitle: {
    type: String,
  },
  data: {
    type: Object,
  },
  watchPercent: {
    type: String,
  },
  direction: {
    type: String,
    default: "column",
    validator(value) {
      return ["column", "row"].includes(value);
    },
  },
});

//const fileName = `${props.aniTitle}/${props.data.thumbnail}`;
const formattedTitle = props.aniTitle.replaceAll(/:/g, "_");
const fileName = computed(
  () =>
    `${props.aniTitle}/${
      props.type === "episode"
        ? `${props.data.thumbnail}`
        : `${formattedTitle}.webp`
    }`
);
const { fileSrc: thumbnailURL } = useFirebaseStorage(fileName.value);

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
  flex-direction: v-bind("props.direction");
  flex-shrink: 0;
  position: relative;
  gap: 0.4rem;
  &--column {
    width: var(--thumbnail-width, 55vw);
  }
  &__Image {
    --radius: var(--global-radius);
    --aspect-ratio: calc(9 / 16 * 100%);
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
    border-radius: var(--global-radius);
  }
  &__Info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
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
    word-break: break-all;
  }
  &__PartIndex {
    font-size: 1.3rem;
  }

  &--row {
    width: 100%;
  }
  &--row &__Image {
    width: var(--thumbnail-width, 55vw);
  }
  &--row &__Info {
    flex-direction: column;
    align-items: unset;
  }
  &--row &__WatchPercent {
    position: static;
    width: 2.4rem;
    height: 2.4rem;
  }
}
@media all and (min-width: 768px) {
  .ThumbnailSet {
    gap: 0.8rem;
    &--column {
      width: var(--thumbnail-width, 32vw);
    }
    &--row &__Image {
      width: var(--thumbnail-width, 32vw);
    }
  }
}

@media all and (min-width: 1080px) {
  .ThumbnailSet {
    &--column {
      width: var(--thumbnail-width, 28vw);
    }
    &--row &__Image {
      width: var(--thumbnail-width, 28vw);
    }
    &__Title {
      font-size: 1.5rem;
      --episode-title-width: 30ch;
    }
    &__PartIndex {
      font-size: 1.5rem;
    }
  }
}

@media all and (min-width: 1920px) {
  .ThumbnailSet {
    &--column {
      width: var(--thumbnail-width, 15vw);
    }
    &--row &__Image {
      width: var(--thumbnail-width, 15vw);
    }
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

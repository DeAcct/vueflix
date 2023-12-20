<template>
  <li :class="['ThumbnailSet', `ThumbnailSet--${direction}`]">
    <RouterLink
      :to="link"
      @click.prevent
      :class="[
        'ThumbnailSet__Image',
        { 'ThumbnailSet__Image--NowWatching': watchPercent !== '0%' },
      ]"
      exact-active-class="ThumbnailSet__Image--Selected"
      :replace="replace.main"
    >
      <OptimizedMedia :src="thumbnailURL" :alt="alt"></OptimizedMedia>
      <ProgressCircle
        class="ThumbnailSet__WatchPercent"
        :percent="watchPercent"
        v-if="type === 'episode' && watchPercent !== '0%'"
      ></ProgressCircle>
    </RouterLink>
    <div class="ThumbnailSet__Info">
      <template v-if="type === 'skeleton'">
        <div class="ThumbnailSet__SkeletonInfo loading-target"></div>
      </template>
      <template v-else>
        <RouterLink
          class="ThumbnailSet__Text"
          :to="subLink || link"
          :replace="replace.sub"
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
      </template>
    </div>
  </li>
</template>

<script setup>
import ProgressCircle from "./ProgressCircle.vue";
import OptimizedMedia from "./OptimizedMedia.vue";
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
  link: {
    type: String,
  },
  subLink: {
    type: String,
  },
  replace: {
    type: Object,
    required: true,
    default: {
      main: false,
      sub: false,
    },
  },
});

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
  gap: 0.8rem;
  border-radius: var(--global-radius);
  &:has(&__Image--Selected) {
    background-color: hsl(var(--theme-500) / 0.1);
  }

  &--column {
    width: var(--thumbnail-width, 55vw);
  }
  &__Image {
    position: relative;
    flex-shrink: 0;
    --radius: var(--global-radius);
    --aspect-ratio: calc(9 / 16 * 100%);
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(transparent, hsl(0 0 0 / 0.8) 90%);
      opacity: 0;
      border-radius: var(--global-radius);
    }
    &--NowWatching::after {
      opacity: 1;
    }
  }
  &__WatchPercent {
    position: absolute;
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    font-size: 1.3rem;
    left: 0;
    padding: 0.75rem;
    bottom: 0;
    color: #fff;
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

  &--row {
    width: 100%;
  }
  &--row &__Image {
    width: var(--thumbnail-width, 55vw);
  }
  &--row &__Info {
    flex-direction: column;
    align-items: unset;
    padding: 0.6rem 0.6rem 0.6rem 0;
  }
  &--row &__Text {
    gap: 0.2rem;
  }

  &--column &__Info {
    padding: 0 0.8rem 0.8rem;
  }
  &--column &__Text {
    flex-grow: 1;
    min-width: 0;
  }
}
@media screen and (min-width: 768px) {
  .ThumbnailSet {
    gap: 1.2rem;
    &--column {
      width: var(--thumbnail-width, 32vw);
    }
    &--column &__Info {
      flex-grow: 0;
    }

    &--row &__Image {
      width: var(--thumbnail-width, 32vw);
    }
    &--row &__PartIndex {
      font-size: 1.3rem;
    }
    &--row &__Title {
      font-size: 1.5rem;
      --episode-title-width: 30ch;
    }
  }
}

@media screen and (min-width: 1080px) {
  .ThumbnailSet {
    &--column {
      width: var(--thumbnail-width, 28vw);
    }
    &--row &__Image {
      width: var(--thumbnail-width, 28vw);
    }

    &--row &__PartIndex {
      font-size: 1.2rem;
    }
    &--row &__Title {
      font-size: 1.6rem;
      --episode-title-width: 30ch;
    }
  }
}

@media screen and (min-width: 1920px) {
  .ThumbnailSet {
    &--column {
      width: var(--thumbnail-width, 15vw);
    }
    &--row &__Image {
      width: var(--thumbnail-width, 15vw);
    }
  }
}
</style>

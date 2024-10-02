<template>
  <div class="CurationGroup">
    <h2 class="CurationGroup__Subject inner">
      {{ subject }}
    </h2>
    <slot name="list-changer"></slot>
    <VueflixCarousel
      :length="list.length"
      class="CurationGroup__Carousel"
      type="arrow"
    >
      <ThumbnailSet
        v-for="{ aniTitle, part, index, progress } in list"
        class="CurationGroup__Item"
        :key="`${subject}-${aniTitle}`"
      >
        <template #image>
          <div class="CurationGroup__Thumbnail">
            <RouterLink
              :to="
                part
                  ? `/anime-play/${aniTitle}/${part}/${index}`
                  : { query: { modal: aniTitle, route: 'episodes' } }
              "
              exact-active-class="CurationGroup__Thumbnail--Selected"
            >
              <OptimizedMedia
                :src="`/anime/${escaper(aniTitle)}/${escaper(aniTitle)}.webp`"
                :alt="`${aniTitle} 포스터`"
                class="CurationGroup__Image"
                skelleton
              />
            </RouterLink>
            <div class="CurationGroup__SnackBar">
              <slot
                name="snack-bar"
                v-bind="{ aniTitle, part, index, progress }"
              ></slot>
            </div>
          </div>
        </template>
        <template #text>
          <RouterLink
            :to="{
              query: { modal: aniTitle, route: 'episodes' },
            }"
            class="CurationGroup__TextLink"
          >
            <span class="CurationGroup__AniTitle">
              {{ aniTitle }}
            </span>
            <strong class="CurationGroup__PartIndex" v-if="part && index">
              {{ part }} {{ index }}
            </strong>
          </RouterLink>
        </template>
      </ThumbnailSet>
    </VueflixCarousel>
  </div>
</template>

<script setup>
/**
 * @todo wannaSeeToggle 버튼 추가
 */
import ThumbnailSet from "@/components/ThumbnailSet.vue";
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";

defineProps({
  list: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(
        (item) => typeof item === "object" && "aniTitle" in item
      );
    },
  },
  subject: {
    type: String,
  },
});

function escaper(str) {
  return str.replaceAll(/:|\./g, "_").replaceAll(/\?/g, "");
}
</script>

<style lang="scss" scoped>
.CurationGroup {
  &__Subject {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }
  &__Item {
    display: flex;
    width: var(--thumbnail-width, 55vw);
    flex-direction: column;
    &:has(:focus-visible),
    &:has(:hover) {
      --curation-accent: hsl(var(--theme-500));
      --curation-accent-translate: 0.5rem 0.5rem;
      --snack-bar-opacity: 1;
      --snack-bar-translate: 0;
    }
  }
  &__Thumbnail {
    width: 100%;
    position: relative;
    flex-shrink: 0;
    --radius: var(--global-radius);
    --aspect-ratio: calc(9 / 16 * 100%);
    &::after {
      transition: 150ms ease-in-out;
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: var(--global-radius);
      background-color: var(--curation-accent);
      translate: var(--curation-accent-translate);
    }
  }
  &__SnackBar {
    display: none;
  }

  &__TextLink {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    &:focus-visible {
      color: var(--curation-accent);
    }
  }
  &__AniTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    --episode-title-width: 20ch;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 600;
    color: inherit;
  }
  &__PartIndex {
    font-size: 1.4rem;
    color: inherit;
  }
}

@media screen and (min-width: 768px) {
  .CurationGroup {
    &__Item {
      width: var(--thumbnail-width, 32vw);
    }
    &__AniTitle {
      font-size: 1.6rem;
    }
    &__PartIndex {
      font-size: 1.6rem;
    }
    &__Subject {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    &__PartIndex {
      font-size: 1.6rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .CurationGroup {
    &__Item {
      width: var(--thumbnail-width, 28vw);
    }
    &__Subject {
      font-size: 3rem;
    }
    &__DaySelector {
      width: 40rem;
      margin-left: var(--inner-padding);
    }
  }
}

@media screen and (min-width: 1920px) {
  .CurationGroup {
    &__AniTitle {
      font-size: 2rem;
    }
    &__PartIndex {
      font-size: 2rem;
    }
    &__Item {
      width: var(--thumbnail-width, 15vw);
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .CurationGroup {
    &__Item {
      &:has(:focus-visible),
      &:has(:hover) {
        --snack-bar-opacity: 1;
        --snack-bar-translate: 0;
      }
    }
    &__SnackBar {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.2rem;
      border-radius: 0 0 var(--global-radius) var(--global-radius);
      background: linear-gradient(transparent, hsl(var(--text-900) / 0.5));

      transition: 150ms ease-in-out;
      opacity: var(--snack-bar-opacity, 0);
      translate: var(--snack-bar-translate, 0 0.8rem);
    }
  }
}
</style>

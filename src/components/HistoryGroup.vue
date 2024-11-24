<template>
  <TransitionGroup
    tag="ul"
    class="HistoryGroup"
    :name="`history-group-${editmode.on ? 'delete' : 'move'}`"
  >
    <ThumbnailSet
      v-for="{ aniTitle, part, index, progress, thumbnail, title } in list"
      :key="`${aniTitle}-${part || ''}-${index}`"
      class="HistoryGroup__Item"
      :class="{
        'HistoryGroup__Item--Selected': editmode.selected.has(aniTitle),
      }"
      @click="editmode.on && itemToggle(aniTitle)"
    >
      <template #image>
        <RouterLink
          class="HistoryGroup__Image"
          :to="
            !editmode.on
              ? parser.link({ aniTitle, part, index }).picture
              : '#none'
          "
          :replace="editmode.on"
        >
          <OptimizedMedia
            :src="parser.thumbnail({ aniTitle, thumbnail })"
            :alt="`${aniTitle} ${part} ${index} 이어보기`"
            skelleton
          />
          <SlimProgress
            v-if="progressBar"
            class="HistoryGroup__WatchPercent"
            :progress="`${(progress?.current / progress?.max) * 100}%`"
          />
        </RouterLink>
      </template>
      <template #text>
        <RouterLink
          class="HistoryGroup__TextLink"
          :to="
            !editmode.on ? parser.link({ aniTitle, part, index }).text : '#none'
          "
          :replace="editmode.on"
        >
          <span class="HistoryGroup__AniTitle">
            {{ aniTitle }}
          </span>
          <p class="HistoryGroup__Episode">
            <strong class="HistoryGroup__PartIndex">
              {{ part }} {{ index }}
            </strong>
            {{ title }}
          </p>
        </RouterLink>
      </template>
    </ThumbnailSet>
  </TransitionGroup>
</template>

<script setup>
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import SlimProgress from "@/components/SlimProgress.vue";
import ThumbnailSet from "@/components/ThumbnailSet.vue";

const editmode = defineModel("editmode", {
  default: {
    on: false,
    selected: new Set(),
  },
});
const props = defineProps({
  list: Array,
  parser: {
    type: Object,
    default: {
      thumbnail: () => {},
      link: () => {},
    },
  },
  progressBar: Boolean,
});

function itemToggle(aniTitle) {
  if (editmode.value.selected.has(aniTitle)) {
    editmode.value.selected.delete(aniTitle);
  } else {
    editmode.value.selected.add(aniTitle);
  }
}
</script>

<style lang="scss" scoped>
.HistoryGroup {
  width: min(calc(100% - 4rem), 124rem);
  display: grid;
  --grid-repeat: 1;
  grid: auto-flow / repeat(var(--grid-repeat), 1fr);
  gap: 1.5rem 1rem;
  margin: 0 auto;
  &__Item {
    width: calc(var(--thumbnail-units) * 1px * var(--vw));
    flex-direction: column;
    border: 0 solid transparent;
    transition: 150ms ease-out;
    &--Selected {
      padding: 2rem;
      border-color: hsl(var(--theme-500));
      border-width: 2px;
      border-radius: calc(var(--global-radius) + 2rem);
      background-color: hsl(var(--theme-100));
    }
  }
  &__Image {
    position: relative;
    border-radius: var(--global-radius);
    overflow: hidden;
  }
  &__WatchPercent {
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: 0;
  }
  &__TextLink {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    gap: 0.8rem;
  }
  &__Episode {
    line-height: 1.3;
    text-wrap: pretty;
  }
}

.history-group {
  &-move {
    &-enter-active,
    &-leave-active {
      transition: all 150ms ease-out;
    }
    &-leave-active {
      display: none;
    }
    &-enter-from,
    &-leave-to {
      translate: 2rem 0;
      opacity: 0;
      translate: 0 -1rem 0;
    }
  }
  &-delete {
    &-leave-active {
      transition: all 150ms ease-out;
    }
    &-leave-to {
      scale: 0;
      opacity: 0;
    }
  }
}

@media screen and (min-width: 769px) {
  .HistoryGroup {
    --grid-repeat: 3;
    padding: 0;
    &__WatchPercent {
      font-size: 1.4rem;
    }
  }
}

@media screen and (min-width: 1240px) {
  .HistoryGroup {
    gap: 3rem 1.5rem;
    --grid-repeat: 4;
    --thumbnail-bottom: 0.7rem;
  }
}
</style>

<template>
  <div class="AnimeEpisodes">
    <!-- <button class="AnimeEpisodes__SortButton" @click="toggleSort" type="button">
      <IconBase class="AnimeEpisodes__SortIcon">
        <IconSort />
      </IconBase>
      <Transition :name="`sort-text-${sortBase}`">
        <span :key="sortBase">
          {{ sortBase === "asc" ? "처음" : "최신화" }}부터
        </span>
      </Transition>
    </button> -->
    <div class="AnimeEpisodes__Actions">
      <SortButton
        :base="sortBase"
        :toggle-sort
        class="AnimeEpisodes__Sort"
        :text="['처음', '최신화']"
      />
      <button clas="AnimeEpisodes__ClearWatched">시청기록 초기화</button>
    </div>
    <template v-if="animeInfo.parts">
      <AccordionGroup
        v-for="({ part, episodes }, iteratePart) in sortedParts"
        :key="iteratePart"
        :open="iteratePart === 0"
        class="AnimeEpisodes__Accordion"
      >
        <template v-slot:title>
          {{ part }}
        </template>
        <template v-slot:content>
          <TransitionGroup name="episode-update">
            <Thumbnailset
              v-for="{ title, index, thumbnail } in episodes"
              :key="`episode-${title}`"
              class="AnimeEpisodes__Item"
            >
              <template #image>
                <RouterLink
                  class="AnimeEpisodes__Thumbnail"
                  :to="`/anime-play/${animeInfo.name}/${part}/${index}`"
                >
                  <OptimizedMedia
                    :src="`${animeInfo.name}/${thumbnail}`"
                    :alt="`${animeInfo.name} ${part} ${index} 미리보기 이미지`"
                    skelleton
                  />
                  <ProgressCircle
                    v-if="
                      getEpisodeProgress(animeInfo.name, part, index)
                        .percent !== '0%'
                    "
                    class="AnimeEpisodes__WatchPercent"
                    :percent="
                      getEpisodeProgress(animeInfo.name, part, index).percent
                    "
                  />
                </RouterLink>
              </template>
              <template #text>
                <RouterLink
                  class="AnimeEpisodes__TextLink"
                  :to="`/anime-play/${animeInfo.name}/${part}/${index}`"
                >
                  <strong class="AnimeEpisodes__PartIndex">
                    {{ part }} {{ index }}
                  </strong>
                  <span class="AnimeEpisodes__Title">{{ title }}</span>
                </RouterLink>
              </template>
            </Thumbnailset>
          </TransitionGroup>
        </template>
      </AccordionGroup>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useMaratonData } from "@/api/maraton";
import { useHead } from "@/composables/head";
import { deepReverse } from "@/utility/extArray";

import AccordionGroup from "@/components/AccordionGroup.vue";
import Thumbnailset from "@/components/ThumbnailSet.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";

import SortButton from "../components/SortButton.vue";

// const animeInfo = inject("anime-info");
const props = defineProps({
  animeInfo: Object,
  refresh: Function,
});

const sortBase = ref("asc");
const sortedParts = computed(() => {
  if (!props.animeInfo) {
    return [];
  }
  if (sortBase.value === "asc") {
    return props.animeInfo.parts;
  }
  return deepReverse(props.animeInfo.parts, ["episodes"]);
});

function toggleSort() {
  sortBase.value = sortBase.value === "asc" ? "desc" : "asc";
}

const emit = defineEmits(["open-login-modal"]);
const route = useRoute();

useHead({ title: route.query.modal });

const { getEpisodeProgress } = useMaratonData(route.query.modal);
</script>

<style lang="scss" scoped>
.AnimeEpisodes {
  margin-top: 2rem;
  flex-grow: 1;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;

  &__Actions {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: var(--episodes-action-width, calc(100% - 4rem));
  }
  &__Sort {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: 500;
    height: 2.4rem;
  }

  &__Accordion {
    width: var(--episodes-width, calc(100% - 4rem));
    --episode-gap: 1.2rem;
    --thumbnail-width: 14rem;
    --accordion-sticky-top: var(--episodes-sticky-top, 0);
  }
  &__Item {
    padding: 0;
  }
  &__Thumbnail {
    width: 30rem;
    min-width: 0;
    position: relative;
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
    background: linear-gradient(transparent, hsl(0 0% 0% / 0.5));
    border-radius: var(--global-radius);
  }
  &__TextLink {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex-grow: 1;
    width: 100%;
  }
  &__PartIndex {
    font-size: 1.4rem;
  }
  &__Title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.3;
  }
}

.episode-update-move,
.episode-update-enter-active,
.episode-update-leave-active {
  transition: 150ms ease-out;
}
.episode-update-enter-from,
.episode-update-leave-to {
  opacity: 0;
  translate: -0.5rem;
}
.episode-leave-active {
  position: absolute;
}

@media screen and (min-width: 768px) {
  .AnimeEpisodes {
    &__Actions {
      // padding: 0 2rem;
      width: var(--episodes-action-width, 100%);
    }
    &__Accordion {
      --episode-gap: 1.2rem;
      --thumbnail-width: 23rem;
    }
    &__Thumbnail {
      width: 40rem;
    }
    &__PartIndex {
      font-size: 1.6rem;
    }
    &__Title {
      font-size: 1.6rem;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AnimeEpisodes {
    margin-top: 2rem;
    gap: 1.2rem;
  }
}
</style>

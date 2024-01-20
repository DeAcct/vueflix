<template>
  <div class="AnimeEpisodes">
    <template v-if="animeInfo.parts">
      <AccordionWidget
        v-for="({ part, episodes }, iteratePart) in animeInfo.parts"
        :key="iteratePart"
        :open="iteratePart === 0"
        class="AnimeEpisodes__Accordion"
      >
        <template v-slot:title>
          {{ part }}
        </template>
        <template v-slot:content>
          <Thumbnailset
            v-for="{ title, index, thumbnail } in episodes"
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
                />
                <ProgressCircle
                  v-if="
                    getEpisodeProgress(route.params.title, part, index)
                      .percent !== '0%'
                  "
                  class="AnimeEpisodes__WatchPercent"
                  :percent="
                    getEpisodeProgress(route.params.title, part, index).percent
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
        </template>
      </AccordionWidget>
    </template>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMaratonData } from "@/composables/maraton";

import AccordionWidget from "@/components/AccordionWidget.vue";
import Thumbnailset from "@/components/ThumbnailSet.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import ProgressCircle from "@/components/ProgressCircle.vue";

const animeInfo = inject("anime-info");

const emit = defineEmits(["open-login-modal"]);
const route = useRoute();

onMounted(() => {
  document.title = `${route.params.title} 다시보기`;
});

const { getEpisodeProgress } = useMaratonData(route.params.title);
</script>

<style lang="scss" scoped>
.AnimeEpisodes {
  margin-top: 2rem;
  flex-grow: 1;
  gap: 1.6rem;
  display: flex;
  flex-direction: column;
  &__Accordion {
    width: calc(100% - 4rem);
    --episode-gap: 1.2rem;
    --thumbnail-width: 14rem;
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

@media screen and (min-width: 768px) {
  .AnimeEpisodes {
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

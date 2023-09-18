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
            type="episode"
            :ani-title="animeInfo.name"
            :data="{ index, title, part, thumbnail }"
            watch-percent="0%"
            direction="row"
            :link="`/player/${animeInfo.name}/${part}/${index}`"
            :replace="{
              main: false,
              sub: false,
            }"
          ></Thumbnailset>
        </template>
      </AccordionWidget>
    </template>
  </div>
</template>

<script setup>
import AccordionWidget from "@/components/AccordionWidget.vue";
import Thumbnailset from "@/components/ThumbnailSet.vue";
import { inject, onMounted } from "vue";
import { useRoute } from "vue-router";

const animeInfo = inject("anime-info");

const emit = defineEmits(["open-login-modal"]);
const route = useRoute();

onMounted(() => {
  document.title = `${route.params.title} 다시보기`;
});
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
}

@media screen and (min-width: 768px) {
  .AnimeEpisodes {
    &__Accordion {
      --episode-gap: 1.2rem;
      --thumbnail-width: 23rem;
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

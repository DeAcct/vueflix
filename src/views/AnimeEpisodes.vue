<template>
  <div class="AnimeEpisodes">
    <AccordionWidget
      v-for="({ part, episodes }, index) in animeInfo.parts"
      :key="index"
      :open="index === 0"
      class="AnimeEpisodes__Accordion"
    >
      <template v-slot:title>
        {{ part }}
      </template>
      <template v-slot:content>
        <EpisodeCard
          v-for="episode in episodes"
          :key="episode.title"
          :data="episode"
          :part="part"
          :link="`/player/${animeInfo.name}/${part}/${episode.index}`"
          @login-require="openLoginModal"
        >
          <template v-slot:index> {{ episode.index }} </template>
        </EpisodeCard>
      </template>
    </AccordionWidget>
  </div>
</template>

<script setup>
import AccordionWidget from "../components/AccordionWidget.vue";
import EpisodeCard from "../components/EpisodeCard.vue";
import { inject, onMounted } from "vue";
import { useRoute } from "vue-router";

const animeInfo = inject("anime-info");

const emit = defineEmits(["open-login-modal"]);
const route = useRoute();
function openLoginModal() {
  emit("open-login-modal");
}

onMounted(() => {
  document.title = `${route.params.title} 다시보기`;
});
</script>

<style lang="scss" scoped>
.AnimeEpisodes {
  margin-top: 1.6rem;
  &__Accordion {
    width: calc(100% - 4rem);
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>

<template>
  <div class="anime-episodes">
    <accordion-widget
      v-for="(part, index) in animeInfo.parts"
      :key="index"
      @login-require="openLoginModal"
      :open="index === 0"
    >
      <template v-slot:title>
        {{ part.part }}
      </template>
      <template v-slot:content>
        <episode-card
          v-for="episode in part.episodes"
          :key="episode.title"
          :data="episode"
          :part="part.part"
          :link="`/player/${episode.title}/${part.part}/${
            typeof episode.index === 'string'
              ? episode.index
              : `${episode.index}화`
          }
            `"
        >
          <template v-slot:index>
            {{
              typeof episode.index === "string"
                ? episode.index
                : `${episode.index}화`
            }}
          </template>
        </episode-card>
      </template>
    </accordion-widget>
  </div>
</template>

<script setup>
import AccordionWidget from "../components/AccordionWidget.vue";
import EpisodeCard from "../components/EpisodeCard.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

defineProps({
  animeInfo: Object,
  openLoginModal: Function,
});

const route = useRoute();

onMounted(() => {
  document.title = `${route.params.title} 다시보기`;
});
</script>

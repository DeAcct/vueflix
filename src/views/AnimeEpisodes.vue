<template>
  <div class="anime-episodes">
    <accordion-widget
      v-for="(part, index) in animeInfo.parts"
      :key="index"
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
          @login-require="openLoginModal"
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
.anime-episodes {
  .accordion-widget {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>

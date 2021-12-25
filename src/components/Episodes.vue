<template>
  <div class="episodes">
    <div class="parts-number inner">
      <strong>{{ episodesData.part }}</strong>
    </div>
    <ul class="episode-cards">
      <episode-card
        v-for="(episode, index) in episodesData.episodes"
        :key="episode.title"
        :title="episode.title"
        :date="episode.date"
        :thumbnail="`${this.$route.params.id}/${episode.thumbnail}`"
        :index="index + 1"
        :ref="`episodeCard${index}`"
      />
    </ul>
  </div>
</template>

<script>
import EpisodeCard from "./EpisodeCard.vue";
export default {
  name: "Episodes",
  components: {
    EpisodeCard,
  },
  props: {
    episodesData: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.episodes {
  background-color: var(--top-item);
  .parts-number {
    position: sticky;
    z-index: 50;
    top: 5.95rem;
    background-color: var(--top-item);
    padding: {
      top: 1.5rem;
      bottom: 1.5rem;
    }
    font-size: 1.3rem;
    border-bottom: 1px solid var(--bg-100);
  }
  .episode-cards {
    padding: 2rem 0;
  }
}
</style>

<template>
  <div class="episodes">
    <div class="episodes-number inner">
      <strong>에피소드 ({{ episodesNumber }})</strong>
    </div>
    <ul class="episode-cards">
      <episode-card
        v-for="(episode, index) in episodesData"
        :key="episode.title"
        :title="episode.title"
        :date="episode.date"
        :thumbnail="episode.thumbnail"
        :index="index + 1"
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
      type: Array,
    },
    episodesNumber: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss" scoped>
.episodes {
  background-color: var(--top-item);
  .episodes-number {
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

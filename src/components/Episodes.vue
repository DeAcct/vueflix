<template>
  <div class="episodes">
    <button class="part-info inner" @click="widgetToggle">
      <i :class="['open-icon', { 'open-icon--widget-opened': isWidgetOpen }]">
        <icon-base>
          <icon-arrow-next />
        </icon-base>
      </i>
      <strong class="part-title">{{ episodesData.part }}</strong>
    </button>
    <ul :class="['episode-widget', { 'episode-widget--opened': isWidgetOpen }]">
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
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import EpisodeCard from "./EpisodeCard.vue";
export default {
  name: "Episodes",
  components: {
    EpisodeCard,
    IconBase,
    IconArrowNext,
  },
  props: {
    episodesData: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      isWidgetOpen: true,
    };
  },
  methods: {
    widgetToggle() {
      this.isWidgetOpen = !this.isWidgetOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.episodes {
  background-color: var(--top-item);
  .part-info {
    position: sticky;
    top: 6rem;
    z-index: 50;
    display: flex;
    width: 100%;
    align-items: center;
    background-color: var(--top-item);
    padding: {
      top: 1.5rem;
      bottom: 1.5rem;
    }
    font-size: 1.3rem;
    border-bottom: 1px solid var(--bg-100);
    .open-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: 1.8rem;
      transition: 150ms linear;
      &--widget-opened {
        transform: rotate(90deg);
      }
    }
    .part-title {
      margin-left: 0.5rem;
    }
  }
  .episode-widget {
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: 150ms linear;
    &--opened {
      padding: 2rem 0;
      height: auto;
    }
  }
}
</style>

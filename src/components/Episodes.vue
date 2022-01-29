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
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  .part-info {
    position: sticky;
    top: 5.9rem;
    z-index: 50;
    display: flex;
    width: 100%;
    align-items: center;
    background-color: var(--top-item);
    padding: {
      top: 1.5rem;
      bottom: 1.5rem;
    }
    border-radius: 0.6rem;
    .open-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: 1.8rem;
      transition: 150ms ease-in-out;
      &--widget-opened {
        transform: rotate(90deg);
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .part-title {
      font-size: 1.3rem;
      margin-left: 0.5rem;
    }
  }
  .episode-widget {
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: 150ms ease-in-out;
    .episode-card {
      transition: 150ms ease-in-out;
      opacity: 0;
    }
    &--opened {
      padding: 0 0 2rem;
      height: auto;
      .episode-card {
        opacity: 1;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .episodes {
    .part-info {
      padding: {
        top: 2rem;
        bottom: 2rem;
      }
      .open-icon {
        width: 2rem;
        height: 2rem;
      }
      .part-title {
        font-size: 1.5rem;
        margin-left: 1rem;
      }
    }
    .episode-widget--opened {
      padding: 0 0 4rem;
    }
  }
}
</style>

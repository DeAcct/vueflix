<template>
  <section class="episodes">
    <h3 class="part-info">
      <button @click="widgetToggle" class="inner">
        <i :class="['open-icon', { 'open-icon--widget-opened': isWidgetOpen }]">
          <icon-base :icon-name="isWidgetOpen ? '닫기' : '열기'">
            <icon-arrow-next />
          </icon-base>
        </i>
        <span class="part-title">{{ episodesData.part }}</span>
      </button>
    </h3>
    <ul
      :class="[
        'episode-widget',
        'inner',
        { 'episode-widget--opened': isWidgetOpen },
      ]"
    >
      <episode-card
        v-for="(episode, index) in episodesData.episodes"
        :key="episode.title"
        :title="episode.title"
        :date="episode.date"
        :thumbnail="`${this.$route.params.title}/${episode.thumbnail}`"
        :index="index + 1"
        :part="episodesData.part"
        :download="true"
        @login-require="loginRequire"
      />
    </ul>
  </section>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import EpisodeCard from "./EpisodeCard.vue";
export default {
  name: "EpisodesWidget",
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
    loginRequire() {
      this.$emit("login-require", "로그인해야 애니를 감상할 수 있어요");
    },
  },
};
</script>

<style lang="scss" scoped>
.episodes {
  background-color: var(--episodes);
  border-radius: 0.6rem;
  box-shadow: var(--box-shadow);
  .part-info {
    position: sticky;
    top: 5.9rem;
    z-index: 50;
    display: flex;
    width: 100%;
    align-items: center;
    background-color: var(--episodes);
    border-radius: 0.6rem;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      padding: {
        top: 1.5rem;
        bottom: 1.5rem;
      }
    }
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
      font-weight: 700;
      margin-left: 0.5rem;
    }
  }
  .episode-widget {
    height: 0;
    overflow: hidden;
    transition: 150ms ease-in-out;
    .episode-card {
      transition: 150ms ease-in-out;
      opacity: 0;
    }
    &--opened {
      padding-bottom: 2rem;
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
      button {
        padding: {
          top: 2rem;
          bottom: 2rem;
        }
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
      padding-bottom: 4rem;
    }
  }
}
</style>

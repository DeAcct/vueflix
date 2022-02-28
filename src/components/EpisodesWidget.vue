<template>
  <section class="episodes">
    <h3 :class="['part-info', { 'part-info--top-padding': partTopPadding }]">
      <button @click="widgetToggle" type="button">
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
        :download="download"
        @login-require="loginRequire"
        @added="addedTrigger"
        @deleted="deletedTrigger"
        :type="type"
        :input-checked="downChecked"
        :price="price"
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
    partTopPadding: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "router-link",
    },
    download: {
      type: Boolean,
      default: true,
    },
    downChecked: {
      type: Boolean,
    },
    price: {
      type: Number,
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
    addedTrigger(e) {
      this.$emit("added", e);
    },
    deletedTrigger(e) {
      this.$emit("deleted", e);
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
    top: 0;
    z-index: 50;
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    border-radius: 0.6rem;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 1.5rem var(--inner-padding);
      background-color: var(--episodes-part-info);
      backdrop-filter: blur(10px);
      border-radius: 0.6rem;
    }
    &--top-padding {
      top: 5.9rem;
      width: calc(100% - var(--inner-padding) * 2);
      button {
        padding: 1.5rem 1rem;
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
      width: 100%;
      button {
        padding: 2rem var(--inner-padding);
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

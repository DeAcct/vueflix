<template>
  <section class="episodes">
    <h3 class="episodes__part-wrap">
      <button @click="widgetToggle" type="button" class="episodes__open-btn">
        <span class="episodes__part-title">{{ episodesData.part }}</span>
        <i
          :class="[
            'episodes__open-icon',
            { 'episodes__open-icon--widget-opened': isWidgetOpen },
          ]"
        >
          <icon-base :icon-name="isWidgetOpen ? '닫기' : '열기'">
            <icon-arrow-prev />
          </icon-base>
        </i>
      </button>
    </h3>
    <ul
      :class="[
        'episodes__body',
        'inner',
        { 'episodes__body--opened': isWidgetOpen },
      ]"
    >
      <episode-card
        v-for="episode in episodesData.episodes"
        :key="episode.title"
        :data="episode"
        :part="episodesData.part"
        @login-require="loginRequire"
        @added="addedTrigger"
        @deleted="deletedTrigger"
        :input-checked="downChecked"
        :price="price"
      />
    </ul>
  </section>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import EpisodeCard from "./EpisodeCard.vue";
export default {
  name: "EpisodesWidget",
  components: {
    EpisodeCard,
    IconBase,
    IconArrowPrev,
  },
  props: {
    episodesData: {
      type: Object,
    },
    downChecked: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
    open: {
      type: Boolean,
    },
  },
  data() {
    return {
      isWidgetOpen: this.open,
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
  border-radius: 0.6rem;
  &__part-wrap {
    position: sticky;
    top: 6rem;
    z-index: 50;
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    background-color: var(--bg-200);
    border-radius: 0.6rem;
    width: calc(100% - var(--inner-padding) * 2);
  }
  &__open-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem var(--inner-padding);
    width: 100%;
  }
  &__part-title {
    font-size: 1.3rem;
    font-weight: 700;
  }
  &__open-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    transition: 150ms ease-in-out;
    transform: rotate(-90deg);
    &--widget-opened {
      transform: rotate(0);
    }
  }
  &__body {
    height: 0;
    overflow: hidden;
    transition: 150ms ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    .episode-card {
      transition: 150ms ease-in-out;
      opacity: 0;
    }
    &--opened {
      padding-top: 1.5rem;
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
    &__part-wrap {
      width: 100%;
    }
    &__part-title {
      font-size: 1.5rem;
    }
    &__open-btn {
      width: 100%;
      padding: 2rem;
    }
    &__open-icon {
      width: 2rem;
      height: 2rem;
    }
    &__body {
      gap: 2.5rem;
      padding-top: 3rem;
      padding: {
        left: 0;
        right: 0;
      }
      &--opened {
        padding-bottom: 3rem;
      }
    }
  }
}
</style>

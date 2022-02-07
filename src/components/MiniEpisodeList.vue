<template>
  <div class="mini-episode-list">
    <div class="col-top">
      <h2 class="mini-episode-list__heading">에피소드 목록</h2>
      <button
        class="mini-episode-list__close-btn"
        @click="closeMiniEpisodeList"
      >
        <i class="icon">
          <icon-base>
            <icon-close />
          </icon-base>
        </i>
      </button>
    </div>
    <div v-for="part in episodeData" :key="part.part" class="accordion">
      <h2 class="accordion__title">
        {{ part.part }}
      </h2>
      <ul class="accordion__body">
        <episode-card
          v-for="(episode, index) in part.episodes"
          :key="episode.title"
          :thumbnail="`${this.$route.params.title}/${episode.thumbnail}`"
          :index="index + 1"
          :title="episode.title"
          :date="episode.date"
          :part="part.part"
          :download="false"
          :exclude-theme="true"
          text-color="#fff"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import EpisodeCard from "./EpisodeCard.vue";
import IconBase from "./IconBase.vue";
import IconClose from "./icons/IconClose.vue";

export default {
  name: "MiniEpisodeList",
  props: {
    episodeData: {
      type: Array,
    },
  },
  components: {
    EpisodeCard,
    IconBase,
    IconClose,
  },
  methods: {
    closeMiniEpisodeList() {
      this.$emit("close-emit");
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-episode-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 3rem 2rem;
  background-color: var(--player-aside-bg);
  overflow-y: scroll;
  .col-top {
    padding: 2rem 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    top: 0;
    width: 100%;
    background-color: var(--player-aside-bg);
  }
  &__heading {
    font-size: 1.7rem;
    color: #fff;
  }
  &__close-btn {
    width: 3.6rem;
    height: 3.6rem;
    .icon {
      color: #fff;
    }
  }
  .accordion {
    &__title {
      position: sticky;
      display: flex;
      align-items: center;
      width: 100%;
      z-index: 10;
      top: 7.6rem;
      padding: 1.5rem 2rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: #fff;
      text-align: left;
      background-color: var(--mini-episode-current-part);
      .icon {
        transition: 150ms ease-in-out;
        color: #fff;
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1rem;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      &--opened .icon {
        transform: rotate(90deg);
      }
    }
    &__body {
      margin-top: 1rem;
      opacity: 1;
      height: auto;
    }
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}

@media (orientation: landscape) {
  .mini-episode-list {
    width: 50%;
  }
}
</style>

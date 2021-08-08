<template>
  <li class="item">
    <figure>
      <div class="thumbnail" :style="`background:${createThumbnail}`">
        <div class="progress-bar" v-if="isRecent">
          <div class="progress" :style="`width:${progress}`"></div>
        </div>
        <button class="thumbnail-play-btn" v-if="isRecent">
          <span class="blind">작품 재생하기</span>
          <icon-base><icon-play /></icon-base>
        </button>
      </div>
      <a class="description" :href="url">
        <figcaption class="description-text">
          <span class="title">{{ title }}</span>
          <strong class="episode">{{ getEpisode }}</strong>
        </figcaption>
        <span class="description-info-btn" v-if="isRecent">
          <span class="blind">작품 정보 보기</span>
          <icon-base><icon-info /></icon-base>
        </span>
      </a>
    </figure>
  </li>
</template>

<script>
import IconPlay from "./icons/IconPlay.vue";
import IconInfo from "./icons/IconInfo.vue";
import IconBase from "./IconBase.vue";
export default {
  name: "CarouselItem",
  components: {
    IconBase,
    IconPlay,
    IconInfo,
  },
  props: {
    title: {
      type: String,
    },
    episode: {
      type: String,
    },
    img: {
      type: String,
    },
    url: {
      type: String,
    },
    isMovie: {
      type: Boolean,
    },
    isRecent: {
      type: Boolean,
    },
    progress: {
      type: String,
    },
  },
  computed: {
    createThumbnail() {
      return `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      url("${this.img}") center/cover`;
    },
    getEpisode() {
      return this.isMovie ? "극장판" : this.episode;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 55vw;
  margin-right: 1rem;
  figure {
    display: flex;
    flex-direction: column;
  }
  .thumbnail {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 0.3rem;
    overflow: hidden;
    .thumbnail-play-btn {
      position: absolute;
      z-index: 3;
      width: 4rem;
      height: 4rem;
      left: calc(27.5vw - 2rem);
      top: calc(27.5vw * 9 / 16 - 2rem);
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      svg {
        width: 2rem;
      }
    }
    .progress-bar {
      position: absolute;
      z-index: 3;
      left: 0.8rem;
      bottom: 0.8rem;
      width: calc(55vw - 1.6rem);
      height: 0.5rem;
      border-radius: 0.2rem;
      background-color: var(--bg-300);
      .progress {
        height: 100%;
        border-radius: 0.15rem;
        background-color: var(--theme-500);
      }
    }
  }
  .description {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.8rem;
    .description-info-btn {
      display: block;
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      color: var(--bg-500);
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .description-text {
      font-size: 1.3rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 0.5rem;
      .title {
        line-height: 1.2;
      }
    }
  }
}
@media all and (min-width: 768px) {
  .item {
    width: 32vw;
    .thumbnail {
      .thumbnail-play-btn {
        width: 5rem;
        height: 5rem;
        left: calc(16vw - 2.5rem);
        top: calc(16vw * 9 / 16 - 2.5rem);
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
      .progress-bar {
        width: calc(32vw - 2rem);
        left: 1rem;
        bottom: 1rem;
      }
    }
    .description {
      .description-info-btn {
        width: 2.5rem;
        height: 2.5rem;
      }
      .description-text {
        font-size: 1.4rem;
        gap: 0.8rem;
      }
    }
  }
}
@media all and (min-width: 1024px) {
  .item {
    width: 28vw;
    .thumbnail {
      .thumbnail-play-btn {
        width: 7rem;
        height: 7rem;
        left: calc(14vw - 3.5rem);
        top: calc(14vw * 9 / 16 - 3.5rem);
        svg {
          width: 4rem;
          height: 4rem;
        }
      }
      .progress-bar {
        width: calc(28vw - 3rem);
        bottom: 1.5rem;
        left: 1.5rem;
      }
    }
    .description {
      .description-info-btn {
        width: 3rem;
        height: 3rem;
      }
      .description-text {
        font-size: 1.55rem;
        gap: 0.8rem;
      }
    }
  }
}
@media all and (min-width: 1920px) {
  .item {
    width: 15vw;
    .thumbnail {
      .thumbnail-play-btn {
        left: calc(7.5vw - 3.5rem);
        top: calc(7.5vw * 9 / 16 - 3.5rem);
        svg {
          width: 4rem;
          height: 4rem;
        }
      }
      .progress-bar {
        width: calc(15vw - 3rem);
        bottom: 1.5rem;
        left: 1.5rem;
      }
    }
  }
}
</style>

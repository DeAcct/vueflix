<template>
  <li class="item">
    <figure>
      <a class="thumbnail" :href="url" :title="`${title} 썸네일`">
        <img
          :data-url="img"
          :alt="`${title}썸네일`"
          class="thumbnail__img"
          v-intersection-lazy
        />
        <div class="thumbnail__progress-bar" v-if="isRecent">
          <div class="progress" :style="`width:${progress}`"></div>
        </div>
        <div class="thumbnail__play-btn" v-if="isRecent">
          <span class="blind">{{ title }} 재생하기</span>
          <icon-base icon-name="재생 버튼"><icon-play /></icon-base>
        </div>
      </a>
      <figcaption class="description">
        <a class="description__text" :href="url">
          <div class="text">
            <span class="title">{{ title }}</span>
            <strong class="episode">{{ getEpisode }}</strong>
          </div>
          <span class="description__info-btn" v-if="isRecent">
            <span class="blind">작품 정보 보기</span>
            <icon-base icon-name="작품 정보 버튼"><icon-info /></icon-base>
          </span>
        </a>
      </figcaption>
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
    getEpisode() {
      return this.isMovie ? "극장판" : this.episode;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 55vw;
  height: calc(55vw * 9 / 16 + 8rem);
  margin-right: 1rem;
  figure {
    display: flex;
    flex-direction: column;
  }
  .thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(55vw / 16 * 9);
    border-radius: 0.3rem;
    overflow: hidden;
    transition: 150ms ease-out;
    &__img {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__play-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      svg {
        width: 2rem;
      }
    }
    &__progress-bar {
      position: absolute;
      z-index: 3;
      left: 0.8rem;
      bottom: 0.8rem;
      width: calc(100% - 1.6rem);
      height: 0.5rem;
      border-radius: 0.2rem;
      background-color: var(--bg-300);
      .progress {
        height: 100%;
        border-radius: 0.15rem;
        background-color: var(--theme-500);
      }
    }
    &:focus {
      opacity: 0.5;
    }
  }
  .description {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.8rem;

    &__text {
      font-size: 1.1rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .text {
        font-size: 1.3rem;
        color: inherit;
        display: block;
        width: 80%;
        span {
          font-weight: 500;
          line-height: 1.3;
          display: block;
          margin-bottom: 0.3rem;
        }
      }
    }
    &__info-btn {
      display: block;
      width: 2rem;
      height: 2rem;
      min-width: 2rem;
      color: var(--bg-500);
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media all and (min-width: 768px) {
  .item {
    width: 32vw;
    height: calc(32vw * 9 / 16 + 8rem);
    .thumbnail {
      height: calc(32vw / 16 * 9);
      &__play-btn {
        width: 5rem;
        height: 5rem;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
      &__progress-bar {
        width: calc(100% - 2rem);
        left: 1rem;
        bottom: 1rem;
      }
    }
    .description {
      &__info-btn {
        width: 2.5rem;
        height: 2.5rem;
      }
      &__text {
        font-size: 1.4rem;
        gap: 0.8rem;
      }
    }
  }
}
@media all and (min-width: 1024px) {
  .item {
    width: 28vw;
    height: calc(28vw * 9 / 16 + 8rem);
    .thumbnail {
      height: calc(28vw / 16 * 9);
      &__play-btn {
        width: 7rem;
        height: 7rem;
        svg {
          width: 4rem;
          height: 4rem;
        }
      }
      &__progress-bar {
        width: calc(100% - 3rem);
        bottom: 1.5rem;
        left: 1.5rem;
      }
    }
    .description {
      &__info-btn {
        width: 3rem;
        height: 3rem;
      }
      &__text {
        span,
        strong {
          font-size: 1.5rem;
        }
      }
    }
  }
}
@media all and (min-width: 1920px) {
  .item {
    width: 15vw;
    height: calc(15vw * 9 / 16 + 8rem);
    .thumbnail {
      height: calc(15vw / 16 * 9);
      &__play-btn {
        svg {
          width: 4rem;
          height: 4rem;
        }
      }
      &__progress-bar {
        width: calc(100% - 3rem);
        bottom: 1.5rem;
        left: 1.5rem;
      }
    }
  }
}
</style>

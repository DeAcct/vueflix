<template>
  <li class="item">
    <router-link :to="`/anime/${aniTitle}`">
      <span
        :class="[
          'thumbnail',
          'loading-target',
          { 'thumbnail--loaded': isLoaded },
        ]"
      >
        <img
          :src="thumbnailSrc"
          :alt="`${aniTitle} 썸네일`"
          :class="['thumbnail__img', { 'thumbnail__img--loaded': isLoaded }]"
          @load="loadTrigger"
        />
        <span class="thumbnail__progress-bar" v-if="isRecent">
          <span class="progress" :style="`width:${progress}`"></span>
        </span>
      </span>
      <span class="text">
        <span class="title">{{ aniTitle }}</span>
        <strong class="episode" v-if="part && index">
          {{ part }}기 {{ index }}화
        </strong>
      </span>
    </router-link>
  </li>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default {
  name: "CarouselItem",
  props: {
    aniTitle: {
      type: String,
    },
    episodeThumbnail: {
      type: String,
    },
    part: {
      type: Number,
    },
    index: {
      type: Number,
    },
    progress: {
      type: String,
    },
    isRecent: {
      type: Boolean,
    },
    developFirebase: {
      type: Boolean,
    },
  },
  data() {
    return {
      thumbnailSrc: this.img,
      isLoaded: false,
    };
  },
  async mounted() {
    const storage = getStorage();
    const thumbnailRef = ref(
      storage,
      `${this.aniTitle}/${this.episodeThumbnail}`
    );
    this.thumbnailSrc = this.developFirebase
      ? await getDownloadURL(thumbnailRef)
      : this.episodeThumbnail;
  },
  methods: {
    loadTrigger() {
      this.isLoaded = true;
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
    margin-bottom: 1rem;
    transition: 150ms ease-out;
    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      visibility: hidden;
      transition: 150ms ease-out;
      &--loaded {
        opacity: 1;
        visibility: visible;
      }
    }
    &__progress-bar {
      position: absolute;
      z-index: 3;
      left: 0.8rem;
      bottom: 0.8rem;
      width: calc(100% - 1.6rem);
      height: 0.5rem;
      border-radius: 9999px;
      background-color: var(--bg-300);
      .progress {
        display: block;
        height: 100%;
        border-radius: 9999px;
        background-color: var(--theme-500);
      }
    }
    &:focus {
      opacity: 0.5;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    .title {
      font-weight: 500;
      margin-bottom: 0.5rem;
      line-height: 1.5;
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
    .text {
      font-size: 1.5rem;
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
    .text {
      font-size: 1.7rem;
      .title {
        margin-bottom: 0.75rem;
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
      margin-bottom: 1.5rem;
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
    .text {
      font-size: 2rem;
      .title {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

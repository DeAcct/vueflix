<template>
  <li class="thumbnail-set">
    <router-link
      :to="data.continueLink || `/anime/${data.aniTitle}`"
      @click.prevent
    >
      <optimized-image
        class="thumbnail-set__thumbnail"
        :src="thumbnailSrc"
        :alt="`${data.aniTitle} 썸네일`"
      ></optimized-image>
    </router-link>
    <div class="thumbnail-set__info">
      <router-link
        class="thumbnail-set__text"
        :to="`/anime/${data.aniTitle}`"
        :style="titleWidth"
      >
        <span class="thumbnail-set__title" :style="titleBreak">
          {{ data.aniTitle }}
        </span>
        <strong class="thumbnail-set__part-index" v-if="data.watchedPercent">
          {{ data.part }}기 {{ data.index }}화
        </strong>
      </router-link>
      <progress-widget
        class="thumbnail-set__watched-percent"
        :percent="data.watchedPercent"
        v-if="progress"
      ></progress-widget>
    </div>
  </li>
</template>

<script>
import ProgressWidget from "./ProgressWidget.vue";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import OptimizedImage from "./OptimizedImage.vue";
export default {
  name: "ThumbnailSet",
  components: { ProgressWidget, OptimizedImage },
  props: {
    type: {
      validator(value) {
        return ["series", "episode"].includes(value);
      },
    },
    data: {
      type: Object,
    },
    progress: {
      type: Boolean,
    },
  },
  data() {
    return {
      thumbnailSrc: this.img,
    };
  },
  async mounted() {
    const { aniTitle, episodeThumbnail } = this.data;
    const storage = getStorage();
    const thumbnailRef = ref(
      storage,
      `${aniTitle}/${
        this.type === "episode"
          ? episodeThumbnail
          : `${aniTitle.replaceAll(/:/g, "_")}.webp`
      }`
    );
    this.thumbnailSrc = await getDownloadURL(thumbnailRef);
    console.clear();
  },
  computed: {
    titleWidth() {
      return `width: ${
        this.type === "series" ? "100%" : "calc(100% - 3.6rem)"
      };`;
    },
    titleBreak() {
      return `-webkit-line-clamp: ${this.type === "series" ? 2 : 1};`;
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail-set {
  display: flex;
  flex-direction: column;
  width: 55vw;
  position: relative;
  &__thumbnail {
    --radius: 0.3rem;
    --aspect-ratio: calc(9 / 16 * 100%);
    margin-bottom: 1rem;
  }
  &__watched-percent {
    position: absolute;
    right: 0;
    width: 3.6rem;
    height: 3.6rem;
    flex-shrink: 0;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  &__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    --episode-title-width: 20ch;
    overflow: hidden;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 500;
  }
  &__part-index {
    font-size: 1.3rem;
  }
}
@media all and (min-width: 768px) {
  .thumbnail-set {
    width: 32vw;
  }
}

@media all and (min-width: 1024px) {
  .thumbnail-set {
    width: 28vw;
    &__title {
      font-size: 1.7rem;
      --episode-title-width: 30ch;
    }
    &__part-index {
      font-size: 1.5rem;
    }
  }
}

@media all and (min-width: 1920px) {
  .thumbnail-set {
    width: 15vw;
    &__ratio-holder {
      margin-bottom: 1.7rem;
    }
    &__text {
      gap: 1rem;
    }
    &__title {
      --episode-title-width: 20ch;
      font-size: 2rem;
    }
  }
}
</style>

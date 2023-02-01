<template>
  <li class="carousel-item">
    <router-link :to="data.continueLink">
      <span :class="['carousel-item__ratio-holder', 'loading-target']">
        <img
          :src="thumbnailSrc"
          :alt="`${aniTitle} 썸네일`"
          :class="[
            'carousel-item__thumbnail',
            { 'carousel-item__thumbnail--loaded': isLoaded },
          ]"
          @load="loadTrigger"
        />
        <!--span class="carousel-item__progress-bar">
          <span class="progress" :style="`width:${data.watchedPercent}`"></span>
        </span-->
      </span>
    </router-link>
    <div class="carousel-item__info">
      <router-link class="carousel-item__text" :to="`/anime/${data.aniTitle}`">
        <span class="carousel-item__title">{{ data.aniTitle }}</span>
        <strong class="carousel-item__part-index" v-if="data.watchedPercent">
          {{ data.part }}기 {{ data.index }}화
        </strong>
      </router-link>
      <progress-widget
        class="carousel-item__progress-bar"
        :percent="data.watchedPercent"
        v-if="progress"
      ></progress-widget>
    </div>
  </li>
</template>

<script>
import ProgressWidget from "./ProgressWidget.vue";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default {
  name: "CarouselItem",
  components: { ProgressWidget },
  props: {
    aniTitle: {
      type: String,
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
      isLoaded: false,
    };
  },
  async mounted() {
    console.log(this.progress);
    const { aniTitle, episodeThumbnail } = this.data;
    const storage = getStorage();
    const thumbnailRef = ref(storage, `${aniTitle}/${episodeThumbnail}`);
    this.thumbnailSrc = await getDownloadURL(thumbnailRef);
  },
  methods: {
    loadTrigger() {
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  width: 55vw;
  margin-right: 1rem;
  &__ratio-holder {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 65.25%;
    border-radius: 0.3rem;
    overflow: hidden;
    margin-bottom: 1rem;

    &:focus {
      opacity: 0.5;
    }
  }
  &__thumbnail {
    position: absolute;
    top: 0;
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
    width: 3.6rem;
    height: 3.6rem;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 500;
    width: 20ch;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__part-index {
    font-size: 1.3rem;
  }
}
@media all and (min-width: 768px) {
  .carousel-item {
    width: 32vw;
  }
}

@media all and (min-width: 1024px) {
  .carousel-item {
    width: 28vw;
    &__title {
      font-size: 1.7rem;
    }
    &__part-index {
      font-size: 1.5rem;
    }
  }
}

@media all and (min-width: 1920px) {
  .carousel-item {
    width: 15vw;
    &__ratio-holder {
      margin-bottom: 1.7rem;
    }
    &__text {
      gap: 1rem;
    }
    &__title {
      font-size: 2rem;
    }
  }
}
</style>

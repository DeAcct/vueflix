<template>
  <section class="carousel">
    <div class="carousel__head-control">
      <h2><slot></slot></h2>
      <day-selector v-if="isDaily" @dayBtnClick="dailyReset" />
      <div class="btn-wrap">
        <button class="prev-btn" @click="prev" :disabled="!prevActive">
          <icon-base icon-name="이전"><icon-arrow-prev /></icon-base>
        </button>
        <button
          class="next-btn"
          title="다음"
          @click="next"
          :disabled="!nextActive"
        >
          <icon-base icon-name="다음"><icon-arrow-next /></icon-base>
        </button>
      </div>
    </div>
    <div class="carousel__track">
      <ul class="items" :style="style">
        <template v-if="isRecent">
          <carousel-item
            v-for="anime in animeList"
            :key="anime.aniTitle"
            :ani-title="anime.aniTitle"
            :episode-thumbnail="anime.episodeThumbnail"
            :part="anime.part"
            :index="anime.index"
            :isRecent="isRecent"
            :progress="anime.watchedPercent"
            :develop-firebase="true"
          />
        </template>
        <template v-else-if="isDaily">
          <carousel-item
            v-for="anime in dailyShownList"
            :key="anime.title"
            :ani-title="anime.title"
            :episode-thumbnail="anime.img"
            :url="`/anime/${anime.aniTitle}/`"
            :develop-firebase="false"
          />
        </template>
        <template v-else-if="isRecommend">
          <carousel-item
            v-for="anime in animeList"
            :key="anime.aniTitle"
            :ani-title="anime.aniTitle"
            :episode-thumbnail="anime.episodeThumbnail"
            :url="`/anime/${anime.aniTitle}/`"
            :progress="anime.watchedPercent"
            :develop-firebase="true"
          />
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
/*데일리를 파이어베이스로 옮길 때까기 develop-firebase prop 유지*/
import CarouselItem from "./CarouselItem.vue";
import IconBase from "./IconBase.vue";
import DaySelector from "./DaySelector.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "VueflixCarousel",
  components: {
    CarouselItem,
    IconBase,
    IconArrowNext,
    IconArrowPrev,
    DaySelector,
  },
  props: {
    animeList: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      resolution: window.innerWidth,
      carouselNumber: 0,
      shownItems: this.resolution >= 1920 ? 7 : 4,
      isRecent: this.type === "recent",
      isDaily: this.type === "daily",
      isRecommend: this.type === "recommend",
      animeResult: {},
    };
  },
  computed: {
    style() {
      return {
        transform: `translateX(${-this.carouselNumber * this.resolution}px)`,
      };
    },
    carouselLimit() {
      if (this.isDaily) {
        return Math.floor(
          this.$store.state.daily.shownList.length / this.shownItems
        );
      } else {
        return Math.floor(this.animeList.length / this.shownItems);
      }
    },
    nextActive() {
      return this.carouselNumber < this.carouselLimit;
    },
    prevActive() {
      return this.carouselNumber > 0;
    },
    dailyShownList() {
      return this.$store.state.daily.shownList;
    },
  },
  methods: {
    next() {
      this.carouselNumber++;
    },
    prev() {
      this.carouselNumber--;
    },
    dailyReset() {
      this.carouselNumber = 0;
    },
  },
  async mounted() {
    window.addEventListener("resize", () => {
      this.resolution = window.innerWidth;
      this.shownItems = this.resolution >= 1920 ? 7 : 4;
      this.carouselNumber = 0;
    });
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }
  &__head-control {
    padding: 0 2rem;
    h2 {
      font-size: 1.8rem;
      margin-right: 2rem;
    }
    .btn-wrap {
      display: none;
    }
  }
  &__track {
    width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .items {
      display: flex;
      width: fit-content;
      padding: 0 2rem;
      margin: 0;
      transition: 300ms ease-out;
    }
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    &:not(:first-of-type) {
      margin-top: 3rem;
    }
    &__head-control {
      padding: 0 5rem;
      h2 {
        font-size: 2.3rem;
      }
      .btn-wrap {
        display: none;
      }
    }
    &__track {
      width: 100%;
      margin-top: 1.5rem;
      .items {
        padding: 0 5rem;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .carousel {
    position: relative;
    &__head-control {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h2 {
        font-size: 2.8rem;
      }
    }
    &__track {
      width: 100%;
      margin-top: 2rem;
    }
  }
}

@media screen and (min-width: 1025px) {
  .carousel {
    &__head-control .btn-wrap {
      display: flex;
      justify-content: flex-end;
      flex: 2;
      height: 4rem;
      button {
        width: 4rem;
        height: 4rem;
        background-color: var(--theme-500);
        border-radius: 50%;
        color: #fff;
        &:disabled {
          cursor: not-allowed;
          background-color: var(--bg-300);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .carousel {
    &__head-control {
      h2 {
        font-size: 3.2rem;
      }
    }
  }
}
</style>

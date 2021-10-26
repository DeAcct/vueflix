<template>
  <section class="carousel">
    <div class="head-control">
      <h2><slot></slot></h2>
      <day-selector v-if="isDaily" />
      <div class="btn-wrap">
        <button
          class="prev-btn"
          title="이전"
          @click="prev"
          :class="{ active: prevActive }"
        >
          <icon-base><icon-arrow-prev /></icon-base>
        </button>
        <button
          class="next-btn"
          title="다음"
          @click="next"
          :class="{ active: nextActive }"
        >
          <icon-base><icon-arrow-next /></icon-base>
        </button>
      </div>
    </div>
    <div class="wrap">
      <ul class="items" :style="style">
        <template v-if="isDaily">
          <carousel-item
            v-for="anime in dailyShownList"
            :key="anime.title"
            :title="anime.title"
            :img="anime.img"
            :url="anime.url"
          />
        </template>
        <template v-else>
          <carousel-item
            v-for="anime in animeList"
            :key="anime.title"
            :title="anime.title"
            :episode="anime.episode"
            :img="anime.img"
            :url="anime.url"
            :isMovie="anime.isMovie"
            :isRecent="isRecent"
            :progress="anime.progress"
          />
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import IconBase from "./IconBase.vue";
import DaySelector from "../components/DaySelector.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "Carousel",
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
      filteredList: [],
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
        return Math.floor(this.filteredList.length / this.shownItems);
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
      if (this.nextActive) {
        this.carouselNumber++;
      } else {
        return;
      }
    },
    prev() {
      if (this.prevActive) {
        this.carouselNumber--;
      } else {
        return;
      }
    },
  },
  mounted() {
    const todayNumber = new Date().getDay();
    let today;
    switch (todayNumber) {
      case 0:
        today = "일";
        break;
      case 1:
        today = "월";
        break;
      case 2:
        today = "화";
        break;
      case 3:
        today = "수";
        break;
      case 4:
        today = "목";
        break;
      case 5:
        today = "금";
        break;
      default:
        today = "토";
    }
    this.$store.commit("daily/changeAnime", today);
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
  .head-control {
    padding: 0 2rem;
    h2 {
      font-size: 1.8rem;
      margin-right: 2rem;
    }
    .btn-wrap {
      display: none;
    }
  }
  .wrap {
    width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .items {
    display: flex;
    width: fit-content;
    padding: 0 2rem;
    margin: 0;
    transition: 300ms ease-out;
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    &:not(:first-of-type) {
      margin-top: 3rem;
    }
    .head-control {
      padding: 0 5rem;
      h2 {
        font-size: 2.3rem;
      }
      .btn-wrap {
        display: none;
      }
    }
    .wrap {
      width: 100%;
      margin-top: 1.5rem;
    }
    .items {
      padding: 0 5rem;
    }
  }
}
@media screen and (min-width: 1024px) {
  .carousel {
    position: relative;
    .head-control {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h2 {
        font-size: 2.8rem;
      }
    }
    .wrap {
      width: 100%;
      margin-top: 2rem;
    }
  }
}

@media screen and (min-width: 1025px) {
  .carousel .head-control .btn-wrap {
    display: flex;
    justify-content: flex-end;
    flex: 2;
    gap: 1rem;
    height: 4rem;
    margin-left: 2rem;
    button {
      width: 4rem;
      height: 4rem;
      background-color: var(--bg-300);
      border-radius: 50%;
      color: #fff;
      cursor: default;
      &.active {
        cursor: pointer;
        background-color: var(--theme-500);
      }
    }
  }
}
</style>

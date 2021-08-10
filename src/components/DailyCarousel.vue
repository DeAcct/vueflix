<!--template>
  <section class="daily-carousel">
    <div class="head-control">
      <h2>요일별 신작</h2>
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
    <div class="day-selector">
      <button
        v-for="(anime, index) in animeList"
        :key="index"
        :class="{ active: anime.day === day }"
        @click="dayBtnClick($event)"
      >
        {{ anime.day }}
      </button>
    </div>
    <div class="wrap">
      <ul class="items">
        <carousel-item
          v-for="anime in filterAnimeList"
          :key="anime.title"
          :title="anime.title"
          :img="anime.img"
          :url="anime.url"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "DailyCarousel",
  components: {
    CarouselItem,
    IconBase,
    IconArrowNext,
    IconArrowPrev,
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
      day: this.getDayString(),
    };
  },
  computed: {
    filterAnimeList() {
      const filteredList = this.animeList.filter(
        (animes) => animes.day === this.day
      );
      return filteredList[0].animes;
    },
  },
  methods: {
    dayBtnClick(e) {
      this.day = e.target.textContent;
    },
    getDayString() {
      switch (new Date().getDay()) {
        case 0:
          return "일";
        case 1:
          return "월";
        case 2:
          return "화";
        case 3:
          return "수";
        case 4:
          return "목";
        case 5:
          return "금";
        default:
          return "토";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.daily-carousel {
  width: 100%;
  margin-top: 3rem;
  .head-control {
    padding: 0 2rem;
    h2 {
      font-size: 1.8rem;
    }
    .btn-wrap {
      display: none;
    }
  }
  .day-selector {
    display: flex;
    height: 3.5rem;
    margin-left: 2rem;
    gap: 1rem;
    button {
      width: 3.5rem;
      height: 100%;
      background-color: var(--bg-300);
      border-radius: 50%;
      color: #fff;
      &.active {
        background-color: var(--theme-500);
      }
    }
  }
  .wrap {
    width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    .btn-wrap {
      display: none;
    }
  }
  .items {
    display: flex;
    width: fit-content;
    padding: 0 2rem;
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .carousel {
    h2 {
      font-size: 2.3rem;
      padding-left: 5rem;
    }
    .wrap {
      width: 100%;
      margin-top: 1.5rem;
      scrollbar-width: none;
    }
    .items {
      padding: 0 5rem;
    }
  }
}
@media screen and (min-width: 1024px) {
  .carousel {
    .head-control {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h2 {
        font-size: 2.8rem;
      }
      .btn-wrap {
        display: flex;
        justify-content: space-between;
        width: 9rem;
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
    .wrap {
      width: 100%;
      margin-top: 2rem;
    }
  }
}
</style>

<template>
  <div class="anime-item-head inner">
    <h1 class="blind">뷰플릭스</h1>
    <div class="navigation" v-if="isMobile">
      <button class="back" @click="goBack">
        <icon-base iconName="뒤로가기">
          <icon-arrow-prev></icon-arrow-prev>
        </icon-base>
      </button>
      <button class="overflow-btn" title="더보기 메뉴"></button>
    </div>
    <div class="anime-info">
      <div class="poster loading-target">
        <img :src="poster" :alt="`${title} 포스터`" />
      </div>
      <div class="col-right">
        <div>
          <p
            :class="[
              'sub-info',
              'loading-target',
              { 'sub-info--loaded': type && rating },
            ]"
          >
            <span class="division-pipe">
              {{ type }}
            </span>
            <span class="division-pipe">
              {{ rating }}
            </span>
            <span class="division-pipe">
              {{ isEnd ? "완결" : "방영중" }}
            </span>
          </p>
          <h2 :class="['title', 'loading-target', { 'title--loaded': title }]">
            {{ title }}
          </h2>
        </div>
        <div>
          <ul
            :class="['genres', 'loading-target', { 'genres--loaded': genres }]"
          >
            <li
              v-for="genre in genres"
              :key="genre"
              class="genre division-pipe"
            >
              {{ genre }}
            </li>
          </ul>
          <p
            :class="[
              'star-rating',
              'loading-target',
              { 'star-rating--loaded': starRatingAvg },
            ]"
          >
            별점 {{ starRatingAvg }}
          </p>
        </div>
      </div>
    </div>
    <div class="anime-interact-btn-area">
      <anime-wanna-see-btn @click="wannaSeeToggle" :isEnabled="wannaSeeBool">
        <template v-slot:icon>
          <icon-wanna-see />
        </template>
        <template v-slot:label>보고싶다</template>
      </anime-wanna-see-btn>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import AnimeWannaSeeBtn from "./AnimeWannaSeeBtn.vue";
import IconWannaSee from "./icons/IconWannaSee.vue";
export default {
  components: {
    IconBase,
    IconArrowPrev,
    AnimeWannaSeeBtn,
    IconWannaSee,
  },
  name: "AnimeItemHead",
  props: {
    title: {
      type: String,
    },
    poster: {
      type: String,
    },

    type: {
      type: String,
    },
    rating: {
      //방송심의 prop
      type: String,
    },
    isEnd: {
      type: Boolean,
    },

    genres: {
      type: Array,
    },
    starRatingAvg: {
      //별점 평균 prop
      type: Number,
    },
  },
  created() {
    window.addEventListener("resize", this.checkResolution);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResolution);
  },
  data() {
    return {
      wannaSeeBool: false,
      starRatingBool: false,
      isMobile: window.innerWidth <= 768,
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    wannaSeeToggle() {
      this.wannaSeeBool = !this.wannaSeeBool;
    },
    starRatingToggle() {
      this.starRatingBool = !this.starRatingBool;
    },
    checkResolution() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-item-head {
  width: 100%;
  min-height: 24rem;
  background-color: var(--anime-item-head);
  padding: {
    top: 2rem;
    bottom: 2rem;
  }
  .navigation {
    display: flex;
    align-items: center;
    .back {
      color: #fff;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  .anime-info {
    display: flex;
    margin-top: 3rem;
    .poster {
      width: 7.5rem;
      height: calc(7.5rem / 3 * 4);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        font-size: 0.1rem;
      }
    }
    .col-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 1rem;
      .division-pipe {
        color: inherit;
        font-size: 1.2rem;
        &:not(:last-child):after {
          content: "|";
          margin: 0 0.3rem;
          font-size: inherit;
        }
      }
      .sub-info {
        display: flex;
        align-items: center;
        color: transparent;
        &--loaded {
          color: var(--top-item);
          animation: none;
          background: transparent;
        }
      }
      .title {
        color: transparent;
        font-size: 1.7rem;
        margin-top: 0.7rem;
        &--loaded {
          color: var(--top-item);
          animation: none;
          background: transparent;
        }
      }
      .genres {
        display: flex;
        align-items: center;
        color: transparent;
        .genre {
          color: inherit;
          font-size: 1.1rem;
        }
        &--loaded {
          background: transparent;
          animation: none;
          color: var(--top-item);
        }
      }
      .star-rating {
        color: transparent;
        font-size: 1.1rem;
        margin-top: 0.7rem;
        &--loaded {
          background: transparent;
          animation: none;
          color: var(--top-item);
        }
      }
    }
  }
  .anime-interact-btn-area {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
    .anime-interact-btn {
      width: 50%;
    }
  }

  .loading-target {
    animation: loading-animation 1000ms ease infinite;
    background: linear-gradient(
      135deg,
      var(--anime-poster-load-700),
      var(--anime-poster-load-500)
    );
    background-size: 200%;
    background-repeat: repeat-x;
  }
  @keyframes loading-animation {
    from {
      background-position-x: 0%;
    }
    to {
      background-position-x: 200%;
    }
  }
}
</style>

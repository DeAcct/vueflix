<template>
  <div class="anime-item-head">
    <h1 class="blind">뷰플릭스</h1>
    <div class="navigation inner" v-if="isMobile">
      <button class="back" @click="goBack">
        <icon-base iconName="뒤로가기">
          <icon-arrow-prev />
        </icon-base>
      </button>
      <button class="overflow-btn" @click="openOverflowMenu">
        <icon-base iconName="더보기 메뉴">
          <icon-overflow />
        </icon-base>
      </button>
    </div>
    <div class="anime-info inner">
      <div :class="['poster', 'loading-target', { 'poster--loaded': poster }]">
        <img :src="poster" :alt="`${title} 포스터`" />
        <anime-action-btn
          @click="wannaSeeToggle"
          :isEnabled="wannaSeeBool"
          type="wanna-see"
          v-if="!isMobile"
        >
          <template v-slot:icon>
            <icon-wanna-see />
          </template>
          <template v-slot:label>보고싶다</template>
        </anime-action-btn>
      </div>
      <div class="col-right">
        <div
          :class="[
            'row-top',
            'loading-target',
            { 'row-top--loaded': type && rating && title },
          ]"
        >
          <p class="sub-info">
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
          <h2 class="title">
            {{ title }}
          </h2>
        </div>
        <div
          :class="[
            'row-bottom',
            'loading-target',
            { 'row-bottom--loaded': genres && starRatingAvg },
          ]"
        >
          <ul class="genres">
            <li
              v-for="genre in genres"
              :key="genre"
              class="genre division-pipe"
            >
              {{ genre }}
            </li>
          </ul>
          <p class="star-rating-number">
            별점 {{ starRatingAvg ? starRatingAvg.toFixed(1) : "" }}
          </p>
          <star-interaction
            :rating="myRating"
            v-if="!notPC"
            textColor="#fff"
            @starChanged="starChanged"
          />
        </div>
      </div>
    </div>
    <div class="anime-interact-btn-area inner" v-if="notPC">
      <anime-action-btn
        @click="wannaSeeToggle"
        :isEnabled="wannaSeeBool"
        type="wanna-see"
      >
        <template v-slot:icon>
          <icon-wanna-see />
        </template>
        <template v-slot:label>보고싶다</template>
      </anime-action-btn>
      <anime-action-btn
        @click="starModalOpen"
        :isEnabled="isUserRated"
        type="star-rating"
      >
        <template v-slot:icon>
          <icon-star-rating />
        </template>
        <template v-slot:label>별점주기</template>
      </anime-action-btn>
    </div>
    <div class="continue-play-bg">
      <button class="continue-play-btn">1화 무료보기</button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import AnimeActionBtn from "./AnimeActionBtn.vue";
import StarInteraction from "./StarInteraction.vue";
import IconWannaSee from "./icons/IconWannaSee.vue";
import IconStarRating from "./icons/IconStarRating.vue";
export default {
  name: "AnimeItemHead",
  components: {
    IconBase,
    IconArrowPrev,
    IconOverflow,
    AnimeActionBtn,
    StarInteraction,
    IconWannaSee,
    IconStarRating,
  },
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
    isUserRated: {
      type: Boolean,
    },

    genres: {
      type: Array,
    },
    starRatingAvg: {
      //별점 평균 prop
      type: Number,
    },
    myRating: {
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
      isMobile: window.innerWidth <= 768,
      notPC: window.innerWidth <= 1080,
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    wannaSeeToggle() {
      this.wannaSeeBool = !this.wannaSeeBool;
    },
    checkResolution() {
      this.isMobile = window.innerWidth <= 768;
      this.notPC = window.innerWidth <= 1080;
    },
    starModalOpen() {
      this.$emit("starModalOpened");
    },
    openOverflowMenu() {
      this.$emit("overflowMenuOpened");
    },
    starChanged(e) {
      this.$emit("starChanged", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-item-head {
  background-color: var(--anime-item-head);

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back {
      color: #fff;
      width: 2.4rem;
      height: 2.4rem;
    }
    .overflow-btn {
      color: #fff;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  .anime-info {
    display: flex;
    margin-top: 3rem;
    .poster {
      min-width: 9rem;
      height: calc(9rem / 3 * 4);
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        font-size: 0.1rem;
        opacity: 0;
        transition: opacity 150ms ease-out;
      }
      &--loaded {
        animation: none;
        img {
          opacity: 1;
        }
      }
    }
    .col-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 1rem;
      .row-top {
        color: transparent;
        width: 45vw;
        height: 4rem;
        transition: 150ms ease-out;
        &--loaded {
          width: auto;
          color: var(--top-item);
          background: transparent;
          animation: none;
        }
      }
      .division-pipe {
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 1.2rem;
        &:not(:last-child):after {
          content: "|";
          margin: 0 0.5rem;
          font-size: 1.2rem;
          font-weight: 300;
        }
      }
      .sub-info {
        display: flex;
        align-items: center;
        color: inherit;
      }
      .title {
        color: inherit;
        font-size: 1.5rem;
        margin-top: 0.7rem;
        line-height: 1.3;
      }
      .row-bottom {
        color: transparent;
        transition: 150ms ease-out;
        width: 5rem;
        height: 3rem;
        &--loaded {
          color: var(--top-item);
          width: auto;
          height: auto;
          background: transparent;
          animation: none;
        }
      }
      .genres {
        display: flex;
        align-items: center;
        color: inherit;
        .genre {
          display: flex;
          align-items: center;
          color: inherit;
          font-size: 1.1rem;
        }
      }
      .star-rating-number {
        color: inherit;
        font-size: 1.1rem;
        margin-top: 0.7rem;
      }
    }
  }
  .anime-interact-btn-area {
    width: 100%;
    display: flex;
    margin: {
      top: 1.5rem;
    }
    .anime-interact-btn {
      width: 50%;
    }
  }

  .continue-play-bg {
    width: 100%;
    padding: 1.5rem var(--inner-padding);
    .continue-play-btn {
      width: 100%;
      height: 100%;
      padding: 1.5rem 0;
      background-color: var(--theme-500);
      border-radius: 0.3rem;
      color: #fff;
      font-weight: 700;
      font-size: 1.5rem;
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

@media screen and (min-width: 1080px) {
  .anime-item-head {
    display: flex;
    justify-content: space-between;
    padding: 0 calc((100% - 118rem) / 2);
    .anime-info {
      padding: 0;
      margin-top: 0;
      height: fit-content;
      .poster {
        position: relative;
        width: 26rem;
        height: calc(26rem / 3 * 4);
        overflow: initial;
        box-shadow: 0 0 3rem var(--box-shadow);
        .anime-interact-btn {
          position: absolute;
          bottom: 0;
          background-color: var(--anime-item-head);
          width: 100%;
          padding: 1.2rem 0 1.4rem;
        }
      }
      .col-right {
        flex: 1;
        justify-content: space-between;
        margin-left: 2.5rem;
        .division-pipe {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .title {
          font-size: 3rem;
          font-weight: 900;
          margin-top: 1.5rem;
        }
        .row-top {
          height: auto;
        }
        .row-bottom {
          width: 40rem;
          margin-bottom: 8rem;
          &:not(.row-bottom--loaded) {
            .star-interaction {
              opacity: 0;
            }
          }
        }
        .genres .genre {
          font-size: 1.6rem;
          font-weight: 700;
        }
        .star-rating-number {
          font-size: 1.6rem;
          font-weight: 500;
          margin: {
            top: 1.5rem;
            bottom: 1.5rem;
          }
        }
      }
    }
    .continue-play-bg {
      width: 20rem;
      align-self: flex-end;
      padding: 0;
      margin-bottom: 3rem;
      .continue-play-btn {
        width: 20rem;
        border-radius: 3rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
<template>
  <component :is="component" class="anime-item-head" :style="posterBg">
    <h1 class="blind" v-if="notPC">뷰플릭스</h1>
    <div
      :class="['navigation', 'inner', { 'navigation--scrolled': isScroll }]"
      v-if="isMobile"
    >
      <div class="col-left">
        <a class="back" @click="goBack">
          <icon-base icon-name="뒤로가기">
            <icon-arrow-prev />
          </icon-base>
        </a>
        <strong class="scroll-title">{{ title }}</strong>
      </div>
      <button class="overflow-btn" @click="openOverflowMenu">
        <icon-base icon-name="더보기 메뉴">
          <icon-overflow />
        </icon-base>
      </button>
    </div>
    <div class="anime-info inner">
      <div
        :class="['poster', 'loading-target', { 'poster--loaded': poster }]"
        v-if="!notPC"
      >
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
      <div
        :class="[
          'col-right',
          'loading-target',
          { 'col-right--loaded': type && rating && title },
        ]"
      >
        <div class="row-top">
          <ul class="genres">
            <li
              v-for="genre in genres"
              :key="genre"
              class="genre division-pipe"
            >
              {{ genre }}
            </li>
          </ul>
          <h2 class="title">
            {{ title }}
          </h2>
        </div>
        <div class="row-bottom">
          <p
            :class="[
              'star-rating-number',
              { 'star-rating-number--loaded': type && rating && title },
            ]"
          >
            <i class="icon">
              <icon-base>
                <icon-star-rating />
              </icon-base>
            </i>
            {{ starRatingAvg ? starRatingAvg.toFixed(1) : "" }}점
          </p>
          <p class="sub-info">
            {{ type }}
            &middot;
            {{ rating }}
            &middot;
            {{ isEnd ? "완결" : "방영중" }}
          </p>
        </div>
      </div>
    </div>
    <div class="btn-area inner">
      <router-link
        :class="[
          'btn-area__continue',
          'loading-target',
          {
            'btn-area__continue--loaded':
              type && rating && title && genres && starRatingAvg,
          },
        ]"
        :to="continueLink"
      >
        <i class="icon">
          <icon-base>
            <icon-play />
          </icon-base>
        </i>
        <span class="text">{{ continueString }}</span>
      </router-link>
    </div>
  </component>
</template>

<script>
import { mapState } from "vuex";

import VueflixBtn from "./VueflixBtn.vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import AnimeActionBtn from "./AnimeActionBtn.vue";
import IconWannaSee from "./icons/IconWannaSee.vue";
import IconPlay from "./icons/IconPlay.vue";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import IconStarRating from "./icons/IconStarRating.vue";

export default {
  name: "AnimeItemHead",
  components: {
    VueflixBtn,
    IconBase,
    IconArrowPrev,
    IconOverflow,
    AnimeActionBtn,
    IconWannaSee,
    IconPlay,
    IconStarRating,
  },
  props: {
    isScroll: {
      type: Boolean,
    },

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
  async mounted() {
    this.component = this.notPC ? "header" : "div";
    window.addEventListener("resize", this.checkResolution);
    if (this.user) {
      const db = getFirestore();
      const userRef = doc(db, "user", this.user.uid);
      const userSnap = await getDoc(userRef);
      this.$store.commit("auth/setUser", userSnap.data());

      const wannaSeeIndex = userSnap
        .data()
        .wannaSee.findIndex(
          (wanna) => wanna.aniTitle === this.$route.params.title
        );
      this.wannaSeeBool = wannaSeeIndex !== -1;
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResolution);
  },
  data() {
    return {
      wannaSeeBool: false,
      isMobile: window.innerWidth <= 768,
      notPC: window.innerWidth <= 1080,
      component: "div",
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    async wannaSeeToggle() {
      if (this.user) {
        this.wannaSeeBool = !this.wannaSeeBool;
        const aniTitle = this.$route.params.title;
        if (this.wannaSeeBool) {
          const now = new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;
          const date = now.getDate();
          const hour = now.getHours();
          const min = now.getMinutes();
          const sec = now.getSeconds();
          this.$store.commit("auth/updateWannaSee", {
            aniTitle: aniTitle,
            time: {
              year: year,
              month: month,
              date: date,
              hour: hour,
              min: min,
              sec: sec,
            },
          });
          console.log(this.user);
        } else {
          this.$store.commit("auth/deleteWannaSee", aniTitle);
        }
        const db = getFirestore();
        await setDoc(doc(db, "user", this.user.uid), {
          ...this.user,
        });
      } else {
        this.$emit("require-login", "로그인해야 '보고싶다'를 체크할 수 있어요");
      }
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
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    posterBg() {
      const bg = `
        background-image: linear-gradient(transparent,var(--anime-bg)), url(${this.poster});
      `;
      return bg;
    },
    continueLink() {
      if (this.user) {
        const last = this.user.recentWatched.find(
          (anime) => anime.aniTitle === this.$route.params.title
        );
        if (last) {
          return last.continueLink;
        }
      }
      return `/player/${this.$route.params.title}/1기/1화`;
    },
    continueString() {
      if (this.user) {
        const last = this.user.recentWatched.find(
          (anime) => anime.aniTitle === this.$route.params.title
        );
        if (last) {
          const stringOrigin = last.continueLink.split("/");
          const part = stringOrigin[3];
          const index = stringOrigin[4];
          return `${part} ${index} 이어보기`;
        }
      }
      return "1화 무료보기";
    },
  },

  watch: {
    notPC() {
      this.component = this.notPC ? "header" : "div";
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-item-head {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center;
  background-size: cover;
  padding-bottom: 2rem;
  .navigation {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    padding: 2rem var(--inner-padding) 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 150ms ease-out;
    overflow: hidden;
    background: linear-gradient(var(--anime-bg), transparent);
    .col-left {
      display: flex;
      align-items: center;
      height: 2.4rem;
      .scroll-title {
        margin-left: 0.5rem;
        font-size: 1.7rem;
        height: 2.4rem;
        color: var(--text-800);
        opacity: 0;
        transform: translateX(2rem);
        transition: transform 150ms ease-out, opacity 150ms ease-out;
        //말줄임표 처리
        width: 70vw;
        line-height: 2.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .back,
    .overflow-btn {
      color: var(--text-800);
      width: 2.4rem;
      height: 2.4rem;
    }

    &--scrolled .col-left .scroll-title {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .anime-info {
    .poster {
      min-width: 9rem;
      height: calc(9rem / 3 * 4);
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
      width: 50vw;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      color: transparent;
      &--loaded {
        width: auto;
        height: auto;
        color: var(--text-800);
        background: transparent;
        animation: none;
      }
      .row-top {
        color: inherit;
        height: 6rem;
        transition: 150ms ease-out;
      }

      .row-bottom {
        display: flex;
        color: inherit;
      }

      .genres {
        display: flex;
        color: inherit;
        margin-bottom: 0.5rem;
        .genre {
          display: flex;
          align-items: center;
          color: inherit;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.5rem 0.7rem;
          background-color: var(--anime-genre);
          border-radius: 0.3rem;
          &:not(:last-child) {
            margin-right: 0.5rem;
          }
        }
      }
      .title {
        color: inherit;
        font-size: 2rem;
        line-height: 1.3;
        margin-bottom: 0.7rem;
      }
      .star-rating-number {
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 1.3rem;
        font-weight: 500;
        opacity: 0;
        transition: 150ms ease-out;
        margin-right: 1.5rem;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.8rem;
          height: 1.8rem;
          margin-right: 0.5rem;
        }
        &--loaded {
          opacity: 1;
        }
      }

      .sub-info {
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 1.2rem;
      }
    }
  }
  .btn-area {
    &__continue {
      display: flex;
      align-items: center;
      transition: 150ms ease-out;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background-color: var(--theme-500);
        border-radius: 50%;
        margin-right: 0.7rem;
        opacity: 0;
        visibility: hidden;
        transition: 150ms ease-out;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }

      .text {
        font-size: 1.3rem;
        font-weight: 700;
        opacity: 0;
        visibility: hidden;
        transition: 150ms ease-out;
      }
      &--loaded {
        animation: none;
        background: transparent;
        .text,
        .icon {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .anime-item-head {
    background-color: var(--anime-item-head-500);
    background-image: none !important;
    display: flex;
    justify-content: space-between;
    padding: 0 calc((100% - 118rem) / 2);
    .anime-info {
      padding: 0;
      margin-top: 0;
      height: fit-content;
      .poster {
        position: relative;
        width: 27rem;
        height: calc(27rem / 3 * 4);
        overflow: hidden;
        border-radius: 0.6rem;
        box-shadow: 0 0 3rem var(--box-shadow);
        .anime-interact-btn {
          position: absolute;
          bottom: 0;
          background-color: var(--anime-item-head-500);
          width: 100%;
          padding: 1.2rem 0 1.4rem;
        }
      }
      .col-right {
        flex: 1;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 2.5rem;
        .division-pipe {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .title {
          font-size: 3rem;
          font-weight: 900;
          text-align: left;
          margin-top: 1.5rem;
        }
        .row-top {
          height: auto;
          align-items: flex-start;
        }
        .row-bottom {
          width: 40rem;
          margin-bottom: 8rem;
          align-items: flex-start;
        }
        .genres .genre {
          font-size: 1.6rem;
          font-weight: 700;
        }
        .star-rating-number {
          font-size: 1.6rem;
          font-weight: 500;
          margin-top: 1.5rem;
        }
      }
    }
    .btn-area {
      width: 20rem;
      align-self: flex-end;
      padding: 0;
      margin-bottom: 3rem;
    }
  }
}
</style>

<template>
  <component :is="component" class="anime-item-head">
    <h1 class="blind" v-if="isMobileSize">뷰플릭스</h1>
    <div class="anime-item-head__navigation inner">
      <div class="col-left">
        <a class="back" @click="goBack">
          <icon-base icon-name="뒤로가기">
            <icon-arrow-prev />
          </icon-base>
        </a>
        <strong
          :class="[
            'anime-item-head__scroll-title',
            { 'anime-item-head__scroll-title--scrolled': isScroll },
          ]"
        >
          {{ animeInfo.name }}
        </strong>
      </div>
      <div class="col-right">
        <button class="anime-item-head__share-btn" @click="openSystemShare">
          <icon-base icon-name="공유">
            <icon-share />
          </icon-base>
        </button>
        <button
          class="anime-item-head__overflow-btn"
          @click="openOverflowMenu"
          v-if="user && isMobileSize"
        >
          <icon-base>
            <icon-overflow />
          </icon-base>
        </button>
      </div>
    </div>
    <div class="anime-item-head__anime-info inner">
      <div
        :class="[
          'anime-item-head__poster',
          'loading-target',
          { 'anime-item-head__poster--loaded': animeInfo.poster },
        ]"
        v-if="!isMobileSize"
      >
        <img :src="animeInfo.poster" :alt="`${animeInfo.name} 포스터`" />
      </div>
      <div
        :class="[
          'col-right',
          'loading-target',
          {
            'col-right--loaded':
              animeInfo.type && animeInfo.rating && animeInfo.name,
          },
        ]"
      >
        <div class="row-top">
          <h2 class="anime-item-head__title">{{ animeInfo.name }}</h2>
          <div class="row-bottom">
            <p class="sub-info">
              {{ animeInfo.type }}
              &middot;
              {{ animeInfo.rating }}
              &middot;
              {{ animeInfo.isEnd ? "완결" : "방영중" }}
            </p>
          </div>
        </div>
        <div
          :class="[
            'btn-area',
            {
              'btn-area--loaded':
                animeInfo.type && animeInfo.rating && animeInfo.name,
            },
          ]"
        >
          <div class="col-left">
            <router-link class="btn-area__continue" :to="continueLink" replace>
              <i class="icon">
                <icon-base>
                  <icon-play />
                </icon-base>
              </i>
              <span class="text">{{ continueString }}</span>
            </router-link>
          </div>
          <div class="col-right">
            <button
              @click="wannaSeeToggle"
              :class="['bg-less btn-area__wanna-see', { added: wannaSeeBool }]"
            >
              <i class="icon">
                <icon-base class="icon--added">
                  <icon-wanna-see-added />
                </icon-base>
                <icon-base class="icon--not-added">
                  <icon-wanna-see-add />
                </icon-base>
              </i>
              <span class="text">보고싶다</span>
            </button>
            <button
              class="bg-less btn-area__purchase"
              @mousedown="activeTrigger"
              @mouseup="activeTrigger"
              @touchstart.passive="activeTrigger"
              @touchend="activeTrigger"
              @click="purchase"
            >
              <i class="icon">
                <icon-base>
                  <icon-purchase :is-active="isPurchaseActive" />
                </icon-base>
              </i>
              <span class="text">소장하기</span>
            </button>
          </div>
        </div>
      </div>
      <div class="anime-item-head__overflow-btn" v-if="user && !isMobileSize">
        <button class="icon" @click="actionSheetToggle">
          <icon-base>
            <icon-overflow />
          </icon-base>
        </button>
        <action-sheet
          v-if="isActionSheetOpened"
          :action-origin="actions"
          @overflow-menu-close="actionSheetClose"
        />
      </div>
    </div>
  </component>
</template>

<script>
import { mapState } from "vuex";

import VueflixBtn from "./VueflixBtn.vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
import IconWannaSee from "./icons/IconWannaSee.vue";
import IconPlay from "./icons/IconPlay.vue";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import IconWannaSeeAdd from "./icons/IconWannaSeeAdd.vue";
import IconWannaSeeAdded from "./icons/IconWannaSeeAdded.vue";
import IconPurchase from "./icons/IconPurchase.vue";
import IconShare from "./icons/IconShare.vue";
import IconOverflow from "./icons/IconOverflow.vue";
import ActionSheet from "./ActionSheet.vue";

export default {
  name: "AnimeItemHead",
  components: {
    VueflixBtn,
    IconBase,
    IconArrowPrev,
    IconWannaSee,
    IconPlay,
    IconWannaSeeAdd,
    IconWannaSeeAdded,
    IconPurchase,
    IconShare,
    IconOverflow,
    ActionSheet,
  },
  props: {
    isScroll: {
      type: Boolean,
    },

    animeInfo: {
      type: Object,
    },

    summary: {
      type: String,
    },
  },
  async mounted() {
    this.screenSizeQuery.addEventListener("change", (e) => {
      this.isMobileSize = e.matches;
    });
    this.touchDeviceQuery.addEventListener("change", (e) => {
      this.isTouchDevice = e.matches;
    });
    window.addEventListener("resize", this.checkResolution);
  },
  unmounted() {
    this.screenSizeQuery.removeEventListener("change", (e) => {
      this.isMobileSize = e.matches;
    });
    this.touchDeviceQuery.removeEventListener("change", (e) => {
      this.isTouchDevice = e.matches;
    });
  },
  data() {
    const screenSizeQuery = window.matchMedia("screen and (max-width: 820px)");
    const touchDeviceQuery = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    );
    return {
      screenSizeQuery,
      touchDeviceQuery,
      isMobileSize: screenSizeQuery.matches,
      isTouchDevice: touchDeviceQuery.matches,
      isPurchaseActive: false,
      isActionSheetOpened: false,
      actions: [
        {
          text: "시청기록 초기화",
          method: this.removeWatchHistory,
        },
        {
          text: "관심없음",
          method: this.handleInterest,
        },
      ],
    };
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
    async wannaSeeToggle() {
      if (this.user) {
        console.log("d", this.wannaSeeBool);
        const aniTitle = this.$route.params.title;
        if (this.wannaSeeBool) {
          this.$store.commit("auth/deleteWannaSee", aniTitle);
        } else {
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
        }
        const db = getFirestore();
        await setDoc(doc(db, "user", this.user.uid), {
          ...this.user,
        });
      } else {
        this.$emit("require-login", "로그인해야 '보고싶다'를 체크할 수 있어요");
      }
    },
    async openSystemShare() {
      const shareData = {
        title: `뷰플릭스에서 ${this.$route.params.title} 다시보기`,
        text: this.summary,
        url: window.location.href,
      };
      await navigator.share(shareData);
    },
    openOverflowMenu() {
      this.$emit("overflow-menu-open");
    },
    activeTrigger() {
      this.isPurchaseActive = !this.isPurchaseActive;
    },
    actionSheetToggle() {
      this.isActionSheetOpened = !this.isActionSheetOpened;
    },
    actionSheetClose() {
      this.isActionSheetOpened = false;
    },
    purchase() {
      if (this.user) {
        this.$emit("purchase");
      } else {
        this.$emit(
          "require-login",
          "로그인하면 애니메이션을 구매 및 소장할 수 있어요"
        );
      }
    },
    removeWatchHistory() {
      this.$emit("remove-watch-history");
    },
    handleInterest() {
      this.$emit("handle-interest");
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    wannaSeeBool() {
      return !!this.user?.wannaSee.find(
        (item) => item.aniTitle === this.$route.params.title
      );
    },
    gradientPercent() {
      return !this.isMobileSize ? "90%" : "80%";
    },
    bgURL() {
      console.log(this.animeInfo.poster);
      return `url(${this.animeInfo.poster})`;
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
    component() {
      return this.isMobileSize ? "header" : "div";
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-item-head {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
      transparent,
      var(--anime-layout-bg) v-bind(gradientPercent)
    ),
    v-bind(bgURL);
  background-position: center;
  background-size: cover;
  &__navigation {
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    padding: 2rem var(--inner-padding) 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 150ms ease-out;
    background: linear-gradient(var(--anime-layout-bg), transparent);
    .col-left {
      display: flex;
      align-items: center;
      height: 2.4rem;
    }
    .col-right {
      display: flex;
      align-items: center;
      button:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }
  .back,
  &__overflow-btn,
  &__share-btn {
    color: var(--anime-layout-text);
    width: 2.4rem;
    height: 2.4rem;
  }
  &__scroll-title {
    margin-left: 0.5rem;
    font-size: 1.7rem;
    height: 2.4rem;
    color: var(--anime-layout-text);
    opacity: 0;
    transform: translateX(2rem);
    transition: transform 150ms ease-out, opacity 150ms ease-out;
    //말줄임표 처리
    width: 60vw;
    line-height: 2.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &--scrolled {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &__anime-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 15rem;

    > .col-right {
      width: 100%;
      height: 12rem;
      justify-content: space-between;
      align-items: center;
      color: transparent;
      border-radius: 0.3rem;
      background-image: linear-gradient(
        135deg,
        rgb(255 255 255 / 0.3),
        rgb(255 255 255 / 0.2)
      );

      &--loaded {
        width: 100%;
        height: auto;
        color: var(--anime-layout-text);
        background: transparent;
        animation: none;
      }
      .row-top {
        color: inherit;
        transition: 150ms ease-out;
        margin-bottom: 1.5rem;
      }

      .row-bottom {
        display: flex;
        color: inherit;
      }

      .sub-info {
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 1.2rem;
      }
    }
  }
  &__poster {
    width: 20rem;
    height: calc(20rem / 5 * 7);
    margin-right: 2rem;
    box-shadow: hsl(var(--box-shadow));
    border-radius: 0.3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      font-size: 0.1rem;
      opacity: 0;
      border-radius: 0.3rem;
      transition: opacity 150ms ease-out;
    }
    &--loaded {
      animation: none;
      img {
        opacity: 1;
      }
    }
  }
  &__title {
    color: inherit;
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }
  .btn-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    visibility: hidden;
    transition: 150ms ease-out;

    &--loaded {
      visibility: visible;
      opacity: 1;
    }

    .col-right {
      width: auto;
      height: auto;
      display: flex;
    }
    .bg-less {
      height: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .icon {
        position: relative;
        width: 2.4rem;
        height: 2.4rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          fill: transparent;
          stroke: var(--anime-layout-text);
          color: var(--anime-layout-text);
          stroke-width: 2px;
          stroke-linecap: round;
        }
      }
      .text {
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--anime-layout-text);
      }
    }

    &__continue {
      display: flex;
      align-items: center;
      transition: 150ms ease-out;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4.8rem;
        height: 4.8rem;
        background-color: var(--anime-layout-text);
        color: var(--anime-layout-bg);
        border-radius: 50%;
        margin-right: 1rem;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }

      .text {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--anime-layout-text);
      }
    }

    &__wanna-see {
      .icon {
        svg {
          position: absolute;
        }
        &--added {
          transition-delay: 0ms;
          stroke-dasharray: 25;
          stroke-dashoffset: 25;
        }
        &--not-added {
          transition-delay: 150ms;
        }
      }
      &.added .icon {
        &--added {
          transition-delay: 150ms;
          stroke-dashoffset: 0;
          stroke-linejoin: round;
        }
        &--not-added {
          transition-delay: 0ms;
          transform: translateY(2.5rem) scale(0);
          opacity: 0;
        }
      }
    }

    button:not(:last-child) {
      margin-right: 1rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  .anime-item-head {
    padding: 0 calc((100% - 118rem) / 2);
    &__navigation {
      padding: {
        left: calc((100% - 118rem) / 2);
        right: calc((100% - 118rem) / 2);
      }
    }
    &__scroll-title {
      font-size: 2rem;
    }

    &__anime-info {
      padding: 0;
      position: relative;
      .col-right {
        flex: 1;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .row-top {
          .genres .genre {
            font-size: 1.5rem;
          }

          .sub-info {
            font-size: 1.5rem;
          }
        }
        &--loaded {
          width: auto;
        }
      }
    }
    &__overflow-btn {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .icon {
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(var(--anime-item-head__overflow-btn-pc));
        border-radius: 50%;
      }
      .action-sheet {
        justify-self: flex-end;
      }
    }
    &__title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
    .btn-area {
      padding: 0;
      &__continue .text {
        font-size: 1.5rem;
      }
      .col-right {
        flex: none;
        width: auto;
        flex-direction: row;
      }
    }
  }
}
</style>

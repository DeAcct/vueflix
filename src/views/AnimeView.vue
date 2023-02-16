<template>
  <div
    class="anime-view"
    :style="`min-height: ${deviceHeight + 1}px`"
    v-if="!isSub"
  >
    <anime-item-head
      :is-scroll="isScroll"
      :anime-info="animeInfo"
      @overflow-menu-open="actionSheetOpen"
      @require-login="openLoginModal"
      @purchase="openPurchaseModal"
      @remove-watch-history="removeWatchHistory"
      @handle-interest="handleInterest"
      class="anime-view__head"
    />
    <main class="anime-view__main">
      <anime-meta :anime-info="animeInfo" :theme-base-src="bgURL"></anime-meta>
      <div class="episodes-widget">
        <h3 class="blind">에피소드</h3>
        <episodes-widget
          v-for="(part, index) in animeInfo.parts"
          :episodes-data="part"
          :key="index"
          @login-require="openLoginModal"
          :part-top-padding="true"
          :open="index === 0"
        />
      </div>

      <button
        :class="['to-top-btn', { 'to-top-btn--scrolled': isScroll }]"
        @click="toTop"
      >
        <i class="to-top-btn__icon">
          <icon-base>
            <icon-arrow-prev />
          </icon-base>
        </i>
        <span class="to-top-btn__text">맨 위로</span>
      </button>
    </main>
    <vueflix-modal
      title="로그인 필요 알림"
      type="yes-no"
      :yesFunc="gotoLogin"
      :noFunc="closeLoginModal"
      v-if="isLoginModalOpened"
      :class="[{ show: isLoginModalOpened }, 'optional-show']"
    >
      <template v-slot:title>로그인 필요</template>
      <template v-slot:description>
        {{ loginModalText }}
      </template>
      <template v-slot:no-string>나중에</template>
      <template v-slot:yes-string>로그인</template>
    </vueflix-modal>
    <purchase-modal
      :anime-info="animeInfo"
      v-if="isPurchaseModalOpen"
      @close-purchase-modal="closePurchaseModal"
    >
      <template v-slot:title>구매 및 소장</template>
      <template v-slot:description>
        소장하면 판권이 만료되더라도 두고두고 볼 수 있어요
      </template>
    </purchase-modal>
    <action-sheet
      v-if="isActionSheetOpened"
      @overflow-menu-close="actionSheetClose"
      :action-origin="actions"
    />
  </div>
  <router-view v-else />
</template>
<script>
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import AnimeItemHead from "../components/AnimeItemHead.vue";
import AnimeMeta from "../components/AnimeMeta.vue";
import EpisodesWidget from "../components/EpisodesWidget.vue";
import VueflixModal from "../components/VueflixModal.vue";
import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import IconBase from "../components/IconBase.vue";
import IconReview from "../components/icons/IconReview.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";
import ActionSheet from "../components/ActionSheet.vue";
import PurchaseModal from "../components/PurchaseModal.vue";

export default {
  components: {
    AnimeItemHead,
    AnimeMeta,
    EpisodesWidget,
    VueflixModal,
    ArrowBtnWidget,
    ActionSheet,
    PurchaseModal,
    IconBase,
    IconArrowPrev,
    IconReview,
  },
  name: "AnimeView",
  async mounted() {
    document.title = `${this.$route.params.title} 다시보기`;
    await this.animeInit();
    window.addEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
      this.isPC = window.innerWidth >= 1024;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
    });
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      deviceHeight: window.innerHeight,
      animeInfo: {},
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
      isLoginModalOpened: false,
      loginModalText: "",
      isSub: this.$route.name !== "anime",
      isScroll: false,
      isPurchaseModalOpen: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScroll = 0 < Math.round(window.scrollY);
    },
    async getRawData() {
      try {
        const db = getFirestore();
        const animeRef = collection(db, "anime");
        const q = query(
          animeRef,
          where("name", "==", this.$route.params.title)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length !== 0) {
          const rawData = querySnapshot.docs[0].data();
          return rawData;
        }
      } catch {
        this.$router.replace("/notfound");
      }
    },
    async animeInit() {
      try {
        const storage = getStorage();
        const rawData = await this.getRawData();
        const posterRef = ref(
          storage,
          `${this.$route.params.title}/${rawData.poster}`
        );
        const posterURL = await getDownloadURL(posterRef);
        this.animeInfo = {
          ...rawData,
          poster: posterURL,
          posterOrigin: rawData.poster,
        };
      } catch {
        this.$router.replace("/notfound");
      }
    },
    actionSheetOpen() {
      this.isActionSheetOpened = true;
    },
    actionSheetClose() {
      this.isActionSheetOpened = false;
    },
    async removeWatchHistory() {
      console.log("시청기록 초기화");
    },
    handleInterest() {
      console.log("취향에 반영했어요");
    },
    openLoginModal(e) {
      this.loginModalText = e;
      this.isLoginModalOpened = true;
    },
    gotoLogin() {
      this.$router.push("/auth");
    },
    closeLoginModal() {
      this.isLoginModalOpened = false;
    },
    openPurchaseModal() {
      this.isPurchaseModalOpen = true;
    },
    closePurchaseModal() {
      this.isPurchaseModalOpen = false;
    },
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  computed: {
    bgURL() {
      return `url(${this.animeInfo.poster})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.anime-view {
  display: flex;
  flex-direction: column;
  &__head {
    width: 100%;
    min-height: 55vh;
    padding-bottom: 0.5px;
  }
  &__main {
    // anime-item-head는 포스터이미지 + 그라디언트로 이루어져 있다.
    // 그라디언트가 끝까지 차지 않고 약간의 여백이 있는 이슈를 개선하기 위해 nagative margin을 적용했다.
    position: relative;
    z-index: 2;
    margin-top: -1px;
    padding-top: 2rem;
    background-color: var(--anime-bg);
  }
  .optional-show {
    opacity: 0;
    bottom: 0;
    transform: translateY(100vh);
    transition: all 150ms ease-out;
    &.show {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .episodes-widget {
    margin-bottom: 8.5rem;
  }
  .to-top-btn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    bottom: 2rem;
    left: 50%;
    z-index: 100;
    background-color: var(--theme-500);
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    color: #fff;
    transform: translate(-50%, 10rem);
    transition: 150ms ease-out;
    &__icon {
      color: #fff;
      transform: rotate(90deg);
      margin-right: 1rem;
    }
    &__text {
      color: #fff;
      font-weight: 700;
    }
    &--scrolled {
      transform: translate(-50%, 0);
    }
  }
  .loading-target {
    background-image: linear-gradient(135deg, var(--bg-300), var(--bg-200));
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
}

.action-sheet {
  position: fixed;
  top: 0;
  z-index: 100;
}
.purchase-modal {
  position: fixed;
  top: 0;
  z-index: 110;
}
@media screen and (min-width: 1024px) {
  .anime-view {
    &__head {
      min-height: 50vh;
      border-radius: 0;
      padding-top: 8rem;
      margin-bottom: 0;
    }
    &__main {
      padding: 0 calc((100% - 118rem) / 2);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row-reverse;
    }
    .optional-show {
      display: none;
      transform: none;
      transition: 150ms ease-out;
      &.show {
        display: block;
      }
    }
    .episodes-widget {
      width: calc(100% - 33% - 3rem);
    }
    .anime-useful-widget {
      width: 33%;
      height: fit-content;
      .info > li {
        padding: {
          top: 2rem;
          bottom: 2rem;
        }
        .title {
          font-size: 1.5rem;
        }
        .text {
          font-size: 1.3rem;
        }
      }
    }
    .episodes-widget {
      margin-bottom: 3rem;
    }
    .to-top-btn {
      left: auto;
      right: calc((100% - 118rem) / 2);
      transform: translateY(10rem);
      background-color: var(--theme-500);
      &--scrolled {
        transform: none;
      }
    }
  }
}
</style>

<template>
  <div class="anime" :style="`min-height: ${deviceHeight + 1}px`" v-if="!isSub">
    <anime-item-head
      :isScroll="isScroll"
      :title="animeInfo.name"
      :poster="animeInfo.poster"
      :type="animeInfo.type"
      :rating="animeInfo.rating"
      :isEnd="animeInfo.isEnd"
      :genres="animeInfo.genre"
      :starRatingAvg="animeInfo.starRating"
      @starModalOpened="starModalOpen"
      :isUserRated="myRating !== 0"
      @overflowMenuOpened="overflowMenuOpen"
      :myRating="myRating"
      @starChanged="starChanged"
      @require-login="openLoginModal"
      class="widget"
    />
    <main>
      <section class="anime-useful-widget widget">
        <ul class="info">
          <li>
            <ul class="makers">
              <li>
                <h3 class="title">제작사</h3>
                <p
                  :class="[
                    'text',
                    'loading-target',
                    { 'text--loaded': animeInfo.summary },
                  ]"
                >
                  <span
                    v-for="madeBy in animeInfo.madeBy"
                    :key="madeBy"
                    class="division-pipe"
                  >
                    {{ madeBy }}
                  </span>
                </p>
              </li>
              <li>
                <h3 class="title">감독</h3>
                <p
                  :class="[
                    'text',
                    'loading-target',
                    { 'text--loaded': animeInfo.director },
                  ]"
                >
                  <span class="division-pipe">
                    {{ animeInfo.director }}
                  </span>
                </p>
              </li>
            </ul>
          </li>
          <li class="inner">
            <h3 class="title">한 줄 요약</h3>
            <p
              :class="[
                'text',
                'loading-target',
                { 'text--loaded': animeInfo.summary },
              ]"
            >
              {{ animeInfo.summary }}
            </p>
          </li>
        </ul>
        <arrow-btn-widget :to="`${$route.params.title}/reviews`" :icon="true">
          <template v-slot:icon>
            <icon-review />
          </template>
          <template v-slot:text>리뷰</template>
        </arrow-btn-widget>
      </section>

      <div class="episodes-widget widget">
        <h3 class="blind">에피소드</h3>
        <episodes
          v-for="(part, index) in animeInfo.parts"
          :episodesData="part"
          :key="index"
          :id="part.part"
          @login-require="openLoginModal"
        />
      </div>
    </main>
    <modal
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
    </modal>
    <action-sheet
      :class="[{ show: isOverflowMenuOpened }, 'optional-show']"
      title="더보기"
      :actions="actions"
      :close="actionSheetClose"
      v-if="isOverflowMenuOpened"
    />
  </div>
  <router-view v-else :myRating="myRating" />
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
import Episodes from "../components/Episodes";
import Modal from "../components/Modal.vue";
import ActionSheet from "../components/ActionSheet.vue";
import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import IconReview from "../components/icons/IconReview.vue";
import { mapState } from "vuex";

export default {
  components: {
    AnimeItemHead,
    Episodes,
    Modal,
    ActionSheet,
    ArrowBtnWidget,
    IconReview,
  },
  name: "anime",
  mounted() {
    document.title = `${this.$route.params.title} 다시보기`;
    this.animeInit();
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
      animeNumber: "",
      myRating: 0,
      isStarRatingOpened: false,
      isOverflowMenuOpened: false,
      actions: [
        {
          text: "공유하기",
          method: this.openSystemShare,
        },
        {
          text: "관심없음",
          method: this.notInterested,
        },
      ],
      isLoginModalOpened: false,
      loginModalText: "",
      isSub: this.$route.name !== "anime",
      isScroll: false,
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
        this.animeInfo = { ...rawData, poster: posterURL };
        this.$store.commit(
          "currentAnimeInfo/setCurrentAnimeInfo",
          this.animeInfo.parts
        );
      } catch {
        this.$router.replace("/notfound");
      }
    },
    starModalOpen() {
      this.isStarRatingOpened = true;
    },
    starModalClose(get) {
      this.myRating = get;
      this.isStarRatingOpened = false;
    },
    starModalCancel() {
      this.isStarRatingOpened = false;
    },
    overflowMenuOpen() {
      this.isOverflowMenuOpened = true;
    },
    actionSheetClose() {
      this.isOverflowMenuOpened = false;
    },
    delay(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async openSystemShare() {
      try {
        await navigator.share({
          title: document.title,
          text: `뷰플릭스에서 ${this.animeInfo.name}을 다시 즐겨보세요!`,
          url: `https://vueflix.hyse.kr/anime/${this.animeInfo.name}`,
        });
      } catch {
        this.$store.commit("toast/changeToastMeta", {
          isShown: true,
          text: "공유하기 토스트를 불러오는데 실패했어요",
        });
        await this.delay(3000);
        this.$store.commit("toast/changeToastMeta", {
          isShown: false,
          text: "",
        });
      }
      this.actionSheetClose();
    },
    async notInterested() {
      this.$store.commit("toast/changeToastMeta", {
        isShown: true,
        text: "취향에 반영했어요",
      });
      await this.delay(3000);
      this.$store.commit("toast/changeToastMeta", {
        isShown: false,
        text: "",
      });
    },
    starChanged(e) {
      this.myRating = e;
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
  },
  computed: {
    ...mapState({
      currentAnime: (state) => state.currentAnimeInfo.currentAnimeInfo,
    }),
  },
};
</script>

<style lang="scss" scoped>
.anime {
  display: flex;
  flex-direction: column;
  background-color: var(--anime-bg);
  .widget {
    margin-bottom: 1rem;
  }
  .anime-item-head {
    width: 100%;
    min-height: 24rem;
    border-radius: 0 0 0.6rem 0.6rem;
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
  .anime-useful-widget {
    border-radius: 0.6rem;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    .info {
      background-color: var(--episodes);
      & > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: {
          top: 1.8rem;
          bottom: 1.8rem;
        }
      }
      & > li:not(:last-child) {
        border-bottom: 1px solid var(--anime-useful-widget);
      }
      .title {
        display: block;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
      .text {
        display: flex;
        font-size: 1.2rem;
        line-height: 1.3;
        height: 2.6rem;
        &--loaded {
          height: auto;
          background: transparent;
          animation: none;
        }
      }

      .makers {
        width: 100%;
        display: flex;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          &:not(:last-child) {
            border-right: 1px solid var(--anime-useful-widget);
          }
        }
      }
    }
    .arrow-btn-widget {
      background-color: var(--anime-useful-widget);
    }
  }
  .episodes-widget {
    .episodes {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
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

@media screen and (min-width: 768px) {
  .anime {
    .anime-item-head {
      margin-top: 6.1rem;
    }
  }
}
@media screen and (min-width: 1080px) {
  .anime {
    .anime-item-head {
      border-radius: 0;
      padding-top: 8rem;
      height: 40rem;
    }
    main {
      padding: 0 calc((100% - 118rem) / 2);
      margin-top: 6rem;
      display: flex;
      justify-content: space-between;
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
      .episodes {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>

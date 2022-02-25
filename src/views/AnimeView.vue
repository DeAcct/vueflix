<template>
  <div class="anime" :style="`min-height: ${deviceHeight + 1}px`" v-if="!isSub">
    <anime-item-head
      :is-scroll="isScroll"
      :title="animeInfo.name"
      :poster="animeInfo.poster"
      :type="animeInfo.type"
      :rating="animeInfo.rating"
      :is-end="animeInfo.isEnd"
      :genres="animeInfo.genre"
      :star-rating-avg="animeInfo.starRating"
      :summary="animeInfo.summary"
      @overflow-menu-opened="overflowMenuOpen"
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
        <episodes-widget
          v-for="(part, index) in animeInfo.parts"
          :episodesData="part"
          :key="index"
          @login-require="openLoginModal"
        />
      </div>
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
    <action-sheet
      title="더보기"
      @sheet-close="overflowMenuClose"
      :actions="actions"
      v-if="isOverflowMenuOpened"
    >
      <template v-slot:actions>
        <li class="action-item" v-for="action in actions" :key="action.text">
          <button @click="action.method">
            {{ action.text }}
          </button>
        </li>
      </template>
    </action-sheet>
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
import EpisodesWidget from "../components/EpisodesWidget";
import VueflixModal from "../components/VueflixModal.vue";
import ActionSheet from "../components/ActionSheet.vue";
import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import IconReview from "../components/icons/IconReview.vue";
import { mapState } from "vuex";

export default {
  components: {
    AnimeItemHead,
    EpisodesWidget,
    VueflixModal,
    ActionSheet,
    ArrowBtnWidget,
    IconReview,
  },
  name: "AnimeView",
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
      isOverflowMenuOpened: false,
      actions: [
        {
          text: "시청기록 초기화",
          method: this.removeWatchHistory,
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
    overflowMenuOpen() {
      this.isOverflowMenuOpened = true;
    },
    overflowMenuClose() {
      this.isLoginModalOpened = false;
      console.log(this.isLoginModalOpened);
    },
    async removeWatchHistory() {
      console.log("시청기록 초기화");
    },
    notInterested() {
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
    min-height: 60vh;
    margin: -1px;
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

.action-sheet {
  .action-item {
    button {
      padding: 1.6rem 0 1.7rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
}

@media screen and (min-width: 768px) {
  .anime {
    .anime-item-head {
      min-height: unset;
      margin-top: 6.1rem;
    }
  }
}
@media screen and (min-width: 1080px) {
  .anime {
    .anime-item-head {
      border-radius: 0;
      padding-top: 8rem;
      height: 40vh;
      margin-bottom: 0;
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

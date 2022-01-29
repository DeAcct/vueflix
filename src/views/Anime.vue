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
      @requireLogin="openLoginModal"
      class="widget"
    />
    <main>
      <div class="anime-useful-widget widget">
        <ul class="info">
          <li class="inner">
            <strong class="title"> 줄거리 </strong>
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
          <li class="inner">
            <strong class="title"> 제작사 </strong>
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
        </ul>
        <arrow-btn-widget :to="`${$route.params.id}/reviews`" :icon="true">
          <template v-slot:icon>
            <icon-review />
          </template>
          <template v-slot:text>리뷰</template>
        </arrow-btn-widget>
      </div>

      <div class="episodes-widget widget">
        <episodes
          v-for="(part, index) in animeInfo.parts"
          :episodesData="part"
          :key="index"
          :id="part.part"
        />
      </div>
    </main>
    <modal
      title="별점주기 창"
      type="star"
      :noFunc="starModalCancel"
      @starChanged="starModalClose"
      :rating="myRating"
      v-if="isStarRatingOpened"
      :class="[{ show: isStarRatingOpened }, 'optional-show']"
    >
      <template v-slot:title>이 멋진 애니에 별점을!</template>
      <template v-slot:description>
        별을 누르면 그만큼의 별점을 줄 수 있어요
      </template>
      <template v-slot:no-string>취소</template>
      <template v-slot:yes-string>별점 저장</template>
    </modal>
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
        로그인해야 좋아요를 남길 수 있어요
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
    document.title = `${this.$route.params.id} 다시보기`;
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
      isSub: this.$route.name !== "anime",
      isScroll: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScroll = 0 < Math.round(window.scrollY);
    },
    async getRawData() {
      const db = getFirestore();
      const animeRef = collection(db, "anime");
      const q = query(animeRef, where("name", "==", this.$route.params.id));
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length !== 0) {
          const rawData = querySnapshot.docs[0].data();
          return rawData;
        } else {
          console.error("존재하지 않는 작품입니다");
        }
      } catch {
        console.error("통신문제");
      }
    },
    async animeInit() {
      const storage = getStorage();
      const rawData = await this.getRawData();
      const posterRef = ref(
        storage,
        `${this.$route.params.id}/${rawData.poster}`
      );
      try {
        const posterURL = await getDownloadURL(posterRef);
        this.animeInfo = { ...rawData, poster: posterURL };
      } catch {
        console.error("포스터 정보가 존재하지 않습니다");
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
    openLoginModal() {
      this.isLoginModalOpened = true;
    },
    gotoLogin() {
      this.$router.push("/auth");
    },
    closeLoginModal() {
      this.isLoginModalOpened = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.anime {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-100);
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
    box-shadow: 0 0.2rem 0.4rem var(--bg-200);
    .info {
      background-color: var(--top-item);
      & > li {
        padding: {
          top: 1.8rem;
          bottom: 1.8rem;
        }
      }
      & > li:not(:last-child) {
        border-bottom: 1px solid var(--bg-100);
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
    }
    .arrow-btn-widget {
      background-color: var(--bg-100);
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
    background-image: linear-gradient(135deg, var(--bg-200), var(--bg-100));
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
      .info li {
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

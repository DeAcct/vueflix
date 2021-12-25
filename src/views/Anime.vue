<template>
  <div class="anime" :style="`min-height: ${deviceHeight}px`" v-if="isSub">
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
    />
    <div class="anime-useful-widget" v-if="!isPC">
      <arrow-link-btn
        v-for="usefulWidget in usefulWidgets"
        :to="usefulWidget.href"
        :key="usefulWidget.text"
        :icon="usefulWidget.icon"
      >
        <template v-slot:icon>
          <component :is="usefulWidget.icon" />
        </template>
        <template v-slot:text>
          {{ usefulWidget.text }}
        </template>
      </arrow-link-btn>
    </div>

    <div class="episode-and-review-widget">
      <episodes
        v-for="(part, index) in animeInfo.parts"
        :episodesData="part"
        :key="index"
        :id="part.part"
        ref="episodes"
      />
    </div>
    <modal
      title="별점주기 창"
      type="star"
      :noFunc="starModalCancel"
      @starChanged="starModalClose"
      :rating="myRating"
      :class="[{ show: isStarRatingOpened }, 'optional-show']"
    >
      <template v-slot:title>이 멋진 애니에 별점을!</template>
      <template v-slot:description>
        별을 누르면 그만큼의 별점을 줄 수 있어요
      </template>
      <template v-slot:no-string>취소</template>
      <template v-slot:yes-string>별점 저장</template>
    </modal>
    <action-sheet
      :class="[{ show: isOverflowMenuOpened }, 'optional-show']"
      title="더보기"
      :actions="actions"
      :close="actionSheetClose"
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
import Episodes from "../components/Episodes";
import Modal from "../components/Modal.vue";
import ActionSheet from "../components/ActionSheet.vue";
import ArrowLinkBtn from "../components/ArrowLinkBtn.vue";
import IconReview from "../components/icons/IconReview.vue";
import IconInfo from "../components/icons/IconInfo.vue";

export default {
  components: {
    AnimeItemHead,
    Episodes,
    Modal,
    ActionSheet,
    ArrowLinkBtn,
    IconReview,
    IconInfo,
  },
  name: "anime",
  mounted() {
    document.title = `${this.$route.params.id} 다시보기`;
    this.animeInit();
    window.addEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
    });
    window.addEventListener("resize", () => {
      this.isPC = window.innerWidth <= 768;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("resize", () => {
      this.deviceHeight = window.innerHeight;
    });
    window.removeEventListener("resize", () => {
      this.isPC = window.innerWidth <= 768;
    });
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
      usefulWidgets: [
        {
          text: "작품 정보",
          icon: "IconInfo",
          href: "#none",
        },
        {
          text: "리뷰",
          icon: "IconReview",
          href: `${this.$route.params.id}/reviews`,
        },
      ],
      isSub: this.$route.name === "anime",
      isPC: window.innerWidth >= 1080,
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
        this.actionSheetClose();
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
        this.actionSheetClose();
      }
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
  },
};
</script>

<style lang="scss" scoped>
.anime {
  background-color: var(--bg-100);
  .anime-item-head {
    width: 100%;
    min-height: 24rem;
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
    margin-bottom: 1rem;
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
      padding-top: 10rem;
      height: 40rem;
    }
    .optional-show {
      display: none;
      transform: none;
      transition: 150ms ease-out;
      &.show {
        display: block;
      }
    }
  }
}
</style>

<template>
  <div class="anime">
    <anime-item-head
      :title="animeInfo.name"
      :poster="animeInfo.poster"
      :type="animeInfo.type"
      :rating="animeInfo.rating"
      :isEnd="animeInfo.isEnd"
      :genres="animeInfo.genre"
      :starRatingAvg="animeInfo.starRating"
      @starModalOpened="starModalOpen"
      :isUserRated="myRating !== 0"
    />
    <modal
      type="star"
      @starChanged="starModalClose"
      :rating="myRating"
      :class="[{ show: isStarRatingOpened }]"
    >
      <template v-slot:title>이 멋진 애니에 별점을!</template>
      <template v-slot:description>
        별을 누르면 그만큼의 별점을 줄 수 있어요
      </template>
      <template v-slot:no-string>취소</template>
      <template v-slot:yes-string>별점 저장</template>
    </modal>
  </div>
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
import Modal from "../components/Modal.vue";

export default {
  components: { AnimeItemHead, Modal },
  name: "anime",
  mounted() {
    document.title = `${this.$route.params.id} 다시보기`;
    this.animeInit();
  },
  data() {
    return {
      animeInfo: [],
      myRating: 0,
      isStarRatingOpened: false,
    };
  },
  methods: {
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
      const posterRef = ref(storage, rawData.poster);
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
  },
};
</script>

<style lang="scss" scoped>
.anime {
  .bg {
    bottom: 0;
    transform: translateY(50rem);
    transition: 150ms ease-out;
    &.show {
      transform: translateY(0);
    }
  }
}
</style>

<template>
  <div>
    <anime-item-head
      :title="animeInfo.name"
      :poster="animeInfo.poster"
      :type="animeInfo.type"
      :rating="animeInfo.rating"
      :isEnd="animeInfo.isEnd"
      :genres="animeInfo.genre"
      :starRatingAvg="animeInfo.starRating"
    />
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
export default {
  components: { AnimeItemHead },
  name: "anime",
  mounted() {
    document.title = `${this.$route.params.id} 다시보기`;
    this.animeInit();
  },
  data() {
    return {
      animeInfo: [],
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
  },
};
</script>

<style lang="scss" scoped>
div {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  flex-direction: column;
}
</style>

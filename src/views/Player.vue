<template>
  <div class="Player">
    <!--AmbientPlayer :src="videoSrc" class="Player__Body"></AmbientPlayer-->
    <div class="Player__Box1">
      <img src="https://http.cat/403" />
      <h2>{{ route.params.title }}</h2>
      <h3>{{}}</h3>
    </div>
  </div>
</template>
<script setup>
import AmbientPlayer from "@/components/AmbientPlayer.vue";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { useAsyncState } from "@vueuse/core";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utility/firebase";
import { reactive, onMounted, ref, computed } from "vue";

// 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
// 개발 상황에서는 httpcat 이미지를 대신 사용
const storage = getStorage();
const { state: videoSrc } = useAsyncState(
  getDownloadURL(fireRef(storage, "testAnime.mp4"))
);

const route = useRoute();
const nowAnime = ref({});
onMounted(async () => {
  const data = (await getDoc(doc(db, "anime", route.params.title))).data();
  nowAnime.value = data;
});

const nowPlaying = computed(() => {
  if (!nowAnime.value) {
    return "";
  }
  const part = route.params.part;
  return 0;
});
</script>

<style lang="scss" scoped>
.Player {
  padding-top: 6rem;
  &__Ambient {
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
}
</style>

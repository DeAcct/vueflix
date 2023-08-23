<template>
  <div class="player">
    <AmbientPlayer :src="videoSrc" class="player__body"></AmbientPlayer>
  </div>
</template>
<script setup>
import AmbientPlayer from "@/components/AmbientPlayer.vue";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";
import { useAsyncState } from "@vueuse/core";

// 실제 애니메이션을 올릴 경우 저작권 문제가 있어
// 동영상은 하나로 돌려쓰고 있음
const storage = getStorage();
const { state: videoSrc } = useAsyncState(
  getDownloadURL(fireRef(storage, "testAnime.mp4"))
);
</script>

<style lang="scss" scoped>
.player {
  &__body {
    padding-top: 6rem;
  }
}
</style>

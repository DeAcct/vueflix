<template>
  <div class="ProfileImg">
    <OptimizedMedia
      :src="store.user.profileImg"
      alt="내 프로필 사진"
      v-if="store.user"
      class="ProfileImg__Main"
    />
    <img
      v-else
      :src="NotFoundAqua"
      alt="카즈마가 로그인 안해줬어ㅠㅠ"
      :class="{ 'loading-target': loading }"
      class="ProfileImg__Fallback"
      @load="onLoad"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NotFoundAqua from "@/assets/aqua.svg";
import OptimizedMedia from "./OptimizedMedia.vue";
import { useAuth } from "../store/auth";

const loading = ref(true);
function onLoad() {
  loading.value = false;
}

const store = useAuth();
</script>

<style lang="scss" scoped>
.ProfileImg {
  border-radius: 50%;
  object-fit: cover;
  &__Main {
    --aspect-ratio: 100%;
    --radius: 50%;
  }
  &__Fallback {
    border-radius: 50%;
  }
}
</style>

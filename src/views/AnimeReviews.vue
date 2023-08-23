<template>
  <div class="reviews">
    <LoginWidget v-if="!user" :btn-func="goAuth">
      <template v-slot:text>
        <h2>로그인하고 리뷰를 남겨보세요</h2>
      </template>
      <template v-slot:login-state-text>로그인</template>
    </LoginWidget>
    <KeywordReviews :isLoggedIn="user" />
    <TextReview :user="user" />
  </div>
</template>

<script setup>
import KeywordReviews from "@/components/KeywordReviews.vue";
import TextReview from "@/components/TextReview.vue";
import LoginWidget from "@/components/LoginWidget.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
function goAuth() {
  router.push("/auth");
}
const store = useStore();
const user = computed(() => store.state.auth.user);
</script>

<style lang="scss" scoped>
.reviews {
  padding: 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>

<template>
  <div class="AnimeReviews">
    <LoginWidget
      v-if="!user"
      :btn-func="goAuth"
      class="AnimeReviews__LoginRequired"
    >
      <template v-slot:text>
        <h2>로그인하고 이 작품을 평가해보세요</h2>
      </template>
      <template v-slot:login-state-text>로그인</template>
    </LoginWidget>
    <KeywordReviews class="AnimeReviews__Method" />
    <ReactionCombo
      class="AnimeReviews__Method AnimeReviews__Method--Review"
      type="review"
      title-tag="h3"
      :ancestor="route.params.title"
      :parent="route.params.title"
    >
      <template #title>리뷰</template>
    </ReactionCombo>
  </div>
</template>

<script setup>
import KeywordReviews from "@/components/KeywordReviews.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";
import LoginWidget from "@/components/LoginWidget.vue";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuth } from "@/store/auth";

const route = useRoute();

const router = useRouter();
function goAuth() {
  router.push("/auth");
}
// const store = useStore();
const auth = useAuth();
const user = computed(() => auth.user);
</script>

<style lang="scss" scoped>
.AnimeReviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2rem;

  &__LoginRequired {
    background-color: hsl(var(--bg-200));
    position: relative;
    padding: {
      left: 2rem;
      right: 2rem;
    }
    width: calc(100% - 4rem);
    border-radius: calc(var(--global-radius) * 6 - 2rem);
  }

  &__Method {
    margin-top: 0;
  }

  &__Method--Review {
    font-size: 1.5rem;
    --body-radius: var(--global-radius);
    background-color: transparent;
    --reaction-combo-write-bg: hsl(var(--bg-200));
    --recation-combo-bg: hsl(var(--bg-200) / 0.5);
    --reaction-combo-border-width: 1px;
    --reaction-combo-title-padding: 0;
    width: calc(100% - 4rem);
  }
}
</style>

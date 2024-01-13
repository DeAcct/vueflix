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
  overflow: hidden;

  &__LoginRequired {
    background-color: hsl(var(--bg-300));
    position: relative;
    padding: {
      left: 2rem;
      right: 2rem;
    }
    &::before,
    &::after {
      position: absolute;
      bottom: calc(var(--global-radius) * -12);
      content: "";
      width: calc(var(--global-radius) * 12);
      height: calc(var(--global-radius) * 12);
      border-radius: 50%;
      display: block;
      background-color: hsl(var(--anime-layout-bg));
    }
    &::before {
      left: 0;
      box-shadow: calc(var(--global-radius) * -6)
        calc(var(--global-radius) * -6) 0 hsl(var(--bg-300));
    }
    &::after {
      right: 0;
      box-shadow: calc(var(--global-radius) * 6) calc(var(--global-radius) * -6)
        0 hsl(var(--bg-300));
    }
  }

  &__LoginRequired + &__Method {
    margin-top: 0;
  }

  &__Method--Review {
    font-size: 1.5rem;
    --reaction-combo-title-padding: 0;
    --body-radius: var(--global-radius);
    --reaction-body-width: 100%;
    --reaction-combo-border-gradient: linear-gradient(
      135deg,
      hsl(0 0% 100% / 0.2),
      transparent
    );
    --recation-combo-bg: hsl(var(--bg-200) / 0.5);
    --reaction-combo-border-width: 1px;
    padding: 0 2rem;
  }
}
</style>

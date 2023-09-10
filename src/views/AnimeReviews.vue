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
.AnimeReviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  overflow: hidden;

  &__LoginRequired {
    background-color: hsl(var(--text-100));
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
        calc(var(--global-radius) * -6) 0 hsl(var(--text-100));
    }
    &::after {
      right: 0;
      box-shadow: calc(var(--global-radius) * 6) calc(var(--global-radius) * -6)
        0 hsl(var(--text-100));
    }
  }

  &__LoginRequired + &__Method {
    margin-top: 0;
  }

  &__Method--Review {
    font-size: 1.5rem;
    --reaction-combo-title-padding: 2rem;
  }
}
</style>

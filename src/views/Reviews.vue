<template>
  <div class="AnimeReviews">
    <section class="AnimeReviews__Login" v-if="!user">
      <LoginWidget :btn-func="goAuth" class="AnimeReviews__LoginRequired">
        <template #text>
          <h2>로그인하고 이 작품을 평가해보세요</h2>
        </template>
        <template #login-state-text>로그인</template>
      </LoginWidget>
    </section>
    <ReactionCombo
      class="AnimeReviews__Item"
      :query="{ parent: { title: route.query.modal }, type: 'review' }"
      once
      stars
    >
      <template #title="{ counter }">
        <h3 class="AnimeReviews__Title">
          리뷰<span class="AnimeReviews__Counter">({{ counter }})</span>
        </h3>
      </template>
      <template #open-editor="{ openEditor }">
        <button
          class="AnimeReviews__OpenEditorButton"
          @click="openEditor"
          type="button"
        >
          리뷰와 별점 남기기
        </button>
      </template>
    </ReactionCombo>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useAuth } from "@/store/auth";

import { useHead } from "@/composables/head";

// import KeywordCombo from "@/components/KeywordCombo.vue";
import ReactionCombo from "@/components/reaction/ReactionCombo.vue";
import LoginWidget from "@/components/LoginWidget.vue";

const route = useRoute();
useHead({ title: `${route.query.modal} 리뷰` });

const router = useRouter();
function goAuth() {
  router.push("/auth");
}

const auth = useAuth();
const user = computed(() => auth.user);
</script>

<style lang="scss" scoped>
.AnimeReviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;

  &__LoginRequired {
    background-color: hsl(var(--bg-200));
    position: relative;
    padding: {
      left: 2rem;
      right: 2rem;
    }
    border-radius: calc(var(--global-radius) + 2rem);
  }

  &__Title {
    font-size: 1.6rem;
    padding: 0 2rem;
  }

  &__Keyword {
    border-radius: calc(var(--global-radius) + 2rem);
  }

  &__Login {
    width: calc(100% - 4rem);
  }

  &__OpenEditorButton {
    width: calc(100% - 4rem);
    margin: 1rem auto 0;
    text-align: center;
    padding: 1.6rem;
    font-size: 1.4rem;
    background-color: var(--reaction-combo-write-bg, hsl(var(--bg-200)));
    border-radius: 9999px;
  }

  &__Item {
    width: 100%;
  }
}
</style>

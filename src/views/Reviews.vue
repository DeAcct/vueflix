<template>
  <div class="AnimeReviews">
    <section class="AnimeReviews__Item" v-if="!user">
      <LoginWidget :btn-func="goAuth" class="AnimeReviews__LoginRequired">
        <template #text>
          <h2>로그인하고 이 작품을 평가해보세요</h2>
        </template>
        <template #login-state-text>로그인</template>
      </LoginWidget>
    </section>

    <!-- <KeywordCombo
      class="AnimeReviews__Item"
      :parent="{ title: route.query.modal }"
    >
      <template #title>
        <h3 class="AnimeReviews__Title">키워드</h3>
      </template>
    </KeywordCombo> -->

    <!-- <button class="AnimeReviews__Item" type="button">리뷰 작성하기</button> -->

    <ReactionCombo
      class="AnimeReviews__Item"
      type="review"
      :parent="{ title: route.query.modal }"
      once
    >
      <template #title="{ counter }">
        <h3 class="AnimeReviews__Title">
          리뷰<span class="AnimeReviews__Counter">({{ counter }})</span>
        </h3>
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
    margin-bottom: 1.2rem;
  }

  &__Keyword {
    border-radius: calc(var(--global-radius) + 2rem);
  }

  &__Item {
    width: 100%;
    padding: 0 2rem;
    & + & {
      border-top: 1px solid hsl(var(--bg-200));
      padding-top: 2rem;
      margin-top: 2rem;
    }
  }
}
</style>

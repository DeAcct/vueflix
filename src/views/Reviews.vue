<template>
  <div class="AnimeReviews">
    <KeywordCombo
      class="AnimeReviews__Method"
      :parent="{ title: route.query.modal }"
    >
      <template #title>
        <h3 class="AnimeReviews__Title">키워드</h3>
      </template>
    </KeywordCombo>

    <ReactionCombo
      class="AnimeReviews__Method"
      type="review"
      title-tag="h3"
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
import { useRoute } from "vue-router";

import { useHead } from "@/composables/head";

import ReactionCombo from "@/components/ReactionCombo.vue";
import KeywordCombo from "@/components/KeywordCombo.vue";

const route = useRoute();
useHead({ title: `${route.query.modal} 리뷰` });
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
    width: calc(100% - 4rem);
    border-radius: calc(var(--global-radius) * 6 - 2rem);
  }

  &__Title {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  &__Keyword {
    border-radius: calc(var(--global-radius) + 2rem);
  }

  &__Method {
    padding: 0 2rem;
    & + & {
      border-top: 1px solid hsl(var(--bg-200));
      padding-top: 2rem;
      margin-top: 2rem;
    }
  }
}
</style>

<template>
  <div class="AnimeReviews">
    <!-- <KeywordReviews class="AnimeReviews__Write" /> -->
    <ReactionCombo
      class="AnimeReviews__Write"
      type="review"
      title-tag="h3"
      :parent="{ title: route.query.modal }"
      once
      :keywords
    >
      <template #extra-method="{ writeable }">
        <KeywordGenerator
          :user
          class="AnimeReviews__Keyword"
          v-model:keywords="keywords"
          :editmode="!writeable"
        />
      </template>
      <template #title>리뷰</template>
    </ReactionCombo>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";

import { useHead } from "@/composables/head";

import KeywordGenerator from "@/components/KeywordGenerator.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";

const route = useRoute();

// const store = useStore();
useHead({ title: `${route.query.modal} 리뷰` });
const auth = useAuth();
const user = computed(() => auth.user);

const keywords = ref([]);
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

  &__Write {
    font-size: 1.5rem;
    --body-radius: var(--global-radius);
    background-color: transparent;

    --recation-combo-bg: hsl(var(--bg-200) / 0.5);
    --reaction-combo-title-padding: 0;
    width: calc(100% - 4rem);
  }
}
</style>

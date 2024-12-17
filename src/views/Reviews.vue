<template>
  <div class="AnimeReviews">
    <ReactionCombo
      class="AnimeReviews__Write"
      type="review"
      title-tag="h3"
      :parent="{ title: route.query.modal }"
      once
      :keywords
      ref="$ReactionCombo"
      @delete="clearKeywords"
    >
      <template #extra-method>
        <KeywordGenerator
          :user
          class="AnimeReviews__Keyword"
          v-model:keywords="keywords"
          @save="saveKeywords"
          @revert="revertKeywords"
          :reset-disabled
        />
      </template>
      <template #title>리뷰</template>
    </ReactionCombo>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { where } from "firebase/firestore";

import { useAuth } from "@/store/auth";
import { Read, Update, Create } from "@/api/reaction";

import { useHead } from "@/composables/head";

import KeywordGenerator from "@/components/KeywordGenerator.vue";
import ReactionCombo from "@/components/ReactionCombo.vue";

const route = useRoute();

// const store = useStore();
useHead({ title: `${route.query.modal} 리뷰` });
const auth = useAuth();
const user = computed(() => auth.user);

const keywords = ref([]);
const myDoc = ref(null);
watchEffect(async () => {
  if (!user.value) return;

  myDoc.value = await Read(
    { parent: { title: route.query.modal }, type: "review" },
    where("uid", "==", user.value?.uid)
  );
  if (myDoc.value.reactions.length === 0) return;

  const { keywords: _keywords } = myDoc.value.reactions[0];
  keywords.value = _keywords;
});

const $ReactionCombo = ref(null);
async function saveKeywords() {
  if (myDoc.value.reactions.length === 0) {
    await Create({
      parent: { title: route.query.modal },
      type: "review",
      keywords: keywords.value,
    });
  } else {
    const { _id, content } = myDoc.value.reactions[0];
    await Update({
      id: _id,
      type: "review",
      keywords: keywords.value,
      content,
    });
  }
  await $ReactionCombo.value.sync();
}

function revertKeywords() {
  keywords.value = myDoc.value.reactions[0].keywords;
}

function clearKeywords() {
  keywords.value = [];
}

const resetDisabled = computed(() => {
  return (
    !myDoc.value ||
    myDoc.value.reactions.length === 0 ||
    keywords.value === myDoc.value.reactions[0].keywords
  );
});
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

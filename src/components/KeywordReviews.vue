<template>
  <section class="KeywordReviews inner">
    <KeywordMy :data="labels" @data-changed="syncData" />
    <div class="KeywordReviews__Chart">
      <template v-if="allKeywords > 0">
        <LinearChart :data="labels" class="sub-widget" />
      </template>
      <template v-else>
        <strong class="KeywordReviews__TooFewTitle">
          다른 덕후들이 선택한 키워드가 없거나 적어요!
        </strong>
        <p class="KeywordReviews__TooFewParagraph">
          곧 보여드릴 수 있을 거에요
        </p>
      </template>
    </div>
  </section>
</template>

<script setup>
import LinearChart from "./LinearChart.vue";
import KeywordMy from "./KeywordMy.vue";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../utility/firebase";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  isLoggedIn: {
    type: [Boolean, Object],
  },
});

const labels = ref([]);
const route = useRoute();
async function syncData() {
  const docRef = doc(db, "anime", route.params.title);
  const originData = (await getDoc(docRef)).data().keywordReview;

  labels.value = Object.keys(originData)
    .map((item) => ({
      id: item,
      ...originData[`${item}`],
    }))
    .sort((a, b) => {
      if (a.keyword > b.keyword) {
        return 1;
      } else if (a.keyword < b.keyword) {
        return -1;
      } else {
        return 0;
      }
    });
}

const allKeywords = computed(() =>
  labels.value.reduce((acc, { value }) => (acc += value), 0)
);

onMounted(async () => {
  await syncData();
});
</script>

<style lang="scss" scoped>
.KeywordReviews {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  &__Chart {
    display: flex;
    flex-direction: column;
    background-color: hsl(var(--bg-200));
    border-radius: 0.6rem;
    padding: 1.8rem;
    gap: 0.6rem;
  }
  &__TooFewTitle {
    text-align: center;
    flex-grow: 1;
    font-size: 1.5rem;
  }
  &__TooFewParagraph {
    text-align: center;
    font-size: 1.3rem;
  }
}

@media screen and (min-width: 1080px) {
  .KeywordReviews {
    flex-direction: row;
    padding: 0 2rem;
    gap: 1rem;
    & > * {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 0;
      min-width: 0;
      height: 11rem;
    }
    &__title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    &__Chart {
      justify-content: center;
      background-color: transparent;
      padding: 0;
    }
    &__TooFewTitle {
      flex-grow: 0;
    }
  }
}
</style>

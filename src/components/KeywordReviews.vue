<template>
  <section class="keyword-reviews inner">
    <keyword-my :data="labels" @data-changed="syncData" />
    <div class="keyword-reviews__chart">
      <template v-if="allKeywords > 0">
        <linear-chart :data="labels" class="sub-widget" />
      </template>
      <template v-else>
        <strong class="keyword-reviews__too-few-title">
          다른 덕후들이 선택한 키워드가 없거나 적어요!
        </strong>
        <p class="keyword-reviews__too-few-paragraph">
          곧 보여드릴 수 있을 거에요
        </p>
      </template>
    </div>
  </section>
</template>

<script setup>
import LinearChart from "./LinearChart.vue";
import KeywordMy from "./KeywordMy.vue";

import { getFirestore, getDoc, doc } from "firebase/firestore";
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
  const docRef = doc(getFirestore(), "anime", route.params.title);
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
.keyword-reviews {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  &__chart {
    display: flex;
    flex-direction: column;
    background-color: hsl(var(--bg-200));
    border-radius: 0.6rem;
    padding: 1.8rem;
    gap: 0.6rem;
  }
  &__too-few-title {
    text-align: center;
    flex-grow: 1;
    font-size: 1.5rem;
  }
  &__too-few-paragraph {
    text-align: center;
    font-size: 1.3rem;
  }
}

@media screen and (min-width: 1024px) {
  .keyword-reviews {
    flex-direction: row;
    padding: 0 2rem;
    gap: 3rem;
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
    &__chart {
      justify-content: center;
      background-color: transparent;
      padding: 0;
    }
    &__too-few-title {
      flex-grow: 0;
    }
  }
}
</style>

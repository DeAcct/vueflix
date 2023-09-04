<template>
  <section class="KeywordReviews inner">
    <h3 class="KeywordReviews__Title">키워드</h3>
    <div
      :class="[
        'KeywordReviews__Interactive',
        { 'KeywordReviews__Interactive--Centered': !user },
      ]"
    >
      <KeywordMy
        @data-changed="syncData"
        v-if="user"
        class="KeywodReviews__My"
      />
      <div class="KeywordReviews__Chart">
        <template v-if="allKeywords > 0">
          <LinearChart :data="keywordData" class="sub-widget">
            <template v-slot:summary
              >다른 덕후들이 볼 때
              <strong>{{ max }}</strong>
              이(가) 강한 작품이에요</template
            >
          </LinearChart>
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
    </div>
  </section>
</template>

<script setup>
import LinearChart from "./LinearChart.vue";
import KeywordMy from "./KeywordMy.vue";

import { getDoc, doc } from "firebase/firestore";
import { db } from "@/utility/firebase";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const keywordData = ref([]);
const route = useRoute();
async function syncData() {
  const docRef = doc(db, "anime", route.params.title);
  const originData = (await getDoc(docRef)).data().keywordReview;
  keywordData.value = Object.keys(originData)
    .map((item) => ({
      id: item,
      ...originData[`${item}`],
    }))
    .sort(({ keyword: aKeyword }, { keyword: bKeyword }) => {
      if (aKeyword > bKeyword) {
        return 1;
      }
      if (aKeyword < bKeyword) {
        return -1;
      }
      return 0;
    });
}

const max = computed(
  () =>
    keywordData.value.reduce(
      (acc, now) => (acc.value > now.value ? acc : now),
      {}
    ).keyword
);

const allKeywords = computed(() =>
  keywordData.value.reduce((acc, { value }) => (acc += value), 0)
);

const store = useStore();
const user = computed(() => store.state.auth.user);

onMounted(async () => {
  await syncData();
});
</script>

<style lang="scss" scoped>
.KeywordReviews {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.6rem;

  &__Title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
  &__Chart {
    display: flex;
    flex-direction: column;
    background-color: var(--new-review);
    border-radius: var(--global-radius);
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
    gap: 1rem;
    padding: 0 2rem;

    &__Interactive {
      display: flex;
      background-color: hsl(var(--bg-200));
      border-radius: var(--global-radius);
      padding: 2.4rem 1.2rem;
      & > * {
        width: 50%;
      }
      &--Centered {
        justify-content: center;
      }
    }
    &__Title {
      font-size: 1.8rem;
      margin-bottom: 0;
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

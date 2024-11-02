<template>
  <section class="KeywordReviews inner">
    <h3 class="KeywordReviews__Title">키워드</h3>
    <!-- <KeywordSelector
        v-if="user"
        v-model:selected="userKeyword"
        @new-check="setKeywordData"
        class="KeywodReviews__My"
      /> -->
    <div class="KeywordReviews__Chart">
      <template v-if="sharedAll > 0">
        <LinearChart :data="sharedKeyword" class="sub-widget">
          <template #summary>
            다른 덕후들이 볼 때
            <strong>{{ sharedMax }}</strong>
            이(가) 강한 작품이에요
          </template>
        </LinearChart>
      </template>
      <template v-else>
        <p class="KeywordReviews__TooFew">
          <strong> 다른 덕후들이 선택한 키워드가 없거나 적어요! </strong>
          곧 보여드릴 수 있을 거에요
        </p>
      </template>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";
import { useKeyword } from "@/api/keyword";

import LinearChart from "./LinearChart.vue";

const route = useRoute();
const { sharedKeyword, sharedAll, sharedMax, setSharedKeywordData } =
  useKeyword(route.query.modal);

onMounted(async () => {
  await setSharedKeywordData();
});

const auth = useAuth();
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
  &__TooFew {
    text-align: center;
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1080px) {
  .KeywordReviews {
    gap: 1rem;
    padding: 0 2rem;

    &__Title {
      font-size: 1.8rem;
      margin-bottom: 0;
    }
    &__Chart {
      padding: 2.4rem 1.2rem;
    }
    &__TooFewTitle {
      flex-grow: 0;
    }
  }
}
</style>

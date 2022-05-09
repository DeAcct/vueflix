<template>
  <section class="keyword-reviews inner">
    <h2 class="keyword-reviews__title">키워드</h2>
    <div class="sub-widgets">
      <keyword-others-chart :data="labels" class="sub-widget" />
      <div class="sub-widget"></div>
    </div>
  </section>
</template>

<script>
import KeywordOthersChart from "./KeywordOthersChart.vue";

export default {
  name: "KeyworkReview",
  props: {
    isLoggedIn: {
      type: [Boolean, Object],
    },
  },
  components: {
    KeywordOthersChart,
  },
  //내용 전개, 그림체, 작화, 연출, 캐릭터
  data() {
    return {
      labels: [
        { keyword: "그림체", value: 50 },
        { keyword: "작화", value: 30 },
        { keyword: "연출", value: 10 },
        { keyword: "캐릭터", value: 7 },
        { keyword: "내용 전개", value: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.keyword-reviews {
  align-items: center;
  width: 100%;
  max-width: 1080px;
  box-shadow: var(--box-shadow);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  overflow: hidden;
  padding: {
    top: 1.8rem;
    bottom: 1.8rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .sub-widgets {
    display: flex;
    flex-direction: column;
    .row-top {
      margin-bottom: 3rem;
    }
    .keyword-others-chart {
      max-width: 768px;
    }
    .sub-widget {
      padding: 1.5rem 0;
      &:not(:last-child) {
        border-bottom: 1px solid var(--bg-200);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .keyword-reviews {
    .sub-widgets .sub-widget {
      flex: 1;
      width: auto;
      &:not(:last-child) {
        padding: {
          bottom: 0;
        }
      }
    }
  }
}
</style>

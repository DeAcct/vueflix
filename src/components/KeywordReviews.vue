<template>
  <section class="keyword-reviews inner">
    <h2 class="keyword-reviews__title">키워드</h2>
    <div class="sub-widgets">
      <div class="row-top">
        <keyword-others-chart :data="labels" class="sub-widget" />
        <keyword-my :data="labels" class="sub-widget" />
      </div>
    </div>
  </section>
</template>

<script>
import KeywordOthersChart from "./KeywordOthersChart.vue";
import KeywordMy from "./KeywordMy.vue";

export default {
  name: "KeyworkReview",
  props: {
    isLoggedIn: {
      type: [Boolean, Object],
    },
  },
  components: {
    KeywordOthersChart,
    KeywordMy,
  },
  data() {
    return {
      labels: [
        { id: "drawing", keyword: "그림체", value: 50 },
        { id: "voice", keyword: "성우", value: 50 },
        { id: "directing", keyword: "연출", value: 12.5 },
        { id: "character", keyword: "캐릭터", value: 6.25 },
        { id: "story", keyword: "스토리", value: 3.125 },
        { id: "bgm", keyword: "배경음악", value: 1.5625 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.keyword-reviews {
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
    .row-top {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      width: 100%;
    }
    .sub-widget {
      padding: 1.5rem 0;
      flex: 1;
      transition: 150ms ease-out;
    }
    .suggestion-link {
      width: 100%;
      max-width: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--bg-200);
      border-radius: 0.6rem;
      font-size: 1.3rem;
      font-weight: 700;
      padding: {
        left: var(--inner-padding);
        right: var(--inner-padding);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .keyword-reviews {
    .sub-widgets {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      .row-top {
        margin-bottom: 3rem;
        flex-direction: row;
      }
      .sub-widget {
        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }
}
</style>

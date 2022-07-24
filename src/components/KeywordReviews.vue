<template>
  <section class="keyword-reviews inner">
    <h2 class="keyword-reviews__title">키워드</h2>
    <div class="sub-widgets">
      <div class="row-top">
        <keyword-others-chart :data="labels" class="sub-widget" />
        <keyword-my
          :data="labels"
          class="sub-widget"
          @data-changed="syncData"
        />
      </div>
    </div>
  </section>
</template>

<script>
import KeywordOthersChart from "./KeywordOthersChart.vue";
import KeywordMy from "./KeywordMy.vue";

import { getFirestore, getDoc, doc } from "firebase/firestore";

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
      labels: [],
    };
  },
  computed: {
    db: () => getFirestore(),
  },
  async created() {
    this.syncData();
  },
  methods: {
    async syncData() {
      const docRef = doc(this.db, "anime", this.$route.params.title);
      const originData = (await getDoc(docRef)).data().keywordReview;

      this.labels = Object.keys(originData)
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
    },
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
    &__title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    .sub-widgets {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      .row-top {
        margin-bottom: 0;
        flex-direction: row;
      }
      .sub-widget {
        &:not(:last-child) {
          margin-right: 2rem;
          padding: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="keyword-my">
    <div class="row-top">
      <h3 class="keyword-my__description">당신은 어떤 점이 마음에 드시나요?</h3>
      <form class="survey">
        <label v-for="label in data" :key="label" class="survey__keyword">
          <input
            type="checkbox"
            :id="label.id"
            class="blind"
            v-model="surveyData"
            :value="label.id"
          />
          <i
            :class="[
              'icon',
              { 'icon--selected': surveyData.includes(label.id) },
            ]"
          >
            <icon-base>
              <icon-selected v-if="surveyData.includes(label.id)" />
              <icon-not-selected v-if="!surveyData.includes(label.id)" />
            </icon-base>
          </i>
          <span class="text">
            {{ label.keyword }}
          </span>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  updateDoc,
  increment,
  doc /*getDoc, doc, setDoc*/,
} from "firebase/firestore";

import IconBase from "./IconBase.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconNotSelected from "./icons/IconNotSelected.vue";
import { mapState } from "vuex";

export default {
  components: {
    IconBase,
    IconSelected,
    IconNotSelected,
  },
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      surveyData: [],
    };
  },
  computed: {
    db: () => getFirestore(),
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  watch: {
    async surveyData(afterSurvey) {
      const beforeSurvey =
        this.user.keywordReviews.length > 0
          ? this.user.keywordReviews.find(
              (item) => item.aniTitle === this.$route.params.title
            ).likeIt
          : [];
      const changes =
        beforeSurvey.length < afterSurvey.length
          ? afterSurvey
              .filter((afterItem) => !beforeSurvey.includes(afterItem))
              .map((item) => ({ item, method: "+" }))
          : beforeSurvey
              .filter((beforeItem) => !afterSurvey.includes(beforeItem))
              .map((item) => ({ item, method: "-" }));
      // updateDoc(docdata, {number: increment(1)})

      this.$store.commit("auth/newKeywordReviews", [
        {
          aniTitle: this.$route.params.title,
          likeIt: afterSurvey,
        },
      ]);
      await updateDoc(doc(this.db, ""), { number: increment(1) });
      // try {
      //   await setDoc(doc(this.db, "user", this.user.uid), this.user);
      // } catch (err) {
      //   console.log("오류", err);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.keyword-my {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-200);
  border-radius: 0.6rem;
  .row-top {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  &__description {
    width: 100%;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 1rem;
  }
  .survey {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1.5rem;
    .survey-item {
      display: flex;
      align-items: center;
    }
    &__keyword {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      background-color: var(--bg-300);
      border-radius: 0.3rem;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
      .icon {
        width: 1.8rem;
        height: 1.8rem;
        display: flex;
        margin-right: 0.5rem;
        svg {
          width: 100%;
          height: 100%;
        }
        &--selected {
          color: var(--theme-500);
        }
      }
      .text {
        font-size: 1.3rem;
      }
    }
  }
}

/* @media screen and (min-width: 1024px) {
  .keyword-my {
  }
} */
</style>

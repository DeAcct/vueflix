<template>
  <div class="keyword-my">
    <div class="row-top">
      <h3 class="keyword-my__description">
        {{ user ? `${user.nickname}님` : "당신" }}은 어떤 점이 좋으세요?
      </h3>
      <form class="survey">
        <label
          v-for="label in data"
          :key="label.keyword"
          class="survey__keyword"
        >
          <input
            type="checkbox"
            :id="label.id"
            class="blind"
            v-model="surveyData"
            @change="setSurveyData"
            :value="label.id"
            :ref="label.id"
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
  doc,
  setDoc /*getDoc, doc, setDoc*/,
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
    const currentAniTitle = this.$route.params.title;
    return {
      surveyData: [],
      currentAniTitle,
    };
  },
  computed: {
    db: () => getFirestore(),
    ...mapState({
      user: (state) => state.auth.user,
    }),
    beforeKeyword() {
      const myCheckedKeyword = this.user
        ? this.user.keywordReview.find(
            (anime) => anime.aniTitle === this.currentAniTitle
          )
        : [];
      return myCheckedKeyword ? myCheckedKeyword.likeIt : [];
    },
  },
  methods: {
    async setSurveyData(e) {
      const beforeSurvey = this.beforeKeyword;
      const afterSurvey = this.surveyData;
      const changes =
        beforeSurvey.length < afterSurvey.length
          ? afterSurvey
              .filter((afterItem) => !beforeSurvey.includes(afterItem))
              .map((item) => ({ item, method: 1 }))[0]
          : beforeSurvey
              .filter((beforeItem) => !afterSurvey.includes(beforeItem))
              .map((item) => ({ item, method: -1 }))[0];
      this.$store.commit("auth/newKeywordReview", {
        aniTitle: this.currentAniTitle,
        likeIt: afterSurvey,
      });
      const animeUpdateObj = {};
      animeUpdateObj[`keywordReview.${changes.item}.value`] = increment(
        changes.method
      );
      await updateDoc(
        doc(this.db, "anime", this.currentAniTitle),
        animeUpdateObj
      );

      await setDoc(doc(this.db, "user", this.user.uid), this.user);
      this.$emit("data-changed");
    },
  },
  watch: {
    user() {
      this.surveyData = this.beforeKeyword;
    },
  },
};
</script>

<style lang="scss" scoped>
.keyword-my {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: hsl(var(--bg-200));
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
    gap: 1rem;
    &__keyword {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      border: 1px solid hsl(var(--bg-300));
      border-radius: 0.3rem;
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
          color: hsl(var(--theme-500));
        }
      }
      .text {
        font-size: 1.3rem;
      }
    }
  }
}
</style>

<template>
  <div class="KeywordMy">
    <h2 class="KeywordMy__Title">키워드</h2>
    <form class="KeywordMy__Survey">
      <label
        v-for="label in data"
        :key="label.keyword"
        class="KeywordMy__Keyword"
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
            'KeywordMy__Icon',
            { 'KeywordMy__Icon--Selected': surveyData.includes(label.id) },
          ]"
        >
          <IconBase>
            <IconSelected v-if="surveyData.includes(label.id)" />
            <IconNotSelected v-else />
          </IconBase>
        </i>
        <span class="KeywordMy__Text">
          {{ label.keyword }}
        </span>
      </label>
    </form>
  </div>
</template>

<script>
import { updateDoc, increment, doc, setDoc } from "firebase/firestore";
import { db } from "../utility/firebase";

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
    async setSurveyData() {
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
      await updateDoc(doc(db, "anime", this.currentAniTitle), animeUpdateObj);

      await setDoc(doc(db, "user", this.user.uid), this.user);
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
.KeywordMy {
  &__Title {
    width: 100%;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  &__Survey {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
  }
  &__Keyword {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background-color: hsl(var(--theme-500) / 0.1);
    border-radius: 0.6rem;
  }
  &__Icon {
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    margin-right: 0.5rem;
    svg {
      width: 100%;
      height: 100%;
    }
    &--Selected {
      color: hsl(var(--theme-500));
    }
  }
  &__Text {
    font-size: 1.3rem;
    font-weight: 500;
  }
}
@media screen and (min-width: 1080px) {
  .KeywordMy {
    display: flex;
    align-items: center;
    &__Title {
      display: none;
    }
    &__Text {
      font-size: 1.5rem;
    }
  }
}
</style>

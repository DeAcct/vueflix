<template>
  <div class="keyword-my">
    <h2 class="keyword-my__title">키워드</h2>
    <form class="survey">
      <label v-for="label in data" :key="label.keyword" class="survey__keyword">
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
          :class="['icon', { 'icon--selected': surveyData.includes(label.id) }]"
        >
          <icon-base>
            <icon-selected v-if="surveyData.includes(label.id)" />
            <icon-not-selected v-else />
          </icon-base>
        </i>
        <span class="text">
          {{ label.keyword }}
        </span>
      </label>
    </form>
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
  &__title {
    width: 100%;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  .survey {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    &__keyword {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.75rem;
      background-color: hsl(var(--theme-500) / 0.1);
      border-radius: 0.6rem;
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
        font-weight: 500;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .keyword-my {
    .survey {
      &__keyword {
        .text {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>

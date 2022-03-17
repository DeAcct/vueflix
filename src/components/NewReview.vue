<template>
  <form class="new-review">
    <div class="input-area inner">
      <star-interaction
        @star-changed="starChanged"
        :rating="starScore"
        :disabled="!user"
        class="inner widget"
      />
      <div class="row-bottom widget inner" v-if="showNewReview">
        <textarea
          :placeholder="placeholder"
          class="new-review-area"
          v-model="reviewData"
          :disabled="!user"
        />
        <div class="interaction-area">
          <div class="col-left">
            <strong class="length">{{ reviewData.length || 0 }}/300</strong>
            <p v-if="!reviewDataValid" class="too-long-alert">너무 길어요!</p>
          </div>
          <vueflix-btn
            :disabled="!reviewDataSubmitAble || !user"
            @click="submit"
            component="button"
          >
            <template v-slot:text> 등록 </template>
          </vueflix-btn>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import VueflixBtn from "./VueflixBtn.vue";
import StarInteraction from "./StarInteraction.vue";
export default {
  name: "NewReview",
  components: {
    VueflixBtn,
    StarInteraction,
  },
  props: {
    user: {
      type: [Boolean, Object],
    },
    showNewReview: {
      type: Boolean,
    },
  },
  data() {
    return {
      reviewData: "",
      starScore: 0,
      placeholder: "",
    };
  },
  computed: {
    reviewDataValid() {
      return this.reviewData.length <= 300;
    },
    reviewDataSubmitAble() {
      return this.reviewData.length > 0 && this.reviewDataValid;
    },
  },
  mounted() {
    this.setPlaceHolder();
    this.setStars();
  },
  watch: {
    user() {
      this.setPlaceHolder();
      this.setStars();
    },
  },
  methods: {
    submit() {
      this.$emit("review-data-submit", {
        content: this.reviewData,
        rating: this.starScore,
      });
      this.reviewData = "";
    },
    starChanged(e) {
      this.starScore = e;
      this.$emit("score-changed", this.starScore);
    },
    setStars() {
      if (this.user) {
        const result = this.user.reviews.find(
          (reviewItem) => reviewItem.aniTitle === this.$route.params.title
        );
        this.starScore = result ? result.rating : 0;
      }
    },
    setPlaceHolder() {
      if (this.showNewReview) {
        this.placeholder = this.user
          ? "솔직한 평가, 또는 작품의 매력을 알려주세요 (OST, 작화, 캐릭터 등)"
          : "아직 로그인하지 않아서 긴 글 리뷰를 남길 수 없어요";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new-review {
  width: 100%;
  border-radius: 0.6rem;
  .input-area {
    .widget {
      padding: {
        top: 1.5rem;
        bottom: 1.5rem;
      }
      border-radius: 0.6rem;
      box-shadow: var(--box-shadow);
      background-color: var(--new-review);
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    .star-interaction {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-shadow: none;
      background-color: transparent;
    }
    .new-review-area {
      width: 100%;
      height: 9rem;
      resize: none;
      font-family: inherit;
      background-color: transparent;
      line-height: 1.3;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 1rem;
      &::placeholder {
        color: var(--bg-400);
        font-weight: 500;
      }
    }
  }
  .interaction-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 2rem;
    }
    .length {
      display: block;
      color: var(--bg-400);
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    .too-long-alert {
      color: var(--theme-500);
      font-size: 1.1rem;
      font-weight: 500;
    }
    .btn {
      border-radius: 2rem;
      background-color: var(--theme-500);
      box-shadow: none;
      color: #fff;
      &:disabled {
        background-color: var(--theme-200);
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .new-review .input-area {
    .new-review-area {
      font-size: 1.5rem;
    }
  }
}
</style>

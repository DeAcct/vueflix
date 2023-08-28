<template>
  <form class="WriteReview inner">
    <textarea
      :placeholder="placeholder"
      class="WriteReview__InputArea"
      :disabled="!user"
      @input="setReviewData"
      ref="reviewTextArea"
    />
    <div class="WriteReview__Interaction">
      <div class="WriteReview__Status">
        <strong class="WriteReview__Length"
          >{{ reviewData.length || 0 }}/300</strong
        >
        <p v-if="!reviewDataValid" class="WriteReview__TooLongAlert">
          너무 길어요!
        </p>
      </div>
      <div class="WriteReview__BtnArea">
        <vueflix-btn
          v-if="type === 'edit-review'"
          @click="cancelTrigger"
          component="button"
          class="WriteReview__Button WriteReview__Button--Cancel"
          type="button"
        >
          <template #text> 취소 </template>
        </vueflix-btn>
        <vueflix-btn
          :disabled="!reviewDataSubmitAble || !user"
          @click="reviewTrigger"
          class="WriteReview__Button WriteReview__Button--Submit"
          component="button"
        >
          <template #text>
            {{ type === "new-review" ? "등록" : "수정" }}
          </template>
        </vueflix-btn>
      </div>
    </div>
  </form>
</template>

<script>
import VueflixBtn from "./VueflixBtn.vue";
export default {
  name: "WriteReview",
  components: {
    VueflixBtn,
  },
  props: {
    user: {
      type: [Boolean, Object],
    },
    showNewReview: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    myReview: {
      type: [Object, undefined],
    },
  },
  data() {
    return {
      reviewData: "",
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
    this.setData();
  },
  watch: {
    user() {
      this.setPlaceHolder();
    },
    myReview() {
      this.setData();
    },
  },
  methods: {
    reviewTrigger() {
      const eventType = this.type === "new-review" ? "new" : "edit";
      this.$emit(`${eventType}-review`, {
        content: this.reviewData,
      });
      this.reviewData = "";
    },
    cancelTrigger() {
      this.$emit("edit-canceled");
    },
    setPlaceHolder() {
      if (this.showNewReview) {
        this.placeholder = this.user
          ? `솔직한 평가를 작성해 주세요!\n취향을 존중하는 좋은 리뷰를 만들어가요~`
          : "아직 로그인하지 않아서 긴 글 리뷰를 남길 수 없어요";
      }
    },
    setData() {
      this.reviewData = this.myReview ? this.myReview.content : "";
      if (this.$refs.reviewTextArea) {
        this.$refs.reviewTextArea.value = this.reviewData;
      }
    },
    setReviewData(e) {
      this.reviewData = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.WriteReview {
  width: 100%;
  padding: 2.4rem;
  border-radius: var(--global-radius);
  background-color: var(--new-review);
  &__InputArea {
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

  &__Interaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__Status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 2rem;
  }
  &__Length {
    display: block;
    color: hsl(var(--bg-400));
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  &__TooLongAlert {
    color: hsl(var(--theme-500));
    font-size: 1.1rem;
    font-weight: 500;
  }

  &__BtnArea {
    display: flex;
  }
  &__Button {
    border-radius: 2rem;
    background-color: hsl(var(--theme-500));
    color: #fff;
    border-radius: 9999px;
    box-shadow: none;
    &:disabled {
      background-color: hsl(var(--theme-200));
    }
    &--Cancel {
      background-color: transparent;
      color: hsl(var(--text-700));
    }
    &--Submit {
      background-color: hsl(var(--theme-500));
    }
  }
}

@media screen and (min-width: 1080px) {
  .WriteReview {
    &__InputArea {
      font-size: 1.5rem;
    }
  }
}
</style>

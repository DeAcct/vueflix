<template>
  <form class="write-review">
    <div class="input-area">
      <div class="row-bottom widget inner" v-if="showNewReview">
        <textarea
          :placeholder="placeholder"
          class="new-review-area"
          :disabled="!user"
          @input="setReviewData"
          ref="reviewTextArea"
        />
        <div class="interaction-area">
          <div class="col-left">
            <strong class="length">{{ reviewData.length || 0 }}/300</strong>
            <p v-if="!reviewDataValid" class="too-long-alert">너무 길어요!</p>
          </div>
          <div class="col-right">
            <vueflix-btn
              v-if="type === 'edit-review'"
              @click="cancelTrigger"
              component="button"
              class="btn--cancel"
              type="button"
            >
              <template #text> 취소 </template>
            </vueflix-btn>
            <vueflix-btn
              :disabled="!reviewDataSubmitAble || !user"
              @click="reviewTrigger"
              component="button"
            >
              <template #text>
                {{ type === "new-review" ? "등록" : "수정" }}
              </template>
            </vueflix-btn>
          </div>
        </div>
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
.write-review {
  width: 100%;
  border-radius: 0.6rem;
  .input-area {
    .widget {
      padding: {
        top: 1.5rem;
        bottom: 1.5rem;
      }
      border-radius: 0.6rem;
      background-color: var(--new-review);
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
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
    .col-right {
      display: flex;
      .btn {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
        &--cancel {
          background-color: transparent;
          color: hsl(var(--text-700));
        }
      }
    }
    .length {
      display: block;
      color: hsl(var(--bg-400));
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    .too-long-alert {
      color: hsl(var(--theme-500));
      font-size: 1.1rem;
      font-weight: 500;
    }
    .btn {
      border-radius: 2rem;
      background-color: hsl(var(--theme-500));
      color: #fff;
      &:disabled {
        background-color: hsl(var(--theme-200));
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .write-review .input-area {
    .new-review-area {
      font-size: 1.5rem;
    }
  }
}
</style>

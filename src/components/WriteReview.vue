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
        <p v-if="reviewData.length > 300" class="WriteReview__TooLongAlert">
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
          :disabled="reviewData.length > 300 || reviewData.length === 0"
          @click="reviewTrigger"
          class="WriteReview__Button WriteReview__Button--Submit"
          component="button"
          type="button"
        >
          <template #text>등록</template>
        </vueflix-btn>
      </div>
    </div>
  </form>
</template>

<script>
const REACTION_ENUM_WITH_PARTICLE = { comment: "댓글을", review: "리뷰를" };
</script>

<script setup>
import { ref, computed } from "vue";
import VueflixBtn from "./VueflixBtn.vue";

const props = defineProps({
  user: {
    type: Object,
  },
  type: {
    type: String,
    required: true,
    validator(value) {
      return Object.keys(REACTION_ENUM_WITH_PARTICLE).includes(value);
    },
  },
});

const placeholder = computed(() => {
  if (!props.user) {
    return `${
      REACTION_ENUM_WITH_PARTICLE[props.type]
    } 남기려면 먼저 로그인을 해주세요`;
  }
  return `여기를 눌러 ${REACTION_ENUM_WITH_PARTICLE[props.type]} 작성하세요`;
});

const reviewData = ref("");
function setReviewData(e) {
  // 한글 특성상 v-model 사용불가
  reviewData.value = e.target.value;
}

const emits = defineEmits(["new-review", "edit-review"]);
function reviewTrigger() {
  emits("new-review", { content: reviewData.value });
  reviewData.value = "";

  // this.$emit(`${eventType}-review`, {
  //   content: this.reviewData,
  // });
  // this.reviewData = "";
}

// export default {
//   name: "WriteReview",
//   components: {
//     VueflixBtn,
//   },
//   props: {
//     user: {
//       type: [Boolean, Object],
//     },
//     showNewReview: {
//       type: Boolean,
//     },
//     type: {
//       type: String,
//     },
//     myReview: {
//       type: [Object, undefined],
//     },
//   },
//   data() {
//     return {
//       reviewData: "",
//       placeholder: "",
//     };
//   },
//   computed: {
//     reviewDataValid() {
//       return this.reviewData.length <= 300;
//     },
//     reviewDataSubmitAble() {
//       return this.reviewData.length > 0 && this.reviewDataValid;
//     },
//   },
//   mounted() {
//     this.setPlaceHolder();
//     this.setData();
//   },
//   watch: {
//     user() {
//       this.setPlaceHolder();
//     },
//     myReview() {
//       this.setData();
//     },
//   },
//   methods: {
//     reviewTrigger() {
//       const eventType = this.type === "new-review" ? "new" : "edit";
//       this.$emit(`${eventType}-review`, {
//         content: this.reviewData,
//       });
//       this.reviewData = "";
//     },
//     cancelTrigger() {
//       this.$emit("edit-canceled");
//     },
//     setPlaceHolder() {
//       if (this.showNewReview) {
//         this.placeholder = this.user
//           ? `솔직한 평가를 작성해 주세요!\n취향을 존중하는 좋은 리뷰를 만들어가요~`
//           : "아직 로그인하지 않아서 긴 글 리뷰를 남길 수 없어요";
//       }
//     },
//     setData() {
//       this.reviewData = this.myReview ? this.myReview.content : "";
//       if (this.$refs.reviewTextArea) {
//         this.$refs.reviewTextArea.value = this.reviewData;
//       }
//     },
//     setReviewData(e) {
//       this.reviewData = e.target.value;
//     },
//   },
// };
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

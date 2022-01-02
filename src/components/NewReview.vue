<template>
  <form class="new-review">
    <div class="input-area inner">
      <textarea
        placeholder="솔직한 평가, 또는 작품의 매력을 알려주세요 (OST, 작화, 캐릭터 등)"
        class="new-review-area"
        v-model="reviewData"
      />
      <div class="interaction-area">
        <div class="col-left">
          <strong class="length">{{ reviewData.length || 0 }}/300</strong>
          <p v-if="!reviewDataValid" class="too-long-alert">너무 길어요!</p>
        </div>
        <vueflix-btn
          :disabled="!reviewDataSubmitAble"
          @click="submit"
          component="button"
        >
          <template v-slot:text> 등록 </template>
        </vueflix-btn>
      </div>
    </div>
  </form>
</template>

<script>
import VueflixBtn from "./VueflixBtn.vue";
export default {
  name: "NewReview",
  components: {
    VueflixBtn,
  },
  data() {
    return {
      reviewData: "",
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
  methods: {
    submit() {
      this.$emit("reviewDataSubmit", this.reviewData);
    },
  },
};
</script>

<style lang="scss" scoped>
.new-review {
  width: 100%;
  background-color: var(--bg-100);
  padding: {
    top: 1.5rem;
    bottom: 1.5rem;
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
      border-radius: 1.65rem;
      background-color: var(--theme-500);
      box-shadow: none;
      color: #fff;
      &:disabled {
        background-color: var(--theme-200);
      }
    }
  }
}
</style>

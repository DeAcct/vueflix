<template>
  <section class="text-review">
    <h2 class="title inner">긴 글 리뷰 ({{ reviewList.length }})</h2>
    <p class="description inner">키워드로 표현할 수 없는 무언가가 있다면!</p>
    <new-review
      @reviewDataSubmit="add"
      @scoreChanged="scoreChanged"
      :isLoggedIn="isLoggedIn"
    />
    <ul>
      <review-item
        v-for="(reviewItem, index) in reviewList"
        :key="index"
        :rating="reviewItem.rating"
        :date="reviewItem.date"
      >
        <template v-slot:author>{{ reviewItem.author }}</template>
        <template v-slot:content>{{ reviewItem.content }}</template>
      </review-item>
    </ul>
  </section>
</template>

<script>
import NewReview from "./NewReview.vue";
import ReviewItem from "./ReviewItem.vue";
export default {
  name: "TextReview",
  components: {
    NewReview,
    ReviewItem,
  },
  data() {
    return {
      reviewList: [],
    };
  },
  props: {
    isLoggedIn: {
      type: [Object, Boolean],
    },
  },
  methods: {
    add(e) {
      const now = new Date();
      const year = now.getFullYear();
      const month = this.formatter(now.getMonth() + 1, 10);
      const date = this.formatter(now.getDate(), 10);
      const hour = this.formatter(now.getHours(), 10);
      const min = this.formatter(now.getMinutes(), 10);
      const formattedDate = `${year}.${month}.${date} ${hour}:${min}`;
      let review = {
        author: "나",
        ...e,
        thumbsUp: 0,
        date: formattedDate,
      };
      this.reviewList.unshift(review);
    },
    scoreChanged(e) {
      this.reviewList = this.reviewList.map((reviewItem) => ({
        ...reviewItem,
        rating: e,
      }));
    },
    formatter(origin, digits) {
      let result = `${origin}`;
      for (let i = digits; i >= 10; i /= 10) {
        if (origin < i) {
          result = `0${result}`;
        } else {
          return result;
        }
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-review {
  width: 100%;
  max-width: 1080px;
  position: relative;
  box-shadow: var(--box-shadow);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  overflow: hidden;
  padding: {
    top: 1.8rem;
    bottom: 1.8rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  .description {
    font-size: 1.3rem;
    margin-bottom: 1.8rem;
  }
}
</style>

<template>
  <div class="text-review">
    <h2 class="title inner">긴 글 리뷰 ({{ reviewList.length }})</h2>
    <p class="description inner">키워드로 표현할 수 없는 무언가가 있다면!</p>
    <new-review @reviewDataSubmit="add" />
    <ul>
      <review-item
        v-for="(reviewItem, index) in reviewList"
        :key="index"
        :rating="reviewItem.rating"
      >
        <template v-slot:author>{{ reviewItem.author }}</template>
        <template v-slot:content>{{ reviewItem.content }}</template>
      </review-item>
    </ul>
  </div>
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
  props: {
    myRating: Number,
  },
  data() {
    return {
      reviewList: [
        //dummy data
        {
          author: "나",
          content:
            "역시 쿄애니! 안타까운 화재사건을 겪었음에도 불구하고 1기보다 더 좋아졌네요.",
          rating: 4.5,
          thumbsUp: 0,
          date: "2021.12.31",
        },
        {
          author: "나",
          content:
            "역시 쿄애니! 안타까운 화재사건을 겪었음에도 불구하고 1기보다 더 좋아졌네요.",
          rating: 4.5,
          thumbsUp: 0,
        },
        {
          author: "나",
          content:
            "역시 쿄애니! 안타까운 화재사건을 겪었음에도 불구하고 1기보다 더 좋아졌네요.",
          rating: 4.5,
          thumbsUp: 0,
        },
      ],
    };
  },
  methods: {
    add(e) {
      const now = new Date();
      const rating = this.myRating;
      console.log(rating, this.myRating);
      let review = {
        author: "나",
        content: e,
        rating: rating,
        thumbsUp: 0,
        date: now,
      };
      console.log(review);
      this.reviewList.push(review);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-review {
  position: relative;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
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
    margin-bottom: 1.2rem;
  }
}
</style>

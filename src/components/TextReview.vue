<template>
  <section class="text-review">
    <h2 class="title inner">긴 글 리뷰</h2>
    <p class="description inner">키워드로 표현할 수 없는 무언가가 있다면!</p>
    <write-review
      @new-review="addedTrigger"
      @edit-review="editedTrigger"
      @score-changed="scoreChanged"
      :user="user"
      :show-new-review="isWriteReviewShown"
      :type="writeReviewType"
    />
    <ul
      :class="['inner', { 'review-list--exists': reviewList }]"
      v-if="!isWriteReviewShown"
    >
      <review-item
        v-for="(reviewItem, index) in reviewList"
        :key="index"
        :rating="reviewItem.rating"
        :date="reviewItem.time"
        :is-me="reviewItem.uid === user.uid"
        @delete-review="deleteTrigger"
        @edit-review="editModeOn"
      >
        <template v-slot:author>{{ reviewItem.author }}</template>
        <template v-slot:content>{{ reviewItem.content }}</template>
      </review-item>
    </ul>
  </section>
</template>

<script>
import WriteReview from "./WriteReview.vue";
import ReviewItem from "./ReviewItem.vue";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
export default {
  name: "TextReview",
  components: {
    WriteReview,
    ReviewItem,
  },
  data() {
    return {
      reviewList: [],
      editmode: false,
    };
  },
  props: {
    user: {
      type: [Object, Boolean],
    },
  },
  computed: {
    db() {
      return getFirestore();
    },
    animeRef() {
      return doc(this.db, "anime", this.$route.params.title);
    },
    userRef() {
      return doc(this.db, "user", this.user.uid);
    },
    myReview() {
      const result = this.user
        ? this.reviewList.find((reviewItem) => reviewItem.uid === this.user.uid)
        : undefined;
      return result;
    },
    othersReview() {
      const result = this.user
        ? this.reviewList.filter(
            (reviewItem) => reviewItem.uid !== this.user.uid
          )
        : [];
      return result;
    },
    isWriteReviewShown() {
      return !this.myReview || this.editmode;
    },
    writeReviewType() {
      return this.editmode ? "edit-review" : "new-review";
    },
    currentTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      return {
        year,
        month,
        date,
        hour,
        min,
      };
    },
  },
  watch: {
    reviewList() {
      this.sortReview();
    },
  },
  async mounted() {
    this.syncReviews();
  },
  methods: {
    async addedTrigger(e) {
      const reviewItem = {
        author: this.user.nickname,
        uid: this.user.uid,
        ...e,
        thumbsUp: 0,
        time: this.currentTime,
        aniTitle: this.$route.params.title,
      };

      await setDoc(
        this.animeRef,
        { reviews: arrayUnion(reviewItem) },
        { merge: true }
      );
      await setDoc(
        this.userRef,
        { reviews: arrayUnion(reviewItem) },
        { merge: true }
      );
      await this.syncReviews();
    },
    async syncReviews() {
      const animeSnapshot = await getDoc(this.animeRef);
      const animeReviews = animeSnapshot.data().reviews;
      this.reviewList = animeReviews;
      this.sortReview();
    },
    sortReview() {
      if (this.user) {
        this.reviewList = this.reviewList.sort((reviewItem) => {
          if (reviewItem.uid === this.user.uid) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    },
    async deleteTrigger() {
      await setDoc(
        this.animeRef,
        { reviews: this.othersReview },
        { merge: true }
      );
      const userSnapshot = await getDoc(this.userRef);
      const userReviews = userSnapshot.data().reviews;
      const result = userReviews.filter((reviewItem) => {
        reviewItem.aniTitle !== this.$route.params.title;
      });
      await setDoc(this.userRef, { reviews: result }, { merge: true });
      await this.syncReviews();
    },
    editModeOn() {
      this.editmode = true;
    },
    async editedTrigger(e) {
      const userSnapshot = await getDoc(this.userRef);
      const userReviews = userSnapshot.data().reviews;
      const animeSnapshot = await getDoc(this.animeRef);
      const animeReviews = animeSnapshot.data().reviews;

      const mutator = (reviewItem) => {
        reviewItem.content = e.content;
        reviewItem.rating = e.rating;
        reviewItem.time = this.currentTime;
      };
      animeReviews.forEach((reviewItem) => {
        if (reviewItem.uid === this.user.uid) {
          mutator(reviewItem);
        }
      });
      userReviews.forEach((reviewItem) => {
        if (reviewItem.aniTitle === this.$route.params.title) {
          mutator(reviewItem);
        }
      });
      console.log(animeReviews, userReviews, e);
      await updateDoc(this.animeRef, { reviews: animeReviews });
      await updateDoc(this.userRef, { reviews: userReviews });
      await this.syncReviews();
      this.editmode = false;
    },
    async scoreChanged(e) {
      const userSnapshot = await getDoc(this.userRef);
      const userReviews = userSnapshot.data().reviews;
      const animeSnapshot = await getDoc(this.animeRef);
      const animeReviews = animeSnapshot.data().reviews;

      animeReviews.forEach((reviewItem) => {
        if (reviewItem.uid === this.user.uid) {
          reviewItem.rating = e;
        }
      });
      userReviews.forEach((reviewItem) => {
        if (reviewItem.aniTitle === this.$route.params.title) {
          reviewItem.rating = e;
        }
      });

      await updateDoc(this.animeRef, { reviews: animeReviews });
      await updateDoc(this.userRef, { reviews: userReviews });
      await this.syncReviews();
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
  .review-list--exists {
    margin-top: 1rem;
  }
}
</style>

<template>
  <section class="text-review inner">
    <h2 class="title">긴 글</h2>
    <p class="description">키워드로 표현할 수 없는 무언가가 있다면!</p>
    <write-review
      @new-review="addedTrigger"
      @edit-review="editedTrigger"
      @edit-canceled="editModeOff"
      :user="user"
      :show-new-review="isWriteReviewShown"
      :type="writeReviewType"
      :my-review="myReview"
    />
    <div :class="{ 'review-list--exists': reviewList }">
      <ul class="others-list">
        <review-item
          v-for="(reviewItem, index) in reviewList"
          :key="index"
          :date="reviewItem.time"
          :my-uid="myReview.uid"
          :uid="reviewItem.uid"
          :is-my-review-shown="!editmode"
          @edit-review="editModeOn"
          @delete-review="deleteTrigger"
        >
          <template #author>{{ reviewItem.author }}</template>
          <template #content>{{ reviewItem.content }}</template>
        </review-item>
      </ul>
    </div>
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
    db: () => getFirestore(),
    animeRef() {
      return doc(this.db, "anime", this.$route.params.title);
    },
    userRef() {
      return this.user ? doc(this.db, "user", this.user.uid) : undefined;
    },
    myReview() {
      const result = this.reviewList.find(
        (reviewItem) => reviewItem.uid === this.user.uid
      );
      return result;
    },
    othersReview() {
      const result = this.reviewList.filter(
        (reviewItem) => reviewItem.uid !== this.user.uid
      );
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
    user: {
      async handler() {
        await this.syncTextReviews();
      },
      immediate: true,
    },
  },
  methods: {
    //CRUD
    //Create
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
      await this.syncTextReviews();
    },

    //Read
    async syncTextReviews() {
      const animeSnapshot = await getDoc(this.animeRef);
      const animeReviews = animeSnapshot.data().reviews;
      if (this.userRef) {
        const userSnapshot = await getDoc(this.userRef);
        const userReviews = userSnapshot.data().reviews;
        this.$store.commit("auth/setReviews", userReviews);
        this.reviewList = animeReviews;
      }
    },

    //Update
    async editedTrigger(e) {
      const userSnapshot = await getDoc(this.userRef);
      const userReviews = userSnapshot.data().reviews;
      const animeSnapshot = await getDoc(this.animeRef);
      const animeReviews = animeSnapshot.data().reviews;

      const mutator = (reviewItem) => {
        reviewItem.content = e.content;
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
      await updateDoc(this.animeRef, { reviews: animeReviews });
      await updateDoc(this.userRef, { reviews: userReviews });
      await this.syncTextReviews();
      this.editModeOff();
    },
    editModeOn() {
      this.editmode = true;
    },
    editModeOff() {
      this.editmode = false;
    },

    //Delete
    async deleteTrigger() {
      await setDoc(
        this.animeRef,
        { reviews: this.othersReview },
        { merge: true }
      );
      const userSnapshot = await getDoc(this.userRef);
      const userReviews = userSnapshot.data().reviews;
      const result = userReviews.filter(
        (reviewItem) => reviewItem.aniTitle !== this.$route.params.title
      );
      await setDoc(this.userRef, { reviews: result }, { merge: true });
      await this.syncTextReviews();
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
  }
  .write-review {
    margin-top: 1.5rem;
  }
  .review-list--exists {
    margin-top: 1.5rem;
  }
  .others-list {
    background-color: var(--bg-200);
    border-radius: 0.6rem;
    &--exists {
      margin-top: 1rem;
    }
  }
}
</style>

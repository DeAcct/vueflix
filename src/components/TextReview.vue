<template>
  <section class="TextReview inner">
    <h2 class="TextReview__Title">리뷰</h2>
    <WriteReview
      v-if="isWriteReviewShown"
      class="TextReview__Write"
      @new-review="addedTrigger"
      @edit-review="editedTrigger"
      @edit-canceled="editModeOff"
      :user="user"
      :show-new-review="isWriteReviewShown"
      :type="writeReviewType"
      :my-review="myReview"
    />
    <template v-if="reviewList.length > 0">
      <ul class="TextReview__List">
        <ReviewItem
          v-for="(reviewItem, index) in reviewList"
          :key="index"
          :date="reviewItem.time"
          :self="myReview.uid === reviewItem.uid"
          :is-my-review-shown="!editmode"
          @edit-review="editModeOn"
          @delete-review="deleteTrigger"
        >
          <template #author>{{ reviewItem.author }}</template>
          <template #content>{{ reviewItem.content }}</template>
        </ReviewItem>
      </ul>
    </template>
  </section>
</template>

<script setup>
import WriteReview from "./WriteReview.vue";
import ReviewItem from "./ReviewItem.vue";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  Timestamp,
  increment,
} from "firebase/firestore";
import { db } from "../utility/firebase";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const reviewList = ref([]);
const editmode = ref(false);

const props = defineProps({
  user: {
    type: [Object, Boolean],
  },
});

const myReview = computed(() =>
  reviewList.value.find((reviewItem) => reviewItem.uid === props.user.uid)
);
const othersReview = computed(() =>
  reviewList.value.filter((reviewItem) => reviewItem.uid !== props.user.uid)
);
const isWriteReviewShown = computed(() => !myReview.value || editmode.value);
const writeReviewType = computed(() =>
  editmode.value ? "edit-review" : "new-review"
);

const route = useRoute();
const store = useStore();
const animeDoc = doc(db, "anime", route.params.title);

//Read
async function syncTextReviews() {
  const animeSnapshot = await getDoc(animeDoc);
  const animeReviews = animeSnapshot.data().reviews;
  if (!animeDoc) {
    return;
  }
  const userSnapshot = await getDoc(animeDoc);
  const userReviews = userSnapshot.data().reviews;
  store.commit("auth/setReviews", userReviews);
  reviewList.value = animeReviews;
}
watch(
  () => props.user,
  async () => {
    await syncTextReviews();
  },
  { immediate: true }
);

const userDoc = computed(() =>
  props.user ? doc(db, "user", props.user.uid) : undefined
);

//Update
async function editedTrigger(e) {
  const userSnapshot = await getDoc(userDoc.value);
  const userReviews = userSnapshot.data().reviews;
  const animeSnapshot = await getDoc(animeDoc);
  const animeReviews = animeSnapshot.data().reviews;

  const mutator = (reviewItem) => {
    reviewItem.content = e.content;
    reviewItem.time = Timestamp.fromDate(new Date());
  };
  animeReviews.forEach((reviewItem) => {
    if (reviewItem.uid === props.user.uid) {
      mutator(reviewItem);
    }
  });
  await updateDoc(animeDoc, { reviews: animeReviews });
  await updateDoc(userDoc.value, { reviews: userReviews });
  await syncTextReviews();
  editModeOff();
}
function editModeOn() {
  editmode.value = true;
}
function editModeOff() {
  editmode.value = false;
}

//const reviewDoc = doc(db, "review")
//Create
async function addedTrigger(e) {
  const reviewItem = {
    author: props.user.nickname,
    uid: props.user.uid,
    ...e,
    thumbsUp: 0,
    time: new Date(),
    aniTitle: route.params.title,
  };

  await setDoc(animeDoc, { reviews: arrayUnion(reviewItem) }, { merge: true });
  await setDoc(userDoc.value, { reviews: increment(1) }, { merge: true });
  await syncTextReviews();
}

async function deleteTrigger() {
  await setDoc(animeDoc, { reviews: othersReview.value }, { merge: true });
  await setDoc(userDoc.value, { reviews: increment(-1) }, { merge: true });
  await syncTextReviews();
}
</script>

<style lang="scss" scoped>
.TextReview {
  width: 100%;
  max-width: 1080px;
  position: relative;
  border-radius: 0.6rem;
  overflow: hidden;
  &__Title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  &__description {
    font-size: 1.3rem;
  }
  &__List {
    background-color: hsl(var(--bg-200));
    border-radius: 0.6rem;
    margin-top: 1rem;
  }
  &__Write {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 1080px) {
  .TextReview {
    padding: 0 2rem;
    &__Title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

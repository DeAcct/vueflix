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
          v-for="{ time, _id, uid, author, content } in reviewList"
          :key="_id"
          :date="time"
          :self="myReview.uid === uid"
          :is-my-review-shown="!editmode"
          @edit-review="editModeOn"
          @delete-review="deleteTrigger"
        >
          <template #author>{{ author }}</template>
          <template #content>{{ content }}</template>
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
  collection,
  where,
  getDocs,
  query,
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
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review"].includes(value);
    },
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

const userDoc = computed(() =>
  props.user ? doc(db, "user", props.user.uid) : undefined
);

//Create
async function addedTrigger(e) {
  const reviewItem = {
    author: props.user.nickname,
    uid: props.user.uid,
    ...e,
    thumbsUp: 0,
    time: new Date(),
    aniTitle: route.params.title,
    type: props.type,
  };

  const reviewDoc = doc(collection(db, "reviews"));

  //await setDoc(animeDoc, { reviews: arrayUnion(reviewItem) }, { merge: true });
  await setDoc(reviewDoc, { ...reviewItem, _id: reviewDoc.id });
  await setDoc(
    userDoc.value,
    { reviews: arrayUnion(reviewDoc.id) },
    { merge: true }
  );

  console.log(reviewDoc);
  //await syncTextReviews();
}

//Read
async function syncTextReviews() {
  // const animeSnapshot = await getDoc(animeDoc);
  // const animeReviews = animeSnapshot.data().reviews;
  // if (!animeDoc) {
  //   return;
  // }
  // const userSnapshot = await getDoc(userDoc.value);
  // const userReviews = userSnapshot.data().reviews;
  // store.commit("auth/setReviews", userReviews);
  // reviewList.value = animeReviews;

  // 리뷰의 형태는 두 가지
  // ["리뷰", "코멘트"]
  // 리뷰는 애니메이션에 작성하는 항목
  // 코멘트는 각 에피소드마다 작성하는 항목

  const q = query(
    collection(db, "reviews"),
    where("aniTitle", "==", route.params.title),
    where("type", "==", props.type)
  );
  const animeReviews = (await getDocs(q)).docs.map((doc) => doc.data());
  reviewList.value = animeReviews;
}
watch(
  () => props.user,
  async () => {
    await syncTextReviews();
  }
);

//Update
async function editedTrigger(e) {
  console.log("수정");
  // const userSnapshot = await getDoc(userDoc.value);
  // const userReviews = userSnapshot.data().reviews;
  // const animeSnapshot = await getDoc(animeDoc);
  // const animeReviews = animeSnapshot.data().reviews;

  // const mutator = (reviewItem) => {
  //   reviewItem.content = e.content;
  //   reviewItem.time = Timestamp.fromDate(new Date());
  // };
  // animeReviews.forEach((reviewItem) => {
  //   if (reviewItem.uid === props.user.uid) {
  //     mutator(reviewItem);
  //   }
  // });
  // await updateDoc(animeDoc, { reviews: animeReviews });
  // await updateDoc(userDoc.value, { reviews: userReviews });
  // await syncTextReviews();
  // editModeOff();
}
function editModeOn() {
  editmode.value = true;
}
function editModeOff() {
  editmode.value = false;
}

//Delete
async function deleteTrigger() {
  console.log("삭제");
  // await setDoc(animeDoc, { reviews: othersReview.value }, { merge: true });
  // await setDoc(userDoc.value, { reviews: increment(-1) }, { merge: true });
  // await syncTextReviews();
}
</script>

<style lang="scss" scoped>
.TextReview {
  width: 100%;
  max-width: 1080px;
  position: relative;
  border-radius: var(--global-radius);
  overflow: hidden;
  &__Title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
  &__description {
    font-size: 1.3rem;
  }
  &__List {
    background-color: hsl(var(--bg-200));
    border-radius: var(--global-radius);
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

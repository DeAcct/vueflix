import { computed, onMounted, ref } from "vue";
import { useAuth } from "@/store/auth";
import { db } from "@/utility/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";

export function useKeyword(aniTitle) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  // bind with input[checkbox] data
  const keyword = ref([]);
  onMounted(() => {
    if (!user) {
      return;
    }
    const currentData = user.value.keywordReview.find(
      (item) => item.aniTitle === aniTitle
    );
    keyword.value = currentData ? currentData.likes : [];
  });

  async function setKeywordData(e) {
    if (!auth.user) {
      return;
    }
    const method = e.currentTarget.checked ? 1 : -1;
    await setSharedSide({ target: e.currentTarget.value, method });
    await setUserSide();
    await auth.syncUser();
  }

  async function setSharedSide({ target, method }) {
    const animeUpdateObj = {};
    animeUpdateObj[`keywordReview.${target}.value`] = increment(method);
    await updateDoc(doc(db, "anime", aniTitle), animeUpdateObj);
  }

  async function setUserSide() {
    console.log(keyword.value);
    const userRef = doc(db, "user", user.value.uid);
    const isExist = user.value.keywordReview.find(
      (item) => item.aniTitle === aniTitle
    );
    if (!isExist) {
      await updateDoc(userRef, {
        keywordReview: arrayUnion({ aniTitle, likes: keyword.value }),
      });
    } else {
      // 이미 애니 제목이 같은 키워드 평가 항목이 존재하는 경우
      //   await updateDoc(userRef, {});
    }
  }

  return { keyword, setKeywordData };
}

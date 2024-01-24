import { computed, onMounted, ref, watchEffect } from "vue";
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
  const userKeyword = ref([]);
  watchEffect(() => {
    if (!user.value) {
      return;
    }
    const currentData = user.value.keywordReview.find(
      (item) => item.aniTitle === aniTitle
    );
    userKeyword.value = currentData ? currentData.likes : [];
  });

  async function setKeywordData(e) {
    if (!user.value) {
      return;
    }
    const method = e.currentTarget.checked ? 1 : -1;
    await setSharedSide({ target: e.currentTarget.value, method });
    await setSharedKeywordData();
    await setUserSide();
    await auth.syncUser();
  }

  async function setSharedSide({ target, method }) {
    const animeUpdateObj = {};
    // animeUpdateObj[`keywordReview.${target}.value`] = increment(method);
    await updateDoc(doc(db, "anime", aniTitle), {
      ["keywordReview." + target + ".value"]: increment(method),
    });
  }

  async function setUserSide() {
    const userRef = doc(db, "user", user.value.uid);
    const current = user.value.keywordReview;
    const isExist = current.find((item) => item.aniTitle === aniTitle);
    if (!isExist) {
      await updateDoc(userRef, {
        keywordReview: arrayUnion({ aniTitle, likes: userKeyword.value }),
      });
    } else {
      // 이미 애니 제목이 같은 키워드 평가 항목이 존재하는 경우
      await updateDoc(userRef, {
        keywordReview: current.map((item) => {
          if (item.aniTitle !== aniTitle) {
            return item;
          }
          return { ...item, likes: userKeyword.value };
        }),
      });
    }
  }

  const sharedKeyword = ref([]);
  async function setSharedKeywordData() {
    const docRef = doc(db, "anime", aniTitle);
    const originData = (await getDoc(docRef)).data().keywordReview;

    sharedKeyword.value = Object.keys(originData)
      .map((item) => ({
        id: item,
        ...originData[`${item}`],
      }))
      .sort(({ keyword: aKeyword }, { keyword: bKeyword }) => {
        if (aKeyword > bKeyword) {
          return 1;
        }
        if (aKeyword < bKeyword) {
          return -1;
        }
        return 0;
      });
  }
  const sharedAll = computed(() =>
    sharedKeyword.value.reduce((acc, current) => acc + current.value, 0)
  );
  const sharedMax = computed(
    () =>
      sharedKeyword.value.reduce(
        (acc, now) => (acc.value > now.value ? acc : now),
        {}
      ).keyword
  );

  return {
    userKeyword,
    setKeywordData,
    sharedKeyword,
    sharedAll,
    sharedMax,
    setSharedKeywordData,
  };
}

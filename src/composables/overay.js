import { doc, getDoc } from "firebase/firestore";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/utility/firebase";

export function useOveray({ time = Infinity }) {
  const visible = ref(false);
  function show() {
    visible.value = true;
    if (time !== Infinity) {
      setTimeout(() => {
        close();
      }, time);
    }
  }
  function close() {
    visible.value = false;
  }

  return { visible, show, close };
}

const validRoutes = ["episodes", "reviews"];

/**
 * @typedef {{
 *  keyword: string;
 *  value: number;
 * }} KeywordItem
 * @typedef {{
 *  day:string;
 *  director: string;
 *  genre: string[];
 *  idNumber: number;
 *  keywordReview:{
 *  bgm: KeywordItem;
 *  character: KeywordItem;
 *  directing: KeywordItem;
 *  drawing: KeywordItem;
 *  sakuga: KeywordItem;
 *  story: KeywordItem;
 *  voice: KeywordItem;
 * }} AnimeData
 */
/**
 *
 * @param {import("vue").Ref<HTMLElement>} $root
 * @returns {{
 * animeInfo: import("vue").Ref<AnimeData>;
 * isLoading: import("vue").Ref<boolean>;
 *  getAnimeData: (docRef: import("firebase/firestore").DocumentReference<import("firebase/firestore").DocumentData>) => Promise<void>;
 * }}
 */
export function useAnimeModal($root) {
  const router = useRouter();
  const animeInfo = ref({});
  const isLoading = ref(false);

  async function setAnimeView(to, from) {
    // 새로운 경로에 modal 정보가 포함되어 있고, 이전에는 없었으면
    if (to.query.modal && !from.query.modal) {
      const docRef = doc(db, "anime", to.query.modal);
      isLoading.value = true;
      await getAnimeData(docRef);
      isLoading.value = false;
      $root.value.show();
      document.body.style.overflow = "hidden";
    }
    // 새로운 경로에 modal 정보가 없고, 이전에는 있었으면
    else if (from.query.modal && !to.query.modal) {
      $root.value.close();
      document.body.style.overflow = "auto";
      animeInfo.value = {};
    }
    return true;
  }

  async function getAnimeData(docRef) {
    const anime = await getDoc(docRef);
    if (!anime.exists()) {
      isLoading.value = false;
      return router.replace({ name: "isekai-404" });
    }
    animeInfo.value = anime.data();
  }

  // 입구컷 - 이상한 경로를 넣으면 404 페이지로 이동
  function invalidRoute(to) {
    if (to.query.modal && !validRoutes.includes(to.query.route)) {
      return router.replace({ name: "isekai-404" });
    }
  }
  const cleanupBefore = router.beforeEach(invalidRoute);
  const cleanupAfter = router.afterEach(setAnimeView);
  onUnmounted(() => {
    cleanupBefore();
    cleanupAfter();
  });

  return { animeInfo, isLoading, getAnimeData };
}

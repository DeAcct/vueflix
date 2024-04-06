import { doc, getDoc } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/utility/firebase";

export function useOveray({ time = Infinity, overflowHidden = false }) {
  const visible = ref(false);
  function show() {
    visible.value = true;
    console.log(overflowHidden);
    if (overflowHidden) document.documentElement.style.overflow = "hidden";
    if (time !== Infinity) {
      setTimeout(() => {
        close();
      }, time);
    }
  }
  function close() {
    if (overflowHidden) document.documentElement.style.overflow = "auto";
    visible.value = false;
  }
  return { visible, show, close };
}

const validRoutes = ["episodes", "reviews"];
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
    }
    // 새로운 경로에 modal 정보가 없고, 이전에는 있었으면
    else if (from.query.modal && !to.query.modal) {
      $root.value.close();
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

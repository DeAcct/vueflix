import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/utility/firebase";

export function useOveray() {
  const $root = ref(null);

  function show(e) {
    if (!$root.value) {
      return;
    }
    $root.value.dialogRoot.showModal();
    document.documentElement.style.overflow = "hidden";
  }

  function close() {
    document.documentElement.style.overflow = "auto";
    $root.value.dialogRoot.close();
  }

  return { $root, show, close };
}

export function useAutoPop(time = 1000) {
  const visible = ref(false);
  function show() {
    visible.value = true;
    setTimeout(() => {
      close();
    }, time);
  }
  function close() {
    visible.value = false;
  }
  return { visible, show, close };
}

const validRoutes = ["episodes", "reviews"];
export function useAnimeModal() {
  const router = useRouter();
  const animeInfo = ref({});
  const { $root, show, close } = useOveray();

  async function setAnimeView(to, from) {
    // 새로운 경로에 modal 정보가 포함되어 있고, 이전에는 없었으면
    if (to.query.modal && !from.query.modal) {
      const docRef = doc(db, "anime", to.query.modal);
      await getAnimeData(docRef);
      show();
    }
    // 새로운 경로에 modal 정보가 없고, 이전에는 있었으면
    else if (from.query.modal && !to.query.modal) {
      close();
    }
    return true;
  }

  async function getAnimeData(docRef) {
    const anime = await getDoc(docRef);
    if (!anime.exists()) {
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

  return { $root, animeInfo };
}

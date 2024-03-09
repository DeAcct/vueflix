import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/utility/firebase";

export function useOveray() {
  const $root = ref(null);

  function show(e) {
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
      return router.push({ name: "isekai-404" });
    }
    animeInfo.value = anime.data();
  }

  const cleanup = router.afterEach(setAnimeView);
  onUnmounted(() => cleanup());

  return { $root, animeInfo };
}

import { computed, ref, unref } from "vue";
import { useAuth } from "@/store/auth";
import { db } from "@/utility/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

export function useWannaSee(aniTitle) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  const wannaSee = computed(() => {
    if (!user.value) {
      return false;
    }
    const _aniTitle = unref(aniTitle);
    return user.value.wannaSee.some((item) => item.aniTitle === _aniTitle);
  });

  async function getWannaSee(uid) {
    const data = await getDoc(doc(db, "user", uid));
    return data.data().wannaSee;
  }

  async function toggleWannaSee() {
    const _aniTitle = unref(aniTitle);
    const _wannaSee = wannaSee.value
      ? user.value.wannaSee.filter((item) => item.aniTitle !== _aniTitle)
      : arrayUnion({ aniTitle: _aniTitle, date: new Date() });

    await updateDoc(doc(db, "user", user.value.uid), {
      wannaSee: _wannaSee,
    });
    await auth.syncUser();
  }

  async function removeWannaSee(target = "all") {
    const result =
      target === "all"
        ? []
        : user.value.wannaSee.filter((item) => !target.includes(item.aniTitle));
    await updateDoc(doc(db, "user", user.value.uid), {
      wannaSee: result,
    });
    await auth.syncUser();
  }
  return { wannaSee, toggleWannaSee, removeWannaSee, getWannaSee };
}

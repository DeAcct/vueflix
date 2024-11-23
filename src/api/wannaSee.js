import { computed, ref } from "vue";
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
    return user.value.wannaSee.some((item) => item.aniTitle === aniTitle);
  });

  async function getWannaSee(uid) {
    const data = await getDoc(doc(db, "user", uid));
    return data.data().wannaSee;
  }

  async function toggleWannaSee() {
    const updatedWannaSee = wannaSee.value
      ? user.value.wannaSee.filter((item) => item.aniTitle !== aniTitle)
      : arrayUnion({ aniTitle, date: new Date() });

    await updateDoc(doc(db, "user", user.value.uid), {
      wannaSee: updatedWannaSee,
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

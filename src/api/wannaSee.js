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
    if (wannaSee.value) {
      updateDoc(doc(db, "user", user.value.uid), {
        wannaSee: user.value.wannaSee.filter(
          (item) => item.aniTitle !== aniTitle
        ),
      });
    } else {
      updateDoc(doc(db, "user", user.value.uid), {
        wannaSee: arrayUnion({ aniTitle, date: new Date() }),
      });
    }
    await auth.syncUser();
  }

  async function removeWannaSee(target = "all") {
    let result;
    if (target === "all") {
      result = [];
    } else {
      result = user.value.wannaSee.filter(
        (item) => ![...target].includes(item.aniTitle)
      );
    }
    updateDoc(doc(db, "user", user.value.uid), {
      wannaSee: result,
    });
    await auth.syncUser();
  }
  return { wannaSee, toggleWannaSee, removeWannaSee, getWannaSee };
}

import {
  increment,
  query,
  getDocs,
  where,
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { db } from "@/utility/firebase";

/**
 * updown과 관련된 api입니다.
 * @param {{id:string}} 변경할 리액션의 id를 정합니다.
 * @returns
 */
export function useUpdown({ id, writer }) {
  const updown = ref(0);
  const store = useStore();
  const user = computed(() => store.state.auth.user);

  /**
   * 지정한 수치만큼 updown 수치를 변경하고 자동으로 새로 고칩니다.
   * @param {{action:1|-1}} option updown 수치를 어떻게 업데이트할 지 정합니다.
   * ex)-1, 1, 2, ...
   */
  async function Update({ action }) {
    if (!user.value) {
      return;
    }
    // 본인의 리액션에 반응할 수 없음
    if (user.value.uid === writer) {
      return;
    }
    await setDoc(
      doc(db, "reaction", id),
      { updown: increment(action) },
      { merge: true },
    );
  }

  /**
   * updown 수치를 새로 고칩니다.
   */
  async function Read() {
    const q = query(collection(db, "reaction"), where("_id", "==", id));
    const animeReactions = (await getDocs(q)).docs.map((reaction) => reaction.data())[0];
    updown.value = animeReactions.updown;
  }

  return { updown, Update, Read };
}

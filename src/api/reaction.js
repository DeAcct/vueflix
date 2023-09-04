import { useStore } from "vuex";
import { computed, ref } from "vue";
import {
  doc,
  setDoc,
  arrayUnion,
  collection,
  where,
  getDocs,
  query,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "@/utility/firebase";
import { useRoute } from "vue-router";

/**
 * 리액션(리뷰, 댓글)과 관련된 api입니다.
 * @param {{
 *  type:"comment" | "review" ,
 * }} option 변경할 리액션의 id를 정합니다.
 */
export function useReaction({ type }) {
  const reactions = ref([]);
  const store = useStore();
  const route = useRoute();
  const user = computed(() => store.state.auth.user);
  const parent = computed(() =>
    type === "review"
      ? route.params.title
      : `${route.params.title} ${route.params.part} ${route.params.index}`
  );

  /**
   * 리액션(리뷰, 댓글)을 새로 생성합니다.
   * @param {{
   *  content: string
   * }} option 리액션의 내용을 받습니다.
   */
  async function Create({ content }) {
    if (!user.value) {
      return;
    }
    const newItem = {
      author: user.value.nickname,
      uid: user.value.uid,
      content,
      updown: 0,
      time: new Date(),
      parent: parent.value,
      type,
      isEdited: false,
      thumbs: 0,
    };

    // 문서의 이름을 난수로 생성
    const newDoc = doc(collection(db, "reaction"));
    await setDoc(newDoc, { ...newItem, _id: newDoc.id });
    await setDoc(
      doc(db, "user", user.value.uid),
      { reaction: arrayUnion(newDoc.id) },
      { merge: true }
    );
  }

  /**
   * 리액션(리뷰, 댓글) 목록을 새로 고칩니다.
   */
  async function Read() {
    const q = query(
      collection(db, "reaction"),
      where("parent", "==", parent.value),
      where("type", "==", type)
    );
    const animeReviews = (await getDocs(q)).docs.map((doc) => doc.data());
    reactions.value = animeReviews;
  }

  /**
   * 리액션(리뷰, 댓글)을 업데이트합니다.
   * @param {{
   *  id: string,
   *  content: string
   * }} option 업데이트할 리액션의 id와 새 내용을 받습니다.
   */
  async function Update({ id, content }) {
    if (!user.value) {
      return;
    }
    await setDoc(
      doc(db, "reaction", id),
      { content, isEdited: true },
      { merge: true }
    );
  }

  /**
   * 리액션(리뷰, 댓글)을 삭제합니다.
   * @param {{
   *  id: string,
   *  content: string
   * }} option 삭제할 리액션의 id를 받습니다.
   */
  async function Delete({ id }) {
    if (!user.value) {
      return;
    }
    await deleteDoc(doc(db, "reaction", id));
    await setDoc(
      doc(db, "user", user.value.uid),
      { reaction: arrayRemove(id) },
      { merge: true }
    );
  }

  return { reactions, parent, Create, Read, Update, Delete };
}

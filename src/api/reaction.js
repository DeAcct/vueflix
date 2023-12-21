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
  getDoc,
} from "firebase/firestore";
import { useRoute } from "vue-router";
import { db } from "@/utility/firebase";
import { useTimeSplit } from "../composables/formatter";

/**
 * 리액션(리뷰, 댓글)과 관련된 api입니다.
 * @param {{
 *  type: "comment" | "review"
 *  parent: string,
 * }} option 변경할 리액션의 id를 정합니다.
 */
export function useReaction({ type, parent, maxTime }) {
  const reactions = ref([]);
  const store = useStore();
  const route = useRoute();
  const user = computed(() => store.state.auth.user);

  /**
   * 리액션(리뷰, 댓글)을 새로 생성합니다.
   * @param {{
   *  content: string
   * }} option 리액션의 내용을 받습니다.
   */
  async function Create({ content }) {
    if (!user.value) {
      console.error("로그인하지 않으면 리액션을 생성할 수 없습니다.");
      return;
    }

    // 숫자 부분을 기준으로 잘라 배열 생성
    // 시간 부분은 <time>시간 형식으로 저장
    // comment인 경우에만 적용, 아닌 경우에는 원본 문자열을 배열에 그대로 담음
    const formattedContent =
      type === "comment" ? useTimeSplit(content) : [content];

    const newItem = {
      uid: user.value.uid,
      parent: parent,
      author: user.value.nickname,
      content: formattedContent,
      updown: 0,
      time: new Date(),
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
      where("parent", "==", parent),
      where("type", "==", type)
    );
    let animeReactions = (await getDocs(q)).docs.map((reaction) =>
      reaction.data()
    );

    animeReactions = animeReactions.toSorted(
      (prev, next) => prev.time.toDate() - next.time.toDate()
    );

    if (user) {
      animeReactions = animeReactions.toSorted((prev, next) => {
        if (prev.uid === user.uid) {
          return 1;
        }
        return -1;
      });
    }

    reactions.value = animeReactions;
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
    const formattedContent =
      type === "comment" ? useTimeSplit(content) : [content];

    await setDoc(
      doc(db, "reaction", id),
      { content: formattedContent, isEdited: true },
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

  return {
    reactions,
    parent,
    Create,
    Read,
    Update,
    Delete,
  };
}

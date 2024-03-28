import { computed, watch } from "vue";
import { useRoute } from "vue-router";
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

import { db } from "@/utility/firebase";
import { useTimeSplit } from "@/composables/formatter";
import { useAuth } from "@/store/auth";

/**
 * 리액션(리뷰, 댓글)을 새로 생성합니다.
 * @param {{
 *  content: string,
 *  parent: string,
 *  type: "comment" | "review",
 * }} option 리액션의 내용을 받습니다.
 */
export async function Create({ content, parent, type }) {
  const auth = useAuth();
  const user = computed(() => auth.user);

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
    parent,
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
  await auth.syncUser();
}

/**
 * @param {{
 *  parent: string,
 *  type: "comment" | "review"
 * }}
 * 리액션(리뷰, 댓글) 목록을 새로 고칩니다.
 */
export async function Read({ parent, type }) {
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

  // 로그인한 상태라면 내가 먼저 보이도록 다시 정렬
  const auth = useAuth();
  const user = computed(() => auth.user);
  if (user) {
    animeReactions = animeReactions.toSorted((prev, next) => {
      if (prev.uid === user.uid) {
        return 1;
      }
      return -1;
    });
  }

  return animeReactions;
}

/**
 * 리액션(리뷰, 댓글)을 수정합니다.
 * @param {{
 *  id: string,
 *  content: string,
 *  type: "comment" | "review",
 * }} option 수정할 리액션의 id와 새 내용을 받습니다.
 */
export async function Update({ id, content, type }) {
  const auth = useAuth();
  const user = computed(() => auth.user);
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
  await auth.syncUser();
}

/**
 * 리액션(리뷰, 댓글)을 삭제합니다.
 * @param {{
 *  id: string,
 * }} option 삭제할 리액션의 id를 받습니다.
 */
export async function Delete({ id }) {
  const auth = useAuth();
  const user = computed(() => auth.user);
  if (!user.value) {
    return;
  }
  await deleteDoc(doc(db, "reaction", id));
  await setDoc(
    doc(db, "user", user.value.uid),
    { reaction: arrayRemove(id) },
    { merge: true }
  );
  await auth.syncUser();
}

/**
 * uid를 기반으로 리액션(리뷰, 댓글)을 가져옵니다.
 * @param {{
 *  uid: string
 * }} option 가져올 리액션의 uid를 받습니다.
 * @returns {Promise<Array<{
 *  _id:string,
 *  content: Array<string|`<time>${string}`>
 *  isEdited: boolean,
 *  parent: string,
 *  thumbs: number,
 *  time: Date,
 *  type: "comment" | "review",
 *  uid: string,
 * }>>}
 */
export async function ReadByUid(uid) {
  // const q = query();
  // const userReactions = (await getDocs(q)).docs.map((reaction) =>
  //   reaction.data()
  // );
  const userDoc = doc(db, "user", uid);
  const userReactions = (await getDoc(userDoc)).data().reaction;
  return userReactions;
}

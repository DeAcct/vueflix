import { computed, unref, watch } from "vue";
import { useRoute } from "vue-router";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  collection,
  where,
  getDocs,
  query,
  deleteDoc,
  arrayRemove,
  getDoc,
  orderBy,
  limit,
  getCountFromServer,
  startAfter,
  startAt,
} from "firebase/firestore";

import { db } from "@/utility/firebase";
import { useTimeSplit } from "@/composables/formatter";
import { useAuth } from "@/store/auth";

/**
 * 사용자가 생성한 리액션을 나타내는 객체입니다.
 * @typedef {Object} Reaction
 * @property {string} uid 리액션을 생성한 사용자의 uid
 * @property {string} parent 리액션의 부모 문서의 id
 * @property {Array<string|`<time>${string}`>} content 리액션의 내용
 * @property {number} updown 리액션의 추천 수
 * @property {Date} time 리액션이 생성된 시간
 * @property {"comment" | "review"} type 리액션의 타입
 * @property {boolean} isEdited 리액션이 수정되었는지 여부
 * */

/**
 * 리액션(리뷰, 댓글)을 새로 생성합니다.
 * @param {{
 *  content: string,
 *  parent: string,
 *  type: "comment" | "review",
 * }} option 리액션의 내용을 받습니다.
 * @returns {Promise<Reaction>} 작업이 완료되면 생성된 리액션 객체를 반환합니다.
 */
export async function Create({ content, parent, type }) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  // 리액션 작성 불가 처리
  // - 로그인하지 않은 경우
  if (!user.value) {
    console.error("로그인하지 않으면 리액션을 생성할 수 없습니다.");
    return { error: "not-logged-in" };
  }

  // - 내용이 없는 경우
  if (!content) {
    console.error("리액션 내용이 없습니다.");
    return { error: "no-content" };
  }

  // - 이미 해당 애니의 리뷰를 작성한 적이 있는 경우
  if (type === "review") {
    const count = await ReadReactionCount(
      { parent, type },
      where("uid", "==", user.value.uid)
    );
    if (count > 0) {
      console.error("이미 리뷰를 작성한 애니입니다.");
      return { error: "already-reviewed" };
    }
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
    keywords: [],
  };

  console.log(newItem);

  // 문서의 이름을 난수로 생성
  const newDoc = doc(collection(db, "reaction"));
  await setDoc(newDoc, { ...newItem, _id: newDoc.id });
  await setDoc(
    doc(db, "user", user.value.uid),
    { reaction: arrayUnion(newDoc.id) },
    { merge: true }
  );
  await auth.syncUser();

  return newItem;
}

export async function ReadReactionCount({ parent, type }, ...queryOption) {
  const q = query(
    collection(db, "reaction"),
    where("parent", "==", parent),
    where("type", "==", type),
    ...queryOption
  );
  const countResponse = await getCountFromServer(q);
  const count = countResponse.data().count;
  return count;
}

/**
 * 리액션(리뷰, 댓글) 목록을 새로 고칩니다.
 * @param {{
 *  parent: string,
 *  type: "comment" | "review",
 * }} option 부모 문서의 id와 리액션 타입, 필요시 페이지 사이즈와 페이지를 받습니다.
 * @returns {Promise<{reactions: Array<Reaction>, lastDoc: Reaction}>}
 */
export async function Read({ parent, type }, ...queryOption) {
  const q = query(
    collection(db, "reaction"),
    where("parent", "==", parent),
    where("type", "==", type),
    ...queryOption
  );
  const docs = (await getDocs(q)).docs;
  let reactions = docs.map((reaction) => reaction.data());
  const lastDoc = docs[docs.length - 1];

  // 로그인한 상태라면 내가 먼저 보이도록 다시 정렬
  const auth = useAuth();
  const user = computed(() => auth.user);
  if (user) {
    reactions = reactions.toSorted((prev, next) => {
      if (prev.uid === user.uid) {
        return 1;
      }
    });
  }

  return { reactions, lastDoc };
}

/**
 * 리액션(리뷰, 댓글)을 수정합니다.
 * @param {{
 *  id: string,
 *  content: string,
 *  type: "comment" | "review",
 * }} option 수정할 리액션의 id와 새 내용을 받습니다.
 */
export async function Update({ id, content, type, keywords }) {
  const auth = useAuth();
  const user = computed(() => auth.user);
  if (!user.value) {
    return;
  }
  const _content =
    type === "comment"
      ? useTimeSplit(content)
      : Array.isArray(content)
      ? content
      : [content];

  await setDoc(
    doc(db, "reaction", id),
    {
      content: _content,
      isEdited: true,
      keywords,
    },
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
  const q = query(collection(db, "reaction"), where("uid", "==", uid));
  const userReactions = (await getDocs(q)).docs.map((reaction) =>
    reaction.data()
  );
  // const userDoc = doc(db, "user", uid);
  // const userReactions = (await getDoc(userDoc)).data().reaction;
  return userReactions;
}

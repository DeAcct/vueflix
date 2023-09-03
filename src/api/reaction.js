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
import { db } from "../utility/firebase";

export function useReaction({ type, parent }) {
  const reactions = ref([]);
  const store = useStore();
  const user = computed(() => store.state.auth.user);

  async function Create({ content }) {
    if (!user.value) {
      return;
    }
    const newItem = {
      author: user.value.nickname,
      uid: user.value.uid,
      content,
      thumbsUp: 0,
      time: new Date(),
      parent,
      type,
      isEdited: false,
    };

    // 문서의 이름을 난수로 생성
    const newDoc = doc(collection(db, "reaction"));
    await setDoc(newDoc, { ...newItem, _id: newDoc.id });
    await setDoc(
      doc(db, "user", user.value.uid),
      { reaction: arrayUnion(newDoc.id) },
      { merge: true }
    );

    //자동 새로고침
    await Read();
  }

  async function Read() {
    const q = query(
      collection(db, "reaction"),
      where("parent", "==", parent),
      where("type", "==", type)
    );
    const animeReviews = (await getDocs(q)).docs.map((doc) => doc.data());
    reactions.value = animeReviews;
  }

  async function Update({ id, content }) {
    if (!user.value) {
      return;
    }
    await setDoc(
      doc(db, "reaction", id),
      { content, isEdited: true },
      { merge: true }
    );

    //자동 새로고침
    await Read();
  }

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

    //자동 새로고침
    await Read();
  }

  return { reactions, Create, Read, Update, Delete };
}

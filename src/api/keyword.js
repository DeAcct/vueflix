import { computed, onMounted, ref, watchEffect } from "vue";
import { useAuth } from "@/store/auth";
import { db } from "@/utility/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
  deleteField,
} from "firebase/firestore";

export async function ReadShared(aniTitle) {
  const docRef = doc(db, "anime", aniTitle);
  const animeDoc = await getDoc(docRef);
  const keyword = animeDoc.data().keyword;

  return keyword;
}

export async function ReadMine(aniTitle) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  const userRef = doc(db, "user", user.value.uid);
  const userDoc = await getDoc(userRef);
  const keyword = userDoc.data().keyword[aniTitle];

  return keyword;
}

export async function Up(aniTitle, text) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  if (!user.value) {
    console.error("로그인하지 않으면 키워드를 생성할 수 없습니다.");
    return { error: "not-logged-in" };
  }

  if (!text) {
    console.error("비어있는 키워드를 생성할 수 없습니다.");
    return { error: "blank-content" };
  }

  const docRef = doc(db, "anime", aniTitle);
  const userRef = doc(db, "user", user.value.uid);

  await updateDoc(docRef, {
    [`keyword.${text}`]: increment(1),
  });
  await updateDoc(userRef, {
    [`keyword.${aniTitle}`]: arrayUnion(text),
  });
}

export async function Down(aniTitle, text) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  const docRef = doc(db, "anime", aniTitle);
  const userRef = doc(db, "user", user.value.uid);

  const animeDoc = await getDoc(docRef);
  const count = animeDoc.data().keyword[text];

  await updateDoc(docRef, {
    [`keyword.${text}`]: count === 1 ? deleteField() : increment(-1),
  });
  await updateDoc(userRef, {
    [`keyword.${aniTitle}`]: arrayRemove(text),
  });
}

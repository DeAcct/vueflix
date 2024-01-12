import { defineStore } from "pinia";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../utility/firebase";
import { ref, computed } from "vue";

export const useAuth = defineStore("auth", () => {
  // 세션스토리지에 로그인 기록이 남아있다면 유지
  const user = ref(null);
  const auth = getAuth();

  const wannaSee = computed(() => {
    if (!user.value) {
      return [];
    }
    return user.value.wannaSee;
  });

  async function syncUser() {
    const auth = getAuth();
    if (!auth.currentUser) {
      user.value = null;
      return;
    }

    const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", auth.currentUser.email));
    const dataFromEmail = (await getDocs(q)).docs;
    if (!dataFromEmail) {
      user.value = null;
      return;
    }
    user.value = dataFromEmail[0].data();
  }
  onAuthStateChanged(auth, async () => {
    await syncUser(auth);
  });

  async function signOutUser() {
    user.value = null;
    signOut(auth);
  }

  // 이메일-패스워드 회원가입
  async function createEmailUser({ profileImg, nickname, email, password }) {
    try {
      // 중복 체크
      const isDuplicated = await checkEmailDuplicate(email);
      if (isDuplicated) {
        throw new Error("이미 존재하는 이메일입니다.");
      }

      // 계정 생성
      const credential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      // 사용자 정보 저장
      // uid 생성
      const userRef = doc(db, "user", auth.currentUser.uid);
      // 기본정보 생성
      const user = {
        // 개인식별정보
        uid: auth.currentUser.uid,
        nickname: nickname.value,
        email: email.value,
        profileImg: profileImg.value,
        // 사용기록
        recentWatched: [],
        wannaSee: [],
        reviews: 0,
        reaction: [],
        maratonWatch: [],
        purchased: [],
        membership: {
          initDate: new Date(),
        },
      };

      //기본정보 업로드
      await setDoc(userRef, user);
      user.value = user;

      // const user = credential.user;
    } catch (e) {
      console.log(e.code, e.message);
    }
  }

  async function sendVerification() {}

  // 이메일 중복체크
  async function checkEmailDuplicate(email) {
    const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", email.value));

    const users = await getDocs(q);
    return users.docs.length !== 0;
  }

  // 이메일-패스워드 로그인
  async function signInEmailUser(email, password) {
    const auth = getAuth();
    console.log(auth, email.value);
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      console.log(credential);
    } catch (e) {
      console.log(e.code, e.message);
    }
  }

  async function signInOAuthGoogle() {
    const provider = new GoogleAuthProvider();
  }

  async function logout() {
    await signOut(auth);
    user.value = null;
    localStorage.setItem("user", JSON.stringify(null));
  }

  return {
    user,
    wannaSee,
    syncUser,
    createEmailUser,
    sendVerification,
    checkEmailDuplicate,
    signInEmailUser,
    signInOAuthGoogle,
    logout,
  };
});

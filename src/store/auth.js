import { ref, computed, unref } from "vue";
import { defineStore } from "pinia";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  signOut,
  linkWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  unlink,
  reauthenticateWithPopup,
  deleteUser,
} from "firebase/auth";
import { ref as fireRef, uploadBytes } from "firebase/storage";
import { db, storage } from "@/utility/firebase";
import { providers } from "@/enums/OAuthProvider";
import { useBrowserStorage } from "@/composables/browserStorage";

export const useAuth = defineStore("auth", () => {
  // 세션스토리지에 로그인 기록이 남아있다면 유지
  const user = ref(null);
  const auth = getAuth();

  const uid = computed(() => {
    if (!user.value) {
      return null;
    }
    return user.value.uid;
  });

  const wannaSee = computed(() => {
    if (!user.value) {
      return [];
    }
    return user.value.wannaSee;
  });

  const profileImg = computed(() => {
    if (!user.value) {
      return "";
    }
    return user.value.profileImg;
  });

  // 로그인 상태가 변할 때마다 유저를 반영
  async function syncUser() {
    console.log("syncUser");
    const auth = getAuth();
    if (!auth.currentUser) {
      user.value = null;
      return;
    }

    const data = await getData(auth.currentUser.uid);
    if (data.exists()) {
      user.value = data.data();
      return;
    }
  }
  async function getData(uid) {
    const data = await getDoc(doc(db, "user", uid));
    return data;
  }
  onAuthStateChanged(auth, async () => {
    await syncUser(auth);
  });

  async function signOutUser() {
    user.value = null;
    signOut(auth);
  }

  // 이메일-패스워드 회원가입
  async function createUser({
    profileImg,
    nickname,
    email,
    password,
    type = "email",
  }) {
    try {
      // 중복 체크
      const isDuplicated = await checkEmailDuplicate(email);
      if (isDuplicated) {
        throw new Error("이미 존재하는 이메일입니다.");
      }

      let profile;
      if (type === "email") {
        // 계정 생성(OAuth가 아닌 경우)
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        profile = unref(profileImg);
      } else {
        const res = await fetch(profileImg);
        const data = await res.blob();
        const extension = data.type.split("/")[1];
        const fileRef = fireRef(
          storage,
          `user/${auth.currentUser.uid}/${auth.currentUser.uid}.${extension}`
        );
        await uploadBytes(fileRef, data);
        profile = {
          type: "custom",
          name: `user/${auth.currentUser.uid}/${auth.currentUser.uid}.${extension}`,
        };
      }

      // 사용자 정보 저장
      // uid 생성
      const userRef = doc(db, "user", auth.currentUser.uid);
      // 기본정보 생성
      const user = {
        // 개인식별정보
        uid: auth.currentUser.uid,
        nickname: unref(nickname),
        email: unref(email),
        profileImg: profile,
        // 사용기록
        maraton: [],
        wannaSee: [],
        purchased: [],
        notInterested: [],
        reaction: [],
        membership: {
          initDate: new Date(),
        },
      };

      //기본정보 업로드
      await setDoc(userRef, user);
      user.value = user;
    } catch (e) {
      console.log(e.code, e.message);
    }
  }

  // 이메일 중복체크
  async function checkEmailDuplicate(email) {
    const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", unref(email)));

    const users = await getDocs(q);
    return users.docs.length !== 0;
  }

  // 이메일-패스워드 로그인
  async function signInEmailUser(email, password) {
    const auth = getAuth();
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        unref(email),
        password.value
      );
    } catch (e) {
      console.log(e.code, e.message);
    }
  }

  async function continueOAuth(key) {
    const auth = getAuth();
    await signInWithPopup(auth, providers[key].provider);
    const data = await getData(auth.currentUser.uid);
    if (data.exists()) {
      return;
    }
    await createUser({
      profileImg: auth.currentUser.photoURL,
      nickname: auth.currentUser.displayName,
      email: auth.currentUser.email,
      type: "oauth",
    });
    await syncUser();
  }

  // todo:
  // OAuth만을 위한 메서드가 아닌 email도 연동할 수 있는 범용적 메서드로 수정
  async function connectOAuth(key) {
    const auth = getAuth();
    await linkWithPopup(auth.currentUser, providers[key].provider);
  }
  async function disconnectOAuth(key) {
    const auth = getAuth();
    await unlink(auth.currentUser, providers[key].id);
  }

  async function logout() {
    await signOut(auth);
  }

  const { clearData } = useBrowserStorage("recent-method");
  async function goodbyeUser() {
    const auth = getAuth();
    await reAuth();
    await deleteDoc(doc(db, "user", auth.currentUser.uid));
    await deleteUser(auth.currentUser);
    clearData();
  }
  async function reAuth() {
    const auth = getAuth();
    const currentUserProviders = auth.currentUser.providerData.map(
      (provider) => provider.providerId
    );
    const firstProvider = providers.findById(currentUserProviders[0]);
    await reauthenticateWithPopup(auth.currentUser, firstProvider.provider);
  }

  return {
    user,
    wannaSee,
    uid,
    profileImg,
    syncUser,
    createUser,
    checkEmailDuplicate,
    signInEmailUser,
    continueOAuth,
    connectOAuth,
    disconnectOAuth,
    logout,
    goodbyeUser,
  };
});

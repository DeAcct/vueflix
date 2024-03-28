import { ref, computed, unref } from "vue";
import { defineStore } from "pinia";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  // onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
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
  linkWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import {
  deleteObject,
  ref as fireStorageRef,
  listAll,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "@/utility/firebase";
import { PROVIDERS, findProviderById } from "@/enums/OAuthProvider";
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
        const fileRef = fireStorageRef(
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
        maraton: [],
        wannaSee: [],
        purchased: [],
        notInterested: [],
        reaction: [],
        keywordReview: [],
        membership: {
          initDate: new Date(),
          tier: "free",
          viewCounter: 0,
        },
      };

      //기본정보 업로드
      await setDoc(userRef, user);
      user.value = user;
    } catch (error) {
      return { code: error.code, message: error.message };
    }
  }
  async function editUser({ nickname, profileImg }) {
    const { type, file, name } = unref(profileImg);
    const before = user.value;
    if (
      before.nickname === unref(nickname) &&
      before.profileImg.name === name &&
      before.profileImg.type === type
    ) {
      return { code: "success", message: "수정사항이 없어요" };
    }

    let after = {};
    after = {
      nickname: unref(nickname),
    };
    if (file) {
      after.profileImg = {
        type,
        name:
          type === "custom"
            ? `user/${auth.currentUser.uid}/${file.name}`
            : file,
      };
    }
    await updateDoc(doc(db, "user", auth.currentUser.uid), after);
    if (type === "custom" && file) {
      await clearProfileImages();
      const fileRef = fireStorageRef(
        storage,
        `user/${auth.currentUser.uid}/${file.name}`
      );
      await uploadBytes(fileRef, file);
    }
    await syncUser();
    return { code: "success", message: "성공적으로 수정했어요" };
  }

  // 이메일 중복체크
  async function checkEmailDuplicate(email) {
    const userRef = collection(db, "user");
    const q = query(userRef, where("email", "==", unref(email)));

    const users = await getDocs(q);
    return users.docs.length !== 0;
  }

  // 이메일-패스워드 로그인
  async function continueUser({ key, email, password }) {
    const auth = getAuth();
    if (key === "Email") {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } catch (error) {
        return { code: error.code, message: error.message };
      }
    }
    await continueOAuth(key);
  }

  async function continueOAuth(key) {
    const auth = getAuth();
    await signInWithPopup(auth, new PROVIDERS[key].provider());
    const data = await getData(auth.currentUser.uid);
    if (data.exists()) {
      return;
    }
    try {
      await createUser({
        profileImg: auth.currentUser.photoURL,
        nickname: auth.currentUser.displayName,
        email: auth.currentUser.email,
        type: "oauth",
      });
    } catch (error) {
      return { code: error.code, message: error.message };
    }
    await syncUser();
  }

  async function connectAuth({ key = "Email", email, password }) {
    const auth = getAuth();
    if (key === "Email") {
      console.log(unref(email), unref(password));
      const credential = EmailAuthProvider.credential(
        unref(email),
        unref(password)
      );
      await linkWithCredential(auth.currentUser, credential);
    }
    const provider = new PROVIDERS[key].provider();
    await linkWithPopup(auth.currentUser, provider);
  }
  async function disconnectAuth(key) {
    const auth = getAuth();
    await unlink(auth.currentUser, PROVIDERS[key].id);
  }

  async function logout() {
    await signOut(auth);
  }

  async function clearProfileImages() {
    const dir = fireStorageRef(storage, `user/${user.value.uid}`);
    const files = await listAll(dir);
    await Promise.all(files.items.map((item) => deleteObject(item)));
  }

  const { clearData } = useBrowserStorage("recent-method");
  async function goodbyeUser() {
    const auth = getAuth();
    await reAuth();
    if (user.value.profileImg.type === "custom") {
      await clearProfileImages();
    }
    await deleteDoc(doc(db, "user", auth.currentUser.uid));
    await deleteUser(auth.currentUser);
    clearData();
  }
  async function reAuth() {
    const auth = getAuth();
    const currentUserProviders = auth.currentUser.providerData.map(
      (provider) => provider.providerId
    );
    const firstProvider = findProviderById(currentUserProviders[0]);
    await reauthenticateWithPopup(
      auth.currentUser,
      new firstProvider.provider()
    );
  }
  async function removeProfileImg() {
    const fileList = await listAll(dir);
    return fileList.map((item) => deleteObject(item));
  }

  return {
    user,
    wannaSee,
    uid,
    profileImg,
    syncUser,
    createUser,
    editUser,
    checkEmailDuplicate,
    continueUser,
    connectAuth,
    disconnectAuth,
    logout,
    goodbyeUser,
  };
});

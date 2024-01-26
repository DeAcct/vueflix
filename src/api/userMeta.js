import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";
import { unref, ref, onMounted } from "vue";
import { useAuth } from "@/store/auth";

/**
 * uid를 받아서 유저의 현재 닉네임, 자기 자신 여부를 반환합니다.
 * @param {string} uid 닉네임을 찾을 유저의 uid
 * @returns {import("vue").Ref<string>} 닉네임, 자기 자신 여부
 */
export function useUserMeta(uid) {
  const userMeta = ref({});
  onMounted(async () => {
    const data = (await getDoc(doc(db, "user", unref(uid)))).data();
    userMeta.value = data;
  });
  return userMeta;
}

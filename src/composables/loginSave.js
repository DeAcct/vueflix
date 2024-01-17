import { ref } from "vue";
import { useBrowserStorage } from "./browserStorage";

export function useLoginSave() {
  const { data, setData, clearData } = useBrowserStorage("save-login");

  const isLoginSave = ref(!!data.value);

  function saveData(email, password) {
    if (!email.value || !password.value) {
      throw {
        code: "error",
        message: "이메일과 비밀번호가 제공되지 않았습니다.",
      };
    }
    if (!isLoginSave.value) {
      if (data.value) {
        clearData();
      }
      return {
        code: "pass",
        message: "로그인 정보 저장을 건너뛰었습니다.",
      };
    }
    setData({ email: email.value, password: password.value });
  }

  return {
    isLoginSave,
    data,
    saveData,
  };
}

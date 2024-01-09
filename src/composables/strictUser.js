import { ref, watch, computed } from "vue";
import { useAuth } from "@/store/auth";

export function useNickname() {
  // 사칭 가능성이 높은 단어만 금지 단어로 설정.
  const nickname = ref("");
  const state = computed(() => {
    if (!nickname.value) {
      return { code: "Unchecked" };
    }
    const FORBIDDEN_WORD = ["운영자", "스태프", "스탭", "뷰플릭스"];
    const contains = FORBIDDEN_WORD.filter((word) =>
      nickname.value.includes(word)
    );
    return {
      code: contains.length ? "Invalid" : "Valid",
      reason: `${contains.join(", ")}은(는) 금지된 단어입니다.`,
    };
  });
  function generateRandomNickname() {
    nickname.value = useRandomNickname();
  }

  return { nickname, state, generateRandomNickname };
}

export function useEmail() {
  // @가 포함되고, 도메인이 포함되도록 설정.
  const auth = useAuth();
  const email = ref("");
  const state = ref("Unchecked");
  watch(email, async () => {
    const containsAt = email.value.includes("@");
    const containsDomain = email.value.split("@").pop().includes(".");
    if (!containsAt || !containsDomain) {
      state.value = "Invalid";
      return;
    }
    state.value = (await auth.checkEmailDuplicate(email))
      ? "Duplicated"
      : "Valid";
  });

  return { email, state };
}

export function usePassword() {
  // 8글자 이상, 너무 뻔한 키워드는 금지단어로 설정.
  const password = ref("");
  const state = computed(() => {
    if (!password.value) {
      return { code: "Unchecked" };
    }
    const FORBIDDEN_WORD = ["qwer", "1234", "vueflix", "asdf"];
    const contains = FORBIDDEN_WORD.filter((word) =>
      password.value.includes(word)
    );

    if (password.value.length < 8) {
      return {
        code: "Invalid",
        reason: "비밀번호가 너무 짧아요",
      };
    }
    return {
      code: contains.length ? "Invalid" : "Valid",
      reason: `${contains.join(", ")}은(는) 비밀번호에 포함할 수 없어요.`,
    };
  });

  return { password, state };
}

import { ref, watch, computed } from "vue";
import { useAuth } from "@/store/auth";
import { useRandomNickname } from "@/utility/randomNickname";

const FORBIDDEN_WORD = [
  // 사칭
  "운영",
  "스태프",
  "스탭",
  "뷰플릭스",
  // 젠더이슈 및 위험한 웹사이트
  "페미",
  "메갈",
  "워마드",
  "여성시대",
  "일베",
  "일간베스트",
  "한남",
  "한녀",
  "소추",
  "재기",
  "인셀",
  "incel",
  "퇘지",
  "쿵쾅",
  "허버허버",
  "오조오억",
  "5조5억",
  // 2차세계대전
  "나치",
  "nazi",
  "하켄크로이츠",
  // 비속어
  "씨발",
  "시발",
  "ㅅㅂ",
  "병신",
  "ㅂㅅ",
  "지랄",
  "ㅈㄹ",
  "좆",
  "자지",
  "잦",
  "보지",
  "봋",
  "자살",
  "니거",
  "nigga",
  "nigger",
];

export function useNickname(initial) {
  const nickname = ref(initial || "");
  const state = computed(() => {
    if (!nickname.value) {
      return { code: "Unchecked" };
    }
    if (nickname.value.length > 10) {
      return { code: "Invalid", message: "너무 길어요" };
    }

    const stringOrNumber = /\p{L}|[0-9]/u.test(nickname.value);
    if (!stringOrNumber) {
      return {
        code: "Invalid",
        message: "특수문자는 사용할 수 없어요",
      };
    }

    const word = FORBIDDEN_WORD.filter((word) => nickname.value.includes(word));

    return !word.length
      ? { code: "Valid", message: "사용 가능해요" }
      : {
          code: "Invalid",
          message: `${word.join(", ")}은(는) 금지된 단어예요`,
        };
  });

  function generateRandomNickname() {
    nickname.value = useRandomNickname();
  }

  return { nickname, state, generateRandomNickname };
}

export function useEmail(initial) {
  const auth = useAuth();
  const email = ref(initial || "");
  const state = ref("Unchecked");

  async function checkDuplicate() {
    if (!email.value) {
      state.value = {
        code: "Invalid",
        message: "이메일을 입력해야 중복을 확인할 수 있어요",
      };
      return;
    }

    state.value = (await auth.checkEmailDuplicate(email))
      ? { code: "Duplicated", message: "중복된 이메일이에요" }
      : { code: "Valid", message: "사용 가능해요" };
  }

  return { email, state, checkDuplicate };
}

const EASY_KEYWORDS = ["qwer", "1234", "vueflix", "asdf", "zxcv"];

export function usePassword(initial) {
  // 8글자 이상, 너무 뻔한 키워드는 금지단어로 설정.
  const password = ref(initial || "");
  const seek = ref(false);
  const state = computed(() => {
    if (!password.value) {
      return { code: "Unchecked" };
    }

    if (password.value.length < 8) {
      return {
        code: "Invalid",
        message: "비밀번호가 너무 짧아요",
      };
    }

    const alphabetOrNumber = /[a-zA-Z]|[0-9]|\!|\*|\^|_|-/g.test(
      password.value
    );
    if (!alphabetOrNumber) {
      return {
        code: "Invalid",
        message: "알파벳과 숫자, !, *, ^, _, -만 사용할 수 있어요",
      };
    }

    const easy = EASY_KEYWORDS.filter((word) => password.value.includes(word));

    return easy.length
      ? {
          code: "Duplicated",
          message: `너무 쉬운 단어라서 ${easy.join(", ")}는 포함할 수 없어요`,
        }
      : { code: "Valid", message: "사용 가능해요" };
  });

  function toggleSeek() {
    seek.value = !seek.value;
  }

  return { password, state, seek, toggleSeek };
}

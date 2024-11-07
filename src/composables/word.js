import { unref } from "vue";

const FORBIDDEN_WORD = [
  // 사칭
  "운영",
  "스태프",
  "스탭",
  // 정치/젠더 이슈
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
  "나치",
  "nazi",
  "하켄크로이츠",
  // 비속어 및 부적절한 단어
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

const EASY_KEYWORDS = ["qwer", "1234", "vueflix", "asdf", "zxcv"];

/**
 * @const {{forbidden:FORBIDDEN_WORD, password: EASY_KEYWORDS}}
 */
const DICTIONARY = {
  forbidden: FORBIDDEN_WORD,
  password: EASY_KEYWORDS,
};

/**
 *
 * @param {"forbidden" | "password"} type
 * @param {string} testTarget
 * @returns {Array<string>}
 */
export function useForbiddenFilter(type, testTarget) {
  const _testTarget = unref(testTarget);
  const forbidden = DICTIONARY[type].filter((word) =>
    _testTarget.includes(word)
  );
  return forbidden;
}

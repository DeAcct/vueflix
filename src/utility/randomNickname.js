const ADJECTIVE_WORDS = [
  "츤데레",
  "얀데레",
  "쿨데레",
  "메가데레",
  "먼치킨",
  "레벨9999",
  "하렘왕",
  "전생",
  "추방",
  "폭렬",
  "방어력올인",
];
const SUBJECT_WORDS = [
  "거인",
  "곰",
  "냥이",
  "코기",
  "대통령",
  "국무총리",
  "트레이너",
  "디자이너",
  "회계사",
  "개발자",
  "사축",
  "서큐버스",
];

const DICTIONARY = [ADJECTIVE_WORDS, SUBJECT_WORDS];

export function useRandomNickname() {
  return DICTIONARY.reduce((prev, curr) => {
    // 랜덤으로 숫자를 뽑는다
    const index = Math.floor(Math.random() * (curr.length - 1));
    // 뽑힌 숫자를 배열 인덱스로 사용하여 단어 하나를 가져온다.
    const selected = curr[index];
    return prev + selected;
    // 같은 방법으로 형용사에서 한 번, 명사에서 한 번 단어를 가져온다.
    // 합쳐서 반환한다.
  }, "");
}

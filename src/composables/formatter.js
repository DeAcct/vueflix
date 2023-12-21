import { computed } from "vue";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

export function useDigit(origin, digits = 10) {
  let result = String(origin);
  for (let i = digits; i >= 10; i /= 10) {
    if (origin < i) {
      result = `0${result}`;
    } else {
      return result;
    }
  }
  return result;
}

dayjs.extend(relativeTime);
dayjs.locale("ko");

export function useFormatDate(origin) {
  const date = computed(() => dayjs(origin).fromNow());
  return { date };
}

export function useSecToFormat(origin) {
  return `${
    origin >= 3600 ? `${useDigit(Math.floor(origin / 3600))}:` : ""
  }${useDigit(Math.floor((origin % 3600) / 60))}:${useDigit(
    Math.floor(origin % 60)
  )}`;
}

export function useTimeSplit(origin, timeMax) {
  // 정규 표현식을 사용하여 HH:MM:DD 또는 MM:DD 시간 형식을 찾음 (전역 검색)
  const timePattern = /(\d{1,3}:\d{2}:\d{2})|(\d{2}:\d{2})/g;

  // 모든 매치를 찾아 배열에 저장
  const matches = origin.match(timePattern) || [];

  // 매치된 부분을 기준으로 문자열을 자르고 배열에 저장
  const resultArray = [];
  let currentPointer = 0;

  for (const match of matches) {
    const index = origin.indexOf(match, currentPointer);
    const before = origin.substring(currentPointer, index);

    // 시간 문자열의 유효성 검증
    // 분과 초는 59를 넘을 수 없다
    const valid = match
      .split(":")
      .reduce(
        (prev, curr, index) => (Number(curr) <= 59 && prev) || index === 0,
        true
      );
    // 잘못된 시간 문자열일 경우 통과하기
    if (!valid) {
      continue;
    }
    resultArray.push(before, `<time>${match}`);
    // 추가할 문자열만큼 포인터 이동
    currentPointer = index + match.length;
  }

  // 남은 부분도 배열에 추가
  resultArray.push(origin.substring(currentPointer));

  return resultArray;
}

export function useFormatToSec(origin) {
  const splitOrigin = origin.split(":").reverse();
  let i = 0;
  let result = 0;
  for (const item of splitOrigin) {
    result += Number(item) * Math.pow(60, i);
    i++;
  }
  console.log(result);
  return result;
}

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

export function useSecToHourMinSec(origin) {
  return `${
    origin >= 3600 ? `${useDigit(Math.floor(origin / 3600))}:` : ""
  }${useDigit(Math.floor((origin % 3600) / 60))}:${useDigit(
    Math.floor(origin % 60),
  )}`;
}

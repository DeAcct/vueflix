import { computed } from "vue";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export function useFormatDate(origin) {
  const date = computed(() => {
    return dayjs(origin).fromNow();
  });
  return { date };
}

import { ref } from "vue";
import { useBrowserStorage } from "./browserStorage";
import dayjs from "dayjs";

export function usePostpone(id) {
  const { data: postponed, setData, clearData: clear } = useBrowserStorage(id);

  function setExpire(day = 30) {
    const startDate = dayjs();
    const endDate = startDate.add(day, "day");
    setData(endDate.toJSON());
  }

  function isExpired() {
    // 한 번도 설정 안했으면 만료된 것으로 간주한다.
    if (!postponed.value) {
      return true;
    }
    const endDate = dayjs(postponed.value);
    // 미룬 날짜보다 현재 날짜가 더 앞서 있는지(지났는지)
    return dayjs().isAfter(endDate);
  }
  return { postponed, setExpire, isExpired, clear };
}

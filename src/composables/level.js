import { computed, toValue } from "vue";
import { useAuth } from "@/store/auth";
import { gausArray } from "../utility/extArray";

// const LEVEL_MAP = [
//   {
//     maxDays: 0,
//     maxLikeit: 0,
//     levelName: "사관생도",
//   },
//   {
//     maxDays: 29,
//     maxLikeit: 39,
//     levelName: "소위",
//   },
//   {
//     maxDays: 99,
//     maxLikeit: 49,
//     levelName: "중위",
//   },
//   {
//     maxDays: 282,
//     maxLikeit: 99,
//     levelName: "대위",
//   },
//   {
//     maxDays: 345,
//     maxLikeit: 149,
//     levelName: "소령",
//   },
//   {
//     maxDays: 764,
//     maxLikeit: 299,
//     levelName: "중령",
//   },
//   {
//     maxDays: 999,
//     maxLikeit: 399,
//     levelName: "대령",
//   },
//   {
//     maxDays: 1528,
//     maxLikeit: 499,
//     levelName: "준장",
//   },
//   {
//     maxDays: Infinity,
//     maxLikeit: Infinity,
//     levelName: "장군",
//   },
// ];

// const LEVEL_MAP = {
//   0: "뉴비",
//   29: "소위",
//   99: "중위",
//   282: "대위",
//   345: "소령",
//   764: "중령",
//   999: "대령",
//   1528: "준장",
//   Infinity: "장군",
// };
const LEVEL_MAP = gausArray({
  30: "소위",
  60: "중위",
  90: "대위",
  150: "소령",
  180: "중령",
  210: "대령",
  730: "준장",
  1000: "장군",
});
export const KOR_TO_ENG = {
  사관생도: "SaGwanSengDo",
  소위: "SoWi",
  중위: "JungWi",
  대위: "DaeWi",
  소령: "SoRyeong",
  중령: "JungRyeong",
  대령: "DaeRyoeng",
  준장: "JunJang",
  장군: "Jangun",
};
const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export function useUserLevel(startedDate) {
  // const store = useAuth();
  // const user = computed(() => store.user);

  const days = computed(() => {
    if (!toValue(startedDate)) {
      return 0;
    }

    return Math.floor(
      (new Date() - toValue(startedDate).toDate()) / ONE_DAY_IN_MILLISECONDS
    );
  });

  const level = computed(() => {
    if (!toValue(startedDate)) {
      return "사관생도";
    }

    return days.value ? LEVEL_MAP[days.value] : "사관생도";
    // const levelInfo = LEVEL_MAP.find(
    //   ({ maxDays }) => subscriptionDays <= maxDays
    // );
    // return {
    //   text: levelInfo.levelName,
    //   maxDays: levelInfo.maxDays,
    // };
    // return date ? LEVEL_MAP[date] : "사관생도";
  });

  return { level, eng: KOR_TO_ENG[level.value], days };
}

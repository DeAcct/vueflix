import { computed, toValue } from "vue";
import { useAuth } from "@/store/auth";
import { gausArray } from "../utility/extArray";

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
  민간인: "Civilian",
  사관생도: "SaGwanSengDo",
  소위: "SoWi",
  중위: "JungWi",
  대위: "DaeWi",
  소령: "SoRyeong",
  중령: "JungRyeong",
  대령: "DaeRyeong",
  준장: "JunJang",
  장군: "Jangun",
};
const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

/**
 * 멤버십 정보를 받아서 사용자의 애니장교 레벨을 계산합니다.
 * @param {{
 *   initDate: Date,
 *   tier: "free" | "jangyo"
 * }} membership
 * @returns
 */
export function useUserLevel(membership) {
  const days = computed(() => {
    if (!membership.value) {
      return 0;
    }
    return Math.floor(
      (new Date() - toValue(membership.value.initDate).toDate()) /
        ONE_DAY_IN_MILLISECONDS
    );
  });

  const level = computed(() => {
    if (membership.value?.tier === "free") {
      return "민간인";
    }
    return days.value ? LEVEL_MAP[days.value] : "사관생도";
  });

  return { level, eng: KOR_TO_ENG[level.value], days };
}

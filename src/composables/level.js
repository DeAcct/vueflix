import { computed } from "vue";
import { useAuth } from "@/store/auth";

export function useUserLevel() {
  const store = useAuth();
  const user = computed(() => store.user);

  const level = computed(() => {
    const currentMonth = new Date();
    const initMonth = user.value.membership.initDate.toDate();

    const ONE_DAY_TO_MILLISECOND = 24 * 60 * 60 * 1000;

    // ::기획자의 영역::
    // 레벨의 기준

    // 일수를 기준으로.
    // 오차를 최소화하기 위함
    // 1개월은 며칠일까? 28일? 29일? 30일? 31일?
    // 개월수를 기준으로 잡을 경우 오차가 발생할 수밖에 없다.

    // 결제 실패가 3회 이상 반복되거나 멤버십을 직접 종료할 경우 0lv로 초기화

    // 밀리세컨드 단위로 가입일부터의 일수를 계산
    // (현재 - 가입한 시점) / (24 * 60 * 60 * 1000)
    // 소수점은 모두 버림

    // 0lv(베이비): 0일(가입 당일)
    // 1lv(모험가): 1 ~ 29일
    // 2lv(용사): 30 ~ 99일
    // 3lv(임팩트): 100 ~ 282일
    // 4lv(인플루언서): 283 ~ 345일
    // 5lv(아이돌): 346 ~ 764일
    // 6lv(애니필): 765 ~ 999일
    // 7lv(전문가): 1000일 이상

    const LEVEL_MAP = [
      {
        maxDays: 0,
        maxLikeit: 0,
        levelName: "베이비",
        styleIdentifier: "baby",
      },
      {
        maxDays: 29,
        maxLikeit: 39,
        levelName: "모험가",
        styleIdentifier: "traveler",
      },
      {
        maxDays: 99,
        maxLikeit: 49,
        levelName: "용사",
        styleIdentifier: "braver",
      },
      {
        maxDays: 282,
        maxLikeit: 99,
        levelName: "임팩트",
        styleIdentifier: "impact",
      },
      {
        maxDays: 345,
        maxLikeit: 149,
        levelName: "인플루언서",
        styleIdentifier: "influencer",
      },
      {
        maxDays: 764,
        maxLikeit: 299,
        levelName: "아이돌",
        styleIdentifier: "idol",
      },
      {
        maxDays: 999,
        maxLikeit: 999,
        levelName: "애니필",
        styleIdentifier: "aniphile",
      },
      {
        maxDays: Infinity,
        maxLikeit: Infinity,
        levelName: "전문가",
        styleIdentifier: "expert",
      },
    ];

    const subscriptionDays = Math.floor(
      (currentMonth - initMonth) / ONE_DAY_TO_MILLISECOND
    );

    return LEVEL_MAP.map(({ maxDays, levelName, styleIdentifier }, i) => ({
      number: i,
      text: levelName,
      styleIdentifier,
      maxDays,
    })).find(({ maxDays }) => subscriptionDays <= maxDays);
  });
  return { level };
}

import { useStore } from "vuex";
import { computed } from "vue";

export function useUserLevel() {
  const store = useStore();
  const user = computed(() => store.state.auth.user);
  const level = computed(() => {
    if (!user.value) {
      return 0;
    }

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
      [0, 0, "베이비", "baby"],
      [29, 39, "모험가", "traveler"],
      [99, 49, "용사", "braver"],
      [282, 99, "임팩트", "impact"],
      [345, 149, "인플루언서", "influencer"],
      [764, 299, "아이돌", "idol"],
      [999, 999, "애니필", "aniphile"],
      [Infinity, Infinity, "전문가", "expert"],
    ];

    const subscriptionDays = Math.floor(
      (currentMonth - initMonth) / ONE_DAY_TO_MILLISECOND
    );

    for (const [
      index,
      [maxDays, maxLikeit, levelName, styleIdentifier],
    ] of LEVEL_MAP.entries()) {
      if (subscriptionDays <= maxDays) {
        return { number: index, text: levelName, styleIdentifier };
      }
    }
  });
  return { level };
}

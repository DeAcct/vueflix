// import { useDigit } from "./formatter";

import { textToIndex } from "@/enums/Days";

/**
 * 요일과 시간을 받아서 현재 시간으로부터 남은 시간을 밀리세컨드로 반환하는 함수
 * @param {string} dayOfWeek
 * @param {`${string}:${string}:${string}`} when
 * @returns {number}
 */
export function useTime2Next(dayOfWeek, when) {
  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일, 1: 월요일, ..., 6: 토요일)

  const _dayOfWeek = textToIndex(dayOfWeek);
  const daysUntilNextAlarm = (_dayOfWeek - currentDayOfWeek + 7) % 7;

  const [alarmHour, alarmMinute, alarmSecond] = when.split(":").map(Number);

  const nextAlarmDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilNextAlarm,
    alarmHour,
    alarmMinute,
    alarmSecond
  );
  const timeUntilNextAlarm = nextAlarmDate.getTime() - now.getTime();

  return timeUntilNextAlarm;
}

// function getNextAlarmTime(dayOfWeek, alarmTime) {
//   const now = new Date();
//   const currentDayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일, 1: 월요일, ..., 6: 토요일)

//   // 현재 요일이 설정된 요일 이전이라면 다음 주로 계산
//   const daysUntilNextAlarm = (dayOfWeek - currentDayOfWeek + 7) % 7;

//   // 알람 시간을 시간, 분, 초로 분리
//   const [alarmHour, alarmMinute, alarmSecond] = alarmTime.split(':').map(Number);

//   const nextAlarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilNextAlarm, alarmHour, alarmMinute, alarmSecond);
//   const timeUntilNextAlarm = nextAlarmDate.getTime() - now.getTime(); // 밀리초로 표시된 현재 시간과 알람까지의 시간 차이 계산

//   return timeUntilNextAlarm;
// }

// // 사용 예시
// const dayOfWeek = 5; // 금요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
// const alarmTime = "08:00:00"; // 알람 시간 (24시간 형식)

// const timeUntilNextAlarm = getNextAlarmTime(dayOfWeek, alarmTime);

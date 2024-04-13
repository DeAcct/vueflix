export const DAYS = [
  { text: "일", key: "sunday" },
  { text: "월", key: "monday" },
  { text: "화", key: "tuesday" },
  { text: "수", key: "wednesday" },
  { text: "목", key: "thursday" },
  { text: "금", key: "friday" },
  { text: "토", key: "saturday" },
];

export function textToIndex(text) {
  return DAYS.findIndex((day) => day.text === text);
}

export function isToday(day) {
  const today = new Date().getDay();
  return textToIndex(day) === today;
}

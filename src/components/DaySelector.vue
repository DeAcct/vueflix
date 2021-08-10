<template>
  <div class="day-selector">
    <button
      v-for="day in days"
      :key="day"
      :class="{ active: selectedDay === day }"
    >
      {{ day }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DaySelector",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      days: ["월", "화", "수", "목", "금", "토", "일"],
      selectedDay: this.getDayString(),
    };
  },
  methods: {
    dayBtnClick(e) {
      this.selectedDay = e.target.textContent;
    },
    getDayString() {
      switch (new Date().getDay()) {
        case 0:
          return "일";
        case 1:
          return "월";
        case 2:
          return "화";
        case 3:
          return "수";
        case 4:
          return "목";
        case 5:
          return "금";
        default:
          return "토";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.day-selector {
  display: flex;
  width: 100%;
  height: 4rem;
  gap: 0.5rem;
  margin-top: 1.5rem;
  button {
    width: 4rem;
    background-color: var(--bg-300);
    color: #fff;
    border-radius: 50%;
    &.active {
      background-color: var(--theme-500);
    }
  }
}
</style>

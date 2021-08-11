<template>
  <div class="day-selector">
    <button
      v-for="day in days"
      :key="day"
      :class="{ active: selectedDay === day }"
      @click="dayBtnClick($event)"
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
      selectedDay: this.getTodayString(),
    };
  },
  methods: {
    dayBtnClick(e) {
      this.selectedDay = e.target.textContent;
      this.$emit("todayString", this.selectedDay);
    },
    getTodayString() {
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
  mounted() {
    this.$emit("todayString", this.selectedDay);
  },
};
</script>

<style lang="scss" scoped>
.day-selector {
  display: flex;
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
@media screen and (min-width: 1024px) {
  .day-selector {
    margin: 0;
  }
}
</style>

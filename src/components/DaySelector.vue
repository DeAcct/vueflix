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
      selectedDay: undefined,
    };
  },
  methods: {
    dayBtnClick(e) {
      this.selectedDay = e.target.textContent;
      this.$emit("dayBtnClick");
      this.$store.commit("daily/changeAnime", this.selectedDay);
    },
  },
  mounted() {
    const todayNumber = new Date().getDay();
    let today;
    switch (todayNumber) {
      case 0:
        today = "일";
        break;
      case 1:
        today = "월";
        break;
      case 2:
        today = "화";
        break;
      case 3:
        today = "수";
        break;
      case 4:
        today = "목";
        break;
      case 5:
        today = "금";
        break;
      default:
        today = "토";
    }
    this.selectedDay = today;
    this.$store.commit("daily/changeAnime", today);
  },
};
</script>

<style lang="scss" scoped>
.day-selector {
  display: flex;
  justify-content: space-between;
  height: 4rem;
  gap: 0.5rem;
  margin-top: 1.5rem;
  button {
    width: 4rem;
    height: 4rem;
    background-color: var(--bg-300);
    color: #fff;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    transition: 150ms ease-out;

    &.active {
      background-color: var(--theme-500) !important;
    }
    &:focus {
      background-color: var(--theme-300);
    }
  }
}
@media screen and (min-width: 769px) {
  .day-selector {
    justify-content: flex-start;
  }
}
@media screen and (min-width: 1024px) {
  .day-selector {
    margin: 0;
  }
}
</style>

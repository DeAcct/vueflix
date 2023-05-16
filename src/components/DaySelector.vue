<template>
  <div class="day-selector">
    <button
      v-for="day in days"
      :key="day.key"
      :class="{ active: day.key === selected }"
      @click="dayBtnClick($event, day.key)"
    >
      {{ day.text }}
    </button>
  </div>
</template>

<script>
const DAYS_ENUM = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default {
  name: "DaySelector",
  props: {
    type: {
      type: String,
    },
    selected: {
      type: String,
      validator(value) {
        return DAYS_ENUM.includes(value);
      },
    },
  },
  data() {
    return {
      days: [
        { text: "일", key: "sunday" },
        { text: "월", key: "monday" },
        { text: "화", key: "tuesday" },
        { text: "수", key: "wednesday" },
        { text: "목", key: "thursday" },
        { text: "금", key: "friday" },
        { text: "토", key: "saturday" },
      ],
    };
  },
  methods: {
    dayBtnClick(_, key) {
      this.$emit("day-change", key);
    },
  },
};
</script>

<style lang="scss" scoped>
.day-selector {
  display: flex;
  justify-content: space-between;
  height: 4rem;

  button {
    width: 4rem;
    height: 4rem;
    background-color: hsl(var(--bg-400));
    color: #fff;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 4rem;
    transition: 150ms ease-out;

    &.active {
      background-color: hsl(var(--theme-500)) !important;
    }
    &:focus {
      background-color: hsl(var(--theme-300));
    }
  }
}
@media screen and (min-width: 769px) {
  .day-selector {
    justify-content: flex-start;
    gap: 1rem;
  }
}
@media screen and (min-width: 1024px) {
  .day-selector {
    margin: 0;
  }
}
</style>

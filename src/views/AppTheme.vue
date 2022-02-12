<template>
  <div class="darkmode">
    <label
      :class="[
        'darkmode__toggle',
        'inner',
        { 'darkmode__toggle--enabled': theme },
      ]"
    >
      {{ theme ? "켜짐" : "꺼짐" }}
      <state-toggle :input-state="theme" @state-change="themeToggle" />
    </label>
    <div class="info-area">
      <svg class="infographic" viewBox="0 0 1366 768">
        <rect class="infographic__bg" width="1366" height="768" />
        <circle class="infographic__sun-bg" cx="692.4" cy="393.4" r="238.6" />
        <circle class="infographic__sun-mask" cx="454.3" cy="393.4" r="0.5" />
        <circle class="infographic__sun-line" cx="673.6" cy="374.6" r="238.6" />
      </svg>
      <p class="darkmode__description">
        어두운 테마를 적용하여 밤에도 편하게 덕질하세요!
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StateToggle from "../components/StateToggle.vue";
export default {
  name: "Darkmode",
  data() {
    return {
      timeInterval: undefined,
      time: undefined,
    };
  },
  mounted() {
    const localStorageTheme = JSON.parse(localStorage.getItem("theme"));
    this.$store.commit("theme/setTheme", localStorageTheme);
  },
  methods: {
    themeToggle(e) {
      localStorage.setItem("theme", JSON.stringify(e));
      this.$store.commit("theme/setTheme", e);
    },
  },
  components: { StateToggle },
  computed: {
    //false: 라이트모드, true: 다크모드
    ...mapState({
      theme: (state) => state.theme.theme,
    }),
  },
};
</script>

<style lang="scss" scoped>
.darkmode {
  padding: 7rem 0 2rem;

  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    margin-bottom: 1rem;
    border-radius: 0.6rem;
    background-color: var(--text-200);
    box-shadow: 0 0.2rem 0.4rem var(--bg-200);
    font-size: 1.5rem;
    font-weight: 700;
    transition: 150ms ease-out;
    &--enabled {
      background-color: var(--theme-300);
    }
  }

  .info-area {
    box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  }
  .infographic {
    width: 100%;
    border-radius: 0.6rem 0.6rem 0 0;
    &__bg {
      fill: hsl(28, 97%, 58%);
      animation: infographic__bg 3s ease-in-out alternate infinite;
    }
    &__sun-bg {
      fill: hsl(38, 100%, 62%);
      animation: infographic__sun-bg 3s ease-in-out alternate infinite;
    }
    &__sun-line {
      fill: transparent;
      stroke: hsl(284, 21%, 10%);
      stroke-width: 5px;
      animation: infographic__sun-line 3s ease-in-out alternate infinite;
    }
    &__sun-mask {
      fill: #fc8f2d;
      transform-origin: 453.8px 393.4px;
      offset-path: path(
        "M888.2,256.6c0,0,68.8,187.4-46.1,292.9c-69.3,63.6-163.4,31.9-213.5-22.6c-18.5-19.4-30.9-64.2-4.2-89.6"
      );
      offset-distance: 0%;
      animation: infographic__sun-mask 3s ease-in-out alternate infinite;
    }
  }
  &__description {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 2rem 3rem;
    background-color: var(--top-item);
    border-radius: 0 0 0.6rem 0.6rem;
  }
}

@keyframes infographic__bg {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
  }
}
@keyframes infographic__sun-bg {
  70%,
  100% {
    fill: hsl(282, 21%, 30%);
  }
}
@keyframes infographic__sun-line {
  70%,
  100% {
    opacity: 0;
  }
}
@keyframes infographic__sun-mask {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
    offset-distance: 100%;
    transform: scale(500);
  }
}
</style>

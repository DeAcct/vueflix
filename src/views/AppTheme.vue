<template>
  <div class="darkmode">
    <h2 class="darkmode__heading">앱 테마</h2>
    <label
      :class="[
        'darkmode__toggle',
        'inner',
        { 'darkmode__toggle--enabled': theme === 'dark' },
      ]"
    >
      {{ theme === "dark" ? "어두운 테마" : "밝은 테마" }}
      <state-toggle
        :input-state="theme === 'dark'"
        @state-change="themeToggle"
      />
    </label>
    <div class="info-area">
      <svg class="infographic" viewBox="0 0 1366 768">
        <rect class="infographic__bg" width="1366" height="768" />
        <circle class="infographic__sun-bg" cx="692.4" cy="393.4" r="238.6" />
        <circle class="infographic__sun-mask" cx="454.3" cy="393.4" r="0.5" />
        <circle class="infographic__sun-line" cx="673.6" cy="374.6" r="238.6" />
      </svg>
      <strong class="darkmode__description">
        어두운 테마를 적용하여 밤에도 편하게 보세요!
      </strong>
    </div>
    <div class="note-that">
      <strong class="note-that__head"
        >아래의 경우 사용 중인 기기의 다크 모드 설정을 따라요.</strong
      >
      <ul class="reason-list">
        <li class="reason-list__item">이 기능을 한 번도 사용한 적 없는 경우</li>
        <li class="reason-list__item">인터넷 사용기록을 삭제할 경우</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StateToggle from "../components/StateToggle.vue";
export default {
  name: "AppTheme",
  data() {
    return {
      timeInterval: undefined,
      time: undefined,
    };
  },
  methods: {
    themeToggle(e) {
      const currentTheme = e ? "dark" : "light";
      this.$store.commit("theme/setTheme", currentTheme);
      localStorage.setItem("theme", JSON.stringify(currentTheme));
    },
  },
  components: { StateToggle },
  computed: {
    ...mapState({
      theme: (state) => state.theme.theme,
    }),
  },
};
</script>

<style lang="scss" scoped>
.darkmode {
  padding: 7rem 0 2rem;
  &__heading {
    display: none;
    text-align: center;
    margin: 3rem 0 2rem;
    font-size: 2.5rem;
  }

  &__toggle {
    display: flex;
    max-width: 1080px;
    margin: 0 auto 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    border-radius: 0.6rem;
    background-color: var(--text-200);
    box-shadow: var(--box-shadow);
    font-size: 1.5rem;
    font-weight: 700;
    transition: 150ms ease-out;
    user-select: none;
    inherits: none;
    &--enabled {
      background-color: var(--theme-300);
    }
  }

  .info-area {
    box-shadow: var(--box-shadow);
    max-width: 1080px;
    margin: 0 auto;
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
    display: block;
    width: 100%;
    padding: 2rem 3rem;
    background-color: var(--top-item);
    border-radius: 0 0 0.6rem 0.6rem;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1;
  }
  .note-that {
    width: 100%;
    padding: 2rem 3rem;
    &__head {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
      color: var(--bg-800);
    }
    .reason-list {
      &__item {
        line-height: 1.5rem;
        font-size: 1.1rem;
        color: var(--bg-800);
        &::before {
          content: "- ";
        }
      }
    }
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

@media screen and (min-width: 1080px) {
  .darkmode {
    &__heading {
      display: block;
    }
    &__description {
      font-size: 1.5rem;
    }
  }
}
</style>

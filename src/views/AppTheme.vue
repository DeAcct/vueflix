<template>
  <div class="AppTheme">
    <h2 class="AppTheme__Heading">앱 테마</h2>
    <label
      :class="[
        'AppTheme__Toggle',
        'inner',
        { 'AppTheme__Toggle--Enabled': theme === 'dark' },
      ]"
    >
      {{ theme === "dark" ? "어두운 테마" : "밝은 테마" }}
      <InputBoolean
        :input-state="theme === 'dark'"
        @state-change="themeToggle"
      />
    </label>
    <div class="AppTheme__Presentation">
      <svg class="AppTheme__Infograpic" viewBox="0 0 1366 768">
        <rect class="AppTheme__Background" width="1366" height="768" />
        <circle class="AppTheme__SunBack" cx="692.4" cy="393.4" r="238.6" />
        <circle class="AppTheme__Mask" cx="454.3" cy="393.4" r="0.5" />
        <circle class="AppTheme__SunLine" cx="673.6" cy="374.6" r="238.6" />
      </svg>
      <strong class="AppTheme__Description">
        어두운 테마를 적용하여 밤에도 편하게 보세요!
      </strong>
    </div>
    <section class="AppTheme__NoteThat">
      <strong class="AppTheme__NoteStrong"
        >아래의 경우 사용 중인 기기의 다크 모드 설정을 따라요.</strong
      >
      <ul class="AppTheme__NoteList">
        <li class="AppTheme__NoteItem">
          이 기능을 한 번도 사용한 적 없는 경우
        </li>
        <li class="AppTheme__NoteItem">인터넷 사용기록을 삭제할 경우</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import InputBoolean from "../components/InputBoolean.vue";
import { computed } from "vue";

const store = useStore();
const theme = computed(() => store.state.theme.theme);
function themeToggle(e) {
  console.log(e);
  const currentTheme = e.value ? "dark" : "light";
  store.commit("theme/setTheme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}
</script>

<style lang="scss" scoped>
.AppTheme {
  padding: 6rem 0 2rem;
  &__Heading {
    display: none;
    text-align: center;
    margin: 3rem 0 2rem;
    font-size: 2.5rem;
  }

  &__Toggle {
    display: flex;
    max-width: 1080px;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    transition: 150ms ease-out;
    user-select: none;
    inherits: none;
    &--Enabled {
      background-color: hsl(var(--theme-300));
    }
  }

  &__Presentation {
    max-width: 1080px;
    margin: 0 auto;
  }
  &__Infograpic {
    width: 100%;
  }
  &__Background {
    fill: hsl(28, 97%, 58%);
    animation: AppTheme__Infograpic__Background 3s ease-in-out alternate
      infinite;
  }
  &__SunBack {
    fill: hsl(38, 100%, 62%);
    animation: AppTheme__Infograpic__SunBack 3s ease-in-out alternate infinite;
  }
  &__SunLine {
    fill: transparent;
    stroke: hsl(284, 21%, 10%);
    stroke-width: 5px;
    animation: AppTheme__Infograpic__SunLine 3s ease-in-out alternate infinite;
  }
  &__Description {
    display: block;
    width: 100%;
    padding: 2rem 3rem;
    background-color: hsl(var(--bg-200));
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1;
  }
  &__Mask {
    fill: #fc8f2d;
    transform-origin: 453.8px 393.4px;
    offset-path: path(
      "M888.2,256.6c0,0,68.8,187.4-46.1,292.9c-69.3,63.6-163.4,31.9-213.5-22.6c-18.5-19.4-30.9-64.2-4.2-89.6"
    );
    offset-distance: 0%;
    animation: AppTheme__Infograpic__Mask 3s ease-in-out alternate infinite;
  }
  &__NoteThat {
    width: 100%;
    padding: 2rem 3rem;
  }
  &__NoteStrong {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: var(--bg-800);
  }
  &__NoteItem {
    line-height: 1.5rem;
    font-size: 1.1rem;
    color: var(--bg-800);
    &::before {
      content: "- ";
    }
  }
}

@keyframes AppTheme__Infograpic__Background {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
  }
}
@keyframes AppTheme__Infograpic__SunBack {
  70%,
  100% {
    fill: hsl(282, 21%, 30%);
  }
}
@keyframes AppTheme__Infograpic__SunLine {
  70%,
  100% {
    opacity: 0;
  }
}
@keyframes AppTheme__Infograpic__Mask {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
    offset-distance: 100%;
    transform: scale(500);
  }
}

@media screen and (min-width: 1080px) {
  .AppTheme {
    &__Heading {
      display: block;
    }
    &__Description {
      font-size: 1.5rem;
    }
  }
}
</style>

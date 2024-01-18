<template>
  <ToggleSetting
    v-model="theme"
    :update-callback="themeToggle"
    :value="['어두운 테마', '밝은 테마']"
    class="Theme"
  >
    <template #title>앱 테마</template>
    <template #infographic
      ><svg class="Theme__Infograpic" viewBox="0 0 1366 768">
        <rect class="Theme__Background" width="1366" height="768" />
        <circle class="Theme__SunBack" cx="692.4" cy="393.4" r="238.6" />
        <circle class="Theme__Mask" cx="454.3" cy="393.4" r="0.5" />
        <circle class="Theme__SunLine" cx="673.6" cy="374.6" r="238.6" />
      </svg>
    </template>
    <template #description>
      어두운 테마를 적용하여 밤에도 편하게 보세요!
    </template>
    <template #content>
      <section class="Theme__Note">
        <strong class="Theme__NoteStrong"
          >아래의 경우 사용 중인 기기의 다크 모드 설정을 따라요.</strong
        >
        <ul class="Theme__NoteList">
          <li class="Theme__NoteItem">이 기능을 한 번도 사용한 적 없는 경우</li>
          <li class="Theme__NoteItem">인터넷 사용기록을 삭제할 경우</li>
        </ul>
      </section>
    </template>
  </ToggleSetting>
</template>

<script setup>
import { ref } from "vue";

import { useTheme } from "@/store/theme";

import ToggleSetting from "@/layout/ToggleSetting.layout.vue";

const store = useTheme();
const theme = ref(store.mode === "dark");
function themeToggle(e) {
  const currentTheme = e ? "dark" : "light";
  store.setMode(currentTheme);
  theme.value = e;
}
</script>

<style lang="scss" scoped>
.Theme {
  &__Infograpic {
    width: 100%;
  }
  &__Background {
    fill: hsl(28, 97%, 58%);
    animation: Theme__Infograpic__Background 3s ease-in-out alternate infinite;
  }
  &__SunBack {
    fill: hsl(38, 100%, 62%);
    animation: Theme__Infograpic__SunBack 3s ease-in-out alternate infinite;
  }
  &__SunLine {
    fill: transparent;
    stroke: hsl(284, 21%, 10%);
    stroke-width: 5px;
    animation: Theme__Infograpic__SunLine 3s ease-in-out alternate infinite;
  }
  &__Mask {
    fill: #fc8f2d;
    transform-origin: 453.8px 393.4px;
    offset-path: path(
      "M888.2,256.6c0,0,68.8,187.4-46.1,292.9c-69.3,63.6-163.4,31.9-213.5-22.6c-18.5-19.4-30.9-64.2-4.2-89.6"
    );
    offset-distance: 0%;
    animation: Theme__Infograpic__Mask 3s ease-in-out alternate infinite;
  }

  &__Note {
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

@keyframes Theme__Infograpic__Background {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
  }
}
@keyframes Theme__Infograpic__SunBack {
  70%,
  100% {
    fill: hsl(282, 21%, 30%);
  }
}
@keyframes Theme__Infograpic__SunLine {
  70%,
  100% {
    opacity: 0;
  }
}
@keyframes Theme__Infograpic__Mask {
  70%,
  100% {
    fill: hsl(282, 21%, 15%);
    offset-distance: 100%;
    transform: scale(500);
  }
}
</style>

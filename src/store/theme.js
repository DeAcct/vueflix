import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTheme = defineStore("theme", () => {
  const theme = ref("");
  const mode = computed(() => {
    return theme.value;
  });
  // 테마 확장성(다크/라이트 이외)을 위해 토글함수 대신 이름을 받는 함수로.
  function setMode(name) {
    theme.value = name;
    const $app = document.getElementById("app");
    $app.dataset.theme = name;
    localStorage.setItem("theme", name);
  }
  return { mode, setMode };
});

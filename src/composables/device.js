import { useEventListener } from "@vueuse/core";
import { onMounted, ref } from "vue";

const pointerQuery = matchMedia("(hover: hover) and (pointer: fine)");
const smallQuery = window.matchMedia("screen and (max-width: 1080px)");
export function useDevice() {
  const isTouchable = ref(!pointerQuery.matches);
  const isSmall = ref(smallQuery.matches);
  useEventListener(pointerQuery, "change", ({ matches: pointerMatch }) => {
    isTouchable.value = !pointerMatch;
  });
  useEventListener(smallQuery, "change", ({ matches: smallMatch }) => {
    isSmall.value = smallMatch;
  });

  const $docu = document.documentElement;
  function setViewport() {
    $docu.style.setProperty("--vw", window.innerWidth / 100);
    $docu.style.setProperty("--vh", window.innerHeight / 100);
  }
  setViewport();
  useEventListener(window, "resize", setViewport);

  return { isTouchable, isSmall };
}

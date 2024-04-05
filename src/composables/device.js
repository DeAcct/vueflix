import { useEventListener } from "@vueuse/core";
import { onMounted, reactive, ref } from "vue";

// const pointerQuery = matchMedia(
//   "screen and (hover: hover) and (pointer: fine)"
// );
// const smallQuery = window.matchMedia("screen and (max-width: 1080px)");
// const PWAQuery = window.matchMedia("screen and (display-mode: standalone)");
// export function useDevice() {
//   const isTouchable = ref(!pointerQuery.matches);
//   const isSmall = ref(smallQuery.matches);
//   const isPWA = ref(PWAQuery.matches);
//   useEventListener(pointerQuery, "change", ({ matches: pointerMatch }) => {
//     isTouchable.value = !pointerMatch;
//   });
//   useEventListener(smallQuery, "change", ({ matches: smallMatch }) => {
//     isSmall.value = smallMatch;
//   });
//   useEventListener(PWAQuery, "change", ({ matches: PWA }) => {
//     isPWA.value = PWA;
//   });

//   return { isTouchable, isSmall, isPWA };
// }

export function useMediaQuery(queryString) {
  const query = matchMedia(queryString);
  const match = ref(query.matches);
  useEventListener(query, "change", ({ matches }) => {
    match.value = matches;
  });
  return match;
}

export function useViewport() {
  const $docu = document.documentElement;
  const viewportBase = reactive({
    vw: window.innerWidth / 100,
    vh: window.innerHeight / 100,
  });
  function setViewport() {
    viewportBase.vw = window.innerWidth / 100;
    viewportBase.vh = window.innerHeight / 100;
  }
  useEventListener(window, "resize", setViewport);

  return { viewportBase };
}

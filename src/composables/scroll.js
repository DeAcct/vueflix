import { useEventListener } from "@vueuse/core";
import { computed, ref, unref } from "vue";

// export function useScroll() {
//   let lastScroll = 0;
//   const state = ref("top");
//   const max = document.body.offsetHeight - window.innerHeight;

//   useEventListener(window, "scroll", () => {
//     const current = window.scrollY;
//     if (current === 0) {
//       state.value = "top";
//       return;
//     }
//     if (current === max) {
//       state.value = "bottom";
//       return;
//     }
//     if (lastScroll < current) {
//       // console.log("current is bigger");
//       state.value = "down";
//     } else {
//       // console.log("last was bigger");
//       state.value = "up";
//     }
//     lastScroll = current;
//   });
//   return { state };
// }
export function useScroll(target = window) {
  let lastScroll = ref(0);
  const state = ref("top");
  const max = computed(() => {
    if (target === window) {
      return document.body.offsetHeight - window.innerHeight;
    }
    if (!target.value) {
      return 0;
    }
    return target.value.scrollHeight - target.value.clientHeight;
  });

  useEventListener(target, "scroll", () => {
    const current = target === window ? target.scrollY : target.value.scrollTop;
    if (current === 0) {
      state.value = "top";
      return;
    }
    if (current === max.value) {
      state.value = "bottom";
      return;
    }
    if (lastScroll.value < current) {
      // console.log("current is bigger");
      state.value = "down";
    } else {
      // console.log("last was bigger");
      state.value = "up";
    }
    lastScroll.value = current;
  });
  return { state, current: lastScroll, max };
}

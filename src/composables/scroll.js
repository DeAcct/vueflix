import { useEventListener } from "@vueuse/core";
import { computed, ref, unref } from "vue";

// export function useScroll() {
//   let lastScroll = 0;
//   const scrollBehavior = ref("top");
//   const scrollMax = document.body.offsetHeight - window.innerHeight;

//   useEventListener(window, "scroll", () => {
//     const current = window.scrollY;
//     if (current === 0) {
//       scrollBehavior.value = "top";
//       return;
//     }
//     if (current === scrollMax) {
//       scrollBehavior.value = "bottom";
//       return;
//     }
//     if (lastScroll < current) {
//       // console.log("current is bigger");
//       scrollBehavior.value = "down";
//     } else {
//       // console.log("last was bigger");
//       scrollBehavior.value = "up";
//     }
//     lastScroll = current;
//   });
//   return { scrollBehavior };
// }
export function useScroll(target = window) {
  let lastScroll = 0;
  const scrollBehavior = ref("top");
  const scrollMax = computed(() => {
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
      scrollBehavior.value = "top";
      return;
    }
    if (current === scrollMax.value) {
      scrollBehavior.value = "bottom";
      return;
    }
    if (lastScroll < current) {
      // console.log("current is bigger");
      scrollBehavior.value = "down";
    } else {
      // console.log("last was bigger");
      scrollBehavior.value = "up";
    }
    lastScroll = current;
  });
  return scrollBehavior;
}

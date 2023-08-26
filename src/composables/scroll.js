import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

export function useScroll() {
  let lastScroll = 0;
  const scrollBehavior = ref("top");
  const scrollMax = document.body.offsetHeight - window.innerHeight;

  useEventListener(window, "scroll", () => {
    const current = window.scrollY;
    if (current === 0) {
      scrollBehavior.value = "top";
      return;
    }
    if (current === scrollMax) {
      scrollBehavior.value = "bottom";
      return;
    }
    if (lastScroll < current) {
      //console.log("current is bigger");
      scrollBehavior.value = "down";
    } else {
      //console.log("last was bigger");
      scrollBehavior.value = "up";
    }
    lastScroll = current;
  });
  return { scrollBehavior };
}

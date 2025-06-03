import { useEventListener } from "@vueuse/core";
import { computed, ref, unref } from "vue";

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
    const _target = unref(target);
    const current = _target === window ? _target.scrollY : _target.scrollTop;
    if (current === 0) {
      state.value = "top";
      return;
    }
    if (current === max.value) {
      state.value = "bottom";
      return;
    }
    if (lastScroll.value < current) {
      state.value = "down";
    } else {
      state.value = "up";
    }
    lastScroll.value = current;
  });
  return { state, current: lastScroll, max };
}

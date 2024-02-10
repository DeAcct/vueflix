import { onMounted, onUnmounted, ref } from "vue";
import dayjs from "dayjs";
import { useEventListener } from "@vueuse/core";

export function useOveray() {
  const $root = ref(null);

  function show(e) {
    $root.value.dialogRoot.showModal();
    document.documentElement.style.overflow = "hidden";
  }

  function close() {
    document.documentElement.style.overflow = "auto";
    $root.value.dialogRoot.close();
  }

  return { $root, show, close };
}

export function useAutoPop(time = 1000) {
  const visible = ref(false);
  function show() {
    visible.value = true;
    setTimeout(() => {
      close();
    }, time);
  }
  function close() {
    visible.value = false;
  }
  return { visible, show, close };
}

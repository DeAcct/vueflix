import { onMounted, onUnmounted, ref } from "vue";
import dayjs from "dayjs";

export function useModal() {
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

import { onMounted, onUnmounted, ref } from "vue";
import { useBrowserStorage } from "./browserStorage";
import dayjs from "dayjs";

export function usePWA() {
  const hideModal = ref(false);
  const isDeviceIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;

  const $root = ref(null);
  const {
    data: postponed,
    setData,
    clearData,
  } = useBrowserStorage("postpone-to");

  let deferredPrompt;
  function showModal(e) {
    const endDate = dayjs(postponed.value);
    // 미룬 날짜보다 현재 날짜가 더 빠르면
    if (dayjs().isBefore(endDate)) {
      return;
    }
    $root.value.dialogRoot.showModal();
    document.documentElement.style.overflow = "hidden";
    deferredPrompt = e;
  }
  function postpone() {
    if (hideModal.value) {
      const startDate = dayjs();
      const endDate = startDate.add(30, "day");
      setData(endDate.toJSON());
    }
    close();
  }

  function close() {
    document.documentElement.style.overflow = "auto";
    $root.value.dialogRoot.close();
  }

  async function install() {
    clearData();
    const { outcome } = await deferredPrompt.prompt();
    if (outcome === "accepted") {
      deferredPrompt = null;
      close();
    }
  }

  onMounted(() => {
    if (isDeviceIOS) {
      $root.value.dialogRoot.showModal();
      return;
    }
    window.addEventListener("beforeinstallprompt", showModal);
  });
  onUnmounted(() => {
    if (isDeviceIOS) {
      return;
    }
    window.removeEventListener("beforeinstallprompt", showModal);
  });

  return { $root, postpone, install, hideModal, isDeviceIOS };
}

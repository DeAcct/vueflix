import { onMounted, onUnmounted, ref } from "vue";
import { useBrowserStorage } from "./browserStorage";
import dayjs from "dayjs";
import { useModal } from "./modal";

export function usePWA() {
  const hideModal = ref(false);
  const isDeviceIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;

  // const $root = ref(null);
  const {
    data: postponed,
    setData,
    clearData,
  } = useBrowserStorage("postpone-to");

  const { $root, show, close } = useModal();

  let deferredPrompt;
  function showModal(e) {
    const endDate = dayjs(postponed.value);
    // 미룬 날짜보다 현재 날짜가 더 빠르면
    if (dayjs().isBefore(endDate)) {
      return;
    }
    deferredPrompt = e;

    show();
  }
  function postpone() {
    if (hideModal.value) {
      const startDate = dayjs();
      const endDate = startDate.add(30, "day");
      setData(endDate.toJSON());
    }
    close();
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
      show();
      return;
    }
    window.addEventListener("beforeinstallprompt", showModal);
  });
  onUnmounted(() => {
    if (isDeviceIOS) {
      close();
      return;
    }
    window.removeEventListener("beforeinstallprompt", showModal);
  });

  return { $root, postpone, install, hideModal, isDeviceIOS };
}

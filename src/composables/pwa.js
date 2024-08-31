import { onMounted, onUnmounted, ref } from "vue";
import { useBrowserStorage } from "./browserStorage";
import { usePostpone } from "./postpone";

export function usePWA($root) {
  /** @type {import("vue").Ref<boolean>} 권유 모달을 지연시킬지 여부, input[type=checkbox]와 연동하여 사용합니다. */
  const hideModal = ref(false);

  const isDeviceIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;

  const { postponed, setExpire, isExpired, clear } = usePostpone("pwa");

  let deferredPrompt;
  function show(e) {
    if (!isExpired()) return;
    deferredPrompt = e;

    $root.value.show();
  }
  function postpone() {
    if (hideModal.value) {
      setExpire(30);
    }
    // Leverage UX...
    // 체크하지 않고 그냥 닫았다면
    // 사용자경험(UX)은 나빠지겠지만, PWA 권유를 위해 어쩔 수 없는 불편함이다.
    $root.value.close();
  }

  async function install() {
    clear();
    const { outcome } = await deferredPrompt.prompt();
    if (outcome === "accepted") {
      deferredPrompt = null;
      $root.value.close();
    }
  }

  onMounted(() => {
    if (isDeviceIOS) {
      $root.value.show();
      return;
    }
    window.addEventListener("beforeinstallprompt", show);
  });
  onUnmounted(() => {
    if (isDeviceIOS) {
      $root.value.close();
      return;
    }
    window.removeEventListener("beforeinstallprompt", show);
  });

  return { $root, hideModal, postpone, install, isDeviceIOS };
}

export function useRandomPWAPromotionCopy() {
  const copyList = [
    "홈 화면에서 만남을 추구하면 안 되는 걸까?",
    "느린 건 싫으니까 빠른 덕질에 올인하려고 합니다...?",
  ];
  return copyList[Math.floor(Math.random() * copyList.length)];
}

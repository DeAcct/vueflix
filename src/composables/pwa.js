import { onMounted, onUnmounted, ref } from "vue";
import { useBrowserStorage } from "./browserStorage";
import { useOveray } from "./overay";
import { usePostpone } from "./postpone";

export function usePWA() {
  /** @type {import("vue").Ref<boolean>} 권유 모달을 지연시킬지 여부, input[type=checkbox]와 연동하여 사용합니다. */
  const hideModal = ref(false);

  const isDeviceIOS =
    /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;

  const { $root, show, close } = useOveray();
  const { postponed, setExpire, isExpired, clear } = usePostpone("pwa");

  let deferredPrompt;
  function showModal(e) {
    console.log(postponed.value);
    if (!isExpired()) return;
    deferredPrompt = e;

    show();
  }
  function postpone() {
    if (hideModal.value) {
      setExpire(30);
    }
    // Leverage UX...
    // 체크하지 않고 그냥 닫았다면
    // 사용자경험(UX)은 나빠지겠지만, PWA 권유를 위해 어쩔 수 없는 불편함이다.
    close();
  }

  async function install() {
    clear();
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

  return { $root, hideModal, postpone, install, isDeviceIOS };
}

export function useRandomPWAPromotionCopy() {
  const copyList = [
    "청춘 돼지는 느린 덕질의 꿈을 꾸지 않는다.",
    "홈 화면에서 만남을 추구하면 안 되는 걸까?",
    "느린 건 싫으니까 빠른 덕질에 올인하려고 합니다...?",
    "빠른 덕질의 테제, 신화가 되어라!",
  ];
  return copyList[Math.floor(Math.random() * copyList.length)];
}

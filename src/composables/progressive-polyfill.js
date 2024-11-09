import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

export default function useAccordion(duration) {
  const $root = ref(null);
  const $summary = ref(null);
  const $content = ref(null);

  const animation = ref(null);
  const isClosing = ref(false);
  const isExpanding = ref(false);

  const SUPPORTS_DETAILS_CONTENT_PSUEDO_SELECTOR = CSS.supports(
    "selector(::details-content)"
  );

  useEventListener($summary, "click", (e) => {
    console.log(
      "supports(::details-content):",
      SUPPORTS_DETAILS_CONTENT_PSUEDO_SELECTOR,
      SUPPORTS_DETAILS_CONTENT_PSUEDO_SELECTOR
        ? ""
        : "(사유:chrome 130 이하 또는 기타 브라우저)"
    );
    if (SUPPORTS_DETAILS_CONTENT_PSUEDO_SELECTOR) {
      return false;
    }
    e.preventDefault();
    if (isClosing.value || !$root.value.open) {
      accordionOpen();
    } else if (isExpanding.value || $root.value.open) {
      accordionShrink();
    }
  });

  function accordionOpen() {
    $root.value.style.height = `${$root.value.offsetHeight * 0.1}rem`;
    $root.value.open = true;
    accordionExpand();
  }
  function accordionExpand() {
    isExpanding.value = true;
    const startHeight = `${$root.value.offsetHeight * 0.1}rem`;
    const endHeight = `${
      ($summary.value.offsetHeight + $content.value.offsetHeight) * 0.1
    }rem`;

    if (animation.value) {
      animation.value.cancel();
    }

    animation.value = $root.value.animate(
      { height: [startHeight, endHeight] },
      {
        duration,
        easing: "cubic-bezier(0.83, 0, 0.17, 1)",
      }
    );
    animation.value.onfinish = () => {
      onAnimationFinish(true);
    };
    animation.value.oncancel = () => {
      isExpanding.value = false;
    };
  }

  function accordionShrink() {
    isClosing.value = false;
    const startHeight = `${$root.value.offsetHeight * 0.1}rem`;
    const endHeight = `${$summary.value.offsetHeight * 0.1}rem`;

    // 이전에 애니메이션이 실행되고 있었다면 취소
    if (animation.value) {
      animation.value.cancel();
    }

    animation.value = $root.value.animate(
      { height: [startHeight, endHeight] },
      {
        duration,
        easing: "cubic-bezier(0.83, 0, 0.17, 1)",
      }
    );
    animation.value.onfinish = () => {
      onAnimationFinish(false);
    };
    animation.value.oncancel = () => {
      isClosing.value = false;
    };
  }

  function onAnimationFinish(open) {
    $root.value.open = open;
    animation.value = null;
    isClosing.value = false;
    isExpanding.value = false;
    $root.value.style.height = "";
  }
  return {
    $root,
    $summary,
    $content,
  };
}

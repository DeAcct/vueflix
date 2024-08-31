import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

export default function useAccordion(duration = { open: 150, close: 150 }) {
  const $root = ref(null);
  const $summary = ref(null);
  const $content = ref(null);

  const animation = ref(null);
  const isClosing = ref(false);
  const isExpanding = ref(false);

  useEventListener($summary, "click", (e) => {
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
    window.requestAnimationFrame(() => {
      accordionExpand();
    });
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

    console.log(startHeight, endHeight, "expand");
    animation.value = $root.value.animate(
      { height: [startHeight, endHeight] },
      {
        duration: 100,
        easing: "ease-in-out",
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

    console.log(startHeight, endHeight, "shrink");
    animation.value = $root.value.animate(
      { height: [startHeight, endHeight] },
      {
        duration: 100,
        easing: "ease-in-out",
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

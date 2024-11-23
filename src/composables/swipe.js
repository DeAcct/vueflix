import { ref, computed } from "vue";

export function useSwipe() {
  const $target = ref(null);
  const position = ref({ start: 0, end: 0 });
  const moved = computed(() => position.value.end - position.value.start);
  function onTouchstart(event) {
    position.value.start = event.touches[0].clientX;
  }
  function onTouchmove(event) {
    position.value.end = event.touches[0].clientX;
  }
  function onTouchend({ callback, left, right }) {
    if (Math.abs(moved.value) < $target.value.clientWidth / 3) {
      return;
    }
    if (moved.value > 0) {
      left && left();
    } else {
      right && right();
    }
    callback && callback();
  }
  function clear() {
    position.value = { start: 0, end: 0 };
  }

  return {
    $target,
    position,
    moved,
    onTouchstart,
    onTouchmove,
    onTouchend,
    clear,
  };
}

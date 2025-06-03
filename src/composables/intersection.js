import { watch, onUnmounted, unref } from "vue";

export function useIntersection(targetElement, cb, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb();
      }
    });
  }, options);

  watch(targetElement, () => {
    if (!targetElement.value) {
      observer.disconnect();
      return;
    }
    const _targetElement = unref(targetElement);
    observer.observe(_targetElement);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
}

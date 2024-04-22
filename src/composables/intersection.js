import { onMounted, onUnmounted, unref } from "vue";

export function useIntersection(targetElement, cb) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb();
        console.log("intersecting");
      }
    });
  });

  onMounted(() => {
    const _targetElement = unref(targetElement);
    observer.observe(_targetElement);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
}

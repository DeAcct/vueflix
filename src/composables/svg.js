import { ref, computed } from "vue";

export default function usePercentToSVGRound(percent) {
  const $body = ref(null);

  const trackLength = computed(() => {
    if (!$body.value) {
      return 0;
    }
    return $body.value.getTotalLength();
  });

  const bodyLength = computed(
    () =>
      trackLength.value *
      0.01 *
      (100 - Math.floor(Number(percent.slice(0, -1))))
  );
  return { $body, trackLength, bodyLength };
}

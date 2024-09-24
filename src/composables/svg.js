import { ref, computed, toValue } from "vue";

export default function usePercentToSVGRound(percent) {
  const $body = ref(null);
  const _percent = toValue(percent);

  const trackLength = computed(() => {
    if (!$body.value) {
      return 0;
    }
    return $body.value.getTotalLength();
  });

  const bodyLength = computed(
    () => trackLength.value * 0.01 * (100 - _percent)
  );
  return { $body, trackLength, bodyLength };
}

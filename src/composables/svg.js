import { ref, computed, toValue } from "vue";

export default function usePercentToSVGRound(progress) {
  const $body = ref(null);

  const percent = computed(() => {
    if (!progress) {
      return 0;
    }
    return Math.floor((progress.current / progress.max) * 100);
  });

  const trackLength = computed(() => {
    if (!$body.value) {
      return 0;
    }
    return $body.value.getTotalLength();
  });

  const bodyLength = computed(
    () => trackLength.value * 0.01 * (100 - percent.value)
  );
  return { $body, trackLength, bodyLength };
}

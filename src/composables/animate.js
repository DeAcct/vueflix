import { ref } from "vue";

export function useNumberAnimation({
  from = 0,
  to,
  duration,
  onComplete = () => {},
  timingFunction = (t) => t,
}) {
  const number = ref(from);
  const isPaused = ref(false);
  const isCancelled = ref(false);
  const savedTime = ref(0);
  const direction = Math.sign(to - from);

  const animate = (startTime) => {
    if (isCancelled.value || isPaused.value) return;

    const currentTime = performance.now();
    const deltaTime = currentTime - startTime;
    savedTime.value = deltaTime;

    const progress = Math.min(timingFunction(savedTime.value / duration), 1);
    number.value = from + Math.abs(to - from) * progress * direction;

    if (progress < 1) {
      requestAnimationFrame(() => animate(startTime));
    } else if (onComplete) {
      onComplete();
    }
  };

  function start() {
    isPaused.value = false;
    isCancelled.value = false;
    const startTime = performance.now() - savedTime.value;
    requestAnimationFrame((startTime) => animate(startTime));
  }

  function pause() {
    isPaused.value = true;
  }

  function resume() {
    if (isPaused.value) {
      isPaused.value = false;
      start();
    }
  }

  function cancel() {
    isCancelled.value = true;
    savedTime.value = 0;
    number.value = from;
  }

  return { number, isPaused, start, pause, resume, cancel };
}

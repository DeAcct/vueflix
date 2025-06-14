import { reactive } from "vue";
import { useEventListener } from "@vueuse/core";

export function useDeviceGesture(sensitivity = 0.001) {
  useEventListener(window, "deviceorientation", setGestureState);
  const tilt = reactive({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });
  function setGestureState(e) {
    tilt.beta = e.beta * sensitivity;
    tilt.gamma = e.gamma * sensitivity;
    tilt.alpha = e.alpha * sensitivity;
    console.log(e);
  }

  return { tilt };
}

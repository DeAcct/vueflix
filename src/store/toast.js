import { defineStore } from "pinia";
import { ref } from "vue";

const TOAST_TYPE = ["success", "error", "warning", "info"];

export const useToast = defineStore("toast", () => {
  /**
   * @typedef {{
   *  type: "success" | "error" | "warning" | "info",
   *  message: string,
   *  key: number,
   * }} Toast
   */
  /**
   * @type {Array<Toast>}
   */
  const toasts = ref([]);

  /**
   * 타입과 메시지를 받아서 토스트를 추가합니다.
   * @param {{
   *   type: "success" | "error" | "warning" | "info"
   *   message: string,
   * }} param0
   * @returns {number}
   */
  function addToast({ type, message }) {
    if (!TOAST_TYPE.includes(type)) {
      console.error(`Invalid toast type: ${type}`);
      return;
    }
    const key = Date.now();
    toasts.value.push({ type, message, key });
    return key;
  }

  /**
   * 키를 받아서 해당 토스트를 제거합니다.
   * @param {number} key 제거할 토스트의 키
   */
  function selectDestroy(key) {
    toasts.value = toasts.value.filter((item) => item.key !== key);
    console.log(key, toasts.value);
  }

  /**
   * 일정 시간이 지나면 토스트를 제거합니다.
   * @param {number} time 토스트를 유지할 ms 단위의 시간
   * @param {number} key 제거할 토스트의 키
   */
  function autoDestroy(time, key) {
    setTimeout(() => {
      selectDestroy(key);
    }, time);
  }

  return { toasts, addToast, selectDestroy, autoDestroy };
});

import { ref } from "vue";

export function useBrowserStorage(key) {
  const data = ref(JSON.parse(localStorage.getItem(key)));

  function setData(value) {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
    data.value = value;
  }

  function clearData() {
    localStorage.removeItem(key);
    data.value = null;
  }

  return {
    data,
    setData,
    clearData,
  };
}

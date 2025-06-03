import { ref, onMounted } from "vue";

export function useBrowserStorage(key, initValue = null) {
  const data = ref(initValue);
  onMounted(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      data.value = JSON.parse(storedValue);
    }
  });

  // 데이터에 대해 메서드 체이닝이 가능하도록
  function setData(value) {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
    data.value = value;
    return this;
  }

  function clearData() {
    localStorage.removeItem(key);
    data.value = null;
    return this;
  }

  function deleteData(filterCallback) {
    const filteredData = data.value.filter(filterCallback);
    setData(filteredData);
    return this;
  }

  return {
    data,
    setData,
    deleteData,
    clearData,
  };
}

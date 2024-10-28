import { ref, onMounted } from "vue";

export function useBrowserStorage(key, initValue = null) {
  const data = ref();
  onMounted(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      data.value = JSON.parse(storedValue);
    } else {
      data.value = initValue;
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
    console.log(this);
    return this;
  }

  return {
    data,
    setData,
    clearData,
  };
}

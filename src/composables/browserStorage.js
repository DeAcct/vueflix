import { ref } from "vue";

export function useBrowserStorage(key) {
  const data = ref(JSON.parse(localStorage.getItem(key)));

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

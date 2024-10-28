import { unref, onUnmounted } from "vue";
import { useBrowserStorage } from "./browserStorage";

export function useAutoSave(reviewData, type, aniTitle) {
  const { data, setData, clearData } = useBrowserStorage("review-data", []);
  /**@todo 리액션 컴포넌트가 제거되면 작성중인 리액션을 자동저장*/
  onUnmounted(() => {
    const _reviewData = unref(reviewData);
    console.log("comment autosaved", _reviewData, aniTitle);
    // setData([...data.value, { value: _reviewData, type }]);
  });
}

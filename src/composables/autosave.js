import {
  unref,
  onUnmounted,
  onMounted,
  ref,
  computed,
  watch,
  toValue,
} from "vue";
import { useRouter } from "vue-router";
import { useBrowserStorage } from "./browserStorage";

/**@deprecated 자동저장 관련*/
export function useAutoSave(type, parent, initValue = "") {
  const {
    data: _storageList,
    setData,
    clearData,
    deleteData,
  } = useBrowserStorage("review-data", {});
  const data = ref(initValue);

  const _parent = computed(
    () => `${type}_${Object.values(toValue(parent)).join("_")}`
  );

  onMounted(() => {
    if (!_storageList.value[_parent.value]) return;
    data.value = _storageList.value[_parent.value];
  });
  const router = useRouter();
  router.beforeEach((to) => {
    if (to.name === "anime-play") {
      if (!_storageList.value[_parent.value]) return;
      data.value = _storageList.value[_parent.value];
    } else {
      forceSave();
    }
  });

  /**
   * 현재 작성중인 것과 같은 제목의 자동저장 데이터를 삭제합니다.
   */
  function removeAutosave() {
    setData(anothers.value);
    data.value = "";
  }

  /**
   * 사용자가 생성한 모든 자동저장 데이터를 삭제합니다.
   */
  function clearAutosave() {
    clearData();
  }
  const anothers = computed(() =>
    Object.fromEntries(
      Object.entries(_storageList.value).filter(
        ([key]) => !(key === _parent.value)
      )
    )
  );
  const existAutosave = computed(() => !!_storageList.value[_parent.value]);
  onUnmounted(() => {
    // 제거되었을 때 자동저장한다.
    // 데이터가 없다면 저장하지 않는다.
    forceSave();
  });
  function forceSave() {
    if (!unref(data)) return;
    setData({ ...anothers.value, [_parent.value]: unref(data) });
    data.value = "";
  }

  return {
    data,
    existAutosave,
    forceSave,
    removeAutosave,
    clearAutosave,
  };
}

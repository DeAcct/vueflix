import { ref, onMounted, reactive } from "vue";
import { useResizeObserver } from "@vueuse/core";

/**
 * 초기 인덱스값을 받아 탭메뉴 루트요소, 탭메뉴의 인디케이터 위치, 인디케이터가 이동하게 하는 함수를 반환하는 함수입니다.
 * @param {number} index 이 인덱스의 요소로 초기화됩니다.
 * @returns {{
 *   selector:import("vue").Ref<Element|null>,
 *   items:import("vue").Ref<Array<Element|null>>,
 *   to:{x: number, y: number, width: number, toHeight: number},
 *   move: (i:number)=>void
 * }}
 */
export function useIndicatorAnimation(index) {
  const to = reactive({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const selector = ref(null);
  const items = ref([]);
  function move(i) {
    if (!items.value) return;
    const {
      x: toX,
      y: toY,
      width: toWidth,
      height: toHeight,
    } = items.value[i].getBoundingClientRect();
    const { x: bodyX, y: bodyY } = selector.value.getBoundingClientRect();

    const [paddingLeft] = getComputedStyle(selector.value, null)
      .getPropertyValue("padding-left")
      .split("px");
    const [paddingTop] = getComputedStyle(selector.value, null)
      .getPropertyValue("padding-Top")
      .split("px");

    to.x = toX - bodyX;
    to.y = toY - bodyY;

    to.width = toWidth;
    to.height = toHeight;
    console.log(to.x);
  }
  onMounted(() => {
    move(index);
  });
  useResizeObserver(selector, () => {
    move(index);
  });
  return {
    selector,
    items,
    to,
    move,
  };
}

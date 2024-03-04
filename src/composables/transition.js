import { useRouter } from "vue-router";
import { onUnmounted, reactive } from "vue";

/**
 * @readonly
 * @const {Array<string>}
 */
const ROOT_VIEW_ORDER = ["home", "basket", "cocktail", "my"];

/**
 * 어느 방향으로 이동하는지와 이동하는 뷰의 가중치를 반환합니다.
 * @returns {{direction: string, weight: number}}
 */
export function useRootTransition() {
  const direction = reactive({ direction: "left", weight: 0 });
  const router = useRouter();
  const cleanup = router.beforeEach((to, from) => {
    if (
      ROOT_VIEW_ORDER.indexOf(to.name) === -1 ||
      ROOT_VIEW_ORDER.indexOf(from.name) === -1
    ) {
      direction.weight = 0;
      return;
    }
    const weight =
      ROOT_VIEW_ORDER.indexOf(to.name) - ROOT_VIEW_ORDER.indexOf(from.name);
    // 양수는 오른쪽, 음수는 왼쪽
    direction.weight = 1 / Math.abs(weight);
    direction.direction = weight > 0 ? "right" : "left";
  });

  onUnmounted(() => cleanup());

  return direction;
}

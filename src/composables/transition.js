import { useRouter } from "vue-router";
import { onUnmounted, ref } from "vue";

export function useRootTransition() {
  const VIEW_ORDER = ["home", "basket", "my"];
  const router = useRouter();
  const direction = ref("left");
  const cleanup = router.beforeEach((to, from) => {
    if (
      VIEW_ORDER.indexOf(to.name) === -1 ||
      VIEW_ORDER.indexOf(from.name) === -1
    ) {
      direction.value = 0;
      return;
    }
    const amount = VIEW_ORDER.indexOf(to.name) - VIEW_ORDER.indexOf(from.name);
    // 양수는 오른쪽, 음수는 왼쪽
    direction.value = amount > 0 ? "right" : "left";
  });

  onUnmounted(() => cleanup());

  return direction;
}

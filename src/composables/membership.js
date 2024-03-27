import { useAuth } from "@/store/auth";
import { computed } from "vue";
export function useMembershipLimit(tier) {
  const store = useAuth();
  const user = computed(() => store.user);

  if (!user.value) {
    return {
      used: 0,
      limit: 0,
    };
  }

  // 2쿨짜리 애니(28화) 하나 보고 결정하세요!
  const used = computed(() => user.value.membership.viewCounter);
  const limit = computed(() => (tier === "free" ? 28 : Infinity));

  return { used, limit };
}

import { computed } from "vue";
import { useAuth } from "@/store/auth";

export function useCoupon(type) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  if (!user.value) {
    return;
  }

  const coupons = computed(() => {
    if (type === "all") {
      return user.value.coupons;
    }
    return user.value.coupons.filter((coupon) => coupon.type === type);
  });

  return {
    coupons,
  };
}

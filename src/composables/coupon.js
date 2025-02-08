import { computed } from "vue";
import { useAuth } from "@/store/auth";

export function useCoupon(type) {
  const auth = useAuth();
  const user = computed(() => auth.user);

  const coupons = computed(() => {
    if (!user.value) {
      return [];
    }
    if (type === "all") {
      return user.value.coupons;
    }
    return user.value.coupons.filter((coupon) => coupon.type === type);
  });

  return {
    coupons,
  };
}

export function useEnuri(value) {
  if (!value) {
    return () => 0;
  }
  if (value.includes("%")) {
    return (regularPrice) => Math.floor((regularPrice * parseInt(value)) / 100);
  }
  return (regularPrice) => Math.floor(regularPrice - parseInt(value));
}

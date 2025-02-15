<template>
  <ul class="CouponList">
    <li v-for="data in coupons">
      <label :for="data.value" class="CouponList__Coupon">
        <input
          type="radio"
          name="coupon"
          :id="data.value"
          :value="data"
          v-model="selected"
          class="blind"
        />
        <div class="CouponList__Row">
          <span class="CouponList__Radio"></span>
          <div class="CouponList__Column">
            <strong class="CouponList__Name">{{ data.name }}</strong>
            <p class="CouponList__Value">{{ data.value }} 할인</p>
          </div>
        </div>
        <p class="CouponList__Description">{{ data.description }}</p>
      </label>
    </li>
  </ul>
</template>

<script setup>
import { useCoupon } from "@/composables/coupon";

const props = defineProps({
  type: {
    type: String,
    validator(value) {
      return ["membership", "promotion", "all"].includes(value);
    },
    default: "all",
  },
});

const { coupons } = useCoupon(props.type);

const selected = defineModel();
</script>

<style lang="scss" scoped>
.CouponList {
  &__Row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    border-bottom: 1px dashed hsl(var(--bg-300));
  }
  &__Column {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  &__Coupon {
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    background-color: hsl(var(--bg-200));
    border: 2px solid hsl(var(--bg-300));
    transition: border-color 150ms ease-out;
    font-size: 1.4rem;
    --radio-bg: hsl(var(--bg-400));
    --radio-point: hsl(var(--bg-300));
    &:has(input:checked) {
      border-color: hsl(var(--theme-500));
      --radio-bg: hsl(var(--theme-500));
      --radio-point: hsl(var(--bg-100));
    }
  }
  &__Radio {
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: var(--radio-bg);
    border-radius: 50%;
    transition: background-color 150ms ease-out;
    &::after {
      content: "";
      position: absolute;
      inset: 25%;
      border-radius: 50%;
      background-color: var(--radio-point);
    }
  }
  &__Name {
    font-size: 1.4rem;
  }
  &__Description {
    font-size: 1.2rem;
    padding: 1.2rem;
  }

  &__Clear {
    width: 100%;
    height: 4rem;
    align-content: center;
    text-align: center;
  }
}
</style>

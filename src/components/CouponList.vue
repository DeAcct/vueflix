<template>
  <ul class="CouponList">
    <li v-for="data in coupons">
      <label :for="value" class="CouponList__Coupon">
        <input
          type="radio"
          name="coupon"
          :id="data.value"
          :value="data"
          v-model="selected"
          class="blind"
          :disabled="presentation"
        />
        <span class="CouponList__Radio"></span>
        <div class="CouponList__Text">
          <strong>{{ data.name }}</strong>
          <p>{{ data.value }} 할인</p>
        </div>
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
  presentation: {
    type: Boolean,
  },
});

const { coupons } = useCoupon(props.type);

const selected = defineModel();
</script>

<style lang="scss" scoped>
.CouponList {
  &__Coupon {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-radius: 0.8rem;
    padding: 1.2rem;
    background-color: hsl(var(--bg-200));
    border: 2px solid hsl(var(--bg-300));
    transition: border-color 150ms ease-out;
    font-size: 1.4rem;
    &:has(input:checked) {
      border-color: hsl(var(--theme-500));
    }
  }
  &__Radio {
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: hsl(var(--bg-400));
    border-radius: 50%;
    transition: background-color 150ms ease-out;
    &::after {
      content: "";
      position: absolute;
      inset: 25%;
      border-radius: 50%;
      background-color: hsl(var(--bg-300));
    }
  }
  input:checked + &__Radio {
    background-color: hsl(var(--theme-500));
    &::after {
      background-color: hsl(var(--bg-100));
    }
  }
  &__Text {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  &__Clear {
    width: 100%;
    height: 4rem;
    align-content: center;
    text-align: center;
  }
}
</style>

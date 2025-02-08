<template>
  <section class="CouponList">
    <slot name="title"></slot>
    <ul class="CouponList__Coupons">
      <li class="CouponList__Coupon" v-for="{ name, value } in coupons">
        <strong>{{ name }}</strong>
        <p>{{ value }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useCoupon } from "@/composables/coupon";
const { coupons } = useCoupon("membership");
</script>

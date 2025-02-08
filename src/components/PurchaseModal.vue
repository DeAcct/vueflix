<template>
  <NativeDialog class="PurchaseDialog" shade ref="$PurchaseDialog">
    <template #title>
      <header
        class="PurchaseDialog__Header"
        :class="scrollState !== 'top' && `PurchaseDialog__Header--Scroll`"
      >
        <h2 class="PurchaseDialog__Title"><slot name="title"></slot></h2>
        <button class="PurchaseDialog__CloseButton" @click="close">
          <IconBase class="PurchaseDialog__CloseIcon">
            <IconClose />
          </IconBase>
        </button>
      </header>
    </template>
    <template #content>
      <slot name="content"></slot>
      <section class="PurchaseDialog__Bubble">
        <AccordionGroup class="PurchaseDialog__Coupon" open>
          <template #title>
            <h2 class="PurchaseDialog__Title">쿠폰</h2>
            <span class="PurchaseDialog__EnuriCounter"
              >{{
                useEnuri(selectedCoupon?.value)(productValue).toLocaleString()
              }}원 할인</span
            >
          </template>
          <template #content>
            <CouponList
              :type
              class="PurchaseDialog__CouponList"
              v-model="selectedCoupon"
            />
          </template>
        </AccordionGroup>
        <button
          @click="clearSelectedCoupon"
          class="PurchaseDialog__BubbleButton"
        >
          쿠폰 선택 해제
        </button>
      </section>
      <div class="PurchaseDialog__CTAWrap">
        <RouterLink
          to="/subscribe/manage"
          class="PurchaseDialog__CTA"
          v-slot="{ href, navigate }"
          custom
        >
          <a
            :href
            @click="
              () => {
                sideEffect();
                close();
                navigate();
              }
            "
          >
            <slot name="cta"></slot>
          </a>
        </RouterLink>
      </div>
    </template>
  </NativeDialog>
</template>

<script setup>
import { ref, computed } from "vue";

import { useEnuri } from "@/composables/coupon";
import { useScroll } from "@/composables/scroll";

import AccordionGroup from "@/components/AccordionGroup.vue";
import CouponList from "@/components/CouponList.vue";
import NativeDialog from "@/components/NativeDialog.vue";

import IconBase from "@/components/IconBase.vue";
import IconClose from "@/components/icons/IconClose.vue";

defineExpose({
  show,
  close,
});

defineProps({
  sideEffect: {
    type: Function,
    default: () => {},
  },
  type: {
    type: String,
    validator(value) {
      return ["membership", "promotion", "all"].includes(value);
    },
    default: "all",
  },
  productValue: {
    type: Number,
    default: 0,
  },
});

const $PurchaseDialog = ref(null);
function show() {
  $PurchaseDialog.value.show();
  document.body.style.overflow = "hidden";
}
function close() {
  $PurchaseDialog.value.close();
  document.body.style.overflow = "auto";
}

const $body = computed(() => $PurchaseDialog.value?.$body);
const { state: scrollState } = useScroll($body);

const selectedCoupon = ref({});
function clearSelectedCoupon() {
  selectedCoupon.value = {};
}
</script>

<style lang="scss" scoped>
.PurchaseDialog {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-padding: 0;
  --dialog-bg: var(--anime-layout-bg);
  --dialog-overflow: scroll;
  --dialog-height: calc(var(--vh) * 100 * 1px);
  &__Header {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    position: sticky;
    top: 0;
    z-index: calc(var(--z-index-overay-1) + 1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);

    &--Scroll {
      box-shadow: 0 1px 1px hsl(var(--bg-900) / 0.15),
        0 2px 8px hsl(var(--bg-900) / 0.1), 0 4px 16px hsl(var(--bg-900) / 0.1);
    }
  }
  &__Bubble {
    width: calc(100% - 2rem);
    border-radius: 1.6rem;
    background-color: var(--anime-layout-body);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    &Button {
      width: 100%;
      height: 4rem;
      text-align: center;
      align-content: center;
      border-top: 1px solid var(--anime-layout-bg);
    }
  }
  &__Coupon {
    width: 100%;
    background-color: transparent;
    --accordion-bg: transparent;
    --open-top-padding: 0;
    border-radius: 1.6rem;
    &List {
      margin: 0 auto;
      padding: 0 2rem 1.6rem;
    }
  }
  &__EnuriCounter {
    font-size: 1.4rem;
    margin-left: 0.8rem;
  }

  &__Title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  &__CloseButton {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__CTAWrap {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding-bottom: calc(2rem + env(safe-area-inset-bottom));
  }
  &__CTA {
    margin: 0 auto;
    display: block;
    width: calc(100% - 2rem);
    height: 5rem;
    border-radius: 1.6rem;
    background-color: hsl(var(--theme-500));
    align-content: center;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
  }
}
</style>

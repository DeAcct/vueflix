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
      <CouponList class="PurchaseDialog__Bubble">
        <template #title>
          <h2 class="PurchaseDialog__Title">쿠폰</h2>
        </template>
      </CouponList>
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

import { useScroll } from "@/composables/scroll";

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
    width: calc(100% - 4rem);
    margin: 0 auto;
    background: var(--anime-layout-body);
    border-radius: 1.6rem;
    padding: 0 2rem;
    position: sticky;
    top: 0;
    z-index: calc(var(--z-index-overay-1) + 1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    height: var(--header-height);

    &--Scroll {
      box-shadow: 0 1px 1px hsl(var(--bg-900) / 0.15),
        0 2px 8px hsl(var(--bg-900) / 0.1), 0 4px 16px hsl(var(--bg-900) / 0.1);
    }
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
    margin-right: -0.4rem;
  }
  &__Bubble {
    border-radius: 1.6rem;
    width: calc(100% - 4rem);
    padding: 2rem;
    background-color: var(--anime-layout-body);
    margin: 1rem auto 0;
    display: flex;
    flex-direction: column;
    flex-wrap: 1;
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
    width: calc(100% - 4rem);
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

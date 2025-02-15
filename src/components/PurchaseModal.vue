<template>
  <NativeDialog class="PurchaseDialog" shade ref="$PurchaseDialog">
    <template #title>
      <header
        class="PurchaseDialog__Header"
        :class="state !== 'top' && 'PurchaseDialog__Header--Scroll'"
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
      <div class="PurchaseDialog__FoldHold">
        <div class="PurchaseDialog__Col">
          <section class="PurchaseDialog__Bubble">
            <slot name="content"></slot>
          </section>
          <section class="PurchaseDialog__Bubble">
            <AccordionGroup class="PurchaseDialog__Coupon" open>
              <template #title>
                <h2 class="PurchaseDialog__Title">쿠폰</h2>
                <span class="PurchaseDialog__EnuriCounter"
                  >{{ enuri.toLocaleString() }}원 할인</span
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
          <section class="PurchaseDialog__Bubble">
            <slot name="caution"></slot>
          </section>
        </div>
        <div class="PurchaseDialog__CTAWrap">
          <p class="PurchaseDialog__Summary">
            최종 결제금액
            <strong>{{ (productValue - enuri).toLocaleString() }}원</strong>
          </p>
          <label class="PurchaseDialog__AgreeBox">
            <InputBoolean
              type="checkbox"
              v-model="isAgreed"
              class="PurchaseDialog__AgreeCheckbox"
            />
            주문 내용 및 유의사항을 확인하였으며 결제에 동의합니다.
          </label>
          <button
            class="PurchaseDialog__CTA"
            :disabled="!isAgreed"
            @click="
              () => {
                completeEffect();
                close();
              }
            "
          >
            <slot name="cta"></slot>
          </button>
        </div>
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
import InputBoolean from "./InputBoolean.vue";

defineExpose({
  show,
  close,
});

const props = defineProps({
  completeEffect: {
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

const selectedCoupon = ref({});
function clearSelectedCoupon() {
  selectedCoupon.value = {};
}
const enuri = computed(() =>
  useEnuri(selectedCoupon.value?.value)(props.productValue)
);

const isAgreed = ref(false);

const $body = computed(() => $PurchaseDialog.value?.$body);
const { state } = useScroll($body);
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

  --dialog-content-width: calc(100% - 2rem);
  &__Header {
    width: var(--dialog-content-width);
    margin: 0 auto;
    padding: 0 1rem;
    position: sticky;
    top: 0;
    z-index: calc(var(--z-index-overay-1) + 1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    background-color: var(--anime-layout-bg);
    &::before,
    &::after {
      content: "";
      overflow: hidden;
      width: 3.2rem;
      height: 3.2rem;
      background-color: transparent;
      position: absolute;

      bottom: -3.2rem;
      border-radius: 50%;
    }
    &::before {
      left: 0;
      box-shadow: -1.6rem -1.6rem 0 var(--anime-layout-bg);
    }
    &::after {
      right: 0;
      box-shadow: 1.6rem -1.6rem 0 var(--anime-layout-bg);
    }
  }
  &__Bubble {
    width: var(--dialog-content-width);
    border-radius: 1.6rem;
    background-color: var(--anime-layout-body);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    &Button {
      width: 100%;
      height: 4rem;
      text-align: center;
      align-content: center;
      border-top: 1px solid var(--anime-layout-bg);
    }
    & + & {
      margin-top: 1rem;
    }
  }
  &__Coupon {
    width: 100%;
    background-color: transparent;
    --accordion-bg: transparent;
    --accordion-title-radius: 1.6rem 1.6rem 0 0;
    --open-top-padding: 0;
    border-radius: 1.6rem;
    &List {
      margin: 0 auto;
      padding: 0 2rem;
      &:not(:empty) {
        padding-bottom: 1.6rem;
      }
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
    position: sticky;
    bottom: 0;
    padding: 4rem 0 calc(2rem + env(safe-area-inset-bottom));
    background: linear-gradient(0deg, var(--anime-layout-bg) 80%, transparent);
  }
  &__Summary {
    display: block;
    font-size: 2rem;
    width: 100%;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  &__AgreeBox {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    width: var(--dialog-content-width);
    margin: 0 auto 1rem;
    height: 4.8rem;
    background-color: hsl(var(--bg-100));
    border-radius: 1.6rem;
    padding: 0 1.2rem;
  }
  &__AgreeCheckbox {
    width: 2rem;
    height: 2rem;
  }
  &__CTA {
    margin: 0 auto;
    display: block;
    width: var(--dialog-content-width);
    height: 5rem;
    border-radius: 1.6rem;
    background-color: hsl(var(--theme-500));
    align-content: center;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    transition: background-color 150ms ease-in-out;
    &:disabled {
      background-color: hsl(var(--bg-300));
    }
  }
}
@media screen and (min-width: 690px) {
  .PurchaseDialog {
    &__Header {
      &::after {
        right: calc(50% + 0.5rem);
      }
    }
    &__FoldHold {
      display: flex;
      gap: 1rem;
      padding: 0 1rem;
      align-items: flex-start;
    }
    &__Col {
      width: calc(50% - 0.5rem);
      flex-shrink: 0;
    }
    &__Bubble {
      width: 100%;
    }
    &__CTAWrap {
      bottom: auto;
      top: var(--header-height);
      width: calc(50% - 0.5rem);
      padding: 0;
      // height: 0;
    }
    &__Summary {
      width: 100%;
      text-align: left;
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      line-height: 1.5;
      padding-top: 0;
    }
    &__AgreeBox {
      width: 100%;
    }
    &__CTA {
      width: 100%;
    }
  }
}

@media screen and (min-width: 1080px) {
  .PurchaseDialog {
    &__Header {
      width: 1080px;
      padding: 1.6rem;
    }
    &__FoldHold {
      width: 1080px;
      margin: 0 auto;
      padding: 0;
      gap: 2rem;
    }
    &__Bubble {
      --accordion-sticky-top: var(--header-height);
    }
    &__AgreeBox {
      height: 6rem;
      font-size: 1.6rem;
      gap: 0.8rem;
    }
  }
}

// @media screen and (min-width: 1080px) {
//   .PurchaseDialog {
//     --dialog-max-width: 40rem;
//     --dialog-height: min(80rem, calc(100dvh - 4rem));
//     --dialog-inset: 50% auto auto 50%;
//     --dialog-translate: -50% -50%;
//     --dialog-starting-translate: -50% calc(-50% + 6rem);
//     --dialog-border-radius: 2.6rem;
//     --dialog-starting-opacity: 0;
//     &__Header {
//       &::after {
//         right: 0;
//       }
//     }
//     &__FoldHold {
//       flex-direction: column;
//       align-items: center;
//       width: 100%;
//       padding: 0;
//     }
//     &__Col {
//       width: var(--dialog-content-width);
//     }
//     &__CTAWrap {
//       width: var(--dialog-content-width);
//       padding-bottom: 1rem;
//       bottom: 0;
//       top: auto;
//     }
//     &__AgreeBox {
//       height: 6rem;
//       font-size: 1.4rem;
//       gap: 0.8rem;
//     }
//     &__Summary {
//       display: block;
//       font-size: 2rem;
//       padding-top: 2rem;
//       text-align: center;
//     }
//   }
// }
</style>

<template>
  <div class="Purchase">
    <div class="Purchase__Col">
      <section class="Purchase__Bubble">
        <ProductCard />
      </section>
      <section class="Purchase__Bubble">
        <AccordionGroup class="Purchase__Coupon" open>
          <template #title>
            <h2 class="Purchase__Title">쿠폰 & 이용권</h2>
            <span class="Purchase__EnuriCounter"
              >{{ enuri.toLocaleString() }}원 할인</span
            >
          </template>
          <template #content>
            <CouponList
              :type
              class="Purchase__CouponList"
              v-model="selectedCoupon"
            />
          </template>
        </AccordionGroup>
        <button @click="clearSelectedCoupon" class="Purchase__BubbleButton">
          쿠폰 선택 해제
        </button>
      </section>
      <section class="Purchase__Bubble">
        <h2 class="Purchase__Title">결제 카드</h2>
        <CreditCard class="Purchase__CreditCard" />
      </section>
      <section class="Purchase__Bubble">
        <div class="Purchase__Caution">
          <h2 class="Purchase__Title">유의사항</h2>
          <ul class="Purchase__CautionList">
            <li class="Purchase__CautionItem Purchase__CautionItem--Important">
              이 웹사이트에서는 실제 결제가 이루어지지 않습니다.
            </li>
            <li class="Purchase__CautionItem Purchase__CautionItem--Important">
              결제수단은 브라우저에 임시로 저장되고 언제든 삭제할 수 있습니다.
            </li>
            <li class="Purchase__CautionItem">
              구매 후 사용내역이 없는 경우 7일 이내에 고객센터를 통해 결제취소를
              할 수 있습니다.
            </li>
            <li class="Purchase__CautionItem">
              미성년 회원의 결제는 원칙적으로 법정대리인의 명의 또는 동의 하에
              이루어져야 합니다.
            </li>
            <li class="Purchase__CautionItem">
              법정대리인은 본인 동의 없이 체결된 자녀(미성년자)의 계약을 취소할
              수 있습니다.
            </li>
            <li class="Purchase__CautionItem">
              이용에 관한 기타 문의 사항은 1:1 문의로 연락주세요.
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="Purchase__CTAWrap">
      <p class="Purchase__Summary">
        최종 결제금액
        <strong>{{ (price - enuri).toLocaleString() }}원</strong>
      </p>
      <label class="Purchase__AgreeBox">
        <InputBoolean
          type="checkbox"
          v-model="isAgreed"
          class="Purchase__AgreeCheckbox"
        />
        주문 내용 및 유의사항을 확인하였으며 결제에 동의합니다.
      </label>
      <button class="Purchase__CTA" :disabled="!isAgreed" @click="complete">
        구독
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import { useEnuri } from "@/composables/coupon";

import AccordionGroup from "@/components/AccordionGroup.vue";
import CouponList from "./CouponList.vue";
import CreditCard from "./CreditCard.vue";
import InputBoolean from "@/components/InputBoolean.vue";

import ProductCard from "@/components/ProductCard.vue";
import { usePurchase } from "@/store/purchase";

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
});

const price = ref(0);
onMounted(async () => {
  const docRef = doc(db, "product", "subscribe");
  const { price: _price } = (await getDoc(docRef)).data();
  price.value = _price;
});

const selectedCoupon = ref({});
function clearSelectedCoupon() {
  selectedCoupon.value = {};
}
const enuri = computed(() =>
  useEnuri(selectedCoupon.value?.value)(price.value)
);

const isAgreed = ref(false);

const emit = defineEmits(["complete", "add-credit-card"]);
function complete() {
  emit("complete", result);
}
const result = computed(() => ({
  price: price.value - enuri.value,
  // 포트폴리오 사이트이므로 카드 정보를 저장하지 않습니다.
  // creditCard: selectedCreditCard.value,
}));
const purchase = usePurchase();
</script>

<style lang="scss" scoped>
.Purchase {
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
  &__Title {
    font-size: 1.8rem;
    font-weight: 700;
    &:has(+ .Purchase__CreditCard) {
      padding: 2rem 0 2rem 2rem;
      position: sticky;
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

  &__CreditCard {
    margin-bottom: 2rem;
  }
  &__Caution {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  &__CautionItem {
    line-height: 1.4;

    font-size: 1.2rem;
    &--Important {
      font-weight: 700;
      color: hsl(var(--theme-500));
    }
    &::before {
      content: "-";
    }
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
  .Purchase {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    align-items: flex-start;

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
  .Purchase {
    width: 1080px;
    margin: 0 auto;
    padding: 0;
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
</style>

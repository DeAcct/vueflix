<template>
  <VueflixCarousel class="CreditCard" type="arrow">
    <ul class="CreditCard__List">
      <li
        class="CreditCard__Item CreditCard__Item--Card"
        v-for="(card, index) in purchase.cards"
        :key="index"
      >
        <label class="CreditCard__Label">
          <input
            name="creditCard"
            type="radio"
            class="blind"
            :checked="card.name === purchase.selectedCard.name"
            :value="card"
            @change="purchase.selectCard(card)"
          />
          <span class="CreditCard__Name">{{ card.name }}</span>
          <div class="CreditCard__Number">
            <span class="CreditCard__Digit" v-for="digit in card.number">
              {{ digit }}
            </span>
          </div>
        </label>
        <button
          type="button"
          class="CreditCard__DeleteButton"
          @click="purchase.deleteCard(card)"
        >
          <IconBase class="CreditCard__DeleteIcon">
            <IconClose />
          </IconBase>
        </button>
      </li>
      <li class="CreditCard__Item">
        <button
          type="button"
          class="CreditCard__Label CreditCard__Label--Add"
          @click="addCreditCard"
        >
          <IconBase>
            <IconPlus />
          </IconBase>
          <span class="CreditCard__Name">신용카드 추가</span>
        </button>
      </li>
    </ul>
  </VueflixCarousel>
</template>

<script setup>
import VueflixCarousel from "@/components/VueflixCarousel.vue";
import IconBase from "@/components/IconBase.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import IconClose from "@/components/icons/IconClose.vue";
import { usePurchase } from "@/store/purchase";

const emit = defineEmits(["add-credit-card"]);
function addCreditCard() {
  emit("add-credit-card");
}

const purchase = usePurchase();
</script>

<style lang="scss" scoped>
.CreditCard {
  width: 100%;
  --carousel-padding: 2rem;
  padding-top: 1.2rem;
  margin-top: -1.2rem;
  &__List {
    display: flex;
    align-items: flex-start;
    gap: 1.8rem;
    // &:has(:last-child:first-child) {
    //   width: calc(100dvw - 6rem);
    //   justify-content: center;
    // }
  }
  &__Item {
    position: relative;
    text-align: center;
    width: min(60dvw, 30rem);
    aspect-ratio: 1.585 / 1;
    flex-shrink: 0;
  }
  &__Delete {
    &Button {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      background-color: hsl(var(--bg-100));
      border-radius: 50%;
      top: -1.2rem;
      right: -1.2rem;
      text-align: center;
      box-shadow: 0 0.2rem 0.2rem hsl(var(--bg-900) / 0.1),
        0 0.4rem 0.4rem hsl(var(--bg-900) / 0.1);
    }
    &Icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  &__Label {
    position: absolute;
    inset: 0;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    display: flex;
    background-color: hsl(var(--bg-200));
    transition: border-color 100ms ease-out;
    flex-direction: column;
    padding: 1.6rem;
    justify-content: space-between;
    &--Add {
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
    &:has([name="creditCard"]:checked) {
      border-color: hsl(var(--theme-500));
    }
  }
  &__Name {
    font-size: 1.6rem;
    font-weight: 900;
  }
  &__Number {
    display: flex;
  }
  &__Digit {
    font-size: 1.4rem;
    & + &:before {
      content: "-";
    }
  }
}
</style>

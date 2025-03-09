<template>
  <VueflixCarousel class="CreditCard" type="arrow">
    <ul class="CreditCard__List">
      <!-- <li class="CreditCard__Item">
        <label class="CreditCard__Label">
          <input
            name="creditCard"
            type="radio"
            class="blind"
            checked
            value="KB국민카드"
            v-model="selected"
          />
          <IconBase>
            <IconPlus />
          </IconBase>
          <span class="CreditCard__Name">신용카드 추가</span>
        </label>
      </li>
      <li class="CreditCard__Item">
        <label class="CreditCard__Label">
          <input
            name="creditCard"
            type="radio"
            class="blind"
            value="토스카드"
            v-model="selected"
          />
          <IconBase>
            <IconPlus />
          </IconBase>
          <span class="CreditCard__Name">신용카드 추가</span>
        </label>
      </li> -->
      <li class="CreditCard__Item">
        <button class="CreditCard__Label" @click="addCreditCard">
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

const emit = defineEmits(["add-credit-card"]);
function addCreditCard() {
  emit("add-credit-card");
}

const selected = defineModel();
</script>

<style lang="scss" scoped>
.CreditCard {
  width: 100%;
  --carousel-padding: 2rem;
  &__List {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    &:has(:last-child:first-child) {
      width: calc(100dvw - 6rem);
      justify-content: center;
    }
  }
  &__Item {
    position: relative;
    text-align: center;
    width: min(60dvw, 30rem);
    aspect-ratio: 1.585 / 1;
    flex-shrink: 0;
  }
  &__Label {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: hsl(var(--bg-200));
    border-radius: 0.8rem;
    border: 2px solid transparent;
    transition: border-color 100ms ease-out;
    &:has([name="creditCard"]:checked) {
      border-color: hsl(var(--theme-500));
    }
  }
  &__Name {
    font-size: 1.4rem;
  }
}
</style>

<template>
  <form class="NewCard" @submit.prevent>
    <div class="NewCard__FieldGroup">
      <label
        class="NewCard__Field"
        v-for="(data, title) in newCard"
        :key="title"
      >
        <span class="NewCard__Label" :for="title">{{
          FIELD_MAP[title].title
        }}</span>
        <template v-if="typeof data === 'object'">
          <div class="NewCard__Row">
            <input
              class="NewCard__Input"
              v-for="(value, key) in data"
              :key
              :name="title"
              :value
              v-bind="FIELD_MAP[title]"
              :placeholder="FIELD_MAP[title].placeholder[key]"
              @input="
                (event) => {
                  onFilled(event.target);
                  newCard[title][key] = event.target.value;
                }
              "
              :ref="(el) => el && $fields.push(el)"
            />
          </div>
        </template>
        <input
          class="NewCard__Input"
          v-else
          :name="title"
          :value="data"
          v-bind="FIELD_MAP[title]"
          @input="
            (event) => {
              onFilled(event.target);
              newCard[title] = event.target.value;
            }
          "
          :ref="(el) => el && $fields.push(el)"
        />
      </label>
    </div>
    <div class="NewCard__CTAHolder">
      <VueflixBtn
        class="NewCard__Button"
        @click="onCancel"
        type="button"
        component="button"
      >
        <template #text>취소</template>
      </VueflixBtn>
      <VueflixBtn
        class="NewCard__Button NewCard__Button--Submit"
        @click="onSubmit"
        type="submit"
        component="button"
        :disabled="!allValid"
      >
        <template #text>추가</template>
      </VueflixBtn>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import { usePurchase } from "@/store/purchase";

const $fields = ref([]);

const newCard = ref({
  name: "",
  holder: "",
  number: [null, null, null, null],
  expiration: { month: null, year: null },
  cvc: "",
  password: "",
});
const allValid = computed(() => {
  return (
    $fields.value.length > 0 &&
    $fields.value.every((field) => field.checkValidity())
  );
});
function onFilled(nowInput) {
  const valid = nowInput.checkValidity();
  if (!valid) {
    return;
  }
  if (nowInput.name === "number" || nowInput.name === "expiration") {
    nextTick(() => {
      nowInput.nextElementSibling?.focus();
    });
  }
}

const FIELD_MAP = {
  number: {
    title: "카드 번호",
    type: "text",
    placeholder: ["0000", "0000", "0000", "0000"],
    pattern: "\\d{4}",
    maxLength: 4,
    required: true,
  },
  expiration: {
    title: "유효기간",
    type: "text",
    placeholder: { month: "MM", year: "YY" },
    pattern: "\\d{2}",
    maxLength: 2,
    required: true,
  },
  cvc: {
    title: "CVC",
    type: "password",
    placeholder: "유효기간 옆 3자리 숫자",
    pattern: "\\d{3}",
    maxLength: 3,
    required: true,
  },
  password: {
    title: "비밀번호 앞 2자리",
    type: "password",
    placeholder: "00",
    pattern: "\\d{2}",
    maxLength: 2,
    required: true,
  },
  holder: {
    title: "카드 소유자",
    type: "text",
    placeholder: "홍길동",
    required: true,
  },
  name: {
    title: "카드 별명",
    type: "text",
    placeholder: "카드 별명",
    required: true,
  },
};

const purchase = usePurchase();
function onSubmit() {
  purchase.setCardData(newCard.value);
  purchase.go("purchase");
}
function onCancel() {
  purchase.go("purchase");
}
</script>

<style lang="scss" scoped>
.NewCard {
  max-width: 1080px;
  width: calc(100% - 2rem);
  margin: 0 auto;
  &__FieldGroup {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    padding: 2rem;
    border-radius: 1.6rem;
    background-color: var(--anime-layout-body);
  }
  &__Row {
    display: flex;
    gap: 0.4rem;
  }

  &__Field {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  &__Label {
    font-size: 1.6rem;
    font-weight: 700;
  }
  &__Input {
    flex: 1;
    min-width: 0;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    background-color: hsl(var(--bg-200));
    border: 1px solid transparent;
    transition: border-color 150ms ease-in-out;
    &:user-invalid {
      border-color: hsl(var(--theme-500));
    }
    &:user-valid {
      border-color: hsl(var(--positive-color));
    }
  }

  &__CTAHolder {
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 0 1rem 2rem;
    gap: 1.2rem;
    margin-top: 2rem;
  }

  &__Button {
    margin-top: 1rem;
    width: 100%;
    height: 5rem;
    border-radius: 1.6rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    transition: background-color 150ms ease-in-out;
    box-shadow: none;
    background-color: hsl(var(--bg-400));
    &--Submit {
      background-color: hsl(var(--theme-500));
    }
    &:disabled {
      background-color: hsl(var(--bg-300));
    }
  }
}

.field-in-enter-active,
.field-in-leave-active {
  transition: all 300ms ease-in-out;
  transform-origin: center center;
}
.field-in-enter,
.field-in-leave-to {
  opacity: 0;
  scale: 0;
}
</style>

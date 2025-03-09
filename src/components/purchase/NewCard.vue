<template>
  <div class="NewCard">
    <div class="NewCard__Field">
      <label class="NewCard__Label" for="cardNumber">카드 번호</label>
      <div class="NewCard__Row">
        <input
          name="cardNumber"
          id="cardNumber"
          type="number"
          class="NewCard__Input"
          placeholder="0000"
        />
        <input
          name="cardNumber"
          type="number"
          class="NewCard__Input"
          placeholder="0000"
        />
        <input
          name="cardNumber"
          type="number"
          class="NewCard__Input"
          placeholder="0000"
        />
        <input
          name="cardNumber"
          type="number"
          class="NewCard__Input"
          placeholder="0000"
        />
      </div>
    </div>
    <div class="NewCard__Field">
      <label class="NewCard__Label" for="cardExpiration">유효기간</label>
      <div class="NewCard__Row">
        <input
          id="cardExpiration"
          type="number"
          class="NewCard__Input"
          placeholder="MM"
        />
        <input type="number" class="NewCard__Input" placeholder="YY" />
      </div>
    </div>
    <div class="NewCard__Field">
      <label class="NewCard__Label" for="cardCvc">CVC</label>
      <input
        id="cardCvc"
        type="text"
        class="NewCard__Input"
        placeholder="000"
      />
    </div>
    <div class="NewCard__Field">
      <label class="NewCard__Label" for="cardPassword">비밀번호 앞 2자리</label>
      <input
        id="cardPassword"
        type="text"
        class="NewCard__Input"
        placeholder="00"
      />
    </div>
    <div class="NewCard__Field">
      <label class="NewCard__Label" for="cardHolder">카드 소유자</label>
      <input
        id="cardHolder"
        type="text"
        class="NewCard__Input"
        placeholder="홍길동"
      />
    </div>
    <button class="NewCard__Submit" @click="onClick" type="button">
      신용카드 추가
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["card-submit"]);
function onClick() {
  emit("card-submit");
}
</script>

<style lang="scss" scoped>
.NewCard {
  max-width: 1080px;
  border-radius: 1.6rem;
  background-color: var(--anime-layout-body);
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
  }

  &__Submit {
    margin-top: 1rem;
    display: block;
    width: 100%;
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
</style>

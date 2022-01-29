<template>
  <div class="box">
    <label class="box__label" :for="identify"><slot name="label" /></label>
    <input
      :class="['box__input', { 'box__input--invalid': !isValid && !!value }]"
      :type="type"
      :id="identify"
      autofocus
      v-model="value"
    />
    <p
      :class="[
        'box__valid-alert',
        { 'box__valid-alert--invalid': !isValid && !!value },
      ]"
      v-if="validAlert"
    >
      <slot name="valid-alert" />
    </p>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    type: {
      type: String,
    },
    autofocus: {
      type: Boolean,
    },
    identify: {
      type: String,
    },
    isValid: {
      type: Boolean,
    },
    validAlert: {
      type: Boolean,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value() {
      this.$emit("valueChanged", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  &__label {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  &__input {
    padding: 1rem 0;
    font-size: 1.1rem;
    font-weight: 500;
    border-bottom: 1px solid var(--bg-200);
    transition: border-color 150ms ease-out;
    &:focus {
      border-color: var(--bg-300);
    }
    &--invalid {
      border-color: var(--theme-500);
    }
  }
  &__valid-alert {
    margin-top: 0.5rem;
    color: var(--theme-500);
    opacity: 0;
    transition: opacity 150ms ease-out;
    &--invalid {
      opacity: 1;
    }
  }
}
</style>

<template>
  <label class="TextInput">
    <div class="TextInput__Interact">
      <input
        :type="type"
        class="TextInput__Input"
        @input="onInput"
        :value="inputValue"
        :autocomplete
      />
      <slot name="etc-action"></slot>
      <span
        :class="[
          'TextInput__Placeholder',
          { 'TextInput__Placeholder--NotEmpty': inputValue?.length },
        ]"
      >
        <slot name="label"></slot>
      </span>
    </div>
    <Transition name="message-up">
      <slot name="message"></slot>
    </Transition>
  </label>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    validator: (value) =>
      ["number", "text", "color", "date", "password", "email"].includes(value),
    default: "text",
  },
  inputValue: { type: String },
  autocomplete: {
    type: String,
    validator: (value) => ["on", "off"].includes(value),
  },
});

const inputValue = defineModel();
function onInput(e) {
  inputValue.value = e.target.value;
}
</script>

<style lang="scss" scoped>
.TextInput {
  cursor: text;
  position: relative;
  border: 1px solid var(--input-border, hsl(var(--bg-300)));
  border-radius: var(--global-radius);
  padding: var(--input-padding);
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid hsl(var(--theme-500));
    .TextInput__Placeholder {
      transform: translateY(-2rem);
      color: hsl(var(--theme-500));
    }
  }

  &__Interact {
    display: flex;
    align-items: center;
    height: var(--input-height);
  }
  &__Input {
    flex-grow: 1;
    min-width: 0;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: hsl(var(--bg-100));
  }
  &__Placeholder {
    position: absolute;
    left: 1rem;
    font-size: 1.3rem;
    background-color: hsl(var(--bg-100));
    padding: 0 0.4rem;
    transition: 150ms ease-out;
    &--NotEmpty {
      transform: translateY(-2rem);
    }
  }
}

@media screen and (min-width: 1024px) {
  .TextInput {
    &__Input {
      &:focus {
        & + .TextInput__Placeholder {
          font-size: 1.4rem;
        }
      }
    }
    &__Placeholder {
      font-size: 1.4rem;
    }
  }
}

.message-up-enter-active,
.message-up-leave-active {
  transition: 150ms ease-out;
}
.message-up-enter-from,
.message-up-leave-to {
  opacity: 0;
  height: 0;
  border: 0;
}
</style>

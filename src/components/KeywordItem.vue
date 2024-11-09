<template>
  <li class="KeywordItem">
    <button
      :class="`KeywordItem__TextWithState KeywordItem__TextWithState--${useFirstCapital(
        state
      )}`"
      type="button"
      @click="infiniteChange"
    >
      <slot name="text"></slot>
    </button>
    <button class="KeywordItem__Delete" type="button" @click="requestDelete">
      <IconBase class="KeywordItem__Icon">
        <IconClose />
      </IconBase>
    </button>
  </li>
</template>

<script>
const VALID_STATE = ["positive", "neutral", "negative", "none"];
</script>

<script setup>
import { useFirstCapital } from "../composables/formatter";

import IconBase from "@/components/IconBase.vue";
import IconClose from "@/components/icons/IconClose.vue";

const props = defineProps({
  state: {
    type: String,
    required: true,
    validator(value) {
      return VALID_STATE.includes(value);
    },
  },
});

const emits = defineEmits(["update:state", "request-delete"]);
function infiniteChange() {
  const currentIndex = VALID_STATE.indexOf(props.state);
  const nextIndex = (currentIndex + 1) % VALID_STATE.length;
  const nextState = VALID_STATE[nextIndex];
  console.log(nextState);
  emits("update:state", nextState);
}
function requestDelete() {
  emits("request-delete");
}
</script>

<style lang="scss" scoped>
.KeywordItem {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-shrink: 0;

  --keyword-gap-radius: calc(var(--global-radius) * 0.5);
  --animation: none;

  &__TextWithState {
    font-size: 1.4rem;
    font-weight: 700;
    background-color: hsl(var(--bg-300));
    padding: {
      left: 1.2rem;
      right: 0.8rem;
    }
    height: 3.6rem;
    border-radius: 1.8rem var(--keyword-gap-radius) var(--keyword-gap-radius)
      1.8rem;
    transition: background-color 150ms ease-out;

    &--Positive {
      background-color: hsl(var(--positive-color) / 0.1);
      color: hsl(var(--positive-color));
    }
    &--Negative {
      background-color: hsl(var(--negative-color) / 0.1);
      color: hsl(var(--negative-color));
    }
    &--Neutral {
      background-color: hsl(var(--neutral-color) / 0.1);
      color: hsl(var(--neutral-color));
    }
  }
  &__Delete {
    background-color: hsl(var(--bg-300));
    height: 3.6rem;
    padding: {
      left: 0.8rem;
      right: 1.2rem;
    }
    border-radius: var(--keyword-gap-radius) 1.8rem 1.8rem
      var(--keyword-gap-radius);
  }
  &__Icon {
    width: 1.6rem;
    height: 1.6rem;
  }
}
</style>

<template>
  <li class="KeywordItem" :class="`KeywordItem--${useFirstCapital(state)}`">
    <button
      class="KeywordItem__TextWithState"
      type="button"
      @click="infiniteChange"
    >
      <IconBase class="KeywordItem__Icon KeywordItem__Icon--Thumbs">
        <IconThumbs />
      </IconBase>
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
const VALID_STATE = ["positive", "negative", "none"];
</script>

<script setup>
import { useFirstCapital } from "../composables/formatter";

import IconBase from "@/components/IconBase.vue";
import IconThumbs from "./icons/IconThumbs.vue";
import IconClose from "./icons/IconClose.vue";

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
  flex-shrink: 0;
  --animation: none;
  border-radius: var(--keyword-radius);
  overflow: hidden;
  &--Negative {
    --state-rotate: 180deg;
  }
  &--None {
    --keyword-icon-width: 0;
  }

  &__TextWithState {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.4rem;
    font-weight: 700;
    background-color: hsl(var(--bg-300));
    padding: {
      left: 1.2rem;
      right: 0.8rem;
    }
    height: calc(var(--keyword-radius) * 2);
    transition: background-color 150ms ease-out;
  }
  &__Delete {
    display: flex;
    align-items: center;
    background-color: hsl(var(--bg-300));
    height: calc(var(--keyword-radius) * 2);
    padding: {
      left: 0.8rem;
      right: 1.2rem;
    }
    position: relative;
    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      translate: 0 -50%;
      content: "";
      width: 0.1rem;
      height: var(--keyword-radius);
      background-color: hsl(var(--text-300));
    }
  }
  &__Icon {
    width: 2rem;
    height: 2rem;
    &--Thumbs {
      width: var(--keyword-icon-width, 2rem);

      rotate: var(--state-rotate);
    }
  }
}
</style>

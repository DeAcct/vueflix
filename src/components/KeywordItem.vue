<template>
  <li class="KeywordItem">
    <span class="KeywordItem__Text">
      <slot name="text"></slot>
    </span>
    <button
      class="KeywordItem__Delete"
      type="button"
      @click="requestDelete"
      v-if="!readOnly"
    >
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
import IconClose from "./icons/IconClose.vue";

const props = defineProps({
  state: {
    type: String,
    required: true,
    validator(value) {
      return VALID_STATE.includes(value);
    },
  },
  readOnly: {
    type: Boolean,
  },
  icon: {
    type: Boolean,
  },
});

const emits = defineEmits(["request-delete"]);

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
  background-color: hsl(var(--bg-300));
  padding: 0 1.2rem;

  &__Text {
    display: flex;
    align-items: center;
    font-size: inherit;
    font-weight: 700;
    color: inherit;
    height: calc(var(--keyword-radius) * 2);
    transition: background-color 150ms ease-out;
  }
  &__Delete {
    display: flex;
    align-items: center;
    height: calc(var(--keyword-radius) * 2);
    position: relative;
    &::before {
      content: "";
      width: 0.1rem;
      height: var(--keyword-radius);
      background-color: hsl(var(--text-300));
      margin: 0 0.8rem;
    }
  }
}
</style>

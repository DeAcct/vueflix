<template>
  <li class="KeywordItem" :class="`KeywordItem--${useFirstCapital(state)}`">
    <component
      class="KeywordItem__TextWithState"
      type="button"
      @click="infiniteChange"
      :is="readOnly ? 'div' : 'button'"
    >
      <IconBase
        class="KeywordItem__Icon KeywordItem__Icon--Thumbs"
        role="presentation"
        v-if="icon"
      >
        <template #icon-name>
          {{ state !== "none" ? STATE_MAP[state] : undefined }}
        </template>
        <IconThumbs v-if="state !== 'none'" />
        <IconNeutral v-else />
      </IconBase>
      <slot name="text"></slot>
    </component>
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
import IconThumbs from "./icons/IconThumbs.vue";
import IconNeutral from "./icons/IconNeutral.vue";

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

const STATE_MAP = {
  positive: "긍정",
  negative: "부정",
};

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
  background-color: hsl(var(--bg-300));
  padding: 0 1.2rem;
  &--Negative {
    --state-rotate: 180deg;
  }

  &__TextWithState {
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
  &__Icon {
    width: 2rem;
    height: 2rem;
    margin-right: 0.2rem;
    transition: none;
    &--Thumbs {
      width: var(--keyword-icon-width, 2rem);
      rotate: var(--state-rotate);
    }
  }
}
</style>

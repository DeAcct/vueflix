<template>
  <div class="KeywordFilter">
    <div
      class="KeywordFilter__FilterBy"
      :class="`KeywordFilter__FilterBy--${useFirstCapital(state)}`"
      v-for="(list, state) in _keywords"
      key="state"
    >
      <IconBase class="KeywordFilter__Icon">
        <IconThumbs v-if="state !== 'none'" />
        <IconNeutral v-else />
      </IconBase>
      <ul class="KeywordFilter__List KeywordFilter__List--Positive">
        <KeywordItem
          v-for="{ state, text } of list"
          :key="text"
          :state
          read-only
          class="KeywordFilter__Item"
        >
          <template #text># {{ text }}</template>
        </KeywordItem>
      </ul>
    </div>
    <!-- <ul class="KeywordFilter__List KeywordFilter__List--None">
      <KeywordItem
        v-for="{ state, text } of keywordFilter('none', keywords)"
        :key="text"
        :state
        read-only
        class="KeywordFilter__KeywordItem"
      >
        <template #text># {{ text }}</template>
      </KeywordItem>
    </ul>
    <ul class="KeywordFilter__List KeywordFilter__List--Negative">
      <KeywordItem
        v-for="{ state, text } of keywordFilter('negative', keywords)"
        :key="text"
        :state
        read-only
        class="KeywordFilter__KeywordItem"
      >
        <template #text># {{ text }}</template>
      </KeywordItem>
    </ul> -->
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useFirstCapital } from "@/composables/formatter";

import KeywordItem from "@/components/KeywordItem.vue";

import IconBase from "@/components/IconBase.vue";
import IconNeutral from "./icons/IconNeutral.vue";
import IconThumbs from "./icons/IconThumbs.vue";

const props = defineProps({
  keywords: {
    type: Array,
  },
});

// {[state]: keywords}
const _keywords = computed(() => {
  return props.keywords.reduce((acc, keyword) => {
    acc[keyword.state] = acc[keyword.state] || [];
    acc[keyword.state].push(keyword);
    return acc;
  }, {});
});

// function keywordFilter(state, keyword) {
//   return keyword.filter(({ state: _state }) => _state === state);
// }
</script>

<style lang="scss" scoped>
.KeywordFilter {
  &__FilterBy {
    display: flex;
    gap: 0.4rem;
    & + & {
      margin-top: 0.2rem;
    }
    &--Negative {
      --rotate: 180deg;
    }
  }
  &__Icon {
    rotate: var(--rotate);
    width: 2rem;
    height: 2rem;
  }
  &__List {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  &__Item {
    --keyword-radius: 0;
    padding: 0;
    background-color: transparent;
    font-size: 1.2rem;
    color: hsl(var(--theme-500));
  }
}
</style>

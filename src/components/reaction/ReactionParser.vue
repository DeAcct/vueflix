<template>
  <p class="ReactionParser">
    <template v-for="(item, index) in content" :key="`line-${item}`">
      <template v-if="item.includes('<time>')">
        <button 
          class="ReactionParser__TimeButton" 
          @click="teleport(item.replace('<time>', ''))"
          type="button"
        >
          {{ item.replace('<time>', '') }}
        </button> 
      </template>
      <template v-else>
        {{ item }}
      </template>
    </template>
  </p>
</template>

<script setup>
import { useFormatToSec } from "../../composables/formatter";

const props = defineProps({
  content: {
    type: Array,
  },
});

const emit = defineEmits(["request-teleport"]);
function teleport(time) {
  const sec = useFormatToSec(time);
  emit("request-teleport", sec);
}
</script>

<style lang="scss" scoped>
.ReactionParser {
  font-size: inherit;
  white-space: pre-line;
  word-break: break-all;
  font-weight: 500;
  line-height: 1.5;
  animation: fade 150ms ease-out;
  &__TimeButton {
    font-size: inherit;
    color: hsl(var(--theme-500));
  }
}
</style>

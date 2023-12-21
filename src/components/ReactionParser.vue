<template>
  <p class="ReactionParser">
    <template v-for="(item, index) in content">
      <template v-if="index % 2 === 1">
        <button class="ReactionParser__TimeButton" @click="teleport(item.replace('<time>', ''))">{{ item.replace('<time>', '') }}</button> 
      </template>
      <template v-else>
        {{ item }}
      </template>
    </template>
  </p>
</template>

<script setup>
import { useFormatToSec } from '../composables/formatter';

const props = defineProps({
  content:{
    type: Array
  }
})

const emit = defineEmits(["request-teleport"])
function teleport(time){
  const sec = useFormatToSec(time);
  emit("request-teleport", sec)
}
</script>

<style lang="scss" scoped>
.ReactionParser{
  font-size: inherit;
  &__TimeButton{
    font-size: inherit;
    color: hsl(var(--theme-500));
  }
}
</style>


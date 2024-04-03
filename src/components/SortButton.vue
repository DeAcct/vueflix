<template>
  <button class="SortButton" @click="toggleSort" type="button">
    <IconBase class="SortButton__Icon">
      <IconSort />
    </IconBase>
    <Transition :name="`sort-text-${base}`">
      <span :key="base"> {{ base === "asc" ? text[0] : text[1] }}부터 </span>
    </Transition>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";
import IconBase from "@/components/IconBase.vue";
import IconSort from "@/components/icons/IconSort.vue";

const props = defineProps({
  base: String,
  toggleSort: Function,
  text: Array,
});

const arrowDeg = computed(() => (props.base === "asc" ? "90deg" : "-90deg"));
</script>

<style lang="scss" scoped>
.SortButton {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &__Icon {
    width: 1.8rem;
    height: 1.8rem;
    rotate: v-bind("arrowDeg");
    transition: 150ms ease-out;
  }
}

.sort-text-asc-enter-active,
.sort-text-asc-leave-active,
.sort-text-desc-enter-active,
.sort-text-desc-leave-active {
  transition: 150ms ease-out;
}
.sort-text-asc-leave-active,
.sort-text-desc-leave-active {
  display: none;
}
.sort-text-asc-enter-from,
.sort-text-asc-leave-to {
  translate: 0 -100%;
  opacity: 0;
}
.sort-text-desc-enter-from,
.sort-text-desc-leave-to {
  translate: 0 100%;
  opacity: 0;
}
</style>

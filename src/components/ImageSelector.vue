<template>
  <ul class="ImageSelector">
    <li class="ImageSelector__Item" v-for="src in srcList" :key="src">
      <label class="ImageSelector__TouchArea">
        <input
          :type="multiple ? 'checkbox' : 'radio'"
          v-model="selected"
          class="ImageSelector__RealInput blind"
          :value="{ file: src, type: 'default' }"
          :name
        />
        <OptimizedMedia :src class="ImageSelector__Preview" />
      </label>
    </li>
  </ul>
</template>

<script setup>
import OptimizedMedia from "./OptimizedMedia.vue";

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  srcList: {
    type: Array,
  },
  name: {
    type: String,
  },
});

const selected = defineModel();
</script>

<style lang="scss" scoped>
.ImageSelector {
  display: flex;
  gap: 0.8rem;
  &__TouchArea {
    display: flex;
  }
  &__Preview {
    width: var(--preview-size);
    height: var(--preview-size);
    --aspect-ratio: 100%;
    border: 2px solid hsl(var(--bg-100));
    border-radius: 9999px;
    overflow: hidden;
  }
  &__RealInput:checked + &__Preview {
    border-color: hsl(var(--theme-500));
  }
}
</style>

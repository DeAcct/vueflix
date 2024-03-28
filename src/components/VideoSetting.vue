<template>
  <div class="VideoSetting">
    <div v-for="{ title, key, items } in data" class="VideoSetting__Set" :key>
      <strong class="VideoSetting__Title">{{ title }}</strong>
      <MultiSelector
        :data="items"
        v-model="selected[key]"
        @update:model-value="change(key, $event)"
        class="VideoSetting__Selector"
      ></MultiSelector>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MultiSelector from "./MultiSelector.vue";

const props = defineProps({
  data: {
    type: Array,
  },
});

const selected = ref({
  quality: 0,
  speed: 1,
});

const emits = defineEmits(["update:selected"]);
function change(key, e) {
  emits("update:selected", { [key]: e });
  const changeTarget = props.data.find((item) => item.key === key).items;
  selected.value[key] = changeTarget.findIndex((item) => item.key === e);
}
</script>

<style lang="scss" scoped>
.VideoSetting {
  &__Set {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  &__Selector {
    border-radius: var(--global-radius);
    --item-width: 6rem;
    --item-height: 3rem;
    --indicator-radius: var(--global-radius);
    flex-direction: column;
  }
}
</style>

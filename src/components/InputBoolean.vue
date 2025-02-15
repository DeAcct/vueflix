<template>
  <span class="InputBoolean">
    <input
      type="checkbox"
      v-model="modelValue"
      :checked="modelValue"
      class="blind InputBoolean__Skell"
      :id="inputId"
    />
    <i class="InputBoolean__Track" v-if="type === 'toggle'">
      <span class="InputBoolean__Body"></span>
      <span class="blind">{{ modelValue ? "켜짐" : "꺼짐" }}</span>
    </i>
    <i class="InputBoolean__Checkbox" v-else>
      <IconBase>
        <IconSelected v-if="modelValue" />
        <IconNotSelected v-else />
      </IconBase>
    </i>
  </span>
</template>

<script setup>
import IconNotSelected from "./icons/IconNotSelected.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconBase from "./IconBase.vue";

const props = defineProps({
  type: {
    type: String,
    default: "toggle",
    validator(value) {
      return ["checkbox", "toggle", "presentation"].includes(value);
    },
  },
  inputId: {
    type: String,
  },
});

const modelValue = defineModel();
</script>
<style lang="scss" scoped>
.InputBoolean {
  display: flex;

  &__Track {
    position: relative;
    display: flex;
    align-items: center;
    width: 3.2rem;
    height: 1.6rem;
    border-radius: 9999px;
    background-color: hsl(var(--toggle-false));
    transition: background-color 150ms ease-in-out;
  }
  &__Body {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 150ms ease-in-out;
    box-shadow: 0 0.2rem 0.4rem var(--toggle-shadow);
  }

  &__Checkbox {
    display: flex;
    width: 100%;
    height: 100%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__Skell:checked ~ &__Track {
    background-color: hsl(var(--theme-500));
  }
  &__Skell:checked ~ &__Track &__Body {
    transform: translateX(1.6rem);
  }
  &__Skell:checked ~ &__Checkbox {
    color: hsl(var(--theme-500));
  }
}
</style>

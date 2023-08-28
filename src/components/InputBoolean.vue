<template>
  <span class="InputBoolean">
    <input
      type="checkbox"
      :checked="inputState"
      v-model="outputState"
      @change="emitState"
      class="blind InputBoolean__Skell"
    />
    <i class="InputBoolean__Track" v-if="type === 'toggle'">
      <span class="InputBoolean__Body"></span>
      <span class="blind">{{ inputState ? "켜짐" : "꺼짐" }}</span>
    </i>
    <i class="InputBoolean__Checkbox" v-else>
      <IconBase>
        <IconSelected v-if="outputState" />
        <IconNotSelected v-else />
      </IconBase>
    </i>
  </span>
</template>

<script setup>
import IconNotSelected from "./icons/IconNotSelected.vue";
import IconSelected from "./icons/IconSelected.vue";
import { toRef } from "vue";

const emits = defineEmits(["state-change"]);
const props = defineProps({
  inputState: {
    type: Boolean,
  },
  type: {
    type: String,
    default: "toggle",
    validator(value) {
      ["checkbox", "toggle"].includes(value);
    },
  },
});
const outputState = toRef(props.inputState);
function emitState() {
  emits("state-change", outputState);
}
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
  &__Skell:checked ~ &__Track {
    background-color: hsl(var(--theme-500));
  }
  &__Skell:checked ~ &__Track &__Body {
    transform: translateX(1.6rem);
  }
}
</style>

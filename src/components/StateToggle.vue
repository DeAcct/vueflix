<template>
  <span class="state-toggle">
    <input
      type="checkbox"
      :checked="inputState"
      v-model="outputState"
      @change="emitState"
      :id="toggleId"
      class="blind base-input"
    />
    <span class="state-toggle__track">
      <span class="state-toggle__body"></span>
      <span class="blind">{{ inputState ? "켜짐" : "꺼짐" }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: "StateToggle",
  props: {
    inputState: {
      type: Boolean,
    },
    toggleId: {
      type: String,
    },
  },
  data() {
    return {
      outputState: this.inputState,
    };
  },
  methods: {
    emitState() {
      this.$emit("state-change", this.outputState);
    },
  },
};
</script>
<style lang="scss" scoped>
.state-toggle {
  display: flex;
  &__track {
    position: relative;
    display: flex;
    align-items: center;
    width: 3.2rem;
    height: 1.6rem;
    border-radius: 0.9rem;
    background-color: hsl(var(--toggle-false));
    transition: background-color 150ms ease-in-out;
  }
  &__body {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 150ms ease-in-out;
    box-shadow: 0 0.2rem 0.4rem var(--toggle-shadow);
  }
  .base-input:checked ~ &__track {
    background-color: hsl(var(--theme-500));
  }
  .base-input:checked ~ &__track &__body {
    transform: translateX(1.6rem);
  }
}
</style>

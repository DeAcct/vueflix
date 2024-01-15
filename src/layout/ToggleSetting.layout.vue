<template>
  <div class="ToggleSetting">
    <h2 class="ToggleSetting__Heading"><slot name="title"></slot></h2>
    <label
      :class="[
        'ToggleSetting__Toggle',
        'inner',
        { 'ToggleSetting__Toggle--Enabled': model },
      ]"
    >
      {{ model ? value[0] : value[1] }}
      <InputBoolean v-model="model" @update:modelValue="updateCallback" />
    </label>
    <div class="ToggleSetting__Presentation">
      <slot name="infographic"></slot>
      <strong class="ToggleSetting__Description">
        <slot name="description"></slot>
      </strong>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import InputBoolean from "@/components/InputBoolean.vue";

const model = defineModel();
const props = defineProps({
  value: {
    type: Array,
    validator(value) {
      return value.some((item) => typeof item === "string");
    },
  },
  updateCallback: {
    type: Function,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.ToggleSetting {
  padding: 6rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__Heading {
    display: none;
    text-align: center;
    margin: 3rem 0 2rem;
    font-size: 2.5rem;
  }

  &__Toggle {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    transition: 150ms ease-out;
    user-select: none;
    inherits: none;
    &--Enabled {
      background-color: hsl(var(--theme-300));
    }
  }

  &__Presentation {
    width: 100%;
  }
  &__Description {
    display: block;
    width: 100%;
    padding: 2rem 3rem;
    background-color: hsl(var(--bg-200));
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1;
  }
}

@media screen and (min-width: 1080px) {
  .AppTheme {
    padding-top: 7.2rem;
    &__Heading {
      display: block;
    }
    &__Description {
      font-size: 1.5rem;
    }
  }
}
</style>

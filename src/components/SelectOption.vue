<template>
  <div class="SelectOption">
    <button class="SelectOption__Now" @click="isOpen = !isOpen">
      {{ now }}
      <IconBase class="SelectOption__Arrow">
        <IconArrowNext />
      </IconBase>
    </button>
    <Transition name="list-fade">
      <ul class="SelectOption__List" v-if="isOpen">
        <li
          v-for="{ icon, text, value } in options"
          :key="value"
          class="SelectOption__Item"
          :class="value === selected && 'SelectOption__Item--Selected'"
          @click="
            (e) => {
              e.stopPropagation();
              selected = value;
              isOpen = false;
            }
          "
        >
          <button @click="selected = value">
            <IconBase v-if="icon">
              {{ icon }}
            </IconBase>
            <span class="SelectOption__ItemText">
              {{ text }}
            </span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import IconBase from "@/components/IconBase.vue";
import IconArrowNext from "@/components/icons/IconArrowNext.vue";

const isOpen = ref(false);

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const selected = defineModel();
const now = computed(
  () => props.options.find(({ value }) => selected.value === value).text
);
</script>

<style lang="scss" scoped>
.SelectOption {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  &__Now {
    color: inherit;
    font-weight: 700;
    font-size: var(--select-option-font-size);
    display: flex;
    border-radius: 9999px;
    background-color: hsl(var(--bg-200));
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    flex-grow: 1;
    padding: var(--select-option-padding);
    height: 4rem;
    border: 1px solid transparent;
    &:focus-visible {
      outline: 4px solid hsl(var(--theme-500) / 0.3);
      border-color: hsl(var(--theme-500));
    }
  }
  &__Arrow {
    transform: rotate(90deg);
    width: 1.8rem;
    height: 1.8rem;
  }

  &__List {
    position: absolute;
    top: calc(100% + 0.4rem);
    background: hsl(var(--bg-100));
    width: max-content;
    min-width: 100%;
    z-index: 10;
    border-radius: 1.8rem;
    overflow: hidden;
    box-shadow: 0 0.2rem 0.4rem hsl(var(--bg-900) / 0.1),
      0 0.3rem 0.6rem hsl(var(--bg-900) / 0.05),
      0 0.4rem 0.8rem hsl(var(--bg-900) / 0.03);
    @starting-style {
      opacity: 0;
      scale: 0.8;
      translate: 0 -1rem;
    }
  }

  &__Item {
    display: flex;
    gap: 0.8rem;
    font-size: var(--select-option-font-size);
    justify-content: center;
    height: 4rem;
    border-radius: 1.8rem;
    font-weight: 700;
    &:focus-visible {
      outline: 4px solid hsl(var(--theme-500) / 0.3);
      border-color: hsl(var(--theme-500));
    }
    &--Selected {
      color: hsl(var(--theme-500));
    }
    button {
      color: inherit;
      font-weight: inherit;
    }
  }
  &__ItemText {
    width: 100%;
    display: flex;
    font-weight: inherit;
    color: inherit;
    padding: var(--select-option-padding);
  }
}

.list-fade-enter-active,
.list-fade-leave-active {
  transition: scale 150ms ease-out, opacity 150ms, translate 150ms;
  transform-origin: top center;
}
.list-fade-enter-from,
.list-fade-leave-to {
  opacity: 0;
  scale: 0.8;
  translate: 0 -1rem;
}
</style>

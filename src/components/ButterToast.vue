<template>
  <TransitionGroup tag="ul" class="ButterToast" name="butter-toast">
    <li
      :class="`ButterToast__Item ButterToast__Item--${useFirstCapital(type)}`"
      v-for="{ message, key, type } in data.toasts"
      :key
    >
      <i class="ButterToast__Icon"> </i>
      <span class="ButterToast__Text">
        {{ message }}
      </span>
      <button class="ButterToast__CloseButton" @click="data.selectDestroy(key)">
        확인
      </button>
    </li>
  </TransitionGroup>
</template>

<script setup>
import { onMounted } from "vue";

import { useToast } from "@/store/toast";
import { useFirstCapital } from "@/composables/formatter";
const data = useToast();

// onMounted(() => {
//   setTimeout(() => {
//     data.addToast({ type: "info", message: "asdf", key: 0 });
//   }, 1000);
// });
</script>

<style scoped lang="scss">
.ButterToast {
  position: fixed;
  // top: calc(var(--header-height) + 1rem);
  bottom: calc(var(--bottom-tab-height) + var(--bottom-tab-safe-margin) + 1rem);
  left: 50%;
  translate: -50% 0;
  z-index: 1000;
  list-style: none;
  width: min(calc(100% - 2rem), 40rem);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  &__Item {
    padding: 1.2rem 1.6rem;
    background-color: hsl(var(--bg-300) / 0.8);
    -webkit-backdrop-filter: blur(0.4rem);
    backdrop-filter: blur(0.4rem);
    border-radius: var(--global-radius);
    display: flex;
    &--Success {
      // backgro(und-color: hsl(var(--positive-color));
      color: hsl(var(--positive-color));
    }
    &--Error {
      // background-color: hsl(var(--negative-color));
      color: hsl(var(--negative-color));
    }
    &--Warning {
      // background-color: hsl(var(--neutral-color));
      color: hsl(var(--neutral-color));
    }
    &--Info {
      // background-color: hsl(var(--neutral-color));
      color: hsl(var(--neutral-color));
    }
  }
  &__Text {
    font-size: 1.6rem;
  }
  &__CloseButton {
    margin-left: auto;
  }
}

.butter-toast-enter-active {
  animation: toast-elastic 800ms;
}
.butter-toast-leave-active {
  transition: opacity 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6),
    translate 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
.butter-toast-leave-to {
  opacity: 0;
  translate: -100% 0;
}
// .butter-toast-enter-from {
//   opacity: 0;
//   translate: 100% 0;
// }

// .butter-toast-leave-to {
//   opacity: 0;
//   translate: -100% 0;
// }

@keyframes toast-elastic {
  0% {
    translate: 100% 0;
  }

  16% {
    translate: -32.27% 0;
  }

  28% {
    translate: 13.12% 0;
    // translate: -86.88% 0;
  }

  44% {
    translate: -4.63% 0;
    // translate: -104.63% 0;
  }

  59% {
    translate: 1.64% 0;
    // translate: -98.36% 0;
  }

  73% {
    translate: -0.58% 0;
    // translate: -100.58% 0;
  }

  88% {
    translate: 0.2% 0;
    // translate: -99.8% 0;
  }

  100% {
    translate: 0 0;
    // translate: -100% 0;
  }
}
</style>

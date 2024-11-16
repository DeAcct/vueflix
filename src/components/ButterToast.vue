<template>
  <TransitionGroup tag="ul" class="ButterToast" name="butter-toast">
    <ToastItem
      v-for="{ message, key, type } in data.toasts"
      :key
      :type
      @destroy-toast="data.selectDestroy(key)"
    >
      <template #message>{{ message }}</template>
    </ToastItem>
  </TransitionGroup>
</template>

<script setup>
import { onMounted } from "vue";

import { useToast } from "@/store/toast";

import ToastItem from "@/components/ToastItem.vue";

const data = useToast();

onMounted(() => {
  setTimeout(() => {
    data.addToast({ type: "success", message: "asdf", key: 0 });
  }, 1000);
  setTimeout(() => {
    data.addToast({ type: "success", message: "asdf", key: 0 });
  }, 2000);
  setTimeout(() => {
    data.addToast({ type: "success", message: "asdf", key: 0 });
  }, 3000);
});
</script>

<style scoped lang="scss">
.ButterToast {
  position: fixed;
  // top: calc(var(--header-height) + 1rem);
  bottom: calc(var(--bottom-tab-height) + var(--bottom-tab-safe-margin) + 1rem);
  left: 50%;
  translate: -50% 0;
  z-index: 101;
  list-style: none;
  width: min(calc(100% - 2rem), 40rem);

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.butter-toast-enter-active {
  animation: toast-elastic 600ms;
}
.butter-toast-move,
.butter-toast-leave-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.butter-toast-leave-active {
  position: absolute;
}
.butter-toast-leave-to {
  opacity: 0;
}
// .butter-toast-enter-active {
//   animation: toast-elastic 600ms;
// }
// .butter-toast-move,
// .butter-toast-leave-active {
//   transition: opacity 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6),
//     translate 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6);
// }
// .butter-toast-leave-to {
//   opacity: 0;
//   translate: -100% 0;
// }
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

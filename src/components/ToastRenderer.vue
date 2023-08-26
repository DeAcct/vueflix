<template>
  <ul class="ToastRenderer">
    <li class="ToastRenderer__Item" v-for="toast in toasts">
      <strong class="text">{{ toast.text }}</strong>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const toasts = computed(() => store.state.toasts);
</script>

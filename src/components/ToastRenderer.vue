<template>
  <ul class="toast-renderer">
    <li class="toast-renderer__item" v-for="toast in toasts">
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

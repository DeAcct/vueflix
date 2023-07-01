<template>
  <div class="modal-renderer">
    {{ content }}
    {{ action }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const content = computed(() => store.state.modal.content);
const action = computed(() => store.state.modal.action);
</script>

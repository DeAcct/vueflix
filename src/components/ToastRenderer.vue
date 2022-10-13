<template>
  <ul class="toast-renderer">
    <li class="toast-renderer__item" v-for="toast in toasts">
      <strong class="text">{{ toast.text }}</strong>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["toasts"]),
  },
};
</script>

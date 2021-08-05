<template>
  <vueflix-header currentPage="daily"></vueflix-header>
  <h2>요일별 신작</h2>
</template>

<script>
import VueflixHeader from "@/components/VueflixHeader.vue";
export default {
  name: "Daily",
  components: {
    VueflixHeader,
  },
};
</script>

<style lang="scss"></style>

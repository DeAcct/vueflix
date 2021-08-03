<template>
  <vueflix-header currentPage="home"></vueflix-header>
  <main>
    <slide />
  </main>
</template>

<script>
import VueflixHeader from "../components/VueflixHeader.vue";
import Slide from "../components/Slide.vue";
export default {
  name: "Home",
  components: {
    VueflixHeader,
    Slide,
  },
};
</script>

<style lang="scss"></style>

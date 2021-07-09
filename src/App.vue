<template>
  <vueflix-header></vueflix-header>
</template>

<script>
import VueflixHeader from './components/VueflixHeader.vue';
export default {
  name: "App",
  components: {
    VueflixHeader
  }
};
</script>

<style lang="scss">
  @import url("./reset.css");
</style>

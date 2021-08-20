<template>
  <div class="wrap">
    <main>
      <div class="inner">
        <poster-list></poster-list>
        <controller></controller>
      </div>
    </main>
  </div>
</template>

<script>
import PosterList from "../components/PosterList.vue";
import Controller from "../components/Controller.vue";
export default {
  name: "TagSearch",
  components: {
    PosterList,
    Controller,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 10rem 0 8.6rem;
  .controller {
    position: fixed;
    left: 0;
    bottom: 0;
    /*
    top: calc(100vh - 13.1rem);
    animation: 300ms ease-in-out 4 alternate gesture-hint;
    */
  }
}

@media screen and (min-width: 769px) {
  main .controller {
    position: fixed;
    bottom: auto;
    top: 6rem;
  }
}

/*
@keyframes gesture-hint{
  to{
    transform: translateY(-2rem);
  }
}
*/
</style>

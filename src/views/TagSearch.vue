<template>
  <div class="wrap">
    <main>
      <controller/>
      <div class="inner">
        <poster-list/>
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
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 10rem 0 8.6rem;
  .controller {
    position: fixed;
    left: 0;
  }
}

@media screen and (min-width: 769px) {
  main{
    display: flex;
    padding: 0;
    .controller {
      position:static;
      bottom: auto;
      left: auto;
      margin-top: 6rem;
      width: 500px;
      border-radius: 0;
      height: calc(100vh - 6rem);
      max-height: none;
      animation: none;
    }
    .inner{
      padding-left: 0;
      flex: 2;
    }
  }
}


</style>

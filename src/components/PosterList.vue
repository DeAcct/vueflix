<template>
  <ul class="poster-list">
    <poster-item v-for="item in list" :key="item.title" :isAdult="item.isAdult">
      {{ item.title }}
    </poster-item>
  </ul>
</template>

<script>
import PosterItem from "./PosterItem.vue";
export default {
  name: "PosterList",
  components: {
    PosterItem,
  },
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.poster-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
  gap: 2rem 1rem;
}
@media screen and (min-width: 1300px) {
  .poster-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem 1.5rem;
  }
}
@media screen and (min-width: 1920px) {
  .poster-list {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

<template>
  <ul class="poster-list">
    <poster-item v-for="item in list" :key="item.title" :isAdult="item.isAdult">
      {{ item.title }}
    </poster-item>
  </ul>
</template>

<script>
import PosterItem from './PosterItem.vue';
export default {
  name: 'PosterList',
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
  display: flex;
  gap: 2rem 1rem;
  flex-wrap: wrap;
}
</style>

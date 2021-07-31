<template>
  <nav class="menu">
    <h2 class="blind">대메뉴</h2>
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :class="{ current: item.to === currentPage }"
      >
        <router-link :to="`/${item.to}`">
          {{ item.item }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SiteMenu",
  props: {
    currentPage: {
      type: String,
    },
  },
  data() {
    return {
      items: [
        {
          to: "tagsearch",
          item: "태그검색",
        },
        {
          to: "daily",
          item: "요일별 신작",
        },
        {
          to: "recommend",
          item: "테마추천",
        },
        {
          to: "membership",
          item: "멤버쉽",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  margin-left: 2.5rem;
  .items {
    display: flex;
    .item {
      padding: 0 1.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;

      &.current {
        color: var(--theme-500);
      }
    }
  }
}
.scroll .menu .item {
  color: #000;
}
</style>

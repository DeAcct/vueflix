<template>
  <nav class="menu">
    <h2 class="blind">대메뉴</h2>
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="item">
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
  data() {
    return {
      items: [
        {
          to: "tag-search",
          item: "태그검색",
        },
        {
          to: "daily",
          item: "요일별 신작",
        },
        {
          to: "basket",
          item: "보관함",
        },
        {
          to: "my",
          item: "MY",
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
      color: #fff;
      transition: 150ms ease-out;
      a {
        font-weight: 700;
      }

      &:hover,
      a:focus {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
.fill .items .item {
  color: inherit;
  .vueflix-active-link,
  &:hover,
  a:focus {
    color: var(--theme-500);
  }
}
</style>

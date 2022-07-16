<template>
  <nav :class="['menu', { 'menu--fill': isScroll || (!isHome && !isAuth) }]">
    <h2 class="blind">대메뉴</h2>
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="item">
        <router-link :to="`/${item.to}`">
          {{ item.disabled ? "" : item.item }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SiteMenu",
  props: {
    isScroll: {
      type: Boolean,
    },
    isHome: {
      type: Boolean,
    },
    isAuth: {
      type: Boolean,
    },
  },
  data() {
    return {
      items: [
        {
          to: "tag-search",
          item: "태그검색",
        },
        // {
        //   to: "daily",
        //   item: "요일별 신작",
        //   disabled: true,
        // },
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
      transition: 150ms ease-out;
      a {
        color: #fff;
        font-weight: 700;
      }
    }
  }
  &--fill .items .item a {
    color: var(--text-800);
    position: relative;
    &.disabled {
      pointer-events: none;
    }
  }
  .vueflix-active-link {
    color: var(--theme-500) !important;
  }
}
</style>

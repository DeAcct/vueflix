<template>
  <nav class="bottom-tab-menu">
    <h2 class="blind">탭메뉴</h2>
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="item">
        <router-link :to="item.to === 'home' ? '/' : `/${item.to}`">
          <i class="icon">
            <template v-if="item.to !== 'my'">
              <icon-base>
                <component :is="icon(index)" :key="item.item" />
              </icon-base>
            </template>
            <template v-else>
              <component :is="icon(index)" :key="item.item" />
            </template>
          </i>
          <span>
            {{ item.item }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconHome from "./icons/IconHome.vue";
import IconTagSearch from "./icons/IconTagSearch.vue";
import IconDaily from "./icons/IconDaily.vue";
import IconBasket from "./icons/IconBasket.vue";
import Profile from "./Profile.vue";
export default {
  name: "BottomTabMenu",
  components: {
    IconBase,
    IconHome,
    IconTagSearch,
    IconDaily,
    IconBasket,
    Profile,
  },
  data() {
    return {
      items: [
        {
          to: "home",
          item: "홈",
        },
        {
          to: "tagsearch",
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
  methods: {
    icon(index) {
      switch (index) {
        case 0:
          return "IconHome";
        case 1:
          return "IconTagSearch";
        case 2:
          return "IconDaily";
        case 3:
          return "IconBasket";
        default:
          return "Profile";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bottom-tab-menu {
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  height: 5.6rem;
  background-color: #fff;
  border-radius: 0.6rem 0.6rem 0 0;
  border: 1px solid var(--bg-100);
  border-bottom: none;
  overflow: hidden;
  user-select: none;
  .items {
    display: flex;
    align-items: center;
    height: 100%;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20.5%;
      height: 100%;
    }
    .item:last-child {
      width: 18%;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 1.1rem;
      .icon {
        margin-bottom: 0.2rem;
      }
      .icon,
      span {
        color: var(--bg-500);
        font-weight: 500;
      }
      &.vueflix-active-link .icon,
      &.vueflix-active-link span {
        color: var(--theme-500);
      }
      .profile {
        width: 2.8rem;
        border: 2px solid transparent;
      }
    }
  }
}
</style>

<template>
  <nav class="bottom-tab-menu">
    <h2 class="blind">탭메뉴</h2>
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="item">
        <router-link :to="item.to === 'home' ? '/' : `/${item.to}`">
          <i>
            <icon-base>
              <component :is="item.component" :key="item.item" />
            </icon-base>
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
import IconRecommend from "./icons/IconRecommend.vue";
import IconMembership from "./icons/IconMembership.vue";
export default {
  name: "BottomTabMenu",
  components: {
    IconBase,
    IconHome,
    IconTagSearch,
    IconDaily,
    IconRecommend,
    IconMembership,
  },
  data() {
    return {
      items: [
        {
          to: "home",
          item: "홈",
          component: IconHome,
        },
        {
          to: "tagsearch",
          item: "태그검색",
          component: IconTagSearch,
        },
        {
          to: "daily",
          item: "요일별 신작",
          component: IconDaily,
        },
        {
          to: "recommend",
          item: "테마추천",
          component: IconRecommend,
        },
        {
          to: "membership",
          item: "멤버쉽",
          component: IconMembership,
        },
      ],
    };
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
  .items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100%;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 1.1rem;
      i {
        margin-bottom: 0.2rem;
      }
      i,
      span {
        color: var(--bg-500);
      }
      &.vueflix-active-link i,
      &.vueflix-active-link span {
        color: var(--theme-500);
      }
    }
  }
}
</style>

<template>
  <nav class="bottom-tab-menu">
    <h2 class="blind">탭메뉴</h2>
    <ul class="items">
      <li v-for="(item, index) in items" :key="index" class="item">
        <router-link :to="item.to === 'home' ? '/' : `/${item.to}`">
          <i class="icon">
            <template v-if="item.to !== 'my'">
              <icon-base>
                <component :is="item.icon" :key="item.item" />
              </icon-base>
            </template>
            <template v-else>
              <component
                :is="item.icon"
                :key="item.item"
                :input-profile="
                  item.icon === 'Profile' && user
                    ? user.profileImgSrc
                    : undefined
                "
              />
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
import { mapState } from "vuex";
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
          icon: "IconHome",
        },
        {
          to: "tag-search",
          item: "태그검색",
          icon: "IconTagSearch",
        },
        {
          to: "daily",
          item: "요일별 신작",
          icon: "IconDaily",
        },
        {
          to: "basket",
          item: "보관함",
          icon: "IconBasket",
        },
        {
          to: "my",
          item: "MY",
          icon: "Profile",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
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
  background-color: var(--top-item);
  border-radius: 0.6rem 0.6rem 0 0;
  border: 1px solid var(--bg-200);
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
        color: var(--bottom-tab);
        font-weight: 500;
      }
      &.vueflix-active-link .icon,
      &.vueflix-active-link span {
        color: var(--theme-500);
      }
      .profile {
        width: 2.6rem;
        border: 2px solid transparent;
      }
    }
  }
}
</style>

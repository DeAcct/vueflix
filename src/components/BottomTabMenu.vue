<template>
  <nav class="bottom-tab-menu">
    <h2 class="blind">하단메뉴</h2>
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
                  item.icon === 'ProfileImg' && user
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
import ProfileImg from "./ProfileImg.vue";
import { mapState } from "vuex";
export default {
  name: "BottomTabMenu",
  components: {
    IconBase,
    IconHome,
    IconTagSearch,
    IconDaily,
    IconBasket,
    ProfileImg,
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
          to: "basket",
          item: "보관함",
          icon: "IconBasket",
        },
        {
          to: "my",
          item: "MY",
          icon: "ProfileImg",
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

  background-color: var(--top-item);
  border-radius: 0.6rem 0.6rem 0 0;
  border: 1px solid hsl(var(--bg-200));
  border-bottom: none;
  overflow: hidden;
  user-select: none;
  .items {
    display: flex;
    .item {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      height: 5.6rem;
      font-size: 1.1rem;
      gap: 0.2rem;
      span {
        color: hsl(var(--bottom-tab));
        font-weight: 500;
      }
      &.vueflix-active-link .icon,
      &.vueflix-active-link span {
        color: hsl(var(--theme-500));
      }
      .profile {
        width: 2.6rem;
        height: 2.6rem;
        border: 2px solid transparent;
      }
    }
  }
}
</style>

<template>
  <header
    class="header"
    :class="{ fill: isScroll || !isHome }"
    @scroll="handleScroll"
  >
    <div class="inner">
      <div class="col-left" :class="{ centered: isHome && isMobile }">
        <h1 class="logo" :class="{ blind: isMobile && !isHome }">
          <router-link to="/">
            <logo />
          </router-link>
        </h1>
        <h2 v-if="isMobile && !isHome">{{ headString }}</h2>
        <site-menu v-if="!isMobile"></site-menu>
      </div>
      <div class="col-right">
        <search-bar />
        <notification />
      </div>
    </div>
  </header>
</template>

<script>
import SiteMenu from "./SiteMenu.vue";
import SearchBar from "./SearchBar.vue";
import Logo from "./Logo.vue";
import Notification from "./Notification.vue";
export default {
  name: "VueflixHeader",
  components: {
    SiteMenu,
    SearchBar,
    Logo,
    Notification,
  },
  data() {
    return {
      isScroll: false,
      isMobile: window.innerWidth <= 768,
      isHome: this.page === "home",
      page: this.$route.name,
      headString: undefined,
    };
  },
  methods: {
    handleScroll() {
      setTimeout((this.isScroll = 0 < Math.round(window.scrollY)), 500);
    },
    checkResolution() {
      this.isMobile = window.innerWidth <= 768;
    },
    getCurrentPage() {
      return this.$route.name;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkResolution);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkResolution);
  },
  watch: {
    $route() {
      this.page = this.getCurrentPage();
      this.isHome = this.page === "home";
      switch (this.page) {
        case "tagsearch":
          this.headString = "태그검색";
          break;
        case "daily":
          this.headString = "요일별 신작";
          break;
        case "recommend":
          this.headString = "테마추천";
          break;
        case "membership":
          this.headString = "멤버십 및 포인트";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 87%, 0);
  -webkit-backdrop-filter: blur(0);
  backdrop-filter: blur(0);
  position: fixed;
  top: 0;
  z-index: 50;
  user-select: none;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    .col-left {
      display: flex;
      align-items: center;
      &.centered {
        margin-left: 50%;
        transform: translateX(-50%);
      }
      .logo {
        display: flex;
        align-items: center;
        width: 6rem;
        height: 6rem;
        a {
          display: flex;
          align-items: center;
          width: 100%;
          fill: #fff;
          transition: all 250ms ease-out;
        }
      }
      h2 {
        font-size: 1.8rem;
        font-weight: 900;
      }
    }
    .col-right {
      display: flex;
      align-items: center;
      .notification {
        margin-left: 0.5rem;
      }
    }
  }

  transition: all 250ms ease-out;
  &.fill {
    background-color: hsla(0, 0%, 100%, 0.7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom-color: var(--bg-200);
    .col-left {
      .logo a {
        fill: var(--text-800);
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .header .inner .col-left h2 {
    font-size: 1.8rem;
  }
}
@media screen and (min-width: 769px) {
  .header .inner {
    .col-left {
      margin-left: 0;
      transform: none;
    }
    .col-right .notification {
      margin-left: 1.5rem;
    }
  }
}
</style>

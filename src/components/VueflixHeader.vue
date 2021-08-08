<template>
  <header
    class="header"
    :class="{ fill: isScroll || page !== 'home' }"
    @scroll="handleScroll"
  >
    <div class="inner">
      <div class="col-left">
        <h1 class="logo">
          <router-link to="/">
            <logo />
          </router-link>
        </h1>
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
      page: this.$route.name,
    };
  },
  methods: {
    handleScroll() {
      this.isScroll = 0 < Math.round(window.scrollY);
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

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    .col-left {
      display: flex;
      align-items: center;
      margin-left: 50%;
      transform: translateX(-50%);
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

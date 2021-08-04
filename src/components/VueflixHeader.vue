<template>
  <header class="header" :class="{ scroll: isScroll }" @scroll="handleScroll">
    <div class="inner">
      <div class="col-left">
        <h1 class="logo">
          <router-link to="/">
            <logo />
          </router-link>
        </h1>
        <site-menu v-if="!isMobile" :currentPage="page"></site-menu>
      </div>
      <div class="col-right">
        <search-bar></search-bar>
        <button class="gnb-open" v-if="isMobile">
          <span class="blind">대메뉴 열기</span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import SiteMenu from "./SiteMenu.vue";
import SearchBar from "./SearchBar.vue";
import Logo from "./Logo.vue";
export default {
  name: "VueflixHeader",
  props: {
    currentPage: {
      type: String,
    },
  },
  components: {
    SiteMenu,
    SearchBar,
    Logo,
  },
  data() {
    return {
      isScroll: false,
      isMobile: window.innerWidth < 768,
      page: this.currentPage,
    };
  },
  methods: {
    handleScroll() {
      this.isScroll = 0 < Math.round(window.scrollY);
    },
    checkResolution() {
      this.isMobile = window.innerWidth < 768;
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
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0);
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
    }
  }

  transition: all 250ms ease-out;
  &.scroll {
    background-color: hsla(0, 0%, 100%, 0.9);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #efefef;
    .col-left .logo a {
      fill: #000;
    }
  }
}
@media screen and (max-width: 768px) {
  .header .inner .col-left {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>

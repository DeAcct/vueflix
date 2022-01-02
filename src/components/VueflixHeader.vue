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
        <button
          class="go-back"
          @click="goBack"
          v-if="isPrevVisible"
          role="link"
          id="뒤로가기"
        >
          <icon-base iconName="뒤로가기"><icon-arrow-prev /></icon-base>
        </button>
        <h2 v-if="isMobile && !isHome">{{ headString }}</h2>
        <site-menu v-if="!isMobile" />
      </div>
      <div class="col-right">
        <search-bar v-if="page !== 'reviews'" />
        <notification v-if="isHome" />
      </div>
    </div>
  </header>
</template>

<script>
import SiteMenu from "./SiteMenu.vue";
import SearchBar from "./SearchBar.vue";
import Notification from "./Notification.vue";
import Logo from "./Logo.vue";
import IconBase from "./IconBase.vue";
import IconArrowPrev from "./icons/IconArrowPrev.vue";
export default {
  name: "VueflixHeader",
  components: {
    SiteMenu,
    SearchBar,
    Notification,
    Logo,
    IconBase,
    IconArrowPrev,
  },
  data() {
    return {
      isScroll: false,
      isMobile: window.innerWidth <= 768,
      isHome: this.page === "home",
      isPrevVisible:
        this.page !== "home" &&
        this.page !== "tag-search" &&
        this.page !== "daily" &&
        this.page !== "basket" &&
        this.page !== "my" &&
        this.isMobile,
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
    goBack() {
      return this.$router.go(-1);
    },
    init() {
      this.page = this.$route.name;
      this.isHome = this.page === "home";
      this.isPrevVisible =
        this.page !== "home" &&
        this.page !== "tag-search" &&
        this.page !== "daily" &&
        this.page !== "basket" &&
        this.page !== "my" &&
        this.isMobile;
      switch (this.page) {
        case "tag-search":
          this.headString = "태그검색";
          break;
        case "daily":
          this.headString = "요일별 신작";
          break;
        case "basket":
          this.headString = "보관함";
          break;
        case "my":
          this.headString = "MY";
          break;
        case "membership":
          this.headString = "멤버십";
          break;
        case "change-profile":
          this.headString = "프로필 관리";
          break;
        case "reviews":
          this.headString = "리뷰";
          break;
        default:
          this.headString = "";
      }
    },
  },
  mounted() {
    console.log(this.isHome);
    this.init();
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
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid hsla(0, 0%, 87%, 0);
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
      .go-back {
        margin-right: 0.5rem;
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
    background-color: var(--top-item);
    border-bottom-color: var(--bg-100);
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

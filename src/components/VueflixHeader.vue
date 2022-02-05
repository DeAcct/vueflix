<template>
  <header
    :class="[
      'header',
      { 'header--scrolled': isScroll || !isHome },
      { 'header--centered': isHome && isMobile },
    ]"
    @scroll="handleScroll"
  >
    <div class="inner">
      <div class="col-left">
        <h1 :class="['header__logo', { blind: isMobile && !isHome }]">
          <router-link to="/">
            <logo />
          </router-link>
        </h1>
        <a
          class="go-back"
          @click="goBack"
          v-if="isPrevVisible"
          role="link"
          id="뒤로가기"
        >
          <icon-base icon-name="뒤로가기"><icon-arrow-prev /></icon-base>
        </a>
        <h2 v-if="isMobile && !isHome" class="header__title">
          {{ headString }}
        </h2>
        <site-menu v-if="!isMobile" :isScroll="isScroll" :isHome="isHome" />
      </div>
      <div class="col-right">
        <search-bar
          v-if="isSearchVisible"
          :isScroll="isScroll"
          :isHome="isHome"
        />
        <notification v-if="isHome" :isScroll="isScroll" />
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
      isSearchVisible: false,
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
      this.$router.go(-1);
    },
    init() {
      this.page = this.$route.name;
      this.isHome = this.page === "home";
      this.isSearchVisible =
        this.page !== "reviews" &&
        this.page !== "auth" &&
        this.page !== "dark-mode";
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
        case "auth":
          this.headString = "로그인";
          break;
        case "dark-mode":
          this.headString = "다크 모드";
          break;
        default:
          this.headString = "";
      }
    },
  },
  mounted() {
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
  z-index: 100;
  user-select: none;

  &__logo {
    display: flex;
    align-items: center;
    width: 6rem;
    height: 6rem;
    a {
      display: flex;
      align-items: center;
      width: 100%;
      fill: var(--top-item);
      transition: all 250ms ease-out;
    }
  }
  &__title {
    font-size: 1.8rem;
    font-weight: 900;
  }
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    .col-left {
      display: flex;
      align-items: center;
      .go-back {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
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
  &--scrolled {
    background-color: var(--top-item);
    border-bottom-color: var(--bg-100);

    .header__logo a {
      fill: var(--text-800);
    }
  }
  &--centered .col-left {
    margin-left: 50%;
    transform: translateX(-50%);
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

<template>
  <div class="wrap" :style="useBg">
    <header v-if="isMobile" class="inner">
      <button class="go-back" @click="goBack" role="link" id="뒤로가기">
        <icon-base iconName="뒤로가기"><icon-arrow-prev /></icon-base>
      </button>
      <h1 class="blind">뷰플릭스</h1>
    </header>
    <main class="login inner">
      <div class="row-top">
        <div class="logo">
          <logo />
        </div>
        <p class="copy-text">
          이번 분기 화제작부터 고전 명작까지 한 곳에서 즐겨보세요!
        </p>
      </div>
      <div class="btn-area">
        <vueflix-btn
          component="router-link"
          :icon="false"
          :type="''"
          to="/auth/by-email"
          v-if="isAuthMain"
          class="btn--email-sign-in"
        >
          <template v-slot:text>이메일로 로그인</template>
        </vueflix-btn>
        <div class="btn-row-bottom">
          <vueflix-btn
            component="router-link"
            :icon="false"
            :type="''"
            to="/auth/sign-up"
            v-if="isAuthMain"
            class="btn--email-sign-up"
          >
            <template v-slot:text>이메일로 가입</template>
          </vueflix-btn>
          <vueflix-btn
            component="router-link"
            :icon="false"
            :type="''"
            to="/auth/another"
            v-if="isAuthMain"
            class="btn--another"
          >
            <template v-slot:text>다른 방법으로 로그인</template>
          </vueflix-btn>
        </div>
      </div>

      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import IconBase from "../components/IconBase.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";
import Logo from "../components/Logo.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
export default {
  name: "Auth",
  components: {
    IconBase,
    IconArrowPrev,
    VueflixBtn,
    Logo,
  },
  data() {
    return {
      isAuthMain: this.$route.name === "auth",
      isMobile: window.innerWidth <= 1024,
      bgURL: undefined,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkDevice);
    this.getBg();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 1024;
    },
    goBack() {
      console.log("as");
      this.$router.go(-1);
    },
    async getBg() {
      const storage = getStorage();
      const posterRef = ref(storage, "LoginVisual.png");
      try {
        const bgURL = await getDownloadURL(posterRef);
        this.bgURL = bgURL;
      } catch {
        console.error("포스터 정보가 존재하지 않습니다");
      }
    },
  },
  watch: {
    $route() {
      this.isAuthMain = this.$route.name === "auth";
    },
  },
  computed: {
    useBg() {
      const bg = this.isAuthMain ? `url(${this.bgURL})` : "none";
      return `background-image: ${bg}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  background-color: #000;
  background-size: 50%;
  background-repeat: repeat;
  animation: bg-motion 4s linear infinite;
}
header {
  display: flex;
  align-items: center;
  height: 6rem;
  .go-back {
    color: #fff;
  }
}
.login {
  height: calc(100% - 6rem);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: {
    top: 10rem;
    bottom: 8rem;
  }

  .row-top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: 15rem;
    text-align: center;
    margin-bottom: 3rem;
    fill: var(--theme-500);
  }

  .copy-text {
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
  }

  .btn-area {
    width: 100%;
    box-shadow: none;
    .btn {
      width: 100%;
      box-shadow: none;
      color: #fff;
      height: 4rem;
      &--email-sign-in {
        background-color: var(--theme-500);
      }
    }
    .btn-row-bottom {
      margin-top: 2rem;
    }
  }
}

@keyframes bg-motion {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
</style>

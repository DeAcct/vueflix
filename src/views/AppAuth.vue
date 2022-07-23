<template>
  <div class="wrap">
    <loading-spinner v-if="isLoginWaiting" :is-loading="isLoginWaiting" />
    <header v-if="isMobile" class="inner">
      <button class="go-back" @click="goBack" role="link" id="뒤로가기">
        <icon-base iconName="뒤로가기"><icon-arrow-prev /></icon-base>
      </button>
      <h1 class="blind">뷰플릭스</h1>
    </header>
    <main class="login inner">
      <div class="row-top">
        <div class="logo">
          <vueflix-logo />
        </div>
        <p class="copy-text">
          <span class="line-break"> 이번 분기 화제작부터 고전 명작까지 </span>
          <span class="line-break"> 한 곳에서 즐겨보세요! </span>
        </p>
      </div>
      <div class="btn-area">
        <vueflix-btn
          component="button"
          :icon="true"
          type="button"
          to="/auth/by-email"
          class="btn--google"
          @click="googleContinue"
        >
          <template v-slot:icon><icon-google /></template>
          <template v-slot:text> Google 계정으로 계속하기 </template>
        </vueflix-btn>
      </div>
    </main>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import IconBase from "../components/IconBase.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";
import VueflixLogo from "../components/VueflixLogo.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
import IconGoogle from "../components/icons/IconGoogle.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import { mapState } from "vuex";
export default {
  name: "AppAuth",
  components: {
    IconBase,
    IconArrowPrev,
    VueflixBtn,
    VueflixLogo,
    IconGoogle,
    LoadingSpinner,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 1024,
      bgURL: undefined,
      isLoginWaiting: false,
    };
  },
  mounted() {
    if (this.user) {
      this.goBack();
    } else {
      window.addEventListener("resize", this.checkDevice);
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 1024;
    },
    goBack() {
      this.$router.go(-1);
    },
    async googleContinue() {
      this.isLoginWaiting = true;
      const auth = getAuth();
      const db = getFirestore();
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);

        const docSnap = await getDoc(doc(db, "user", auth.currentUser.uid));
        if (!docSnap.exists()) {
          await setDoc(doc(db, "user", auth.currentUser.uid), {
            uid: auth.currentUser.uid,
            nickname: auth.currentUser.displayName,
            profileImgSrc: auth.currentUser.photoURL,
            email: auth.currentUser.email,
            recentWatched: [],
            wannaSee: [],
            reviews: [],
            keywordReview: [],
            maratonWatch: [],
            purchased: [],
          });
        }
        this.$store.commit("auth/setUser", docSnap.data());
        this.$router.back();
      } catch {
        this.isLoginWaiting = false;
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  background-color: var(--promotion-bg);
  .loader {
    position: absolute;
    z-index: 100;
    width: 6.4rem;
    height: 6.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-3.2rem, -3.2rem);
    color: #fff;
  }
  .go-back {
    color: #fff;
  }
}
header {
  display: flex;
  align-items: center;
  height: 6rem;
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
    margin-bottom: 3rem;
    fill: var(--theme-500);
  }

  .copy-text {
    span {
      font-weight: 700;
      line-height: 1.3;
      font-size: 1.7rem;
      color: #fff;
    }
    text-align: center;
    margin-bottom: 2rem;
  }

  .btn-area {
    width: 100%;
    max-width: 37.5rem;
    box-shadow: none;
    .btn {
      display: flex;
      width: 100%;
      background-color: #fff;
      height: 4rem;
      justify-content: space-between;
      box-shadow: none;
      color: var(--google-login-text);
    }
  }
}

@media screen and (min-width: 1080px) {
  @font-face {
    font-family: "yg-jalnan";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .login {
    justify-content: center;

    .logo {
      display: none;
    }
    .copy-text {
      margin-bottom: 10rem;
      span {
        font-family: "yg-jalnan";
        font-size: 5rem;
        font-weight: 900;
        background-image: linear-gradient(
          90deg,
          hsl(340, 100%, 54%),
          hsl(73, 100%, 53%)
        );
        background-position-x: left;
        background-size: 200%;
        background-clip: text;
        -webkit-background-clip: text;
        animation: text-animation 3000ms ease-in-out infinite alternate;
        color: transparent;
      }
    }
  }
}

@keyframes text-animation {
  to {
    background-position-x: right;
  }
}
</style>

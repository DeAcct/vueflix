<template>
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
    <div class="btn-row-bottom">
      <vueflix-btn
        component="button"
        :icon="true"
        type="button"
        to="/auth/sign-up"
        class="btn--facebook"
        @click="facebookContinue"
      >
        <template v-slot:icon><icon-facebook /></template>
        <template v-slot:text>페이스북으로 계속하기</template>
      </vueflix-btn>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import VueflixBtn from "../components/VueflixBtn.vue";
import IconGoogle from "../components/icons/IconGoogle.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";

export default {
  name: "Auth",
  components: {
    VueflixBtn,
    IconGoogle,
    IconFacebook,
  },
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async googleContinue() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(() => {
        this.router.push("/my");
      });
    },
    async facebookContinue() {
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider).then(() => {
        this.router.push("/my");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-area {
  width: 100%;
  box-shadow: none;
  .btn {
    width: 100%;
    box-shadow: none;
    color: #fff;
    height: 4rem;
    justify-content: space-between;
    &--google {
      background-color: #fff;
      color: var(--text-800);
    }
    &--facebook {
      background-color: #0062e0;
    }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>

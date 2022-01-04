<template>
  <form class="login-box" @submit.prevent="loginContinue">
    <div class="input-boxes">
      <input-box
        type="text"
        :autofocus="true"
        identify="nickname"
        :validAlert="false"
        @valueChanged="onNickNameChanged"
      >
        <template v-slot:label>닉네임</template>
      </input-box>
      <input-box
        type="email"
        :autofocus="false"
        identify="email"
        :isValid="isEmailValid"
        :validAlert="true"
        @valueChanged="onEmailChanged"
      >
        <template v-slot:label>이메일</template>
        <template v-slot:valid-alert>
          이메일 형식이 올바르지 않아요. 다시 입력해 주세요.
        </template>
      </input-box>
      <input-box
        type="password"
        :autofocus="false"
        identify="password"
        :validAlert="false"
        @valueChanged="onPasswordChanged"
      >
        <template v-slot:label>비밀번호</template>
      </input-box>
    </div>
    <vueflix-btn
      type="submit"
      component="button"
      :disabled="!(isEmailValid && isPasswordValid)"
    >
      <template v-slot:text>로그인</template>
    </vueflix-btn>
  </form>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import InputBox from "../components/InputBox.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
export default {
  name: "Auth",
  components: {
    VueflixBtn,
    InputBox,
  },
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isEmailValid() {
      const emailRegExp =
        /^[0-9a-zA-Z]([-]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-]?[0-9a-zA-Z])+[.][a-zA-Z]{2,3}$/i;
      const isEmailValid = !!this.email.match(emailRegExp);
      return isEmailValid;
    },
    isPasswordValid() {
      const isPasswordValid = !!this.password;
      return isPasswordValid;
    },
  },
  methods: {
    onNickNameChanged(e) {
      this.name = e;
    },
    onEmailChanged(e) {
      this.email = e;
    },
    onPasswordChanged(e) {
      this.password = e;
    },
    async loginContinue() {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        await updateProfile(auth.currentUser, { displayName: this.nickname });
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/my");
      } catch (e) {
        console.log(e.code);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  width: calc(100vw - var(--inner-padding) * 2);
  padding: 2rem;
  border-radius: 0.6rem;
  background-color: var(--top-item);
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);

  .input-boxes {
    .box {
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
    margin-bottom: 4rem;
  }

  .btn {
    width: 100%;
    background-color: var(--theme-500);
    color: #fff;
    height: 4.5rem;
    &:disabled {
      background-color: var(--theme-200);
      box-shadow: none;
    }
  }
}
</style>

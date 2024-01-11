<template>
  <div class="Login">
    <form class="Login__Email">
      <TextInput type="email" class="Login__Input" v-model:input-value="email">
        <template #label>이메일</template>
      </TextInput>
      <TextInput
        type="password"
        class="Login__Input"
        v-model:input-value="password"
        autocomplete="on"
      >
        <template #label>패스워드</template>
        <template #etc-action>
          <VueflixBtn
            type="button"
            component="button"
            @mousedown="toggleSeek"
            @mouseup="toggleSeek"
            @touchstart.passive="toggleSeek"
            @touchend.passive="toggleSeek"
            class="Login__Button Login__Button--OtherAction"
          >
            <template #icon>
              <IconBase>
                <IconSeekOn v-if="seek" />
                <IconSeekOff v-else />
              </IconBase>
            </template>
          </VueflixBtn>
        </template>
      </TextInput>
      <div class="Login__ButtonList">
        <VueflixBtn
          type="button"
          component="button"
          @click="signIn"
          class="Login__Button Login__Button--Login"
        >
          <template #text>로그인</template>
        </VueflixBtn>
        <VueflixBtn
          to="/auth/sign-up"
          class="Login__Button Login__Button--SignUp"
          component="router-link"
        >
          <template #text>회원가입</template>
        </VueflixBtn>
      </div>
    </form>
    <div class="Login__OAuth">
      <VueflixBtn
        component="button"
        :icon="true"
        type="button"
        class="Login__Button Login__Button--Google"
        @click="googleContinue"
      >
        <template #icon>
          <IconBase>
            <IconGoogle />
          </IconBase>
        </template>
        <template #text>Google 계정으로 계속하기</template>
      </VueflixBtn>
    </div>
  </div>
</template>

<script setup>
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { db } from "@/utility/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import TextInput from "@/components/TextInput.vue";
import { useAuth } from "../store/auth";

import VueflixBtn from "@/components/VueflixBtn.vue";

import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import { usePassword } from "@/composables/strictUser";

const router = useRouter();
// onMounted(() => {
//   if (user.value) {
//     router.back();
//   }
// });

const isLoginWaiting = ref(false);
async function googleContinue() {}

const auth = useAuth();
async function signIn() {
  await auth.signInEmailUser(email, password);
}

const email = ref("");
const { password, seek, toggleSeek } = usePassword();
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  &__Form {
    display: flex;
    flex-direction: column;
    width: calc(100% - 4rem);
    border-radius: calc(2rem + var(--global-radius));
  }

  &__Email {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0 0 2rem;
    border-bottom: 1px solid hsl(var(--bg-200));
    position: relative;
    &::after {
      content: "또는";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      background-color: hsl(var(--bg-100));
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
  &__Input {
    --input-height: 4rem;
    --input-padding: 0 1.4rem;
    border-radius: calc(var(--global-radius) * 2);
    background-color: hsl(var(--bg-100));
  }
  &__OAuth {
    padding: 2rem 0 0;
  }
  &__Button {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 4.8rem;
    box-shadow: none;
    border-radius: calc(var(--global-radius) * 2);
    color: var(--google-login-text);
    font-size: 1.4rem;
    &--Login {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
    &--Google {
      justify-content: space-between;
    }
    &--OtherAction {
      width: 4rem;
      height: 4rem;
      padding: 0;
    }
  }
  &__ButtonList {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
}

@media screen and (min-width: 1080px) {
  .Login {
    justify-content: center;
  }
}

@keyframes text-animation {
  to {
    background-position-x: right;
  }
}
</style>

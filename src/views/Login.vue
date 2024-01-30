<template>
  <div class="Login">
    <form class="Login__Email">
      <TextInput type="email" class="Login__Input" v-model="email">
        <template #label>이메일</template>
      </TextInput>
      <TextInput
        :type="seek ? 'text' : 'password'"
        class="Login__Input"
        v-model="password"
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
            icon
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
      <label class="Login__SaveLabel">
        <InputBoolean
          v-model="isLoginSave"
          type="checkbox"
          class="Login__SaveToggle"
        />
        로그인 정보 저장
        <strong class="Login__SaveWarning">
          저도 몰랐어요, 아무데서나 저장한 나비효과를...
        </strong>
      </label>
      <div class="Login__ButtonList">
        <VueflixBtn
          type="button"
          component="button"
          @click="login('Email')"
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
        v-for="{ name, icon } in oAuthServices"
        component="button"
        icon
        type="button"
        class="Login__Button"
        :class="`Login__Button--${name}`"
        @click="login(name)"
        :key="name"
      >
        <template #icon>
          <IconBase>
            <component :is="icon" />
          </IconBase>
        </template>
        <template #text>
          {{ recentMethod === name ? "최근에 로그인했던" : "" }}
          {{ name }}로 계속하기
        </template>
      </VueflixBtn>
    </div>
  </div>
</template>

<script setup>
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { db } from "@/utility/firebase";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../store/auth";

import { usePassword } from "@/composables/strictUser";
import { useLoginSave } from "@/composables/loginSave";
import { useBrowserStorage } from "@/composables/browserStorage";

import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";
import InputBoolean from "@/components/InputBoolean.vue";

import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";

const router = useRouter();

const auth = useAuth();
const oAuthServices = [
  { name: "Google", icon: IconGoogle },
  { name: "Facebook", icon: IconFacebook },
];

const { data: recentMethod, setData: setRecentLogin } =
  useBrowserStorage("recent-method");
const { isLoginSave, data, saveData } = useLoginSave();

const isLoginWaiting = ref(false);
async function login(type = "Email") {
  isLoginWaiting.value = true;
  if (type !== "Email") {
    await OAuthLogin(type);
  } else {
    try {
      await auth.signInEmailUser(email, password);
      saveData(email, password);
    } catch (e) {
      console.error(e);
    }
  }
  isLoginWaiting.value = false;
  setRecentLogin(type);
  router.back();
}
async function OAuthLogin(id) {
  await auth.continueOAuth(id);
  router.back();
}

const email = ref("");
const { password, seek, toggleSeek } = usePassword();

onMounted(() => {
  if (isLoginSave.value) {
    email.value = data.value.email;
    password.value = data.value.password;
  }
});
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
  &__SaveLabel {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    gap: 0.4rem;
    margin-left: calc(var(--global-radius) * 2 - 0.3rem);
  }
  &__SaveWarning {
    color: hsl(var(--theme-500));
  }

  &__OAuth {
    padding: 2rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &__Button {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 4.8rem;
    border-radius: calc(var(--global-radius) * 2);
    color: var(--google-login-text);
    font-size: 1.4rem;
    box-shadow: none;
    &--Login {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
    &--SignUp {
      background-color: hsl(var(--bg-200));
      color: hsl(var(--text-800));
    }
    &--Google {
      color: hsl(var(--text-800));
      justify-content: space-between;
      background-color: hsl(var(--bg-200));
    }
    &--Facebook {
      justify-content: space-between;
      background-color: #1977f3;
      color: #fff;
    }
    &--OtherAction {
      width: 4rem;
      height: 4rem;
      padding: 0;
      box-shadow: none;
      background-color: transparent;
      color: #fff;
    }
  }

  &__RecentMethod {
    position: absolute;
    top: 50%;
    right: -6rem;
  }
  &__ButtonList {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
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

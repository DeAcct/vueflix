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
    <NativeDialog ref="$root" class="LoginAlert" shade>
      <template #title>
        <strong class="LoginAlert__Title">
          {{ currentModal.title }}
        </strong>
      </template>
      <template #content>
        <p class="LoginAlert__Text">{{ currentModal.text }}</p>
      </template>
      <template #control>
        <div class="LoginAlert__Control">
          <VueflixBtn
            type="button"
            component="button"
            class="LoginAlert__Button"
            v-for="{ action, text } in currentModal.buttons"
            :key="text"
            @click="action"
          >
            <template #text>{{ text }}</template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
  </div>
</template>

<script setup>
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { db } from "@/utility/firebase";
import { ref, onMounted } from "vue";
import { useAuth } from "../store/auth";

import { usePassword } from "@/composables/strictUser";
import { useLoginSave } from "@/composables/loginSave";
import { useBrowserStorage } from "@/composables/browserStorage";

import InputBoolean from "@/components/InputBoolean.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";

import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";

const auth = useAuth();
const oAuthServices = [
  { name: "Google", icon: IconGoogle },
  { name: "Facebook", icon: IconFacebook },
];

const { data: recentMethod, setData: setRecentLogin } =
  useBrowserStorage("recent-method");
const { isLoginSave, data, saveData } = useLoginSave();

const isLoginWaiting = ref(false);
const currentModal = ref({ title: "", text: "", buttons: [] });
async function login(key = "Email") {
  if (isLoginSave.value) {
    saveData({ email, password });
  }
  isLoginWaiting.value = true;
  const result = await auth.continueUser({ key, email, password });
  if (result.code) {
    console.log(result.code);
    showAlert(result.code);
    return;
  }
  isLoginWaiting.value = false;
  setRecentLogin(key);
}

const $root = ref(null);
function showAlert(errorCode) {
  currentModal.value = errorMap[errorCode];
  $root.value.show();
}
function closeAlert() {
  $root.value.close();
}
const errorMap = {
  "auth/invalid-email": {
    title: "이메일 형식이 아닙니다",
    text: "이메일 형식이 아닙니다. 다시 확인해주세요.",
    buttons: [{ action: closeAlert, text: "확인" }],
  },
  "auth/account-exists-with-different-credential": {
    title: "이미 가입된 계정",
    text: "이미 가입된 계정이 있습니다. 다른 방법으로 로그인해주세요.",
    buttons: [{ action: closeAlert, text: "확인" }],
  },
  "auth/user-not-found": {
    title: "계정을 찾을 수 없음",
    text: "입력하신 계정을 찾을 수 없습니다. 다시 확인해주세요.",
    buttons: [{ action: closeAlert, text: "확인" }],
  },
  "auth/wrong-password": {
    title: "비밀번호가 틀림",
    text: "입력하신 비밀번호가 틀렸습니다. 다시 확인해주세요.",
    buttons: [{ action: closeAlert, text: "확인" }],
  },
};

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

.LoginAlert {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  &__Title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  &__Text {
    font-size: 1.6rem;
    line-height: 1.3;
    text-wrap: pretty;
    margin-bottom: 1.2rem;
  }
  &__Important {
    display: block;
    line-height: 1.3;
    color: hsl(var(--theme-500));
    font-weight: 700;
  }
  &__Control {
    display: flex;
  }
  &__Button {
    margin-left: auto;
    box-shadow: none;
    border-radius: var(--global-radius);
    background-color: hsl(var(--theme-500));
    color: #fff;
  }
}

@media screen and (min-width: 1080px) {
  .Login {
    justify-content: center;
  }

  .LoginAlert {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: 40rem;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
}

@keyframes text-animation {
  to {
    background-position-x: right;
  }
}
</style>

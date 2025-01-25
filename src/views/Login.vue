<template>
  <div class="Login">
    <form class="Login__Form">
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
        이메일 저장
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
      </div>
    </form>
    <div class="Login__OAuth">
      <template v-for="{ name, icon } in oAuthServices">
        <div class="Login__ServiceCombo">
          <VueflixBtn
            component="button"
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
          </VueflixBtn>
          <div class="Login__RecentMethod" v-if="recentMethod === name">
            최근에 사용한
          </div>
        </div>
      </template>
    </div>
    <div class="Login__SignUp">
      <p class="Login__SignUpCopy">아직 회원이 아닌가요?</p>
      <VueflixBtn
        to="/auth/sign-up"
        class="Login__Button Login__Button--SignUp"
        component="router-link"
      >
        <template #text>회원가입</template>
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

  if (result?.code) {
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__Form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: relative;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid hsl(var(--bg-200));
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
  }
  &__SaveWarning {
    color: hsl(var(--theme-500));
  }

  &__ServiceCombo {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  &__RecentMethod {
    position: absolute;
    padding: 0 1.2rem;
    font-size: 1.2rem;
    border-radius: 9999px;
    height: 3rem;
    background-color: hsl(var(--bg-300));
    text-align: center;
    align-content: center;
    bottom: -4rem;
    z-index: 2;
    width: 9rem;
    animation: floating 1.2s infinite;
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: hsl(var(--bg-300));
      width: 1.5rem;
      height: 1rem;
      left: 50%;
      translate: -50% 0;
      bottom: 3rem;
      z-index: -1;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }

  &__OAuth {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
  }
  &__Button {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 4rem;
    border-radius: calc(var(--global-radius) * 2);
    color: var(--google-login-text);
    font-size: 1.4rem;
    box-shadow: none;
    padding: 0;
    text-wrap: nowrap;
    &--Login {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
    &--SignUp {
      background-color: hsl(var(--bg-200));
      color: hsl(var(--text-800));
    }
    &--Google {
      width: 4rem;
      color: hsl(var(--text-800));
      background-color: hsl(var(--bg-200));
    }
    &--Facebook {
      width: 4rem;
      background-color: #1977f3;
      color: #fff;
    }
    &--OtherAction {
      width: 4rem;
      height: 4rem;
      padding: 0;
      box-shadow: none;
      background-color: transparent;
      margin-right: -1.4rem;
    }
  }

  &__SignUp {
    margin-top: auto;
  }
  &__SignUpCopy {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  // &__RecentMethod {
  //   position: absolute;
  //   top: 50%;
  //   right: -6rem;
  // }
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
    height: auto;
    &__SignUp {
      margin-top: 10rem;
    }
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

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.2rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

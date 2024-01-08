<template>
  <form class="SignUp">
    <ProfileSelector v-model="profileImg" class="SignUp__ProfileImage" />
    <TextInput type="text" class="SignUp__Input" v-model:input-value="nickname">
      <template #label>닉네임</template>
    </TextInput>
    <TextInput type="email" class="SignUp__Input" v-model:input-value="email">
      <template #label>이메일</template>
      <template #etc-action>
        <VueflixBtn
          type="button"
          component="button"
          @click="validCheck"
          class="SignUp__Button SignUp__Button--DuplicateCheck"
        >
          <template #text>사용 가능여부 확인</template>
        </VueflixBtn>
      </template>
      <template #message>
        <span
          :class="`Signup__Message--${emailState}`"
          class="SignUp__Message"
          v-if="emailState !== 'Unchecked'"
        >
          <template v-if="emailState === 'Duplicated'">
            이메일이 이미 있습니다
          </template>
          <template v-else-if="emailState === 'Invalid'">
            잘못된 형식입니다
          </template>
          <template v-else>사용 가능합니다</template>
        </span>
      </template>
    </TextInput>
    <TextInput
      type="password"
      class="SignUp__Input"
      v-model:input-value="password"
      autocomplete="off"
    >
      <template #label>패스워드</template>
    </TextInput>
    <div class="SignUp__ButtonList">
      <button type="button" class="SignUp__Back" @click="router.back()">
        <IconBase>
          <IconArrowPrev />
        </IconBase>
      </button>
      <VueflixBtn
        type="button"
        class="SignUp__Button SignUp__Button--SignUp"
        component="button"
        @click="signUp"
      >
        <template #text>회원가입</template>
      </VueflixBtn>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/store/auth";
import { useRouter } from "vue-router";

import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";

import ProfileSelector from "../components/ProfileSelector.vue";
import IconBase from "../components/IconBase.vue";
// import NotFoundAqua from "@/assets/NotfoundAqua.svg";
// import Hakari from "@/assets/Hakari.jpg";
// import Karane from "@/assets/Karane.jpg";

const profileImg = ref("");
const email = ref("");
const password = ref("");
const nickname = ref("");

const emailState = ref("Unchecked");

const auth = useAuth();

async function validCheck() {
  const containsAt = email.value.includes("@");
  const containsDomain = email.value.split("@").pop().includes(".");
  if (!containsAt || !containsDomain) {
    emailState.value = "Invalid";
    return;
  }
  emailState.value = (await auth.checkEmailDuplicate(email))
    ? "Duplicated"
    : "Valid";
}
async function signUp() {
  console.log(
    await auth.createEmailUser({ email, password, nickname, profileImg })
  );
}

const router = useRouter();
</script>

<style lang="scss" scoped>
.SignUp {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  &__ProfileImage {
    width: calc(100% - 4rem);
  }
  &__Input {
    width: calc(100% - 4rem);
    --input-padding: 0 1.4rem;
    --input-height: 4rem;
  }

  &__Message {
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid hsl(var(--bg-200));
  }
  &__Button {
    display: flex;
    width: 100%;
    background-color: #fff;
    box-shadow: none;
    border-radius: var(--global-radius);
    color: var(--google-login-text);
    font-size: 1.4rem;
    height: 4rem;

    &--SignUp {
      width: auto;
      flex-grow: 1;
      background-color: hsl(var(--theme-500));
      color: #fff;
      height: 100%;
      border-radius: 0;
    }
    &--DuplicateCheck {
      color: hsl(var(--theme-500));
      width: auto;
      flex-shrink: 0;
      padding: {
        left: 0;
        right: 0;
      }
    }
  }

  &__ButtonList {
    display: flex;
    width: 100%;
    height: 4.8rem;
    margin-top: 2rem;
    background-color: hsl(var(--bg-200));
  }
  &__Back {
    width: 4.8rem;
    background-color: hsl(var(--bg-200));
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1080px) {
  .SignUp {
    &__ButtonList {
      width: 37.5rem;
      height: 4rem;
      border-radius: var(--global-radius);
      overflow: hidden;
      gap: 0.2rem;
      background-color: transparent;
    }
    &__Input {
      width: 37.5rem;
    }
    &__ProfileImage {
      width: 37.5rem;
    }
    &__Back {
      width: 4rem;
      background-color: hsl(var(--bg-200));
    }
  }
}
</style>

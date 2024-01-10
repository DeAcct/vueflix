<template>
  <form class="SignUp">
    <ProfileSelector v-model="profileImg" class="SignUp__ProfileImage" />
    <TextInput type="text" class="SignUp__Input" v-model="nickname">
      <template #label>닉네임</template>
      <template #etc-action>
        <VueflixBtn
          type="button"
          component="button"
          @click="generateRandomNickname"
          class="SignUp__Button SignUp__Button--OtherAction"
        >
          <template #text>랜덤 닉네임 생성</template>
        </VueflixBtn>
      </template>
      <template #message>
        <span
          :class="`SignUp__Message--${nicknameState.code}`"
          class="SignUp__Message"
          v-if="nicknameState.code !== 'Unchecked'"
        >
          {{ nicknameState.message }}
        </span>
      </template>
    </TextInput>
    <TextInput type="email" class="SignUp__Input" v-model="email">
      <template #label>이메일</template>
      <template #message>
        <span
          :class="`SignUp__Message--${emailState.code}`"
          class="SignUp__Message"
          v-if="emailState !== 'Unchecked'"
        >
          {{ emailState.message }}
        </span>
      </template>
    </TextInput>
    <TextInput
      type="password"
      class="SignUp__Input"
      v-model="password"
      autocomplete="off"
    >
      <template #label>패스워드</template>
      <template #message>
        <span
          :class="`SignUp__Message--${passwordState.code}`"
          class="SignUp__Message"
          v-if="passwordState.code !== 'Unchecked'"
        >
          {{ passwordState.message }}
        </span>
      </template>
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
import { useRouter } from "vue-router";
import { useNickname, useEmail, usePassword } from "@/composables/strictUser";
import { useAuth } from "@/store/auth";

import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";

import ProfileSelector from "@/components/ProfileSelector.vue";
import IconBase from "@/components/IconBase.vue";

const profileImg = ref("");

const {
  nickname,
  state: nicknameState,
  generateRandomNickname,
} = useNickname();
const { email, state: emailState } = useEmail();
const { password, state: passwordState } = usePassword();

const auth = useAuth();
async function signUp() {
  validate();
  console.log(blink.value);
  if (blink.value.length) {
    return;
  }
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
    width: 100%;
  }
  &__Input {
    width: 100%;
    --input-padding: 0 1.4rem;
    --input-height: 4rem;
  }

  &__Message {
    font-size: 1.4rem;
    font-weight: 700;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid hsl(var(--bg-200));
    &--Invalid {
      color: hsl(var(--theme-500));
    }
    &--Valid {
      color: hsl(var(--message-safe));
    }
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
    &--OtherAction {
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

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
      <template #etc-action>
        <VueflixBtn
          type="button"
          component="button"
          @click="checkDuplicate"
          class="SignUp__Button SignUp__Button--OtherAction"
        >
          <template #text>중복 확인</template>
        </VueflixBtn>
      </template>
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
      :type="seek ? 'text' : 'password'"
      class="SignUp__Input"
      v-model="password"
      autocomplete="off"
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
          class="SignUp__Button SignUp__Button--OtherAction"
        >
          <template #icon>
            <IconBase>
              <IconSeekOn v-if="seek" />
              <IconSeekOff v-else />
            </IconBase>
          </template>
        </VueflixBtn>
      </template>
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

    <VueflixBtn
      type="button"
      class="SignUp__Button SignUp__Button--SignUp"
      component="button"
      @click="signUp"
    >
      <template #text>회원가입</template>
    </VueflixBtn>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useNickname, useEmail, usePassword } from "@/composables/strictUser";
import { useAuth } from "@/store/auth";

import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";
import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";

import ProfileSelector from "@/components/ProfileSelector.vue";

const profileImg = ref("");

const {
  nickname,
  state: nicknameState,
  generateRandomNickname,
} = useNickname();
const { email, state: emailState, checkDuplicate } = useEmail();
const { password, state: passwordState, seek, toggleSeek } = usePassword();

const router = useRouter();
const auth = useAuth();
const isCompleted = computed(() => {
  const image = profileImg.value;
  const texts = [nicknameState, emailState, passwordState].reduce(
    (prev, item) => item.value.code === "Valid" && prev,
    true
  );
  console.log(image, texts);
  return image && texts;
});
async function signUp() {
  console.log(isCompleted.value);
  if (!isCompleted.value) {
    return;
  }

  await auth.createEmailUser({ email, password, nickname, profileImg });
  router.go(-2);
}
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
    border-radius: calc(var(--global-radius) * 2);
  }
  &__Input {
    width: 100%;
    --input-padding: 0 1.4rem;
    --input-height: 4rem;
    border-radius: calc(var(--global-radius) * 2);
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
    border-radius: calc(var(--global-radius) * 2);
    color: var(--google-login-text);
    font-size: 1.4rem;
    height: 4rem;

    &--SignUp {
      width: 100%;
      flex-grow: 1;
      background-color: hsl(var(--theme-500));
      color: #fff;
      height: 4.8rem;
      border-radius: calc(var(--global-radius) * 2);
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

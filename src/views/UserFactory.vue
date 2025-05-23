<template>
  <form class="UserFactory">
    <ProfileSelector
      v-model="profileImg"
      class="UserFactory__ProfileImage"
      v-if="!hide.includes('profile')"
    />
    <TextInput
      type="text"
      class="UserFactory__Input"
      v-model="nickname"
      v-if="!hide.includes('nickname')"
    >
      <template #label>닉네임</template>
      <template #etc-action>
        <VueflixBtn
          type="button"
          component="button"
          @click="generateRandomNickname"
          class="UserFactory__Button UserFactory__Button--OtherAction"
        >
          <template #text>랜덤 닉네임 생성</template>
        </VueflixBtn>
      </template>
      <template #message>
        <span
          :class="`UserFactory__Message--${nicknameState.code}`"
          class="UserFactory__Message"
          v-if="nicknameState.code !== 'Unchecked'"
        >
          {{ nicknameState.message }}
        </span>
      </template>
    </TextInput>
    <TextInput
      type="email"
      class="UserFactory__Input"
      v-model="email"
      v-if="!hide.includes('email')"
    >
      <template #label>이메일</template>
      <template #etc-action>
        <VueflixBtn
          type="button"
          component="button"
          @click="checkDuplicate"
          class="UserFactory__Button UserFactory__Button--OtherAction"
        >
          <template #text>중복 확인</template>
        </VueflixBtn>
      </template>
      <template #message>
        <span
          :class="`UserFactory__Message--${emailState.code}`"
          class="UserFactory__Message"
          v-if="emailState !== 'Unchecked'"
        >
          {{ emailState.message }}
        </span>
      </template>
    </TextInput>
    <TextInput
      :type="seek ? 'text' : 'password'"
      class="UserFactory__Input"
      v-model="password"
      autocomplete="off"
      v-if="!hide.includes('password')"
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
          class="UserFactory__Button UserFactory__Button--Seek"
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
          :class="`UserFactory__Message--${passwordState.code}`"
          class="UserFactory__Message"
          v-if="passwordState.code !== 'Unchecked'"
        >
          {{ passwordState.message }}
        </span>
      </template>
    </TextInput>

    <VueflixBtn
      type="button"
      class="UserFactory__Button UserFactory__Button--SignUp"
      component="button"
      @click="actionByType"
    >
      <template #icon>
        <LoadingAnimation class="UserFactory__Loading" v-if="isLoading" />
      </template>
      <template #text>{{ submitText || "회원가입" }}</template>
    </VueflixBtn>
  </form>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useNickname, useEmail, usePassword } from "@/composables/strictUser";
import { useAuth } from "@/store/auth";

import VueflixBtn from "@/components/VueflixBtn.vue";
import TextInput from "@/components/TextInput.vue";
import ProfileSelector from "@/components/ProfileSelector.vue";
import LoadingAnimation from "@/components/LoadAnimation.vue";

import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";

const props = defineProps({
  injectData: Object,
  submitText: String,
  type: {
    type: String,
    default: "sign-up",
    validator: (value) => ["sign-up", "edit", "connect"].includes(value),
  },
  hide: {
    type: Array,
    default: "",
  },
});
const profileImg = ref("");
const {
  nickname,
  state: nicknameState,
  generateRandomNickname,
} = useNickname();
const { email, state: emailState, checkDuplicate } = useEmail();
const { password, state: passwordState, seek, toggleSeek } = usePassword();
watch(
  () => props.injectData,
  (data) => {
    if (!data) return;
    profileImg.value = data.profileImg;
    nickname.value = data.nickname;
    email.value = data.email;
  },
  { immediate: true }
);

const router = useRouter();
const auth = useAuth();
const isCompleted = computed(() => {
  const image = profileImg.value;
  const texts = [nicknameState, emailState, passwordState].reduce(
    (prev, item) =>
      (item.value.code === "Valid" && prev) || props.hide.includes(item.name),
    true
  );
  return image && texts;
});
const actionMap = {
  "sign-up": auth.createUser,
  edit: auth.editUser,
  connect: auth.connectAuth,
};
const isLoading = ref(false);
const emit = defineEmits(["action-complete"]);
async function actionByType() {
  isLoading.value = true;
  const { message } = await actionMap[props.type]({
    email,
    password,
    nickname,
    profileImg,
  });
  isLoading.value = false;
  emit("action-complete", message);
  if (props.type === "sign-up") router.go(-2);
}
</script>

<style lang="scss" scoped>
.UserFactory {
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
    --input-bg: var(--factory-bg);
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
    background-color: transparent;
    box-shadow: none;
    border-radius: calc(var(--global-radius) * 2);
    color: var(--google-login-text);
    font-size: 1.4rem;
    height: 4rem;

    &--SignUp {
      width: 100%;
      gap: 1rem;
      flex-direction: row-reverse;
      flex-grow: 1;
      background-color: hsl(var(--theme-500));
      color: #fff;
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
    &--Seek {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0;
    }
  }
  &__Loading {
    width: 1.6rem;
  }
}

@media screen and (min-width: 1080px) {
  .UserFactory {
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
    &__Button--SignUp {
      width: 37.5rem;
    }
  }
}
</style>

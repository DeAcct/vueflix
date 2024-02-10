<template>
  <main class="Profile">
    <section class="Profile__Item">
      <h2 class="Profile__Title">정보 수정</h2>
      <UserFactory
        @action-complete="onComplete"
        :inject-data="injectData"
        submit-text="수정"
        type="edit"
        :hide="containsOAuth() ? ['password', 'email'] : []"
      />
    </section>
    <section class="Profile__Item">
      <h2 class="Profile__Finding">이 작업을 찾고 있나요?</h2>
      <div class="Profile__Box">
        <strong class="Profile__Recommend">
          데레와 헤어지고 싶다면 o(TヘTo)
        </strong>
        <VueflixBtn
          class="Profile__Button"
          type="button"
          component="button"
          @click="exitModal.show"
        >
          <template #text>회원 탈퇴</template>
        </VueflixBtn>
      </div>
    </section>
    <NativeDialog :ref="exitModal.$root" class="ProfileAlert">
      <template #title>
        <strong class="ProfileAlert__Title"> {{ alertData.title }} </strong>
      </template>
      <template #content>
        <p class="ProfileAlert__Text">
          {{ alertData.text }}
          <i class="ProfileAlert__Important">
            {{ alertData.important }}
          </i>
        </p>
      </template>
      <template #control>
        <div class="ProfileAlert__Control">
          <VueflixBtn
            v-for="{ action, text } in alertData.control"
            type="button"
            component="button"
            @click="action"
            class="ProfileAlert__Button"
          >
            <template #text>{{ text }}</template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
    <AutoPop ref="completePop">
      <template #text> 내 정보를 수정했어요! </template>
    </AutoPop>
  </main>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";

import { useAuth } from "@/store/auth";
import { useOveray, useAutoPop } from "@/composables/overay";

import AutoPop from "@/components/AutoPop.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import UserFactory from "@/views/UserFactory.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";

const injectData = ref({
  profileImg: "",
  nickname: "",
});
const store = useAuth();
const user = computed(() => store.user);
const containsOAuth = () => {
  const auth = getAuth();
  const providers = auth.currentUser?.providerData;
  if (!providers) return false;
  return providers.reduce(
    (acc, cur) => acc || cur.providerId !== "password",
    false
  );
};
watch(
  user,
  () => {
    if (!user.value) return;
    injectData.value = {
      ...user.value,
    };
  },
  { immediate: true }
);

const exitModal = useOveray();
const alertData = ref({
  title: "o(TヘTo)",
  text: "데레와 헤어질 결심을 하셨나요?",
  important: "탈퇴하시면 모든 정보가 삭제되며 복구할 수 없어요.",
  control: [
    {
      action: deleteUser,
      text: "탈퇴",
    },
    {
      action: exitModal.close,
      text: "취소",
    },
  ],
});
async function deleteUser() {
  await store.goodbyeUser();
  exitModal.close();
  alertData.value = {
    title: "탈퇴 완료",
    text: "다음에 또 만날 수 있었으면 좋겠어요.",
    control: [
      {
        action: backToHome,
        text: "홈으로 돌아가기",
      },
    ],
  };
  exitModal.show();
}

const router = useRouter();
function backToHome() {
  exitModal.close();
  router.push("/");
}

const completePop = ref();
function onComplete() {
  completePop.value.show();
}
</script>

<style lang="scss" scoped>
.Profile {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: var(--header-height);
  padding-top: 2rem;
  margin-bottom: 8rem;
  &__Item {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: calc(100% - 4rem);
    margin: 0 auto;
  }
  &__Box {
    border-radius: calc(var(--global-radius) * 2);
    border: 1px solid hsl(var(--bg-300));
    padding: 2rem 1.4rem;
  }
  &__Title {
    width: 100%;
    font-size: 2rem;
    font-weight: 900;
  }
  &__Finding {
    font-size: 1.6rem;
  }
  &__Recommend {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  &__Button {
    box-shadow: none;
    padding: 0;
    color: hsl(var(--theme-500));
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
  &__ImportantText {
    margin-left: 0.4rem;
    font-weight: 700;
  }
}

.ProfileAlert {
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
    box-shadow: none;
    border-radius: var(--global-radius);
    &:first-child {
      margin-left: auto;
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
  }
}

@media screen and (min-width: 1080px) {
  .Profile {
    gap: 6rem;
    &__Item {
      width: 37.5rem;
    }
  }
  .ProfileAlert {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: 40rem;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
}
</style>

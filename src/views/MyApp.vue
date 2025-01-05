<template>
  <main class="MyApp">
    <StatCard :uid="user?.uid" class="MyApp__Profile" v-if="user" />
    <RecommendCard v-if="showVerify()">
      <template #title>이메일을 인증해주세요</template>
      <template #text>
        이메일 인증을 하면 더 많은 서비스를 이용할 수 있어요!
      </template>
      <template #cta>
        <button
          class="MyApp__Button"
          @click="emailVerifyPostpone"
          type="button"
        >
          30일동안 보지 않기
        </button>
        <button class="MyApp__Button" @click="sendEmail" type="button">
          인증하기
        </button>
      </template>
    </RecommendCard>
    <section class="MyApp__FlexWrap">
      <template v-for="(items, i) in viewModel" :key="i">
        <section class="MyApp__Group">
          <template
            v-for="{ icon, text, to, onClick, requireLogin } in items"
            :key="text"
          >
            <ArrowBtnWidget
              class="MyApp__Item"
              :component="to ? 'RouterLink' : 'button'"
              :to
              @click="to ? null : onClick()"
              v-if="!requireLogin || user"
            >
              <template #icon>
                <IconBase>
                  <component :is="icon" />
                </IconBase>
              </template>
              <template #text>{{
                typeof text === "function" ? text() : text
              }}</template>
            </ArrowBtnWidget>
          </template>
        </section>
      </template>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getAuth, sendEmailVerification } from "firebase/auth";

import { useAuth } from "@/store/auth";

import { usePostpone } from "@/composables/postpone";

import ArrowBtnWidget from "@/components/ArrowBtnWidget.vue";
import OAuthGroup from "@/components/OAuthGroup.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import StatCard from "@/components/StatCard.vue";

import IconBase from "@/components/IconBase.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconCoupon from "@/components/icons/IconCoupon.vue";
import IconCustomerService from "@/components/icons/IconCustomerService.vue";
import IconLogin from "@/components/icons/IconLogin.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconTheme from "@/components/icons/IconTheme.vue";

const router = useRouter();
const store = useAuth();
const user = computed(() => store.user);

const viewModel = [
  [
    // {
    //   text: "이메일 및 소셜 로그인",
    //   to: "/my/social",
    //   requireLogin: true,
    // },
    {
      icon: IconAccount,
      text: "내 정보",
      to: "/my/profile",
      requireLogin: true,
    },
    {
      icon: IconLogin,
      text: () => (user.value ? "로그아웃" : "로그인"),
      onClick: onLoginButtonClick,
      requireLogin: false,
    },
  ],
  [
    {
      icon: IconCoupon,
      text: "쿠폰 등록",
      to: "#none",
      requireLogin: true,
    },
    {
      icon: IconPurchaseHistory,
      text: "결제 내역",
      to: "#none",
      requireLogin: true,
    },
  ],
  [
    {
      icon: IconTheme,
      text: "테마",
      to: "/my/app-theme",
      requireLogin: false,
    },
    {
      icon: IconCustomerService,
      text: "고객센터",
      to: "#none",
      requireLogin: false,
    },
  ],
];

async function onLoginButtonClick() {
  console.log("??");
  if (!store.user) {
    router.push("auth");
    return;
  }
  await store.logout();
}

// const { postponed, setExpire, isExpired } = usePostpone("email-verify");
const emailVerify = usePostpone("email-verify");
const showVerify = () => {
  const auth = getAuth();
  if (!auth.currentUser) {
    return false;
  }
  return !auth.currentUser.emailVerified && emailVerify.isExpired();
};
async function sendEmail() {
  const auth = getAuth();
  if (!auth.currentUser) {
    return;
  }
  try {
    await sendEmailVerification(auth.currentUser);
    console.log("Email verification sent successfully.");
  } catch (error) {
    console.error("Failed to send email verification:", error);
  }
}
function emailVerifyPostpone() {
  emailVerify.setExpire(30);
}
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  padding: 8rem 0 9rem;
  gap: 1.6rem;

  &__Profile {
    width: min(calc(100% - 4rem), 41.4rem);
    padding: 0;
  }
  &__Limit {
    background-color: hsl(var(--bg-200));
    border-radius: var(--global-radius);
  }

  &__Button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-basis: 0;
    height: 100%;
    font-size: 1.4rem;
  }

  &__FlexWrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
  }

  &__Group {
    width: calc(100% - 4rem);
    // border: 1px solid hsl(var(--bg-200));
    // border-radius: calc(var(--global-radius) + 2rem);
    // background-color: hsl(var(--bg-200));
    margin: 0 auto;
    &:empty {
      display: none;
    }
  }

  &__Item {
    width: 100%;
    height: 6rem;
    // padding: 0 var(--inner-padding);
    font-size: 1.4rem;
    &--Social {
      height: auto;
      padding: {
        bottom: 2rem;
      }
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid hsl(var(--bg-200));
    }
  }
  &__OAuthGroup {
    width: 100%;
  }
  &__ConnectedTitle {
    margin-bottom: 0.8rem;
  }
  &__SubText {
    margin-bottom: 1.6rem;
  }
}

@media screen and (min-width: 1080px) {
  .MyApp {
    height: 100vh;
    margin: 0 auto;
    gap: 2rem;
    &__Item {
      padding: 2rem;
      &--Social {
        border-bottom: 1px solid hsl(var(--bg-100));
      }
    }
    &__Profile {
      padding: 4rem 0 0;
    }
    &__FlexWrap {
      flex-direction: row;
      align-items: flex-start;
      width: min(calc(100% - 4rem), 1280px);
      gap: 1.6rem;
    }
    &__Group {
      min-width: 0;
      width: auto;
      flex-basis: 33.333%;
      margin: unset;
    }
  }
}
</style>

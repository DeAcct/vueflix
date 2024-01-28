<template>
  <main class="MyApp">
    <StatCard :uid="user?.uid" class="MyApp__Profile" v-if="user" />
    <RecommendCard v-if="showVerify()">
      <template #title>이메일을 인증해주세요</template>
      <template #text>
        이메일 인증을 하면 더 많은 서비스를 이용할 수 있어요!
      </template>
      <template #cta>
        <button class="MyApp__Button" @click="emailVerifyPostpone">
          30일동안 보지 않기
        </button>
        <button class="MyApp__Button" @click="sendEmail">인증하기</button>
      </template>
    </RecommendCard>
    <!-- <RecommendCard>
      <template #title>소셜 로그인을 연결해보세요</template>
      <template #text>
        소셜 로그인을 연결하면 쉽게 로그인할 수 있어요!
      </template>
      <template #content>
        <button class="MyApp__Button" @click="connectSocialLogin">
          Google 연결하기
        </button>
      </template>
      <template #cta>
        <button class="MyApp__Button" @click="connectSocialPostpone">
          30일 동안 보지 않기
        </button>
      </template>
    </RecommendCard> -->
    <section class="MyApp__FlexWrap">
      <template v-for="unit in viewModel">
        <section
          class="MyApp__Group"
          v-if="
            unit.reduce(
              (acc, now) => acc && (!now.requireLogin || store.user),
              true
            )
          "
        >
          <template
            v-for="{ icon, text, to, requireLogin } in unit"
            :key="text"
          >
            <template v-if="!requireLogin || user">
              <ArrowBtnWidget
                class="MyApp__Item"
                :component="to ? 'RouterLink' : 'button'"
                :to="to || null"
              >
                <template v-slot:icon>
                  <IconBase>
                    <component :is="icon" />
                  </IconBase>
                </template>
                <template v-slot:text>{{ text }}</template>
              </ArrowBtnWidget>
            </template>
          </template>
        </section>
      </template>
      <section class="MyApp__Group">
        <ArrowBtnWidget class="MyApp__Item" component="RouterLink" to="#none">
          <template v-slot:icon>
            <IconBase>
              <IconAccount />
            </IconBase>
          </template>
          <template v-slot:text>내 정보 수정</template>
        </ArrowBtnWidget>
        <ArrowBtnWidget class="MyApp__Item" @click="onLoginButtonClick">
          <template v-slot:icon>
            <IconBase>
              <IconLogin />
            </IconBase>
          </template>
          <template v-slot:text>{{
            store.user ? "로그아웃" : "로그인"
          }}</template>
        </ArrowBtnWidget>
      </section>
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
import StatCard from "@/components/StatCard.vue";

import IconBase from "@/components/IconBase.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconCoupon from "@/components/icons/IconCoupon.vue";
import IconCustomerService from "@/components/icons/IconCustomerService.vue";
import IconLogin from "@/components/icons/IconLogin.vue";
import IconMembership from "@/components/icons/IconMembership.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconTheme from "@/components/icons/IconTheme.vue";
import RecommendCard from "../components/RecommendCard.vue";

const viewModel = [
  [
    {
      icon: IconMembership,
      text: "데레 멤버십",
      to: "/my/membership",
      requireLogin: true,
    },
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

const router = useRouter();
const store = useAuth();
const user = computed(() => store.user);

async function onLoginButtonClick() {
  if (!store.user) {
    router.push("auth");
    return;
  }
  store.logout();
}

// const { postponed, setExpire, isExpired } = usePostpone("email-verify");
const emailVerify = usePostpone("email-verify");
const showVerify = () => {
  const auth = getAuth();
  console.log(auth.currentUser?.emailVerified);
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

// const social = usePostpone("social-connect");
// const showSocial = () => {};
// async function connectSocialLogin() {
//   await store.connectOAuthGoogle();
// }
// function connectSocialPostpone() {
//   social.setExpire(30);
// }
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  padding: 8rem 0 9rem;
  gap: 1.2rem;

  &__Profile {
    width: min(calc(100% - 4rem), 1280px);
    padding: {
      left: 0;
      right: 0;
    }
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
    border: 1px solid hsl(var(--bg-200));
    border-radius: var(--global-radius);
    margin: 0 auto;
  }

  &__Item {
    width: 100%;
    height: 6rem;
    padding: 0 var(--inner-padding);
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1080px) {
  .MyApp {
    height: 100vh;
    margin: 0 auto;
    padding: 9.2rem 0 0;
    gap: 2rem;
    &__Profile {
      padding: 4rem 0;
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

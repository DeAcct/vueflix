<template>
  <main class="MyApp">
    <StatCard :uid="user?.uid" class="MyApp__Profile" v-if="user">
      <MembershipLimit :tier="user?.membership?.tier" class="MyApp__Limit" />
    </StatCard>
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
      <section class="MyApp__Group">
        <div class="MyApp__Item MyApp__Item--Social" v-if="user">
          <strong class="MyApp__ConnectedTitle">이메일 및 소셜 로그인</strong>
          <p class="MyApp__SubText">
            각 버튼을 눌러 연결하거나 연결을 해제할 수 있어요
          </p>
          <OAuthGroup class="MyApp__OAuthGroup" />
        </div>
        <ArrowBtnWidget
          class="MyApp__Item"
          component="RouterLink"
          to="/my/profile"
          v-if="user"
        >
          <template v-slot:icon>
            <IconBase>
              <IconAccount />
            </IconBase>
          </template>
          <template v-slot:text>내 정보</template>
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
      <template v-for="({ items, requireLogin }, i) in viewModel" :key="i">
        <section class="MyApp__Group" v-if="user || !requireLogin">
          <template v-for="{ icon, text, to } in items" :key="text">
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
import IconMembership from "@/components/icons/IconMembership.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconTheme from "@/components/icons/IconTheme.vue";
import MembershipLimit from "../components/MembershipLimit.vue";

const viewModel = [
  {
    items: [
      {
        icon: IconMembership,
        text: "데레 멤버십",
        to: "/my/membership",
      },
      {
        icon: IconCoupon,
        text: "쿠폰 등록",
        to: "#none",
      },
      {
        icon: IconPurchaseHistory,
        text: "결제 내역",
        to: "#none",
      },
    ],
    requireLogin: true,
  },
  {
    items: [
      {
        icon: IconTheme,
        text: "테마",
        to: "/my/app-theme",
      },
      {
        icon: IconCustomerService,
        text: "고객센터",
        to: "#none",
      },
    ],
    requireLogin: false,
  },
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
  gap: 1.2rem;

  &__Profile {
    width: min(calc(100% - 4rem), 1280px);
    padding: {
      left: 0;
      right: 0;
    }
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
    border: 1px solid hsl(var(--bg-200));
    border-radius: var(--global-radius);
    margin: 0 auto;
  }

  &__Item {
    width: 100%;
    height: 6rem;
    padding: 0 var(--inner-padding);
    font-size: 1.4rem;
    &--Social {
      height: auto;
      padding: {
        top: 2rem;
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

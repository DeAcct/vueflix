<template>
  <main class="MyApp">
    <StatCard :uid="user?.uid" class="MyApp__Profile" />
    <section class="MyApp__Verify" v-if="!verified">
      <h2 class="MyApp__HelperTitle">아직 이메일이 인증되지 않았어요</h2>
      <p class="MyApp__HelperText">지금 인증하면 특별한 인증 뱃지를 드려요!</p>
      <button class="MyApp__SendEmail" @click="sendEmail">인증하기</button>
    </section>
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
              <IconAccount />
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
import { useRouter } from "vue-router";
import { useAuth } from "../store/auth";
import { computed } from "vue";

import ArrowBtnWidget from "@/components/ArrowBtnWidget.vue";

import IconBase from "@/components/IconBase.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconCoupon from "@/components/icons/IconCoupon.vue";
import IconCustomerService from "@/components/icons/IconCustomerService.vue";
import IconMembership from "@/components/icons/IconMembership.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconSetting from "@/components/icons/IconSetting.vue";
import StatCard from "@/components/StatCard.vue";
import { getAuth, sendEmailVerification } from "firebase/auth";

const viewModel = [
  [
    {
      icon: IconMembership,
      text: "뷰플릭스 멤버십",
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
      icon: IconSetting,
      text: "테마",
      to: "/my/app-theme",
      requireLogin: false,
    },
    {
      icon: IconSetting,
      text: "알림 설정",
      to: "/my/notification",
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
    login();
    return;
  }
  store.logout();
}
function login() {
  router.push("auth");
}

const verified = () => {
  const auth = getAuth();
  if (!auth.currentUser) {
    return null;
  }
  return auth.currentUser.emailVerified;
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
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  padding: 6rem 0 9rem;
  gap: 1.2rem;

  &__Profile {
    width: min(calc(100% - 4rem), 1280px);
    padding: {
      left: 0;
      right: 0;
    }
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
  &__Verify {
    display: flex;
    flex-direction: column;
    width: calc(100% - 4rem);
    border: 1px solid hsl(var(--bg-200));
    padding: var(--inner-padding);
    border-radius: var(--global-radius);
  }
  &__HelperTitle {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  &__HelperText {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  &__SendEmail {
    margin: 0 calc(var(--inner-padding) * -1) calc(var(--inner-padding) * -1);
    height: 4.8rem;
    background-color: hsl(var(--bg-200));
    font-size: 1.4rem;
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
      flex-grow: 1;
      flex-basis: 0;
    }
    &__Verify {
      width: min(calc(100% - 4rem), 1280px);
      padding: 4rem;
    }
    &__HelperText {
      margin-bottom: 4rem;
    }
    &__Item {
      padding: 0 4rem;
    }
    &__SendEmail {
      margin: 0 -4rem -4rem;
    }
  }
}
</style>

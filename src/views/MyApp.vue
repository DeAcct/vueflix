<template>
  <main class="MyApp">
    <StatCard :data="user" class="MyApp__Profile" />
    <section class="MyApp__Group MyApp__Group--Verify">
      <h2 class="MyApp__HelperTitle">아직 이메일이 인증되지 않았어요</h2>
      <p class="MyApp__HelperText">지금 인증하면 특별한 인증 뱃지를 드려요!</p>
      <button class="MyApp__SendEmail">인증하기</button>
    </section>
    <div class="MyApp__Menu">
      <template v-for="unit in viewModel">
        <div
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
        </div>
      </template>
      <div class="MyApp__Group">
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
      </div>
    </div>
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
import { getAuth } from "firebase/auth";

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
      text: "다크 모드",
      to: "#none",
      requireLogin: false,
    },
    {
      icon: IconSetting,
      text: "알림 설정",
      to: "#none",
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

const verified = computed(() => {
  const auth = getAuth();
  if (!auth) {
    return null;
  }
  return auth.currentUser.emailVerified;
});
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  padding: 6rem 0 9rem;

  &__Profile {
    width: min(100%, 1280px);
  }

  &__Menu {
    width: min(100%, 1280px);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0 var(--inner-padding);
  }
  &__Group {
    overflow: hidden;
    border: 1px solid hsl(var(--bg-200));
    border-radius: var(--global-radius);
    &--Verify {
      border: 1px solid hsl(var(--bg-200));
      width: calc(100% - 4rem);
      height: 14rem;
      margin: 0 auto 1.6rem;
      padding: var(--inner-padding);
      display: flex;
      flex-direction: column;
    }
  }
  &__HelperTitle {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  &__HelperText {
    font-size: 1.6rem;
    margin-bottom: auto;
  }
  &__SendEmail {
    margin: 0 calc(var(--inner-padding) * -1) calc(var(--inner-padding) * -1);
    height: 4.8rem;
    border-top: 1px solid hsl(var(--bg-200));
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
      padding: 4rem;
      width: auto;
    }
    &__Menu {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: 0;
    }
    &__MenuGroup {
      width: calc(50% - 0.4rem);
      flex-grow: 0;
      min-height: 0;
    }
    &__Item {
      padding: 0 4rem;
    }
  }
}
</style>

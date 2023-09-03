<template>
  <main class="MyApp">
    <div class="MyApp__Visual">
      <div class="MyApp__Identify">
        <div class="MyApp__IdentifyText">
          <h2 class="MyApp__Nickname">
            {{ user ? user.nickname : "게스트" }}
          </h2>
          <template v-if="user">
            <p class="MyApp__Email">{{ user.email }}</p>
            <ul class="MyApp__Stat">
              <li class="MyApp__StatItem">
                <h3 class="MyApp__StatName">보고싶다</h3>
                <p class="MyApp__StatValue">{{ user.wannaSee.length }}개</p>
              </li>
              <li class="MyApp__StatItem">
                <h3 class="MyApp__StatName">리뷰</h3>
                <p class="MyApp__StatValue">{{ user.reaction.length }}개</p>
              </li>
            </ul>
          </template>
        </div>
        <ProfileImg
          :input-profile="user ? user.profileImgSrc : undefined"
          :class="[
            'MyApp__Profile',
            user ? `MyApp__Profile--${user.gender}` : '',
          ]"
        />
      </div>
      <LevelRenderer to="/my/level" class="MyApp__Level" v-if="user" />
    </div>
    <div class="MyApp__Menu">
      <template v-for="unit in viewModel">
        <div
          class="MyApp__MenuGroup"
          v-if="
            unit.reduce((acc, now) => acc && (!now.requireLogin || user), true)
          "
        >
          <template v-for="{ icon, text, to, requireLogin } in unit" key="text">
            <div v-if="!requireLogin || user" class="MyApp__MenuItem">
              <ArrowBtnWidget
                class="MyApp__MenuBtn"
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
            </div>
          </template>
        </div>
      </template>
      <div class="MyApp__MenuGroup">
        <div class="MyApp__MenuItem">
          <ArrowBtnWidget class="MyApp__MenuBtn" @click="onLoginButtonClick">
            <template v-slot:icon>
              <IconBase>
                <IconAccount />
              </IconBase>
            </template>
            <template v-slot:text>{{ user ? "로그아웃" : "로그인" }}</template>
          </ArrowBtnWidget>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";

import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

import ArrowBtnWidget from "@/components/ArrowBtnWidget.vue";
import LevelRenderer from "@/components/LevelRenderer.vue";
import ProfileImg from "@/components/ProfileImg.vue";

import IconBase from "@/components/IconBase.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconCoupon from "@/components/icons/IconCoupon.vue";
import IconCustomerService from "@/components/icons/IconCustomerService.vue";
import IconMembership from "@/components/icons/IconMembership.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconSetting from "@/components/icons/IconSetting.vue";

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
      text: "설정",
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

const store = useStore();
const router = useRouter();
const user = computed(() => store.state.auth.user);
async function onLoginButtonClick() {
  if (!user.value) {
    login();
    return;
  }
  logout();
}
function login() {
  router.push("auth");
}
async function logout() {
  const auth = getAuth();
  await signOut(auth);
  store.commit("auth/setUser", null);
}
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  background-color: var(--general-bg);
  padding: 8rem 0 9rem;
  gap: 0.8rem;

  &__Visual {
    width: min(calc(100% - 4rem), 768px);
    background-color: var(--top-item);
    padding: var(--inner-padding);
    gap: 1.6rem;
    display: flex;
    flex-direction: column;
    border-radius: calc(var(--global-radius) * 6);
  }
  &__Identify {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__Nickname {
    font-size: 1.7rem;
    font-weight: 900;
  }
  &__Email {
    margin-top: 0.4rem;
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
  }
  &__Profile {
    width: 6rem;
    height: 6rem;
  }
  &__Stat {
    display: flex;
    gap: 1.2rem;
  }
  &__StatItem {
    display: flex;
    gap: 0.4rem;
    text-align: center;
  }
  &__StatName {
    font-size: 1.3rem;
    font-weight: 500;
  }
  &__StatValue {
    font-size: 1.5rem;
    font-weight: 700;
  }
  &__Level {
    border-radius: calc(var(--global-radius) * 6 - var(--inner-padding));
  }

  &__Menu {
    width: min(calc(100% - 4rem), 768px);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  &__MenuGroup {
    background-color: var(--top-item);
    border-radius: calc(var(--global-radius) * 6);
    overflow: hidden;
  }
  &__MenuItem {
    // inherit to text
    font-size: 1.3rem;
  }
  &__MenuBtn {
    width: 100%;
    padding: 1.8rem var(--inner-padding);
  }
}

@media screen and (min-width: 1080px) {
  .MyApp {
    height: 100vh;
    margin: 0 auto;
    flex-direction: row;
    align-items: flex-start;
    padding: 9.6rem calc((100% - 128rem) / 2) 0;
    gap: 2rem;
    &__Visual {
      flex-grow: 1;
    }
    &__Menu {
      flex-grow: 1;
    }
  }
  .tab-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--top-item);
    max-width: unset;
    width: auto;
    height: 100%;
  }
  .login-widget {
    margin: 0;
    width: 40rem;
    box-shadow: none;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  .MyApp__Stats {
    box-shadow: none;
    border-radius: 0;
  }
  .my-cards-wrap {
    flex: 1;
    margin-left: 1rem;
    height: 100%;
  }
}

@media screen and (min-width: 1300px) {
  .my {
    padding-bottom: 0;
  }
  .arrow-link-btn {
    padding: 2rem 3rem;
  }
}
</style>

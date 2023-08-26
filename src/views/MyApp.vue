<template>
  <main class="MyApp">
    <div class="MyApp__Visual">
      <LoginWidget :btn-func="onLoginButtonClick" class="MyApp__LoginWidget">
        <template v-slot:profile-img>
          <ProfileImg
            :input-profile="user ? user.profileImgSrc : undefined"
            :class="[
              'MyApp__Profile',
              user ? `MyApp__Profile--${user.gender}` : '',
            ]"
          />
        </template>
        <template v-slot:text>
          <h2>
            {{ user ? user.nickname : "로그인 전이에요" }}
          </h2>
          <p v-if="user">{{ user.email }}</p>
        </template>
        <template v-slot:login-state-text>
          {{ user ? "로그아웃" : "로그인" }}
        </template>
      </LoginWidget>
      <section class="MyApp__Stats" v-if="user">
        <h2>내 덕질 기록</h2>
        <ul class="MyApp__StatList">
          <li class="MyApp__StatItem">
            <h3 class="MyApp__StatName">보고싶다</h3>
            <p class="MyApp__StatValue">{{ user.wannaSee.length }}개</p>
          </li>
          <li class="MyApp__StatItem">
            <h3 class="MyApp__StatName">리뷰</h3>
            <p class="MyApp__StatValue">{{ user.reviews }}개</p>
          </li>
        </ul>
      </section>
    </div>
    <div class="MyApp__SettingMenu">
      <ul v-for="unit in viewModel">
        <template v-for="{ icon, text, to, requireLogin } in unit" key="text">
          <li v-if="requireLogin">
            <ArrowBtnWidget :to="to">
              <IconBase>
                <template v-slot:icon>
                  <component :is="icon" />
                </template>
              </IconBase>
              <template v-slot:text>{{ text }}</template>
            </ArrowBtnWidget>
          </li>
        </template>
      </ul>
    </div>
    <!--div class="my-cards-wrap">
        <template v-if="user">
          <div
            class="my-cards"
            v-for="(myCard, index) in myCardLoggedin"
            :key="index"
          >
            <ArrowBtnWidget
              v-for="item in myCard"
              :key="item.text"
              :to="item.to"
              :icon="item.icon"
            >
              
            </ArrowBtnWidget>
          </div>
        </template>
        <div
          class="my-cards"
          v-for="(myCard, index) in myCardGeneral"
          :key="index"
        >
          <ArrowBtnWidget
            v-for="item in myCard"
            :key="item.text"
            :to="item.to"
            :icon="item.icon"
          >
            <template v-slot:icon>
              <component :is="item.icon" />
            </template>
            <template v-slot:text>{{ item.text }}</template>
          </ArrowBtnWidget>
        </div>
        <RouterLink to="#none" class="leave-account-btn" v-if="user">
          회원 탈퇴
        </RouterLink >
      </div -->
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import LoginWidget from "../components/LoginWidget.vue";
import ProfileImg from "../components/ProfileImg.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
import IconBase from "../components/IconBase.vue";
import IconAccount from "../components/icons/IconAccount.vue";
import IconNotification from "../components/icons/IconNotification.vue";
import IconMembership from "../components/icons/IconMembership.vue";

const viewModel = [
  [
    {
      icon: IconMembership,
      text: "멤버십 및 포인트",
      to: "/my/membership",
      requireLogin: true,
    },
    {
      text: "쿠폰 등록",
      to: "#none",
      requireLogin: true,
    },
  ],
  [
    {
      icon: IconAccount,
      text: "계정 설정",
      to: "/my/account-setting",
      requireLogin: true,
    },
    {
      text: "이용 내역",
      to: "#none",
      requireLogin: true,
    },
    {
      icon: IconNotification,
      text: "알림 설정",
      to: "#none",
      requireLogin: true,
    },
  ],
  [
    {
      text: "앱 테마",
      to: "/my/app-theme",
      requireLogin: false,
    },
    {
      text: "고객센터",
      to: "#none",
      requireLogin: false,
    },
    {
      text: "버전 정보",
      to: "#none",
      requireLogin: false,
    },
  ],
];

const store = useStore();
const router = useRouter();
const user = computed(() => store.state.auth.user);
async function onLoginButtonClick() {
  if (!user) {
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
  padding: 6rem 0 9rem;
  &__Visual {
    width: 100%;
    max-width: 768px;
    background-color: hsl(var(--bg-200));
  }
  &__LoginWidget {
    border-radius: 0;
    box-shadow: none;
  }
  &__Stats {
    width: 100%;
    padding: 1.8rem var(--inner-padding);

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.6rem;
  }
  &__StatList {
    display: flex;
    gap: 1.6rem;
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
}

.my-cards-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-cards {
  width: 100%;
  max-width: 768px;
  border-radius: 0.6rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
.leave-account-btn {
  color: var(--bg-800);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--bg-800);
}

@media screen and (min-width: 1080px) {
  .my {
    height: 100vh;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6rem 0 0 0;
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

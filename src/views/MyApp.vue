<template>
  <main class="MyApp">
    <div class="MyApp__Visual">
      <div class="MyApp__Identify">
        <div class="MyApp__IdentifyText">
          <h2 class="MyApp__Nickname">
            {{ user ? user.nickname : "로그인 전이에요" }}
          </h2>
          <p class="MyApp__Email" v-if="user">{{ user.email }}</p>
          <ul class="MyApp__Stat" v-if="user">
            <li class="MyApp__StatItem">
              <h3 class="MyApp__StatName">보고싶다</h3>
              <p class="MyApp__StatValue">{{ user.wannaSee.length }}개</p>
            </li>
            <li class="MyApp__StatItem">
              <h3 class="MyApp__StatName">리뷰</h3>
              <p class="MyApp__StatValue">{{ user.reviews }}개</p>
            </li>
          </ul>
        </div>
        <ProfileImg
          :input-profile="user ? user.profileImgSrc : undefined"
          :class="[
            'MyApp__Profile',
            user ? `MyApp__Profile--${user.gender}` : '',
          ]"
        />
      </div>
      <section
        class="MyApp__Membership"
        :style="`background-color:hsl(var(--level-color-${level.codeName}))`"
      >
        <div class="col">
          <div class="MyApp__LevelIcon"></div>
          <span class="MyApp__LevelNumber">Lv.{{ level.number }}</span>
          <strong class="MyApp__LevelName">{{ level.text }}</strong>
        </div>
      </section>
    </div>
    <div class="MyApp__Menu">
      <ul v-for="unit in viewModel" class="MyApp__MenuGroup">
        <template v-for="{ icon, text, to, requireLogin } in unit" key="text">
          <li v-if="!requireLogin || user" class="MyApp__MenuItem">
            <ArrowBtnWidget :to="to">
              <template v-slot:icon>
                <IconBase>
                  <component :is="icon" />
                </IconBase>
              </template>
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
import { getAuth, signOut } from "firebase/auth";

import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

import ArrowBtnWidget from "@/components/ArrowBtnWidget.vue";
import ProfileImg from "@/components/ProfileImg.vue";

import IconBase from "@/components/IconBase.vue";
import IconAccount from "@/components/icons/IconAccount.vue";
import IconCoupon from "@/components/icons/IconCoupon.vue";
import IconCustomerService from "@/components/icons/IconCustomerService.vue";
import IconMembership from "@/components/icons/IconMembership.vue";
import IconPurchaseHistory from "@/components/icons/IconPurchaseHistory.vue";
import IconSetting from "@/components/icons/IconSEtting.vue";

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
  [
    {
      icon: IconAccount,
      text: "로그아웃",
      to: "/my/account-setting",
      requireLogin: true,
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

const level = computed(() => {
  if (!user.value) {
    return 0;
  }

  const currentMonth = new Date();
  const initMonth = user.value.membership.initDate.toDate();

  const ONE_DAY_TO_MILLISECOND = 24 * 60 * 60 * 1000;

  // ::기획자의 영역::
  // 레벨의 기준

  // 일수를 기준으로.
  // 오차를 최소화하기 위함
  // 1개월은 며칠일까? 28일? 29일? 30일? 31일?
  // 개월수를 기준으로 잡을 경우 오차가 발생할 수밖에 없다.

  // 결제 실패가 3회 이상 반복되거나 멤버십을 직접 종료할 경우 0lv로 초기화

  // 밀리세컨드 단위로 가입일부터의 일수를 계산
  // (현재 - 가입한 시점) / (24 * 60 * 60 * 1000)
  // 소수점은 모두 버림

  // 0lv(베이비): 0일(가입 당일)
  // 1lv(모험가): 1 ~ 29일
  // 2lv(용사): 30 ~ 99일
  // 3lv(아이돌): 100 ~ 282일
  // 4lv(츠바사): 283 ~ 345일
  // 5lv(미시로): 346 ~ 764일
  // 6lv(나무코): 765 ~ 999일
  // 7lv(호시노 아이): 1000일 이상

  // TMI
  //
  // - <<아이돌마스터>> 시리즈에 등장하는 소속사 이름
  // 283(츠바사)은 샤이니컬러즈, 346(미시로)은 신데렐라 걸즈, 765(나무코)는 밀리언라이브/본가
  //
  // - <<최애의 아이>>의 주인공
  // 호시노 아이

  const LEVEL_MAP = [
    [0, "베이비", "baby"],
    [29, "모험가", "traveler"],
    [99, "용사", "braver"],
    [282, "아이돌", "idol"],
    [345, "츠바사", "tsubasa"],
    [764, "미시로", "mishiro"],
    [999, "나무코", "namuco"],
    [Infinity, "호시노 아이", "hoshino-ai"],
  ];

  const subscriptionDays = Math.floor(
    (currentMonth - initMonth) / ONE_DAY_TO_MILLISECOND
  );

  for (const [index, [maxDays, levelName, codeName]] of LEVEL_MAP.entries()) {
    if (subscriptionDays <= maxDays) {
      return { number: index, text: levelName, codeName };
    }
  }
});
</script>

<style lang="scss" scoped>
.MyApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(var(--vh) * 100 * 1px);
  background-color: hsl(var(--bg-200));
  padding: 6rem 0 9rem;
  gap: 0.8rem;

  &__Visual {
    width: min(100%, 768px);
    background-color: hsl(var(--bg-100));
    padding: 0 var(--inner-padding) var(--inner-padding);
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
  }
  &__Identify {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__Nickname {
    font-size: 1.7rem;
    font-weight: 900;
    margin-bottom: 0.4rem;
  }
  &__Email {
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
  &__Membership {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.3rem;
    .col {
      display: flex;
      gap: 0.4rem;
      align-items: center;
    }
  }
  &__LevelIcon {
    width: 3.2rem;
    height: 3.2rem;
  }
  &__LevelNumber {
    font-size: 1.3rem;
    font-weight: 400;
  }
  &__LevelName {
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__Menu {
    width: min(100%, 768px);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
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

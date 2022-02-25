<template>
  <div class="wrap">
    <main class="my" v-if="isMyRoot">
      <div class="tab-one">
        <login-widget :btn-func="route">
          <template v-slot:profile-img>
            <profile-img
              :input-profile="user ? user.profileImgSrc : undefined"
              :class="[
                { 'profile--male': user ? user.gender === 'male' : false },
                { 'profile--female': user ? user.gender === 'female' : false },
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
        </login-widget>
        <section class="my-stats" v-if="user">
          <h2>내 덕질 기록</h2>
          <ul class="stat-list">
            <li class="stat-item">
              <h3>보고싶다</h3>
              <p>{{ user.wannaSee.length }}개</p>
            </li>
            <li class="stat-item">
              <h3>리뷰</h3>
              <p>{{ user.reviews.length }}개</p>
            </li>
            <li class="stat-item">
              <h3>정주행</h3>
              <p>{{ user.maratonWatched.length }}개</p>
            </li>
          </ul>
        </section>
      </div>
      <div class="my-cards-wrap">
        <template v-if="user">
          <div
            class="my-cards"
            v-for="(myCard, index) in myCardLoggedin"
            :key="index"
          >
            <arrow-btn-widget
              v-for="item in myCard"
              :key="item.text"
              :to="item.to"
              :icon="item.icon"
            >
              <template v-slot:icon>
                <component :is="item.icon" />
              </template>
              <template v-slot:text>{{ item.text }}</template>
            </arrow-btn-widget>
          </div>
        </template>
        <div
          class="my-cards"
          v-for="(myCard, index) in myCardGeneral"
          :key="index"
        >
          <arrow-btn-widget
            v-for="item in myCard"
            :key="item.text"
            :to="item.to"
            :icon="item.icon"
          >
            <template v-slot:icon>
              <component :is="item.icon" />
            </template>
            <template v-slot:text>{{ item.text }}</template>
          </arrow-btn-widget>
        </div>
        <router-link to="#none" class="leave-account-btn" v-if="user">
          회원 탈퇴
        </router-link>
      </div>
    </main>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAuth, signOut } from "firebase/auth";

import ProfileImg from "../components/ProfileImg.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import IconMembership from "../components/icons/IconMembership";
import IconAccount from "../components/icons/IconAccount";
import IconNotification from "../components/icons/IconNotification.vue";
import LoginWidget from "../components/LoginWidget.vue";
import IconBase from "../components/IconBase.vue";

export default {
  name: "MyApp",
  components: {
    ProfileImg,
    VueflixBtn,
    ArrowBtnWidget,
    IconMembership,
    IconNotification,
    IconAccount,
    LoginWidget,
    IconBase,
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  data() {
    return {
      isMyRoot: this.$route.name === "my",
      myCardLoggedin: [
        [
          {
            text: "멤버십 및 포인트",
            icon: "IconMembership",
            to: "/my/membership",
          },
        ],
        [
          {
            text: "계정 설정",
            icon: "IconAccount",
            to: "/my/account-setting",
          },
          {
            text: "알림 설정",
            icon: "IconNotification",
            to: "#none",
          },
        ],
        [
          {
            text: "쿠폰 등록",
            to: "#none",
          },
          {
            text: "이용 내역",
            to: "#none",
          },
        ],
      ],
      myCardGeneral: [
        [
          {
            text: "앱 테마",
            to: "/my/app-theme",
          },
          {
            text: "고객센터",
            to: "#none",
          },
          {
            text: "버전 정보",
            to: "#none",
          },
        ],
      ],
      imgData: undefined,
    };
  },
  methods: {
    async route() {
      if (this.user) {
        const auth = getAuth();
        await signOut(auth);
      } else {
        this.$router.push("auth");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: var(--bg-200);
  min-height: 100vh;
}
.my {
  display: flex;
  flex-direction: column;
  padding: 7rem 0 9rem;
}
.login-widget {
  margin: 0 auto 1rem;
}
.my-stats {
  width: 100%;
  padding: 1.8rem var(--inner-padding);
  background-color: var(--top-item);
  border-radius: 0.6rem;
  margin: 0 auto 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .stat-list {
    display: flex;
    .stat-item {
      text-align: center;
      h3 {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: 700;
      }
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}
.my-cards-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-cards {
  max-width: 768px;
  border-radius: 0.6rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
.leave-account-btn {
  color: var(--bg-800);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--bg-800);
}

@media screen and (min-width: 1024px) {
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
  .my-stats {
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
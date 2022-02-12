<template>
  <div class="wrap">
    <main class="my" v-if="isMyRoot">
      <!-- <div class="top">
        <div :class="['my-profile', { 'my-profile--logged-in': user }]">
          <div class="profile-img">
            <profile :input-profile="user ? user.profileImgSrc : undefined" />
            <strong class="nickname">
              {{ user ? user.name : "아직 로그인하지 않았어요" }}
            </strong>
            <i class="email" v-if="user">{{ user.email }}</i>
          </div>
          <div class="btn-area">
            <vueflix-btn
              class="btn"
              component="button"
              to="/auth"
              @click="route"
            >
              <template v-slot:text>
                {{ user ? "로그아웃" : "로그인" }}
              </template>
            </vueflix-btn>
          </div>
        </div>
        <div class="history-items" v-if="user">
          <router-link to="#none" class="history-item">
            <strong>20</strong>
            <span>리뷰</span>
          </router-link>
          <router-link to="#none" class="history-item">
            <strong>24</strong>
            <span>정주행</span>
          </router-link>
        </div>
      </div> -->
      <div class="tab-one">
        <login-widget :btn-func="route">
          <template v-slot:profile-img>
            <profile :input-profile="user ? user.profileImgSrc : undefined" />
          </template>
          <template v-slot:text>
            <h2>
              {{ user ? user.name : "로그인 전이에요" }}
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
              <p>{{ user.likeIt.length }}개</p>
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
      </div>
    </main>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAuth, signOut } from "firebase/auth";

import Profile from "../components/Profile.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
import ArrowBtnWidget from "../components/ArrowBtnWidget.vue";
import IconMembership from "../components/icons/IconMembership";
import IconAccount from "../components/icons/IconAccount";
import IconNotification from "../components/icons/IconNotification.vue";
import LoginWidget from "../components/LoginWidget.vue";

export default {
  components: {
    Profile,
    VueflixBtn,
    ArrowBtnWidget,
    IconMembership,
    IconNotification,
    IconAccount,
    LoginWidget,
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
            to: "#none",
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
            text: "다크 모드",
            to: "/my/dark-mode",
          },
          {
            text: "이미지 캐시 초기화",
            to: "#none",
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
  background-color: var(--bg-100);
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
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
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
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  .theme-toggle {
    background-color: var(--top-item);
    width: 100%;
    display: flex;
    padding: 1.8rem var(--inner-padding);
  }
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

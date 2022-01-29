<template>
  <div class="wrap">
    <main class="my" v-if="isMyRoot">
      <div class="top">
        <div :class="['my-profile', { 'my-profile--logged-in': user }]">
          <div class="profile-img">
            <profile />
            <strong class="nickname">
              {{ user ? user.displayName : "아직 로그인하지 않았어요" }}
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
            <strong>66</strong>
            <span>별점</span>
          </router-link>
          <router-link to="#none" class="history-item">
            <strong>20</strong>
            <span>리뷰</span>
          </router-link>
          <router-link to="#none" class="history-item">
            <strong>24</strong>
            <span>정주행</span>
          </router-link>
        </div>
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

export default {
  components: {
    Profile,
    VueflixBtn,
    ArrowBtnWidget,
    IconMembership,
    IconNotification,
    IconAccount,
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
  padding-bottom: 6.4rem;
}
.top {
  padding: 9rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--top-item);
  border-radius: 0 0 0.6rem 0.6rem;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  .my-profile {
    .profile-img {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .profile {
      width: 7.2rem;
      margin-bottom: 1.6rem;
    }
    .nickname {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
      color: var(--bg-300);
    }
    .email {
      font-size: 1.3rem;
      margin-bottom: 1.6rem;
      color: var(--text-600);
    }
    .btn-area {
      display: flex;
      justify-content: center;
      .btn {
        margin: 0;
        background-color: var(--theme-500);
        color: #fff;
      }
    }
    &--logged-in {
      .nickname {
        color: var(--text-800);
      }
    }
  }
  .history-items {
    margin-top: 2.4rem;
    display: flex;
    width: 50vw;
    justify-content: space-between;
    .history-item {
      width: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 150ms ease-out;
      strong {
        font-size: 1.8rem;
        margin-bottom: 0.4rem;
      }
      span {
        font-size: 1.2rem;
      }
      &:hover,
      &:focus {
        opacity: 0.5;
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
  margin-top: 0.8rem;
  border-radius: 0.6rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  width: 100%;
  .theme-toggle {
    background-color: var(--top-item);
    width: 100%;
    display: flex;
    padding: 1.8rem var(--inner-padding);
  }
}

@media screen and (min-width: 1024px) {
  .my {
    padding-bottom: 1rem;
  }
  .top {
    padding: 12rem 0 6rem;
    box-shadow: none;
    .my-profile {
      .profile {
        width: 9rem;
        margin-bottom: 3rem;
      }
      .nickname {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .email {
        font-size: 1.5rem;
        margin-bottom: 3.2rem;
      }
    }
    .history-items {
      margin-top: 4rem;
      display: flex;
      width: 40vw;
      justify-content: space-between;
      .history-item {
        strong {
          font-size: 2rem;
          margin-bottom: 0.8rem;
        }
        span {
          font-size: 1.5rem;
        }
      }
    }
  }
  .my-cards .arrow-link-btn {
    padding: 2rem 5rem;
  }
}

@media screen and (min-width: 1300px) {
  .my {
    flex-direction: row;
    padding-bottom: 0;
  }
  .top {
    width: 40rem;
    height: 100vh;
    padding: 0 5rem;
    justify-content: center;
    .history-items {
      width: 75%;
    }
  }
  .my-cards-wrap {
    flex: 2;
    padding: 6rem 0 0;

    .my-cards {
      width: 75%;
      max-width: 108rem;
      margin-top: 2.5rem;
      &:first-child {
        margin-top: 0;
      }
      .arrow-link-btn {
        padding: 2rem 3rem;
      }
    }
  }
}
</style>

<template>
  <div class="wrap">
    <main class="my" v-if="isMyRoot">
      <div class="top">
        <div class="my-profile">
          <profile />
          <strong class="nickname">미야조노 카오리</strong>
          <i class="email">example1234@example.com</i>
          <div class="btn-area">
            <vueflix-route-btn link="/my/change-profile">
              프로필 관리
            </vueflix-route-btn>
            <vueflix-func-btn
              bg="var(--theme-500)"
              textColor="var(--top-item)"
              border="1px solid var(--theme-500)"
            >
              로그아웃
            </vueflix-func-btn>
          </div>
        </div>
        <div class="history-items">
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
        <div class="my-cards" v-for="(myCard, index) in myCards" :key="index">
          <router-link
            class="my-card inner"
            v-for="item in myCard"
            :key="item.name"
            :to="item.href"
          >
            <div class="col-left">
              <i class="icon" v-if="item.icon">
                <icon-base>
                  <component :is="item.icon" />
                </icon-base>
              </i>
              <span>
                {{ item.name }}
              </span>
            </div>
            <div class="col-right">
              <i class="icon">
                <icon-base>
                  <icon-arrow-next />
                </icon-base>
              </i>
            </div>
          </router-link>
        </div>
      </div>
    </main>
    <router-view />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import VueflixRouteBtn from "../components/VueflixRouteBtn.vue";
import VueflixFuncBtn from "../components/VueflixFuncBtn.vue";
import IconBase from "../components/IconBase.vue";
import IconMembership from "../components/icons/IconMembership";
import IconArrowNext from "../components/icons/IconArrowNext.vue";
import IconAccount from "../components/icons/IconAccount";
import IconNotification from "../components/icons/IconNotification.vue";
export default {
  components: {
    Profile,
    VueflixRouteBtn,
    IconBase,
    IconMembership,
    IconArrowNext,
    IconNotification,
    IconAccount,
    VueflixFuncBtn,
  },
  data() {
    return {
      isMyRoot: this.$route.name === "my",
      myCards: [
        [
          {
            name: "멤버십 및 포인트",
            icon: "IconMembership",
            href: "/my/membership",
          },
        ],
        [
          {
            name: "계정 설정",
            icon: "IconAccount",
            href: "#none",
          },
          {
            name: "알림 설정",
            icon: "IconNotification",
            href: "#none",
          },
        ],
        [
          {
            name: "쿠폰 등록",
            href: "#none",
          },
          {
            name: "이용 내역",
            href: "#none",
          },
        ],
        [
          {
            name: "이미지 캐시 초기화",
            href: "#none",
          },
          {
            name: "고객센터",
            href: "#none",
          },
          {
            name: "버전 정보",
            href: "#none",
          },
        ],
      ],
    };
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
  .my-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    .profile {
      width: 7.2rem;
      margin-bottom: 1.6rem;
    }
    .nickname {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }
    .email {
      font-size: 1.3rem;
      margin-bottom: 1.6rem;
      color: var(--text-600);
    }
    .btn-area {
      display: flex;
      button {
        margin-left: 1rem;
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
.my-cards {
  margin-top: 0.8rem;
  overflow: hidden;
  .my-card {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--top-item);
    .icon {
      display: flex;
      align-items: center;
      width: 1.8rem;
      height: 1.8rem;
    }
    .col-left {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 0.8rem;
      }
      span {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .my-cards .my-card .col-left span {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1024px) {
  .my {
    padding-bottom: 1rem;
  }
  .top {
    padding: 12rem 0 6rem;
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
  .my-cards .my-card {
    padding: 2rem 5rem;
    .icon {
      width: 2.4rem;
      height: 2.4rem;
    }
    .col-left {
      span {
        font-size: 1.5rem;
      }
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .my-cards {
      width: 75%;
      margin-top: 2.5rem;
      &:first-child {
        margin-top: 0;
      }
      .my-card {
        padding: 2rem 3rem;
      }
    }
  }
}
</style>

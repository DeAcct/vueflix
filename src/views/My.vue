<template>
  <div class="wrap">
    <main class="my" v-if="isMyRoot">
      <div class="top">
        <div class="my-profile">
          <profile />
          <strong class="nickname">로렘입숨사딸라</strong>
          <i class="email">example1234@example.com</i>
          <vueflix-route-btn
            link="/my/change-profile"
            bg="var(--theme-500)"
            textColor="var(--top-item)"
            border="none"
          >
            프로필 관리
          </vueflix-route-btn>
        </div>
        <div class="history-items">
          <div class="history-item">
            <strong>66</strong>
            <span>별점</span>
          </div>
          <div class="history-item">
            <strong>20</strong>
            <span>리뷰</span>
          </div>
          <div class="history-item">
            <strong>24</strong>
            <span>정주행</span>
          </div>
        </div>
      </div>
      <div class="my-cards" v-for="(myCard, index) in myCards" :key="index">
        <router-link
          to="/my/membership"
          class="my-card inner"
          v-for="item in myCard"
          :key="item.name"
        >
          <div class="col-left">
            <i class="icon" v-if="item.icon">
              <icon-base width="1.8rem" height="1.8rem">
                <component :is="item.icon" />
              </icon-base>
            </i>
            <span>
              {{ item.name }}
            </span>
          </div>
          <div class="col-right">
            <i class="icon">
              <icon-base width="1.8rem" height="1.8rem">
                <icon-arrow-next />
              </icon-base>
            </i>
          </div>
        </router-link>
      </div>
    </main>
    <router-view />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import VueflixRouteBtn from "../components/VueflixRouteBtn.vue";
import IconBase from "../components/IconBase.vue";
import IconMembership from "../components/icons/IconMembership";
import IconArrowNext from "../components/icons/IconArrowNext.vue";
import IconNotification from "../components/icons/IconNotification.vue";
export default {
  components: {
    Profile,
    VueflixRouteBtn,
    IconBase,
    IconMembership,
    IconArrowNext,
    IconNotification,
  },
  data() {
    return {
      isMyRoot: this.$route.name === "my",
      myCards: [
        [
          {
            name: "멤버십 및 포인트",
            icon: "IconMembership",
          },
        ],
        [
          {
            name: "계정 설정",
            icon: "IconMembership",
          },
          {
            name: "알림 설정",
            icon: "IconNotification",
          },
        ],
        [
          {
            name: "쿠폰 등록",
          },
          {
            name: "이용 내역",
          },
        ],
        [
          {
            name: "이미지 캐시 초기화",
          },
          {
            name: "고객센터",
          },
          {
            name: "버전 정보",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my {
  background-color: var(--bg-100);
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
      color: var(--text-800);
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
      strong {
        font-size: 1.8rem;
        margin-bottom: 0.4rem;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
}
.my-cards {
  margin-top: 0.8rem;
  background-color: var(--top-item);
  overflow: hidden;
  .my-card {
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      display: flex;
      align-items: center;
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
</style>

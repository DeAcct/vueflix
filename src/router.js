import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AppHome.vue"),
    meta: {
      title: "뷰플릭스 - 합법적 애니 스트리밍",
      appBar: {
        activityContent: "Logo",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/anime/:title",
    name: "anime",
    component: () => import("@/layout/AnimeLayout.vue"),
    meta: {
      bottomTabMenu: false,
    },
    children: [
      {
        path: "episodes",
        name: "episodes",
        component: () => import("@/views/AnimeEpisodes.vue"),
        meta: {
          bottomTabMenu: false,
        },
        alias: ["/:title", ""],
      },
      {
        path: "reviews",
        name: "reviews",
        component: () => import("@/views/AnimeReviews.vue"),
        meta: {
          bottomTabMenu: false,
        },
      },
    ],
  },
  {
    path: "/player/:title/:part/:index",
    name: "player",
    component: () => import("@/views/Player.vue"),
    meta: {
      bottomTabMenu: false,
    },
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/views/AppBasket.vue"),
    meta: {
      title: "보관함",
      appBar: {
        activityContent: "보관함",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/MyApp.vue"),
    meta: {
      title: "내 뷰플릭스",
      appBar: {
        activityContent: "MY",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/my/membership",
    name: "membership",
    component: () => import("@/views/VueflixMembership.vue"),
    meta: {
      title: "멤버십 및 포인트",
      appBar: {
        activityContent: "멤버십 및 포인트",
        backButton: {
          type: "replace",
        },
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/my/account-setting",
    name: "account-setting",
    component: () => import("@/views/AccountSetting.vue"),
    meta: {
      title: "계정 설정",
      appBar: {
        activityContent: "계정 설정",
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/my/app-theme",
    name: "app-theme",
    component: () => import("@/views/AppTheme.vue"),
    meta: {
      title: "앱 테마",
      appBar: {
        activityContent: "앱 테마",
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AppAuth.vue"),
    meta: {
      title: "뷰플릭스에 어서오세요!",
      appBar: {
        activityContent: "Logo",
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/notialert",
    name: "notialert",
    component: () => import("@/views/NotiAlert.vue"),
    meta: {
      title: "알림",
      bottomTabMenu: false,
    },
  },
  {
    path: "/isekai-404",
    name: "isekai-404",
    component: () => import("@/views/AppIsekai.vue"),
    meta: {
      appBar: {
        activityContent: "Logo",
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/isekai-404",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vueflix-active-link",
});

import { createRouter, createWebHistory } from "vue-router";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const quarter = Math.floor((month + 3) / 3);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/AppHome"),
    meta: {
      title: "뷰플릭스 - 합법적 애니 스트리밍",
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/anime/:title",
    name: "anime",
    component: () => import("@/views/AnimeView"),
    meta: {
      appBar: false,
      bottomTabMenu: false,
    },
    children: [
      {
        path: "reviews",
        name: "reviews",
        component: () => import("@/views/AnimeReviews"),
        meta: {
          appBar: true,
          bottomTabMenu: false,
        },
      },
    ],
  },
  {
    path: "/player/:title/:part/:index",
    name: "player",
    component: () => import("@/views/VueflixPlayer"),
    meta: {
      appBar: false,
      bottomTabMenu: false,
    },
  },
  {
    path: "/tag-search",
    name: "tag-search",
    component: () => import("@/views/TagSearch"),
    meta: {
      title: "필터로 취향저격 애니찾기",
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/daily",
    name: "daily",
    component: () => import("@/views/AppDaily"),
    meta: {
      title: `${year}년 ${quarter}분기 신작 애니 편성표`,
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/views/AppBasket"),
    meta: {
      title: "보관함",
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/MyApp"),
    meta: {
      title: "내 뷰플릭스",
      appBar: true,
      bottomTabMenu: true,
    },
    children: [
      {
        path: "membership",
        name: "membership",
        component: () => import("@/views/VueflixMembership"),
        meta: {
          title: "멤버십 및 포인트",
          appBar: true,
          bottomTabMenu: false,
        },
      },
      {
        path: "account-setting",
        name: "account-setting",
        component: () => import("@/views/AccountSetting"),
        meta: {
          title: "계정 설정",
          appBar: false,
          bottomTabMenu: false,
        },
      },
      {
        path: "app-theme",
        name: "app-theme",
        component: () => import("@/views/AppTheme"),
        meta: {
          title: "앱 테마 설정",
          appBar: true,
          bottomTabMenu: false,
        },
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AppAuth"),
    meta: {
      title: "뷰플릭스에 어서오세요!",
      appBar: false,
      bottomTabMenu: false,
    },
  },
  {
    path: "/notialert",
    name: "notialert",
    component: () => import("@/views/NotiAlert"),
    meta: {
      title: "알림",
      appBar: false,
      bottomTabMenu: false,
    },
  },
  {
    path: "/isekai-404",
    name: "isekai-404",
    component: () => import("@/views/NotFound"),
    meta: {
      appBar: true,
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

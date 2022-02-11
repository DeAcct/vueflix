import { createRouter, createWebHistory } from "vue-router";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const quarter = Math.floor((month + 3) / 3);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
    meta: {
      title: "뷰플릭스 - 합법적 애니 스트리밍",
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/anime/:title",
    name: "anime",
    component: () => import("@/views/Anime"),
    meta: {
      appBar: false,
      bottomTabMenu: false,
    },
    children: [
      {
        path: "reviews",
        name: "reviews",
        component: () => import("@/views/Reviews"),
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
    component: () => import("@/views/Player"),
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
    component: () => import("@/views/Daily"),
    meta: {
      title: `${year}년 ${quarter}분기 신작 애니 편성표`,
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/views/Basket"),
    meta: {
      title: "보관함",
      appBar: true,
      bottomTabMenu: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/My"),
    meta: {
      title: "내 뷰플릭스",
      appBar: true,
      bottomTabMenu: true,
    },
    children: [
      {
        path: "membership",
        name: "membership",
        component: () => import("@/views/Membership"),
        meta: {
          title: "뷰플릭스 멤버십",
          appBar: true,
          bottomTabMenu: false,
        },
      },
      {
        path: "dark-mode",
        name: "dark-mode",
        component: () => import("@/views/Darkmode"),
        meta: {
          title: "다크 모드",
          appBar: true,
          bottomTabMenu: false,
        },
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/Auth"),
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

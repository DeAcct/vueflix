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
    },
  },
  {
    path: "/anime/:id",
    name: "anime",
    component: () => import("@/views/Anime"),
    children: [
      {
        path: "reviews",
        name: "reviews",
        component: () => import("@/views/Reviews"),
      },
    ],
  },
  {
    path: "/tag-search",
    name: "tag-search",
    component: () => import("@/views/TagSearch"),
    meta: {
      title: "필터로 취향저격 애니찾기",
    },
  },
  {
    path: "/daily",
    name: "daily",
    component: () => import("@/views/Daily"),
    meta: {
      title: `${year}년 ${quarter}분기 신작 애니 편성표`,
    },
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/views/Basket"),
    meta: {
      title: "보관함",
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/My"),
    meta: {
      title: "내 뷰플릭스",
    },
    children: [
      {
        path: "membership",
        name: "membership",
        component: () => import("@/views/Membership"),
        meta: {
          title: "뷰플릭스 멤버십",
        },
      },
      {
        path: "change-profile",
        name: "change-profile",
        component: () => import("@/views/ChangeProfile"),
        meta: {
          title: "내 프로필 전환하기",
        },
      },
    ],
  },
  {
    path: "/notialert",
    name: "notialert",
    component: () => import("@/views/NotiAlert"),
    meta: {
      title: "알림",
    },
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () => import("@/views/NotFound"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/notfound",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vueflix-active-link",
});

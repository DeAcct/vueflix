import { createRouter, createWebHistory } from "vue-router";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const quarter = (month + 3) / 3;

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    meta: {
      title: "뷰플릭스 - 합법적 애니 스트리밍",
    },
  },
  {
    path: "/tagsearch",
    name: "TagSearch",
    component: () => import("@/views/TagSearch"),
    meta: {
      title: "필터로 취향저격 애니찾기",
    },
  },
  {
    path: "/daily",
    name: "Daily",
    component: () => import("@/views/Daily"),
    meta: {
      title: `${year}년 ${quarter}분기 신작 애니 편성표`,
    },
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: () => import("@/views/Recommend"),
    meta: {
      title: "테마별 애니 추천",
    },
  },
  {
    path: "/membership",
    name: "Membership",
    component: () => import("@/views/Membership"),
    meta: {
      title: "뷰플릭스 멤버십 및 포인트 충전",
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

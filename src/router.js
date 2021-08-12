import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound";

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
      description:
        "당당하게 애니 볼 땐, 뷰플릭스! 고전 명작부터 이번 분기 화제작까지 모든 애니를 고화질로 스트리밍할 수 있는 곳은 이곳 뿐.",
    },
  },
  {
    path: "/tagsearch",
    name: "tagsearch",
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
    path: "/recommend",
    name: "recommend",
    component: () => import("@/views/Recommend"),
    meta: {
      title: "테마별 애니 추천",
    },
  },
  {
    path: "/membership",
    name: "membership",
    component: () => import("@/views/Membership"),
    meta: {
      title: "뷰플릭스 멤버십 및 포인트 충전",
    },
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
    component: NotFound,
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

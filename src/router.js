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
    path: "/anime/:id",
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
        path: "change-profile",
        name: "change-profile",
        component: () => import("@/views/ChangeProfile"),
        meta: {
          title: "내 프로필사진 편집하기",
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
      title: "회원가입 / 로그인",
      appBar: false,
      bottomTabMenu: false,
    },
    children: [
      {
        path: "by-email",
        name: "by-email",
        component: () => import("@/views/ByEmail"),
        meta: {
          title: "이메일로 로그인",
          appBar: false,
          bottomTabMenu: false,
        },
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("@/views/SignUp"),
        meta: {
          title: "이메일로 가입",
          appBar: false,
          bottomTabMenu: false,
        },
      },
      {
        path: "another",
        name: "another",
        component: () => import("@/views/OtherSignUp"),
        meta: {
          title: "다른 방법으로 계속하기",
          appBar: false,
          bottomTabMenu: false,
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
      appBar: false,
      bottomTabMenu: false,
    },
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () => import("@/views/NotFound"),
    meta: {
      appBar: true,
      bottomTabMenu: false,
    },
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

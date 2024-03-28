import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "데레 - 애니에 빠지다",
      appBar: {
        activityContent: "Logo",
      },
      bottomTabMenu: true,
    },
  },
  // {
  //   path: "/anime/:title",
  //   name: "anime",
  //   component: () => import("@/layout/Anime.layout.vue"),
  //   meta: {
  //     bottomTabMenu: false,
  //   },
  //   children: [
  //     {
  //       path: "episodes",
  //       name: "episodes",
  //       tabName: "에피소드",
  //       component: () => import("@/views/Episodes.vue"),
  //       meta: {
  //         bottomTabMenu: false,
  //       },
  //       alias: ["/anime/:title/episodes", ""],
  //     },
  //     {
  //       path: "reviews",
  //       name: "reviews",
  //       tabName: "사용자 평",
  //       component: () => import("@/views/Reviews.vue"),
  //       meta: {
  //         bottomTabMenu: false,
  //       },
  //     },
  //   ],
  // },
  {
    path: "/anime-play/:title/:part/:index",
    name: "anime-play",
    component: () => import("@/views/AnimePlay.vue"),
    meta: {
      appBar: {
        backButton: true,
        activityContent: "Logo",
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/views/Basket.vue"),
    meta: {
      title: "보관함",
      appBar: {
        activityContent: "보관함",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/cocktail",
    name: "cocktail",
    component: () => import("@/views/Cocktail.vue"),
    meta: {
      title: "칵테일",
      appBar: {
        activityContent: "칵테일",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/MyApp.vue"),
    meta: {
      title: "내 데레라이프",
      appBar: {
        activityContent: "MY",
      },
      bottomTabMenu: true,
    },
  },
  {
    path: "/my/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      title: "내 정보",
      appBar: {
        activityContent: "내 정보",
        backButton: true,
      },
      bottomTabMenu: false,
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
        backButton: true,
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/my/app-theme",
    name: "app-theme",
    component: () => import("@/views/Theme.vue"),
    meta: {
      title: "앱 테마",
      appBar: {
        activityContent: "앱 테마",
        backButton: true,
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/my/reviews",
    name: "my-reviews",
    component: () => import("@/views/MyReviews.vue"),
    meta: {
      title: "내 리뷰",
      appBar: {
        activityContent: "내 리뷰",
        backButton: true,
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/history/:uid",
    name: "history",
    component: () => import("@/views/History.vue"),
    meta: {
      title: "기록",
      appBar: {
        activityContent: "기록",
        backButton: true,
      },
      bottomTabMenu: false,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/layout/Auth.layout.vue"),
    meta: {
      title: "데레에 어서오세요!",
      appBar: {
        activityContent: "Logo",
        backButton: true,
      },
      bottomTabMenu: false,
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        alias: ["/auth/login", ""],
        meta: {
          title: "로그인",
          bottomTabMenu: false,
        },
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("@/views/UserFactory.vue"),
        meta: {
          title: "회원가입",
          bottomTabMenu: false,
        },
      },
    ],
  },
  {
    path: "/isekai-404",
    name: "isekai-404",
    component: () => import("@/views/Isekai.vue"),
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
});

router.beforeEach((to) => {
  if (!to.meta) {
    return;
  }
  document.title = to?.meta.title || import.meta.env.VITE_KR_NAME;
});

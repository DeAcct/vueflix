import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/tagsearch",
    name: "TagSearch",
    component: () => import("@/views/TagSearch"),
  },
  {
    path: "/daily",
    name: "Daily",
    component: () => import("@/views/Daily"),
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: () => import("@/views/Recommend"),
  },
  {
    path: "/membership",
    name: "Membership",
    component: () => import("@/views/Membership"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

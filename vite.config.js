import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("swiper"),
        },
      },
    }),
    VueDevTools(),
    VitePWA({
      includeAssets: ["favicon.svg", "robots.txt"],
      registerType: "autoUpdate",
      manifest: {
        name: "뷰플릭스",
        short_name: "뷰플릭스",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        shortcuts: [
          {
            name: "태그검색",
            url: "/tag-search",
            description: "필터로 취향저격 애니찾기",
          },
          {
            name: "요일별 신작",
            url: "/daily",
            description: "이번 분기 애니 편성표",
          },
          {
            name: "보관함",
            url: "/basket",
            description: "슬기로운 애니생활을 위한 나만의 공간",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

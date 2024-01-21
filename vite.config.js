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
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "데레",
        short_name: "데레",
        description:
          "당당하게 애니 볼 땐, 데레! 고전 명작부터 이번 분기 화제작까지 모든 애니를 고화질로 스트리밍할 수 있는 곳은 이곳 뿐.",
        theme_color: "#d62929",
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
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@firebase")) {
            return `vendor/@firebase/${
              id.split("@firebase/")[1].split("/")[0]
            }`;
          }
          const module = id.split("node_modules/").pop().split("/")[0];
          return `vendor/${module}`;
        },
      },
    },
  },
});

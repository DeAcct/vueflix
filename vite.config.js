import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "./.vite",
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
        short_name: "데레 - 애니 스트리밍",
        categories: ["entertainment", "anime", "streaming"],
        description:
          "당당하게 애니 볼 땐, 데레! 고전 명작부터 이번 분기 화제작까지 모든 애니를 고화질로 스트리밍할 수 있는 곳은 이곳 뿐.",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        orientation: "portrait-primary",
        launch_handler: {
          client_mode: ["focus-existing", "auto"],
        },
        edge_side_panel: {
          preferred_width: 412,
        },
        related_applications: [],
        scope_extensions: [{ origin: "vueflix.hyse.kr" }],
        prefer_related_applications: false,
        handle_links: "preferred",
        dir: "ltr",
        theme_color: "#F7084D",
        lang: "ko",
        id: "/",
        protocol_handlers: [
          {
            protocol: "web+dereRecommend",
            url: "/",
          },
          {
            protocol: "web+dereAnime",
            url: "/?modal=%s&route=episodes",
          },
        ],
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
            purpose: "any",
          },
          {
            src: "icon-maskable.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "maskable",
          },
          {
            src: "favicon.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
        screenshots: [
          {
            src: "screenshot_home.webp",
            sizes: "1082x2402",
            type: "image/webp",
          },
          {
            src: "screenshot_my.webp",
            sizes: "1082x2402",
            type: "image/webp",
          },
          {
            src: "screenshot_player.webp",
            sizes: "1082x2402",
            type: "image/webp",
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
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});

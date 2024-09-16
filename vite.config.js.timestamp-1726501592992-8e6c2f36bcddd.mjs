// vite.config.js
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///home/lee/vueflix/.yarn/__virtual__/vite-virtual-8cd4f46404/2/.yarn/berry/cache/vite-npm-5.4.5-38ef504199-10c0.zip/node_modules/vite/dist/node/index.js";
import VueDevTools from "file:///home/lee/vueflix/.yarn/__virtual__/vite-plugin-vue-devtools-virtual-e4df1eef6c/2/.yarn/berry/cache/vite-plugin-vue-devtools-npm-7.4.5-171b4f6e8c-10c0.zip/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { VitePWA } from "file:///home/lee/vueflix/.yarn/__virtual__/vite-plugin-pwa-virtual-ac38d98291/2/.yarn/berry/cache/vite-plugin-pwa-npm-0.20.5-f1e0d20c81-10c0.zip/node_modules/vite-plugin-pwa/dist/index.js";
import vue from "file:///home/lee/vueflix/.yarn/__virtual__/@vitejs-plugin-vue-virtual-96f400877f/2/.yarn/berry/cache/@vitejs-plugin-vue-npm-5.1.3-ec7cada92d-10c0.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/lee/vueflix/vite.config.js";
var vite_config_default = defineConfig({
  cacheDir: "./.vite",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("swiper")
        }
      }
    }),
    VueDevTools(),
    VitePWA({
      includeAssets: ["favicon.svg", "robots.txt"],
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "\uB370\uB808",
        short_name: "\uB370\uB808 - \uC560\uB2C8 \uC2A4\uD2B8\uB9AC\uBC0D",
        categories: ["entertainment", "anime", "streaming"],
        description: "\uB2F9\uB2F9\uD558\uAC8C \uC560\uB2C8 \uBCFC \uB550, \uB370\uB808! \uACE0\uC804 \uBA85\uC791\uBD80\uD130 \uC774\uBC88 \uBD84\uAE30 \uD654\uC81C\uC791\uAE4C\uC9C0 \uBAA8\uB4E0 \uC560\uB2C8\uB97C \uACE0\uD654\uC9C8\uB85C \uC2A4\uD2B8\uB9AC\uBC0D\uD560 \uC218 \uC788\uB294 \uACF3\uC740 \uC774\uACF3 \uBFD0.",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        orientation: "portrait-primary",
        launch_handler: {
          client_mode: ["focus-existing", "auto"]
        },
        edge_side_panel: {
          preferred_width: 412
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
            protocol: "web+dere",
            url: "/?modal=%s&route=episodes"
          }
        ],
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "icon-maskable.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "maskable"
          },
          {
            src: "favicon.svg",
            sizes: "512x512",
            type: "image/svg"
          }
        ],
        screenshots: [
          {
            src: "screenshot_home.webp",
            sizes: "1082x2402",
            type: "image/webp"
          },
          {
            src: "screenshot_my.webp",
            sizes: "1082x2402",
            type: "image/webp"
          },
          {
            src: "screenshot_player.webp",
            sizes: "1082x2402",
            type: "image/webp"
          }
        ],
        shortcuts: [
          {
            name: "\uC694\uC77C\uBCC4 \uC2E0\uC791",
            url: "/daily",
            description: "\uC774\uBC88 \uBD84\uAE30 \uC560\uB2C8 \uD3B8\uC131\uD45C"
          },
          {
            name: "\uBCF4\uAD00\uD568",
            url: "/basket",
            description: "\uC2AC\uAE30\uB85C\uC6B4 \uC560\uB2C8\uC0DD\uD65C\uC744 \uC704\uD55C \uB098\uB9CC\uC758 \uACF5\uAC04"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("@firebase")) {
            return `vendor/@firebase/${id.split("@firebase/")[1].split("/")[0]}`;
          }
          const module = id.split("node_modules/").pop().split("/")[0];
          return `vendor/${module}`;
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9sZWUvdnVlZmxpeFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbGVlL3Z1ZWZsaXgvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbGVlL3Z1ZWZsaXgvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwidXJsXCI7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgY2FjaGVEaXI6IFwiLi8udml0ZVwiLFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKHtcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gdGFnLmluY2x1ZGVzKFwic3dpcGVyXCIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBWdWVEZXZUb29scygpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgaW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5zdmdcIiwgXCJyb2JvdHMudHh0XCJdLFxuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiBcIlx1QjM3MFx1QjgwOFwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIlx1QjM3MFx1QjgwOCAtIFx1QzU2MFx1QjJDOCBcdUMyQTRcdUQyQjhcdUI5QUNcdUJDMERcIixcbiAgICAgICAgY2F0ZWdvcmllczogW1wiZW50ZXJ0YWlubWVudFwiLCBcImFuaW1lXCIsIFwic3RyZWFtaW5nXCJdLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlx1QjJGOVx1QjJGOVx1RDU1OFx1QUM4QyBcdUM1NjBcdUIyQzggXHVCQ0ZDIFx1QjU1MCwgXHVCMzcwXHVCODA4ISBcdUFDRTBcdUM4MDQgXHVCQTg1XHVDNzkxXHVCRDgwXHVEMTMwIFx1Qzc3NFx1QkM4OCBcdUJEODRcdUFFMzAgXHVENjU0XHVDODFDXHVDNzkxXHVBRTRDXHVDOUMwIFx1QkFBOFx1QjRFMCBcdUM1NjBcdUIyQzhcdUI5N0MgXHVBQ0UwXHVENjU0XHVDOUM4XHVCODVDIFx1QzJBNFx1RDJCOFx1QjlBQ1x1QkMwRFx1RDU2MCBcdUMyMTggXHVDNzg4XHVCMjk0IFx1QUNGM1x1Qzc0MCBcdUM3NzRcdUFDRjMgXHVCRkQwLlwiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgZGlzcGxheV9vdmVycmlkZTogW1wid2luZG93LWNvbnRyb2xzLW92ZXJsYXlcIl0sXG4gICAgICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0LXByaW1hcnlcIixcbiAgICAgICAgbGF1bmNoX2hhbmRsZXI6IHtcbiAgICAgICAgICBjbGllbnRfbW9kZTogW1wiZm9jdXMtZXhpc3RpbmdcIiwgXCJhdXRvXCJdLFxuICAgICAgICB9LFxuICAgICAgICBlZGdlX3NpZGVfcGFuZWw6IHtcbiAgICAgICAgICBwcmVmZXJyZWRfd2lkdGg6IDQxMixcbiAgICAgICAgfSxcbiAgICAgICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IFtdLFxuICAgICAgICBzY29wZV9leHRlbnNpb25zOiBbeyBvcmlnaW46IFwidnVlZmxpeC5oeXNlLmtyXCIgfV0sXG4gICAgICAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogZmFsc2UsXG4gICAgICAgIGhhbmRsZV9saW5rczogXCJwcmVmZXJyZWRcIixcbiAgICAgICAgZGlyOiBcImx0clwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjRjcwODREXCIsXG4gICAgICAgIGxhbmc6IFwia29cIixcbiAgICAgICAgaWQ6IFwiL1wiLFxuICAgICAgICBwcm90b2NvbF9oYW5kbGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3RvY29sOiBcIndlYitkZXJlXCIsXG4gICAgICAgICAgICB1cmw6IFwiLz9tb2RhbD0lcyZyb3V0ZT1lcGlzb2Rlc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb24tMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiaWNvbi0yNTZ4MjU2LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMjU2eDI1NlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJpY29uLTM4NHgzODQucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIzODR4Mzg0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb24tNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcImFueVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImljb24tbWFza2FibGUud2VicFwiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi5zdmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwic2NyZWVuc2hvdF9ob21lLndlYnBcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjEwODJ4MjQwMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwic2NyZWVuc2hvdF9teS53ZWJwXCIsXG4gICAgICAgICAgICBzaXplczogXCIxMDgyeDI0MDJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvd2VicFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcInNjcmVlbnNob3RfcGxheWVyLndlYnBcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjEwODJ4MjQwMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJcdUM2OTRcdUM3N0NcdUJDQzQgXHVDMkUwXHVDNzkxXCIsXG4gICAgICAgICAgICB1cmw6IFwiL2RhaWx5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcdUM3NzRcdUJDODggXHVCRDg0XHVBRTMwIFx1QzU2MFx1QjJDOCBcdUQzQjhcdUMxMzFcdUQ0NUNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiXHVCQ0Y0XHVBRDAwXHVENTY4XCIsXG4gICAgICAgICAgICB1cmw6IFwiL2Jhc2tldFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXHVDMkFDXHVBRTMwXHVCODVDXHVDNkI0IFx1QzU2MFx1QjJDOFx1QzBERFx1RDY1Q1x1Qzc0NCBcdUM3MDRcdUQ1NUMgXHVCMDk4XHVCOUNDXHVDNzU4IFx1QUNGNVx1QUMwNFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIkBmaXJlYmFzZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGB2ZW5kb3IvQGZpcmViYXNlLyR7XG4gICAgICAgICAgICAgIGlkLnNwbGl0KFwiQGZpcmViYXNlL1wiKVsxXS5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBpZC5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIikucG9wKCkuc3BsaXQoXCIvXCIpWzBdO1xuICAgICAgICAgIHJldHVybiBgdmVuZG9yLyR7bW9kdWxlfWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcU8sU0FBUyxlQUFlLFdBQVc7QUFFeFEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUwwSCxJQUFNLDJDQUEyQztBQVEzTCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxTQUFTLFFBQVE7QUFBQSxRQUNqRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNOLGVBQWUsQ0FBQyxlQUFlLFlBQVk7QUFBQSxNQUMzQyxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osWUFBWSxDQUFDLGlCQUFpQixTQUFTLFdBQVc7QUFBQSxRQUNsRCxhQUNFO0FBQUEsUUFDRixTQUFTO0FBQUEsUUFDVCxrQkFBa0IsQ0FBQyx5QkFBeUI7QUFBQSxRQUM1QyxhQUFhO0FBQUEsUUFDYixnQkFBZ0I7QUFBQSxVQUNkLGFBQWEsQ0FBQyxrQkFBa0IsTUFBTTtBQUFBLFFBQ3hDO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQjtBQUFBLFFBQ25CO0FBQUEsUUFDQSxzQkFBc0IsQ0FBQztBQUFBLFFBQ3ZCLGtCQUFrQixDQUFDLEVBQUUsUUFBUSxrQkFBa0IsQ0FBQztBQUFBLFFBQ2hELDZCQUE2QjtBQUFBLFFBQzdCLGNBQWM7QUFBQSxRQUNkLEtBQUs7QUFBQSxRQUNMLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLElBQUk7QUFBQSxRQUNKLG1CQUFtQjtBQUFBLFVBQ2pCO0FBQUEsWUFDRSxVQUFVO0FBQUEsWUFDVixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLFFBQ0EsV0FBVztBQUFBLFVBQ1Q7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjLENBQUMsT0FBTztBQUNwQixjQUFJLEdBQUcsU0FBUyxXQUFXLEdBQUc7QUFDNUIsbUJBQU8sb0JBQ0wsR0FBRyxNQUFNLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUN4QztBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxTQUFTLEdBQUcsTUFBTSxlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDM0QsaUJBQU8sVUFBVSxNQUFNO0FBQUEsUUFDekI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

import { router } from "./router";
import { createApp, nextTick } from "vue";
import store from "./store/store";

import App from "./App.vue";
import "./registerServiceWorker";

const app = createApp(App);
const DEFAULT_TITLE = "뷰플릭스";
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
app.use(router);
app.use(store);
app.mount("#app");

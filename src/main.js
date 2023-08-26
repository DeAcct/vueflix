import { router } from "./router";
import { createApp } from "vue";
import store from "./store/store";
import "./common.scss";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";
import dayjs from "dayjs";
import "./common.scss";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

dayjs.locale("ko");

app.use(router);
app.use(pinia);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.ignoredElements = ['ion-icons']
app.mount("#app");

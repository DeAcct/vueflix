import { router } from "./router";
import { createApp } from "vue";
import store from "./store/store";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import "./registerServiceWorker";

import { IntersectionLazy } from "./directives/IntersectionLazy";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);
app.directive("intersection-lazy", IntersectionLazy);
app.mount("#app");

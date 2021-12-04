import { router } from "./router";
import { createApp } from "vue";
import store from "./store/store";
import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";

import App from "./App.vue";
import "./registerServiceWorker";

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
// const db = getFirestore();
// const animeRef = collection(db, "anime");

// const q = query(animeRef, where("name", "==", "코바야시네 메이드래곤 S"));
// async function result() {
//   try {
//     const querySnapshot = await getDocs(q);
//     if (querySnapshot.docs.length !== 0) {
//       querySnapshot.forEach((doc) => {
//         if (doc.data().episode) {
//           doc.data().episode.forEach(
//             (episode) => {
//               console.log(episode.title);
//             } /*.starRating.toFixed(1)*/
//           );
//         } else {
//           console.log("에피소드가 존재하지 않습니다");
//         }
//       });
//     } else {
//       console.log("존재하지 않는 작품입니다");
//     }
//   } catch {
//     console.error("오류");
//   }
// }
// result();

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

import { ref, watchEffect } from "vue";

import { db } from "@/utility/firebase";
import {
  doc,
  getDoc,
  getDocs,
  where,
  getCountFromServer,
  query,
  collection,
} from "firebase/firestore";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";

export default function Hero() {
  const posterUrl = ref("");
  const logoUrl = ref("");
  const themeColor = ref("");
  const loaded = ref(false);
  const animeData = ref(null);

  watchEffect(async () => {
    animeData.value = await getRandomAnime();
    posterUrl.value = await getPoster();
    logoUrl.value = await getLogo();
    themeColor.value = await getThemeColorFromImage(posterUrl.value);
    loaded.value = true;
  });

  async function getRandomId() {
    const q = query(collection(db, "anime"));
    const countResponse = await getCountFromServer(q);
    const count = countResponse.data().count;
    const randomId = Math.floor(Math.random() * count + 1);
    // return randomId;
    return 6;
  }

  async function getRandomAnime() {
    const randomId = await getRandomId();
    const animeRef = query(
      collection(db, "anime"),
      where("idNumber", "==", randomId)
    );
    const {
      docs: [doc],
    } = await getDocs(animeRef);

    return doc.data();
  }
  async function getPoster() {
    const href = `/anime/${animeData.value.name}/${animeData.value.poster}`;
    const posterStorage = getStorage();
    const url = await getDownloadURL(fireRef(posterStorage, href));
    return url;
  }

  async function getLogo() {
    const href = `/anime/${animeData.value.name}/${animeData.value.shortName}.png`;
    const posterStorage = getStorage();
    const url = await getDownloadURL(fireRef(posterStorage, href));
    return url;
  }

  function getThemeColorFromImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // CORS 허용된 이미지일 경우 필요
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        let r = 0,
          g = 0,
          b = 0;
        const length = data.length;

        for (let i = 0; i < length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }

        r = Math.floor(r / (length / 4));
        g = Math.floor(g / (length / 4));
        b = Math.floor(b / (length / 4));

        resolve(`rgb(${r} ${g} ${b})`);
      };

      img.onerror = reject;
    });
  }

  return { logoUrl, posterUrl, themeColor, loaded, animeData };
}

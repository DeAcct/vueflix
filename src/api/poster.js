import { ref, watchEffect } from "vue";

import { db } from "@/utility/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref as fireRef, getDownloadURL } from "firebase/storage";

export default function POSTER(aniTitle) {
  const url = ref("");
  const themeColor = ref("");
  const loaded = ref(false);
  watchEffect(async () => {
    url.value = await getURL();
    themeColor.value = await getThemeColorFromImage(url.value);
    loaded.value = true;
    console.log({ url, themeColor });
  });

  const _animeData = ref(null);
  async function getURL() {
    const animeRef = doc(db, "anime", aniTitle);
    const animeDoc = await getDoc(animeRef);
    if (!animeDoc.exists()) {
      throw new Error("No such document!");
    }
    _animeData.value = animeDoc.data();
    const href = `/anime/${aniTitle}/${_animeData.value.poster}`;
    const posterStorage = getStorage();
    const url = await getDownloadURL(fireRef(posterStorage, href));
    return url;
  }

  async function getLogo() {}

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

  return { url, themeColor, loaded };
}

import { ref, onMounted } from "vue";

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

import { FastAverageColor } from "fast-average-color";
import { useRGB2HSL } from "@/composables/canvas";

export default function Hero() {
  const posterUrl = ref("");
  const logoUrl = ref("");
  const themeColor = ref("");
  const loaded = ref(false);
  const animeData = ref(null);
  let prev;

  onMounted(refresh);

  async function refresh() {
    loaded.value = false;
    animeData.value = await getRandomAnime();
    const dirBase = `/anime/${animeData.value.name}`;
    posterUrl.value = await getImageURL(`${dirBase}/${animeData.value.poster}`);
    logoUrl.value = await getImageURL(
      `${dirBase}/${animeData.value.shortName}.png`
    );
    themeColor.value = await getThemeColorFromImage(posterUrl.value);
    loaded.value = true;
  }

  function getDifferentRandom(max, prev) {
    if (max <= 1) return 1; // max가 1 이하일 경우 1을 반환
    let rand;
    do {
      rand = Math.floor(Math.random() * max) + 1;
    } while (rand === prev);
    return rand;
  }

  async function getRandomId() {
    const q = query(collection(db, "anime"));
    const { count } = (await getCountFromServer(q)).data();
    const randomId = getDifferentRandom(count, prev);
    prev = randomId;
    return randomId;
  }

  async function getRandomAnime() {
    const randomId = await getRandomId();
    const animeRef = query(
      collection(db, "anime"),
      where("idNumber", "==", randomId)
    );
    const docsSnap = await getDocs(animeRef);
    if (docsSnap.empty) return {}; // 혹은 기본값
    const doc = docsSnap.docs[0];
    return doc.data();
  }

  async function getImageURL(href) {
    const posterStorage = getStorage();
    const url = await getDownloadURL(fireRef(posterStorage, href));
    return url;
  }

  async function getThemeColorFromImage(url) {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      const fac = new FastAverageColor();
      const {
        value: [r, g, b],
        isDark,
      } = await fac.getColorAsync(img);
      const [h, s, l] = useRGB2HSL(r, g, b);
      return {
        theme: isDark ? "light" : "dark",
        color: `hsl(${h} ${s}% ${l}%)`,
      };
    } catch {
      return { theme: "light", color: "hsl(var(--theme-500))" };
    }
  }

  return { logoUrl, posterUrl, themeColor, loaded, animeData, refresh };
}

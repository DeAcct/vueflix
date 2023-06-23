import { useAsyncQueue, useAsyncState } from "@vueuse/core";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref as fireRef, getStorage } from "firebase/storage";
import { watch, ref } from "vue";

export function useQuery(collectionName, documentName, queryString, keyword) {
  const q = query(
    collection(getFirestore(), collectionName),
    where(documentName, queryString, keyword)
  );
  const { state: response } = useAsyncState(getDocs(q));
  return response;
}

export function useSlideImgSet(href) {
  const storage = getStorage();
  const extensions = [
    "_banner.jpg",
    "_banner.webp",
    "_banner_m.jpg",
    "_banner_m.webp",
    ".png",
  ];
  const tasks = extensions.map((extension) => {
    return getDownloadURL(fireRef(storage, `${href}${extension}`));
  });
  console.log(tasks);
  return useAsyncQueue(tasks);
}

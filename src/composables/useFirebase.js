import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const useFirebase = {
  methods: {
    async useQuery(collectionName, documentName, queryString, keyword) {
      const db = getFirestore();
      const ref = collection(db, collectionName);
      const q = query(ref, where(documentName, queryString, keyword));
      const response = await getDocs(q);
      let data;
      response.forEach((doc) => {
        data = doc.data();
      });
      return data;
    },
    async useMultimediaURL(fileName) {
      const storage = getStorage();
      const target = ref(storage, fileName);
      const url = await getDownloadURL(target);
      return url;
    },
  },
};

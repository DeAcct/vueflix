import { db } from "@/utility/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";

export async function Read(amount, before) {
  const docLength = await ReadAllCurationCount();

  const _before = before.map(({ id }) => id);

  const indices = new Set();
  while (indices.size < amount) {
    const randomIndex = Math.floor(Math.random() * docLength);
    if (_before.includes(randomIndex)) continue;
    console.log(randomIndex, before);
    indices.add(randomIndex);
  }

  console.log(indices);

  const promises = [...indices].map(async (index) => {
    const q = query(collection(db, "recommend"), where("id", "==", index));
    return getDocs(q);
  });

  const curation = (await Promise.all(promises)).map((doc) =>
    doc.docs[0].data()
  );

  return curation;
}

export async function ReadAllCurationCount() {
  const q = query(collection(db, "recommend"));
  const countResponse = await getCountFromServer(q);
  const count = countResponse.data().count;
  return count;
}

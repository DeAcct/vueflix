import { onMounted, ref } from "vue";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/utility/firebase";

export function useCarouselList() {
  // let randomMaxNumber = 0;
  // const randomMaxNumber = ref(0);
  const idArray = ref([]);
  onMounted(async () => {
    // const docRef = doc(db, "statistics", "statistics");
    // const res = await getDoc(docRef);
    // randomMaxNumber = res.data().numbersofAnime;
    // idArray.value = slideRandomID(randomMaxNumber);
    const animes = collection(db, "anime");
    const snap = await getCountFromServer(animes);
    const _size = snap.data().count;
    idArray.value = slideRandomID(_size);
  });

  function slideRandomID(max) {
    let result = [];
    while (result.length < max) {
      const candidateNum = Math.floor(Math.random() * max + 1);
      const isDuplicated = result.includes(candidateNum);
      if (!isDuplicated) {
        result.push(candidateNum);
      }
    }
    return result;
  }

  return { idArray };
}

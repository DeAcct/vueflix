import { onMounted, ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

export function useCarouselList() {
  let randomMaxNumber = 0;
  const idArray = ref([]);
  onMounted(async () => {
    const docRef = doc(db, "statistics", "statistics");
    const res = await getDoc(docRef);
    randomMaxNumber = res.data().numbersofAnime;
    idArray.value = slideRandomID(randomMaxNumber);
  });

  function slideRandomID(max) {
    let result = [];
    while (result.length < max) {
      const candidateNum = Math.floor(Math.random() * randomMaxNumber + 1);
      const isDuplicated = result.includes(candidateNum);
      if (!isDuplicated) {
        result.push(candidateNum);
      }
    }
    return result;
  }

  return { idArray };
}

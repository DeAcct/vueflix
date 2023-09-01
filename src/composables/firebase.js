import { ref as fireRef, getDownloadURL } from "firebase/storage";
import { ref, onMounted } from "vue";
import { storage } from "@/utility/firebase";

export function useFirebaseStorage(fileName) {
  const fileRef = fireRef(storage, fileName);
  const fileSrc = ref("");
  onMounted(async () => {
    fileSrc.value = await getDownloadURL(fileRef);
  });
  return { fileSrc };
}

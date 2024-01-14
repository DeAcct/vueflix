import { ref as fireRef, getDownloadURL } from "firebase/storage";
import { ref, watch } from "vue";
import { storage } from "@/utility/firebase";

export function useFirebaseStorage(fileName) {
  const fileRef = fireRef(storage, fileName);
  const fileSrc = ref("");
  watch(
    () => fileName,
    async () => {
      if (!fileName) return;
      fileSrc.value = await getDownloadURL(fileRef);
    },
    { immediate: true }
  );
  return { fileSrc };
}

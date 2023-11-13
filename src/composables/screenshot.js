import { ref } from "vue";

export function useVideoScreenshot($video) {
  if (!$video.value) {
    return;
  }

  const downloadURL = ref("");

  const canvas = document.createElement("canvas");
  canvas.width = $video.value.videoWidth;
  canvas.height = $video.value.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage($video.value, 0, 0, canvas.width, canvas.height);
  downloadURL.value = canvas.toDataURL("image/jpeg");

  return { downloadURL };
}

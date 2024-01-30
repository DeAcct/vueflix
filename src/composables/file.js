export function useFileToDataURL(target) {
  if (!FileReader) {
    throw new Error("파일을 변환하는데 실패했습니다.");
  }
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(target);
  });
}

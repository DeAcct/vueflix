import { onMounted, onUnmounted } from "vue";

/**
 * 브라우저의 head부분을 원하는대로 변경합니다.
 * @param {{
 *  title?:string,
 *  meta?: {
 *    description?:string,
 *    keywords?:string,
 *    "og:site_name"?:string,
 *    "og:title"?:string,
 *    "og:description"?:string,
 *    "og:image"?:string,
 *    "og:url"?:string,
 *  }
 * }} param 바꿀 제목 및 메타데이터
 */
export function useHead({ title, meta }) {
  let before = {};
  function apply() {
    if (title) {
      before = { title: document.title };
      document.title = title;

      /** @type {Array<HTMLMetaElement>} */
      const titleMeta = document.querySelectorAll([
        "meta[name='title']",
        "meta[property='og:title']",
      ]);
      titleMeta.forEach((meta) => {
        meta.content = title;
      });
    }

    for (const metaName in meta) {
      before[metaName] = document.querySelector(
        `meta[name="${metaName}"]`
      )?.content;
      /** @type {HTMLMetaElement} */
      const targetMeta =
        document.querySelector(`meta[name="${metaName}"]`) ||
        document.querySelector(`meta[property="${metaName}"]`);
      console.log(targetMeta);
      targetMeta.content = meta[metaName];
    }
  }

  function revert() {
    if (title) {
      document.title = before.title;
    }
    for (const metaName in meta) {
      /** @type {HTMLMetaElement} */
      const targetMeta =
        document.querySelector(`meta[name="${metaName}"]`) ||
        document.querySelector(`meta[property="${metaName}"]`);
      targetMeta.content = before[metaName];
    }
  }
  onMounted(() => apply());
  onUnmounted(() => revert());
}

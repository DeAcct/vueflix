import { onMounted, onUnmounted } from "vue";

const _query = (name) =>
  document.querySelector(`meta[name="${name}"]`) ||
  document.querySelector(`meta[property="${name}"]`);

/**
 * 브라우저의 head부분을 원하는대로 변경합니다.
 * @param {{
 *  title?:string,
 *  meta?: {
 *    description?:string,
 *    keywords?:string,
 *    "og:site_name"?:string,
 *    "og:description"?:string,
 *    "og:image"?:string,
 *    "og:url"?:string,
 *  }
 * }} param 바꿀 제목 및 메타데이터
 */
export function useHead({ title, meta }) {
  // 작업을 진행하기 전 head를 저장하는 변수
  let before = {};

  function change() {
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
      const targetMeta = _query(metaName);
      before[metaName] = targetMeta?.content;
      /** @type {HTMLMetaElement} */
      targetMeta.content = meta[metaName];
    }
  }

  function revert() {
    if (title) {
      document.title = before.title;
    }
    for (const metaName in meta) {
      /** @type {HTMLMetaElement} */
      const targetMeta = _query(metaName);
      targetMeta.content = before[metaName];
    }
  }
  onMounted(() => change());
  onUnmounted(() => revert());
}

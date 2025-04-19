import { doc, getDoc } from "firebase/firestore";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { db } from "@/utility/firebase";

export function useEpisode() {
  const animeInfo = ref({});
  const route = useRoute();
  watch(
    () => route.params,
    async () => {
      await getAnimeData();
    },
    { immediate: true }
  );

  async function getAnimeData() {
    animeInfo.value = (
      await getDoc(doc(db, "anime", route.params.title))
    ).data();
  }

  const nowEpisode = computed(() => {
    if (!animeInfo.value.parts) {
      return undefined;
    }
    const currentPart = animeInfo.value.parts?.find(
      ({ part }) => route.params.part === part
    )?.episodes;
    return currentPart?.find(({ index }) => route.params.index === index);
  });

  const nextEpisode = computed(() => {
    if (!animeInfo.value.parts) {
      return undefined;
    }
    const lastEpisode = animeInfo.value.parts
      .find(({ part }) => route.params.part === part)
      .episodes.at(-1);
    const lastPart = animeInfo.value.parts.at(-1);

    // 현재 에피소드로 초기화한 후 작업
    let nextPart = animeInfo.value.parts.findIndex(
      ({ part }) => route.params.part === part
    );
    let nextIndex = animeInfo.value.parts[nextPart].episodes.findIndex(
      ({ index }) => route.params.index === index
    );

    if (
      lastPart.part === route.params.part &&
      lastEpisode.index === route.params.index
    ) {
      return "다음 화 없음";
    }
    if (lastEpisode.index === route.params.index) {
      nextIndex = 0;
      nextPart++;
    } else {
      nextIndex++;
    }

    const { part, episodes } = animeInfo.value.parts[nextPart];
    return {
      part,
      ...episodes[nextIndex],
    };
  });

  const prevEpisode = computed(() => {
    if (!animeInfo.value.parts) {
      return undefined;
    }

    const currentPart = animeInfo.value.parts.find(
      ({ part }) => route.params.part === part
    );
    const firstPart = animeInfo.value.parts.at(0);
    const firstEpisode = currentPart?.episodes?.at(0);

    if (!currentPart || !firstEpisode || !firstPart) return undefined;

    // 현재 파트/인덱스 찾기
    let prevPart = animeInfo.value.parts.findIndex(
      ({ part }) => route.params.part === part
    );
    let prevIndex = currentPart.episodes.findIndex(
      ({ index }) => route.params.index === index
    );

    // 첫화면인지 확인
    if (
      firstPart.part === route.params.part &&
      firstEpisode.index === route.params.index
    ) {
      return "이전 화 없음";
    }

    // 파트 이동할 경우
    if (firstEpisode.index === route.params.index) {
      prevPart--;
      const newPart = animeInfo.value.parts[prevPart];
      if (!newPart) return undefined;
      prevIndex = newPart.episodes.length - 1;
    } else {
      prevIndex--;
    }

    const partData = animeInfo.value.parts[prevPart];
    if (!partData || !partData.episodes[prevIndex]) return undefined;

    return {
      part: partData.part,
      ...partData.episodes[prevIndex],
    };
  });

  const episodeCounter = computed(() => {
    if (!animeInfo.value.parts) {
      return 0;
    }
    return animeInfo.value.parts.reduce(
      (acc, cur) => acc + cur.episodes.length,
      0
    );
  });

  return {
    animeInfo,
    getAnimeData,
    nowEpisode,
    nextEpisode,
    prevEpisode,
    episodeCounter,
  };
}

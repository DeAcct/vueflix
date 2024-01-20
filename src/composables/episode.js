import { doc, getDoc } from "firebase/firestore";
import { computed, ref, onMounted } from "vue";
import { db } from "@/utility/firebase";

export function useEpisode(meta) {
  const animeInfo = ref({});
  onMounted(async () => {
    await getAnimeData();
  });

  async function getAnimeData() {
    animeInfo.value = (await getDoc(doc(db, "anime", meta.aniTitle))).data();
  }

  const nowEpisode = computed(() => {
    if (!animeInfo.value.parts) {
      return undefined;
    }
    const currentPart = animeInfo.value.parts.find(
      ({ part }) => meta.part === part
    ).episodes;
    return currentPart.find(({ index }) => meta.index === index);
  });

  const nextEpisode = computed(() => {
    if (!animeInfo.value.parts) {
      return undefined;
    }
    const lastEpisode = animeInfo.value.parts
      .find(({ part }) => meta.part === part)
      .episodes.at(-1);
    const lastPart = animeInfo.value.parts.at(-1);

    // 현재 에피소드로 초기화한 후 작업
    let nextPart = animeInfo.value.parts.findIndex(
      ({ part }) => meta.part === part
    );
    let nextIndex = animeInfo.value.parts[nextPart].episodes.findIndex(
      ({ index }) => meta.index === index
    );

    if (lastPart.part === meta.part && lastEpisode.index === meta.index) {
      return "다음 화 없음";
    }
    if (lastEpisode.index === meta.index) {
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
    const firstEpisode = animeInfo.value.parts
      .find(({ part }) => meta.part === part)
      .episodes.at(0);
    const firstPart = animeInfo.value.parts.at(0);

    // 현재 에피소드로 초기화한 후 작업
    let prevPart = animeInfo.value.parts.findIndex(
      ({ part }) => meta.part === part
    );
    let prevIndex = animeInfo.value.parts[prevPart].episodes.findIndex(
      ({ index }) => meta.index === index
    );

    if (firstPart.part === meta.part && firstEpisode.index === meta.index) {
      return "이전 화 없음";
    }
    if (firstEpisode.index === meta.index) {
      prevIndex = animeInfo.value.parts.find(({ part }) => meta.part === part)
        .episodes.length;
      prevPart--;
    } else {
      prevIndex--;
    }

    const { part, episodes } = animeInfo.value.parts[prevPart];
    return {
      part,
      ...episodes[prevIndex],
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

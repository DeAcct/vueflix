import { computed } from "vue";

import { useAuth } from "@/store/auth";
export default function useContinue(aniTitle) {
  const auth = useAuth();
  const user = computed(() => auth.user);
  const continueData = computed(() => {
    if (!user.value) {
      return {
        link: `/anime-play/${aniTitle}/1기/1화`,
        text: "1화 1분 미리보기",
      };
    }
    const currentAnime = user.value.maraton.find(
      (anime) => anime.aniTitle === aniTitle
    );

    if (!currentAnime) {
      return {
        link: `/anime-play/${aniTitle}/1기/1화`,
        text: "정주행 시작",
      };
    }
    const latestUpdate = currentAnime.lastUpdate.toDate().getTime();
    const { part, index, progress } = currentAnime.episodes.find(
      (log) => log.time.toDate().getTime() === latestUpdate
    );
    return {
      link: `/anime-play/${aniTitle}/${part}/${index}`,
      text: `${part} ${index}부터 이어보기`,
      progress,
    };
  });

  return continueData;
}

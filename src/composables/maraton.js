import { computed } from "vue";
import { useAuth } from "@/store/auth";
import { db } from "@/utility/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export function useMaratonData() {
  // const route = useRoute();
  const auth = useAuth();

  const user = computed(() => auth.user);
  const maraton = computed(() => {
    if (!user.value) {
      return [];
    }
    return user.value.maraton;
  });
  /**
   * 사용자의 정주행 데이터를 불러온다.
   * @param {string} queryPart
   * @param {string} queryIndex
   * @returns
   */
  function getEpisodeProgress(aniTitle, queryPart, queryIndex) {
    const currentAniMaraton = maraton.value.find(
      (anime) => anime.aniTitle === aniTitle
    );
    if (!user.value || !currentAniMaraton?.episodes) {
      return { current: 0, max: 0, percent: "0%" };
    }
    const checker = currentAniMaraton.episodes.find(
      ({ part, index }) => queryPart === part && queryIndex === index
    );
    if (!checker) {
      return { current: 0, max: 0, percent: "0%" };
    }
    return {
      current: checker.progress.current,
      max: checker.progress.max,
      percent: `${(checker.progress.current / checker.progress.max) * 100}%`,
    };
  }

  async function updateMaraton({
    aniTitle,
    part,
    index,
    progress,
    thumbnail,
    title,
  }) {
    if (!user.value) {
      return;
    }
    const myDoc = doc(db, "user", user.value.uid);
    const aniTitleExists = user.value.maraton.find(
      (item) => item.aniTitle === aniTitle
    );
    const newItem = {
      part,
      index,
      progress,
      thumbnail,
      title,
      time: new Date(),
    };
    // 이 애니를 한 번도 시청한 적 없는 경우
    if (!aniTitleExists) {
      await updateDoc(myDoc, {
        maraton: arrayUnion({
          aniTitle,
          episodes: [newItem],
          lastUpdate: newItem.time,
        }),
      });
      return;
    }
    const maraton = user.value.maraton.map((item) => {
      // 애니메이션 제목이 같은 경우
      if (item.aniTitle !== aniTitle) {
        return { ...item };
      }
      const exists = item.episodes.find(
        (episode) => episode.part === part && episode.index === index
      );
      if (!exists) {
        // 파트와 인덱스가 같은게 존재하지 않을 경우
        // progress에 신규 아이템 생성
        return {
          aniTitle,
          episodes: [...item.episodes, newItem],
          lastUpdate: newItem.time,
        };
      }
      const episodes = item.episodes.map((episode) => {
        // 파트와 인덱스가 같은게 존재할 경우
        // 시청 기록을 업데이트
        if (episode.part === part && episode.index === index) {
          return newItem;
        }
        return { ...episode };
      });
      return {
        aniTitle,
        episodes,
        lastUpdate: newItem.time,
      };
    });
    try {
      await updateDoc(myDoc, {
        maraton,
      });
    } catch (e) {
      console.log(e);
    }

    await auth.syncUser();
  }

  async function clearMaraton(title) {
    const maraton = user.value.maraton.filter(
      (item) => item.aniTitle !== title
    );
    await updateDoc(myDoc, {
      maraton,
    });
    await auth.syncUser();
  }

  function latest(number = "all") {
    if (!user.value) {
      return [];
    }

    // 최근 시청한 에피소드를 불러온다.
    // 정렬
    const sortLatest = maraton.value.toSorted((a, b) => {
      const prev = a.lastUpdate.toDate().getTime();
      const next = b.lastUpdate.toDate().getTime();
      return prev - next;
    });
    // 평탄화
    const flatten = sortLatest.map((log) => {
      return {
        aniTitle: log.aniTitle,
        ...log.episodes.find(
          (episode) =>
            episode.time.toDate().getTime() ===
            log.lastUpdate.toDate().getTime()
        ),
      };
    });
    if (number === "all") {
      return flatten;
    }
    return flatten.slice(-1 * number);
  }

  return { maraton, getEpisodeProgress, updateMaraton, clearMaraton, latest };
}

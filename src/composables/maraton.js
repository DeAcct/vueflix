import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

/**
 * 사용자의 정주행 데이터를 불러와
 * @param {string} queryPart
 * @param {string} queryIndex
 * @returns
 */
export function useMaratonData(queryPart, queryIndex) {
  const route = useRoute();
  const store = useStore();

  const user = computed(() => store.state.auth.user);
  const maraton = computed(() => {
    if (!user.value) {
      return undefined;
    }
    const data = user.value.maratonWatch.find(
      ({ aniTitle }) => aniTitle === route.params.title
    );
    if (!data) {
      return [];
    }
    return data.list;
  });

  function getEpisodePercent(queryPart, queryIndex) {
    if (!user.value) {
      return "0%";
    }
    const checker = maraton.value.find(
      ({ part, index }) => queryPart === part && queryIndex === index
    );
    if (!checker) {
      return "0%";
    }
    return `${(checker.time.current / checker.time.max) * 100}%`;
  }

  return { maraton, getEpisodePercent };
}

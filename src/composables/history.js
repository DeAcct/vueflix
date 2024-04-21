import { computed, ref } from "vue";

import { useMaratonData } from "@/api/maraton";
import { useWannaSee } from "@/api/wannaSee";

const { latest, removeMaraton } = useMaratonData();
const { wannaSee, removeWannaSee } = useWannaSee();

const HISTORY_GROUP = [
  {
    text: "최근 본",
    key: "recent-watched",
    parser: useParser("episode"),
    progressBar: true,
    remove: removeMaraton,
    list: latest(6),
  },
  {
    text: "보고싶다",
    key: "wanna-see",
    parser: useParser("anime"),
    progressBar: false,
    remove: removeWannaSee,
    list: wannaSee.value,
  },
  {
    text: "구매한",
    key: "purchased",
    parser: useParser("anime"),
    progressBar: false,
    remove: () => {},
    list: [],
  },
  {
    text: "관심없음",
    key: "not-interested",
    parser: useParser("anime"),
    progressBar: false,
    remove: () => {},
    list: [],
  },
];

export function useHistory(select) {
  const tabs =
    select === "all"
      ? HISTORY_GROUP
      : HISTORY_GROUP.filter(({ key }) => select.includes(key));

  const tab = ref({ index: 0, key: tabs[0].key });
  function changeTab(e) {
    tab.value = {
      index: tabs.findIndex((item) => item.key === e),
      key: e,
    };
  }

  const list = computed(() => {
    switch (tab.value.key) {
      case "recent-watched":
        return latest(6);
      case "wanna-see":
        return wannaSee.value;
      case "purchased":
        return [];
      case "not-interested":
        return [];
    }
  });
  return { tabs, tab, changeTab, list };
}

export function useParser(type) {
  if (type === "episode") {
    return {
      thumbnail: ({ aniTitle, thumbnail }) => `/anime/${aniTitle}/${thumbnail}`,
      link: ({ aniTitle, part, index }) => ({
        picture: `/anime-play/${aniTitle}/${part}/${index}`,
        text: {
          query: {
            modal: aniTitle,
            route: "episodes",
          },
        },
      }),
    };
  }
  return {
    thumbnail: ({ aniTitle }) => `/anime/${aniTitle}/${aniTitle}.webp`,
    link: ({ aniTitle }) => ({
      picture: {
        query: {
          modal: aniTitle,
          route: "episodes",
        },
      },
      text: {
        query: {
          modal: aniTitle,
          route: "episodes",
        },
      },
    }),
  };
}

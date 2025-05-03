import { computed, ref, watch } from "vue";

import { useMaratonData } from "@/api/maraton";
import { useWannaSee } from "@/api/wannaSee";

export function useHistory(select = "all") {
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
      list: wannaSee,
    },
    {
      text: "소장한",
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
    editmode.value.on = false;
    editmode.value.selected.clear();
  }
  const list = computed(() => {
    const listMap = {
      "recent-watched": latest(),
      "wanna-see": wannaSee.value,
      purchased: [],
      "not-interested": [],
    };
    return listMap[tab.value.key];
  });

  const editmode = ref({
    on: false,
    selected: new Set(),
  });
  function toggleEditmode() {
    editmode.value.on = !editmode.value.on;
    if (!editmode.value.on) {
      editmode.value.selected.clear();
    }
  }
  async function removeItem() {
    if (editmode.value.selected.size !== 0) {
      await HISTORY_GROUP[tab.value.index].remove(editmode.value.selected);
    }
    toggleEditmode();
  }
  function selectAll() {
    if (editmode.value.selected.size === list.value.length) {
      editmode.value.selected.clear();
      return;
    }
    editmode.value.selected = new Set(list.value.map((item) => item.aniTitle));
  }

  watch(
    () => tab.value,
    () => {
      console.log(list);
    }
  );

  return {
    tabs,
    tab,
    list,
    changeTab,
    editmode,
    toggleEditmode,
    selectAll,
    removeItem,
  };
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

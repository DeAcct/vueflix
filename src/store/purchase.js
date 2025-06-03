import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBrowserStorage } from "@/composables/browserStorage";

export const usePurchase = defineStore("purchase", () => {
  const router = ref(["purchase"]);
  const selectedCard = ref({});

  const {
    data: cards,
    setData,
    clearData,
    deleteData,
  } = useBrowserStorage("cards", []);

  function go(to) {
    if (to === "purchase") {
      router.value = ["purchase"];
      return;
    }
    router.value.push(to);
  }

  function back() {
    if (router.value.length > 1) {
      router.value.pop();
    }
  }

  const current = computed(() => router.value.at(-1));

  function setCardData(data) {
    selectedCard.value = data;
    setData(cards.value.concat(data));
  }

  function selectCard(card) {
    selectedCard.value = card;
  }

  function deleteCard(card) {
    const result = cards.value.filter((item) => item.name !== card.name);
    setData(result);
    selectedCard.value = cards.value[0] || {};
  }

  const isRoot = computed(() => router.value.length === 1);

  return {
    cards,
    isRoot,
    selectedCard,
    router,
    current,
    go,
    back,
    setCardData,
    selectCard,
    deleteCard,
  };
});

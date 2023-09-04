<template>
  <div class="KeywordMy">
    <form class="KeywordMy__Survey">
      <label
        v-for="{ keyword, id } in reviewItems"
        :key="keyword"
        class="KeywordMy__Keyword"
      >
        <input
          type="checkbox"
          class="blind KeywordMy__SkellInput"
          v-model="surveyData"
          @change="setSurveyData"
          :value="id"
        />
        <i class="KeywordMy__Icon">
          <IconBase v-if="surveyData.includes(id)">
            <IconSelected />
          </IconBase>
          <IconBase v-else>
            <IconNotSelected />
          </IconBase>
        </i>
        <span class="KeywordMy__Text">
          {{ keyword }}
        </span>
      </label>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import { updateDoc, increment, doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import IconBase from "./IconBase.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconNotSelected from "./icons/IconNotSelected.vue";
import { useRoute } from "vue-router";

const reviewItems = [
  {
    keyword: "그림체",
    id: "drawing",
  },
  {
    keyword: "배경음악",
    id: "bgm",
  },
  {
    keyword: "성우 연기",
    id: "voice",
  },
  {
    keyword: "스토리",
    id: "story",
  },
  {
    keyword: "연출",
    id: "directing",
  },

  {
    keyword: "캐릭터",
    id: "character",
  },
];

const store = useStore();
const user = computed(() => store.state.auth.user);
const surveyData = ref([]);

const route = useRoute();
onMounted(async () => {
  const docRef = doc(db, "user", user.value.uid);
  const myData = (await getDoc(docRef))
    .data()
    .keywordReview.find(({ aniTitle }) => route.params.title === aniTitle);

  if (!myData) {
    return;
  }
  surveyData.value = myData.likeIt;
});

const emits = defineEmits(["data-changed"]);
async function setSurveyData(e) {
  const method = e.currentTarget.checked ? 1 : -1;
  const animeUpdateObj = {};
  animeUpdateObj[`keywordReview.${e.currentTarget.value}.value`] =
    increment(method);
  await updateDoc(doc(db, "anime", route.params.title), animeUpdateObj);

  store.commit("auth/updateKeywordReview", {
    aniTitle: route.params.title,
    likeIt: surveyData,
  });

  await updateDoc(doc(db, "user", user.value.uid), {
    keywordReview: user.value.keywordReview,
  });
  emits("data-changed");
}
</script>

<style lang="scss" scoped>
.KeywordMy {
  &__Survey {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }
  &__Keyword {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background-color: hsl(var(--theme-500) / 0.1);
    border-radius: var(--global-radius);
    gap: 0.4rem;
  }

  &__Icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;
  }
  &__SkellInput:checked + &__Icon {
    color: hsl(var(--theme-500));
  }
  &__Text {
    font-size: 1.3rem;
    font-weight: 500;
  }
}
@media screen and (min-width: 1080px) {
  .KeywordMy {
    display: flex;
    align-items: center;
    &__Title {
      display: none;
    }
    &__Text {
      font-size: 1.5rem;
    }
  }
}
</style>

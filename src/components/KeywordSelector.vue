<template>
  <div class="KeywordSelector">
    <form class="KeywordSelector__Survey">
      <label
        v-for="{ keyword, id } in reviewItems"
        :key="keyword"
        class="KeywordSelector__Keyword"
      >
        <input
          type="checkbox"
          class="blind KeywordSelector__SkellInput"
          v-model="selected"
          @change="onChange"
          :value="id"
        />
        <i class="KeywordSelector__Icon">
          <IconBase v-if="selected.includes(id)">
            <IconSelected />
          </IconBase>
          <IconBase v-else>
            <IconNotSelected />
          </IconBase>
        </i>
        <span class="KeywordSelector__Text">
          {{ keyword }}
        </span>
      </label>
    </form>
  </div>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconSelected from "./icons/IconSelected.vue";
import IconNotSelected from "./icons/IconNotSelected.vue";

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
  {
    keyword: "작화(움직임)",
    id: "sakuga",
  },
];

// const store = useStore();
// const user = computed(() => store.state.auth.user);

const selected = defineModel("selected", {
  type: Array,
});

const emits = defineEmits(["new-check"]);
function onChange(e) {
  emits("new-check", e);
}
</script>

<style lang="scss" scoped>
.KeywordSelector {
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
  .KeywordSelector {
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

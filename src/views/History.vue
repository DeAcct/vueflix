<template>
  <main class="History">
    <MultiSelector
      :data
      v-model="tab"
      class="History__Selector"
      @update:model-value="onChange"
    />
    <Transition name="history-fade">
      <HistoryGroup
        :list="wannaSee"
        :parser="useParser('anime')"
        v-if="tab === 0"
        class="History__List"
      ></HistoryGroup>
      <div v-else class="History__List History__List--Reaction">
        {{ reacitons }}
        <ReactionItem
          v-for="reaction in reactions"
          :key="reaction._id"
          :user
          :reaction-data="reaction"
          component="RouterLink"
          to="#none"
          class="History__ReactionItem"
        >
          <template #from> | {{ reaction.parent }} </template>
          <template #content>
            <ReactionParser :content="reaction.content" />
          </template>
          <template #edited>{{ reaction.isEdited ? "(수정됨)" : "" }}</template>
        </ReactionItem>
      </div>
    </Transition>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import { useAuth } from "@/store/auth";

import { useWannaSee } from "@/api/wannaSee";
import { getNickname } from "@/api/userMeta";
import { ReadByUid as getReactions } from "@/api/reaction";
import { useParser } from "@/composables/history";

import HistoryGroup from "@/components/HistoryGroup.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import ReactionItem from "@/components/ReactionItem.vue";
import ReactionParser from "@/components/ReactionParser.vue";

const { getWannaSee } = useWannaSee();
const wannaSee = ref([]);
const reactions = ref([]);
const route = useRoute();

const auth = useAuth();
const user = computed(() => auth.user);

const tab = ref(0);
function onChange(e) {
  tab.value = data.value.map(({ key }) => key).findIndex((item) => item === e);
}

const data = computed(() => [
  {
    key: "wanna-see",
    text: `보고싶다 ${wannaSee.value.length}`,
  },
  {
    key: "reaction",
    text: `반응 ${reactions.value.length}`,
  },
]);

onMounted(async () => {
  wannaSee.value = await getWannaSee(route.params.uid);
  route.meta.appBar.activityContent = await getNickname(route.params.uid);
  reactions.value = await getReactions(route.params.uid);
});
</script>

<style lang="scss" scoped>
.History {
  padding: var(--header-height) 0;

  &__Selector {
    --item-width: 50%;
    padding: {
      top: 1.5rem;
      left: 2rem;
      right: 2rem;
    }
    background-color: transparent;
    margin: 0 auto;
    width: min(100%, 124rem);
  }
  &__List {
    margin: 1.5rem auto 0;
    width: min(100%, 124rem);
  }
  &__ReactionItem {
    & + & {
      border-top: 1px solid hsl(var(--bg-200));
    }
  }
}

.history {
  &-fade {
    &-enter-active,
    &-leave-active {
      transition: all 150ms ease-out;
      display: none;
    }
    &-enter-from,
    &-leave-to {
      translate: 2rem 0;
      opacity: 0;
      translate: 0 -1rem 0;
    }
  }
}

@media screen and (min-width: 769px) {
  .History {
    &__Selector {
      padding: {
        left: 0;
        right: 0;
      }
      --item-width: 10rem;
      justify-content: flex-start;
    }
    &__List--Reaction {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    &__ReactionItem {
      width: calc((100% - 1.6rem) / 3);
      background-color: hsl(var(--bg-200));
      border-radius: var(--global-radius);
      & + & {
        border-top: none;
      }
    }
  }
}
</style>

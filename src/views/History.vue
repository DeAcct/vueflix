<template>
  <main class="History">
    <MultiSelector
      :data
      v-model="tab"
      class="History__Selector"
      @update:model-value="onChange"
    />
    <div class="History__List">
      <Transition name="history-fade">
        <HistoryGroup
          :list="wannaSee"
          :parser="useParser('anime')"
          v-if="tab === 0"
        ></HistoryGroup>
        <div v-else>
          <ReactionItem
            v-for="reaction in reactions"
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
            <template #edited>{{
              reaction.isEdited ? "(수정됨)" : ""
            }}</template>
          </ReactionItem>
        </div>
      </Transition>
    </div>
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
      left: var(--inner-padding);
      right: var(--inner-padding);
    }
    background-color: transparent;
  }
  &__List {
    margin-top: 1.5rem;
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
    }
    &-leave-active {
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
</style>

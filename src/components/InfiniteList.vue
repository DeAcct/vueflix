<template>
  <div class="InfiniteList">
    <div class="InfiniteList__Controller" v-if="list.allCount !== 0">
      <SelectOption
        :options="props.orderOptions"
        v-model="by"
        class="InfiniteList__By"
      ></SelectOption>
      <MultiSelector
        :data="ORDER"
        v-model="order"
        class="InfiniteList__Order"
      />
    </div>
    <TransitionGroup
      tag="ul"
      name="reaction-list"
      :class="list.allCount !== 0 && 'InfiniteList__List--Exist'"
    >
      <slot name="content" :list></slot>
    </TransitionGroup>
    <div class="InfiniteList__End" ref="$ReadMore" v-if="!isLastPage">
      <LoadAnimation class="InfiniteList__MoreLoadAnimation" />
    </div>
  </div>
</template>

<script setup>
// infinite scroll
import { ref, computed, watch } from "vue";
import { useIntersection } from "@/composables/intersection";

import { endAt, limit, startAfter } from "firebase/firestore";

import LoadAnimation from "@/components/LoadAnimation.vue";
import MultiSelector from "@/components/MultiSelector.vue";
import SelectOption from "@/components/SelectOption.vue";

const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
  limit: {
    type: Number,
    default: 10,
  },
  read: {
    type: Function,
    required: true,
  },
  counter: {
    type: Function,
    required: true,
  },
  orderOptions: {
    type: Array,
  },
});

const list = ref({ visible: [], allCount: 0 });
const lastDoc = ref(null);
const isLastPage = computed(() => {
  return list.value.visible.length === list.value.allCount;
});

const by = ref("time");
const order = ref("desc");
const ORDER = [
  { text: "내림차순", key: "desc" },
  { text: "오름차순", key: "asc" },
];
const orderBy = computed(() => ({ [by.value]: order.value }));

watch(
  [() => props.query, () => orderBy.value],
  async () => {
    await sync();
  },
  { immediate: true }
);
async function sync() {
  const { reactions: data, lastDoc: last } = await props.read(
    props.query,
    orderBy.value,
    lastDoc.value ? endAt(lastDoc.value) : limit(props.limit)
  );
  list.value.visible = data;
  list.value.allCount = await props.counter(props.query);
  lastDoc.value = last;
}

const $ReadMore = ref(null);
useIntersection($ReadMore, async () => {
  if (isLastPage.value) {
    return;
  }
  await readMore();
});
async function readMore() {
  const { reactions: data, lastDoc: last } = await props.read(
    props.query,
    orderBy.value,
    startAfter(lastDoc.value),
    limit(10)
  );
  list.value.visible.push(...data);
  lastDoc.value = last;
}
</script>

<style lang="scss" scoped>
.InfiniteList {
  &__Controller {
    display: flex;
    padding: 2rem 2rem 0;
    gap: 0.8rem;
  }
  &__By {
    --select-option-font-size: 1.4rem;
    --select-option-padding: 0.8rem 1.2rem;
    color: hsl(var(--text-600));
  }
  &__Order {
    border-radius: 9999px;
    --item-padding: 0 0.8rem;
    --item-height: 3.2rem;
    font-size: 1.4rem;
    color: hsl(var(--text-600));
  }
  &__MoreLoadAnimation {
    display: block;
    width: 4rem;
  }
}

.reaction-list-move,
.reaction-list-enter-active,
.reaction-list-leave-active {
  transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.reaction-list-enter-active {
  transition-delay: 150ms;
}

.reaction-list-enter-from,
.reaction-list-leave-to {
  opacity: 0;
}

.reaction-list-leave-active {
  position: absolute;
}
</style>

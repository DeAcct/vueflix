<template>
  <section class="TextReview inner">
    <h2 class="TextReview__Title"><slot name="title"></slot></h2>
    <WriteReview
      class="TextReview__Write"
      @new-review="addedTrigger"
      @edit-review="editedTrigger"
      @edit-canceled="editModeOff"
      :user="user"
      :type="type"
      v-if="type === 'comment' || mode === 'edit'"
    />
    <ul class="TextReview__List">
      <ReactionItem
        v-for="{ time, _id, uid, author, content } in reactions"
        :key="_id"
        :date="time"
        :self="uid === user?.uid"
        :reaction-id="_id"
        :type="type"
        :parent="parent"
        @request-edit="editModeOn(_id)"
        @request-delete="deleteTrigger(_id)"
      >
        <template #author>{{ author }}</template>
        <template #content>{{ content }}</template>
      </ReactionItem>
    </ul>
  </section>
</template>

<script setup>
// 리액션의 형태는 두 가지
// ["리뷰", "코멘트"]
// 리뷰는 애니메이션에 작성하는 항목
// 코멘트는 각 에피소드마다 작성하는 항목

import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useReaction } from "@/api/reaction";

import WriteReview from "./WriteReview.vue";
import ReactionItem from "./ReactionItem.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review"].includes(value);
    },
  },
});

const route = useRoute();

const store = useStore();
const user = computed(() => store.state.auth.user);

const parent = computed(() =>
  props.type === "review"
    ? route.params.title
    : `${route.params.title} ${route.params.part} ${route.params.index}`
);

const mode = ref("write");

const { reactions, Create, Read, Update, Delete } = useReaction({
  type: props.type,
  parent: parent.value,
});

async function addedTrigger(e) {
  await Create({ ...e });
}

onMounted(async () => {
  await Read();
});

const editTarget = ref("");
function editModeOn(id) {
  mode.value = "edit";
  editTarget.value = id;
}
function editModeOff() {
  mode.value = "write";
  editTarget.value = "";
}
async function editedTrigger(e) {
  await Update({ ...e, id: editTarget.value });
  editModeOff();
}

async function deleteTrigger(id) {
  await Delete({ id });
}
</script>

<style lang="scss" scoped>
.TextReview {
  width: 100%;
  max-width: 1080px;
  position: relative;
  border-radius: var(--global-radius);
  overflow: hidden;
  &__Title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
  &__description {
    font-size: 1.3rem;
  }
  &__List {
    background-color: hsl(var(--bg-200));
    border-radius: var(--global-radius);
    margin-top: 1rem;
  }
  &__Write {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 1080px) {
  .TextReview {
    padding: 0 2rem;
    &__Title {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

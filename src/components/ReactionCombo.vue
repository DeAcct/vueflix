<template>
  <section class="ReactionCombo">
    <template v-if="showTitle">
      <component :is="titleTag" class="ReactionCombo__Title"
        ><slot name="title"></slot
        ><span class="ReactionCombo__Counter">{{
          reactions.length
        }}</span></component
      >
    </template>
    <div class="ReactionCombo__Body">
      <WriteReaction
        class="ReactionCombo__Write"
        @mutate="onMutate"
        :user="user"
        :type="type"
        :parent="parent"
        v-if="
          type === 'comment' ||
          (type === 'review' &&
            reactions.filter((review) => review.uid === user?.uid))
        "
        @interact="setInteract"
      />
      <ul class="ReactionCombo__List" v-if="reactions?.length">
        <ReactionItem
          v-for="reaction in reactions"
          :key="reaction._id"
          :reaction-data="reaction"
          :user="user"
          :type="type"
          @mutate="onMutate"
          @interact="setInteract"
          class="ReactionCombo__Item"
        >
          <template #author>{{
            reaction.uid === user?.uid ? "나" : reaction.author
          }}</template>
          <template #content>
            <ReactionParser
              :content="reaction.content"
              @request-teleport="requestTeleport"
            />
          </template>
          <template #edited>{{ reaction.isEdited ? "(수정됨)" : "" }}</template>
        </ReactionItem>
      </ul>
    </div>
  </section>
</template>

<script setup>
// 리액션의 형태는 두 가지
// ["리뷰", "코멘트"]
// 리뷰는 애니메이션에 작성하는 항목
// 코멘트는 각 에피소드마다 작성하는 항목

import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";

import { Read } from "@/api/reaction";

import WriteReaction from "./WriteReaction.vue";
import ReactionItem from "./ReactionItem.vue";
import ReactionParser from "./ReactionParser.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review"].includes(value);
    },
  },
  titleTag: {
    type: String,
    required: true,
    validator(value) {
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    },
  },
  parent: {
    type: String,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["interact", "request-teleport"]);
function setInteract(e) {
  emits("interact", e);
}

const store = useStore();
const user = computed(() => store.state.auth.user);

const reactions = ref([]);

watchEffect(async () => {
  reactions.value = await Read({
    parent: props.parent,
    type: props.type,
    user,
  });
});
async function onMutate() {
  reactions.value = await Read({
    parent: props.parent,
    type: props.type,
    user,
  });
}
function requestTeleport(e) {
  emits("request-teleport", e);
}
</script>

<style lang="scss" scoped>
.ReactionCombo {
  width: 100%;
  max-width: 1080px;
  position: relative;
  overflow: hidden;
  &__Title {
    font-size: inherit;
    font-weight: 700;
    margin-bottom: 1.2rem;
    display: flex;
    gap: 0.4rem;
  }
  &__description {
    font-size: 1.3rem;
  }
  &__Body {
    display: flex;
    flex-direction: column;
    border-radius: var(--global-radius);
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    padding: 1px;
    gap: 1px;
  }
  &__Write {
    padding: 2rem;
    background-color: hsl(var(--bg-200) / 0.5);
    border-radius: var(--global-radius) var(--global-radius) 0 0;
    &:last-child {
      border-radius: var(--global-radius);
    }
  }
  &__List {
    overflow: hidden;
    border-radius: 0 0 var(--global-radius) var(--global-radius);
    background-color: hsl(var(--bg-200) / 0.5);
  }
  &__Item {
    background-color: transparent;
    &:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-300));
    }
  }
}

@media screen and (min-width: 1080px) {
  .ReactionCombo {
    &__Title {
      font-size: 1.8rem;
    }
  }
}
</style>

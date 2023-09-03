<template>
  <component
    :is="component"
    :class="[
      'ReactionItem',
      { 'ReactionItem--Me': self },
      { 'ReactionItem--Other': !self },
    ]"
  >
    <div class="row-top">
      <strong class="ReactionItem__Author">
        <template v-if="self">나</template>
        <template v-else> <slot name="author"></slot></template>
      </strong>
      <p class="ReactionItem__Date">{{ formattedDate }}</p>
    </div>
    <div class="ReactionItem__Content">
      <template v-if="mode === 'edit'">
        <textarea
          class="ReactionItem__EditInput"
          placeholder="새 내용을 입력해 주세요"
          :value="editValue"
        />
      </template>
      <p class="ReactionItem__Text" v-else>
        <slot name="content"></slot>
      </p>
    </div>
    <div class="ReactionItem__Actions">
      <VueflixBtn
        component="button"
        v-if="!self"
        class="ReactionItem__ActionItem"
        ><template #text> 신고 </template></VueflixBtn
      >
      <VueflixBtn
        component="button"
        v-if="self"
        @click="editTrigger"
        class="ReactionItem__ActionItem"
      >
        <template #text>
          {{ mode === "show" ? "수정" : "취소" }}
        </template>
      </VueflixBtn>
      <VueflixBtn
        component="button"
        v-if="self && mode === 'show'"
        @click="deleteTrigger"
        class="ReactionItem__ActionItem"
      >
        <template #text> 삭제 </template>
      </VueflixBtn>
    </div>
  </component>
</template>

<script setup>
import { ref } from "vue";
import { useFromDate } from "@/composables/dateFormat";
import { useReaction } from "@/api/reaction";
import VueflixBtn from "./VueflixBtn.vue";

const props = defineProps({
  date: {
    type: Object,
  },
  component: {
    type: String,
    default: "li",
  },
  self: {
    type: Boolean,
  },
  isMyReviewShown: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  parent: {
    type: String,
  },
  reactionId: {
    type: String,
  },
});

const { date: formattedDate } = useFromDate(props.date.toDate());

const { Update, Delete } = useReaction({
  type: props.type,
  parent: props.parent,
});

const editValue = ref("");

const mode = ref("show");
function editTrigger() {
  mode.value = mode.value === "edit" ? "show" : "edit";
}
function updateReaction() {
  Update({ id: reactionId, content: editValue.value });
}

function deleteTrigger() {
  emit("request-delete", props.uid);
}
</script>

<style lang="scss" scoped>
.ReactionItem {
  padding: 1.6rem 0;
  &--Me {
    border-radius: var(--global-radius);
    background-color: hsl(var(--bg-200));
  }
  &--Other {
    &:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-200));
    }
  }
  &__Author {
    font-size: 1.6rem;
    margin-right: 1rem;
  }
  &__Date {
    font-size: 1.2rem;
    font-weight: 300;
    margin-right: 0.5rem;
  }
  &__Content {
    margin-bottom: 1rem;
    position: relative;
  }
  &__Text {
    white-space: pre-line;
    word-break: break-all;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.3;
    animation: fade 150ms ease-out;
    padding: 0 2rem;
  }

  &__EditInput {
    resize: none;
    width: 100%;
    height: 9rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: inherit;
    background-color: hsl(var(--bg-300));
    border-radius: var(--global-radius);
    padding: 1.2rem 2rem;
    animation: down-fade 150ms ease-out;
    &::placeholder {
      font-size: 1.4rem;
      color: hsl(var(--bg-500));
    }
  }

  .row-top {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0 2rem;
  }

  &__Actions {
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }
  &__ActionItem {
    color: hsl(var(--text-700));
    font-size: 1.3rem;
    font-weight: 500;
    box-shadow: none;
    &:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
}

@keyframes down-fade {
  from {
    opacity: 0;
    height: 0;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
}

@media screen and (min-width: 1080px) {
  .ReactionItem {
    &__Author {
      font-size: 1.7rem;
      margin-right: 1.5rem;
    }
    &__Date {
      font-size: 1.3rem;
    }
    &__Content {
      font-size: 1.5rem;
    }
    &__Actions {
      button {
        font-size: 1.3rem;
      }
    }
    .row-top {
      margin-bottom: 0.5rem;
    }
  }
}
</style>

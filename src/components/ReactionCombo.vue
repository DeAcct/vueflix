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
        @interact="setInteract"
      />
      <TransitionGroup
        tag="ul"
        name="reaction-list"
        class="ReactionCombo__List"
        :class="{ 'ReactionCombo__List--Exist ': reactions?.length !== 0 }"
      >
        <ReactionItem
          v-for="(reaction, index) in reactions"
          :key="reaction._id"
          :reaction-data="reaction"
          :user="user"
          :type="type"
          :style="`--delay-amount:${index};`"
          @mutate="onMutate"
          @interact="setInteract"
          class="ReactionCombo__Item"
          actions
          meta-modal
        >
          <template #content>
            <ReactionParser
              :content="reaction.content"
              @request-teleport="requestTeleport"
            />
          </template>
          <template #edited>{{ reaction.isEdited ? "(수정됨)" : "" }}</template>
        </ReactionItem>
      </TransitionGroup>
    </div>
    <NativeDialog ref="$root" class="CheckModal">
      <template #title>
        <strong class="CheckModal__Title">
          정말 {{ currentModal.text }}하시겠습니까?
        </strong>
      </template>
      <template #control>
        <div class="CheckModal__Control">
          <VueflixBtn
            component="button"
            type="button"
            class="CheckModal__Button CheckModal__Button--Accent"
            @click="applyMutate"
            :icon="currentModal.isLoading"
          >
            <template #icon>
              <LoadAnimation class="CheckModal__Loading" />
            </template>
            <template #text>{{ currentModal.text }}</template>
          </VueflixBtn>
          <VueflixBtn
            component="button"
            type="button"
            class="CheckModal__Button"
            @click="close"
          >
            <template #text>취소</template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
  </section>
</template>

<script setup>
// 리액션의 형태는 두 가지
// ["리뷰", "코멘트"]
// 리뷰는 애니메이션에 작성하는 항목
// 코멘트는 각 에피소드마다 작성하는 항목

import { computed, onMounted, ref } from "vue";

import { Create, Read, Update, Delete } from "@/api/reaction";
import { useAuth } from "@/store/auth";
import { useOveray } from "@/composables/overay";

import LoadAnimation from "./LoadAnimation.vue";
import NativeDialog from "./NativeDialog.vue";
import VueflixBtn from "./VueflixBtn.vue";
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

const auth = useAuth();
const user = computed(() => auth.user);
const reactions = ref([]);

const { $root, show, close } = useOveray();
onMounted(async () => {
  reactions.value = await Read({
    parent: props.parent,
    type: props.type,
  });
});
const methodMap = {
  create: {
    action: Create,
    text: "등록",
  },
  update: {
    action: Update,
    text: "수정",
  },
  delete: {
    action: Delete,
    text: "삭제",
  },
};
const currentModal = ref({
  method: "",
  text: "",
  data: null,
  isLoading: false,
});
function onMutate(method, data) {
  // 일반적인 상황은 아니지만, 로그인하지 않은 상태에서 강제로 사용자가 댓글을 조작하는것을 방지
  if (!user.value) {
    return;
  }
  currentModal.value = {
    method,
    text: methodMap[method].text,
    data,
  };
  show();
}

async function applyMutate() {
  const { method, data } = currentModal.value;
  currentModal.value.isLoading = true;
  await methodMap[method].action(data);
  reactions.value = await Read({
    parent: props.parent,
    type: props.type,
  });
  currentModal.value.isLoading = false;
  close();
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
    padding: 0 2rem;
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
  }
  &__Write {
    background: linear-gradient(
      150deg,
      hsl(var(--bg-900) / 0.2),
      hsl(var(--bg-900) / 0.025)
    );
    padding: 2rem;
    background-color: hsl(var(--bg-200) / 0.5);
    border-radius: var(--global-radius);
    &:last-child {
      border-radius: var(--global-radius);
    }
    margin: 0 auto;
  }
  &__List {
    overflow: hidden;
    border-radius: 0 0 var(--global-radius) var(--global-radius);
    &--Exist {
      margin-top: 1px;
    }
  }
  &__Item {
    background-color: transparent;
    &:not(:last-child) {
      border-bottom: 1px solid hsl(var(--bg-200));
    }
  }
}

.CheckModal {
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
  &__Title {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
  }
  &__Important {
    color: hsl(var(--theme-500));
  }
  &__Control {
    display: flex;
  }
  &__Button {
    flex-direction: row-reverse;
    gap: 0.4rem;
    box-shadow: none;
    border-radius: var(--global-radius);
    &:first-child {
      background-color: hsl(var(--theme-500));
      margin-left: auto;
      color: #fff;
    }
  }
  &__Loading {
    width: 1.2rem;
  }
}

.reaction-list-move,
.reaction-list-enter-active,
.reaction-list-leave-active {
  transition: all 0.5s ease;
  transition-delay: calc(var(--delay-amount) * 100ms);
}

.reaction-list-enter-from,
.reaction-list-leave-to {
  opacity: 0;
  translate: 3rem 0;
}

.reaction-list-leave-active {
  position: absolute;
}

@media screen and (min-width: 1080px) {
  .ReactionCombo {
    &__Title {
      font-size: 1.8rem;
    }
  }

  .CheckModal {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: 40rem;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
}
</style>

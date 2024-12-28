<template>
  <section class="ReactionCombo">
    <slot name="title" :counter="reactions.allCount"></slot>
    <slot name="description"></slot>
    <!-- <LoginWidget
      v-if="!user"
      :btn-func="goAuth"
      class="ReactionCombo__LoginRequired"
    >
      <template #text>
        <h2>로그인하고 이 작품을 평가해보세요</h2>
      </template>
      <template #login-state-text>로그인</template>
    </LoginWidget> -->
    <WriteReaction
      class="ReactionCombo__TextArea"
      :class="writeable && 'ReactionCombo__TextArea--Show'"
      @mutate="onMutate"
      :type
      :parent
      @interact="setInteract"
      :time
      :user
    />
    <TransitionGroup
      tag="ul"
      name="reaction-list"
      class="ReactionCombo__List"
      :class="reactions.allCount !== 0 && 'ReactionCombo__List--Exist'"
    >
      <ReactionItem
        v-for="reaction in reactions.visible"
        :key="reaction._id"
        :reaction-data="reaction"
        :user="user"
        @mutate="onMutate"
        @interact="setInteract"
        @meta-modal="onMetaModal"
        class="ReactionCombo__Item"
        :class="
          reaction._id === route.query.reaction && 'ReactionCombo__Item--Blink'
        "
        actions
        :track-target="trackTarget && reaction._id === route.query.reaction"
      >
        <template #meta="{ self, data, time }">
          <ReactionMeta :self :data>
            <template #edited>
              {{ reaction.isEdited ? " &middot; 수정됨" : "" }}
            </template>
            <template #time>{{ time }}</template>
          </ReactionMeta>
        </template>
        <template #content>
          <ReactionParser
            :content="reaction.content"
            @request-teleport="requestTeleport"
            class="ReactionCombo__Content"
          />
        </template>
        <template #edited>{{ reaction.isEdited ? "(수정됨)" : "" }}</template>
      </ReactionItem>
    </TransitionGroup>
    <div class="ReactionCombo__End" ref="$ReadMore" v-if="!isLastPage">
      <LoadAnimation class="ReactionCombo__MoreLoadAnimation" />
    </div>
    <Teleport to="#Overay">
      <NativeDialog ref="$CheckModal" class="CheckModal" shade>
        <template #title>
          <strong class="CheckModal__Title">
            정말 {{ checkModal.text }}하시겠습니까?
          </strong>
        </template>
        <template #control>
          <div class="CheckModal__Control">
            <VueflixBtn
              component="button"
              type="button"
              class="CheckModal__Button CheckModal__Button--Accent"
              @click="applyMutate"
            >
              <template #icon>
                <LoadAnimation
                  class="CheckModal__Loading"
                  v-if="loadState === 'mutating'"
                />
              </template>
              <template #text>
                {{ checkModal.text }}
              </template>
            </VueflixBtn>
            <VueflixBtn
              component="button"
              type="button"
              class="CheckModal__Button"
              @click="$CheckModal.close"
            >
              <template #text>취소</template>
            </VueflixBtn>
          </div>
        </template>
      </NativeDialog>
      <NativeDialog ref="$MetaModal" class="MetaModal" shade>
        <template #content>
          <StatCard :uid class="MetaModal__Data" />
        </template>
        <template #control>
          <VueflixBtn
            component="button"
            class="MetaModal__CloseBtn"
            @click="$MetaModal.close"
            type="button"
          >
            <template #text>닫기</template>
          </VueflixBtn>
        </template>
      </NativeDialog>
    </Teleport>
  </section>
</template>

<script setup>
// 리액션의 형태는 두 가지
// ["리뷰", "코멘트"]
// 리뷰는 애니메이션에 작성하는 항목
// 코멘트는 각 에피소드마다 작성하는 항목

import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { endAt, limit, orderBy, startAfter, where } from "firebase/firestore";

import {
  Create,
  Read,
  ReadReactionCount,
  Update,
  Delete,
} from "@/api/reaction";
import { useAuth } from "@/store/auth";

import { useIntersection } from "@/composables/intersection";

import LoadAnimation from "@/components/LoadAnimation.vue";
import LoginWidget from "@/components/LoginWidget.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import WriteReaction from "@/components/WriteReaction.vue";
import ReactionItem from "@/components/ReactionItem.vue";
import ReactionParser from "@/components/ReactionParser.vue";
import StatCard from "@/components/StatCard.vue";
import ReactionMeta from "@/components/ReactionMeta.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value) {
      return ["comment", "review"].includes(value);
    },
  },
  parent: {
    type: Object,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  trackTarget: {
    type: Boolean,
  },
  time: {
    type: [String, Number],
    required: false,
  },
  once: {
    type: Boolean,
  },
});

const route = useRoute();

const emit = defineEmits(["interact", "request-teleport", "mutate", "delete"]);
function setInteract(e) {
  emit("interact", e);
}

const auth = useAuth();
const user = computed(() => auth.user);
const reactions = ref({ visible: [], allCount: 0 });

const writeable = ref(true);
async function setWriteable() {
  if (!props.once) {
    return;
  }
  const myReviewCount = await ReadReactionCount(
    {
      parent: props.parent,
      type: props.type,
    },
    where("uid", "==", user.value?.uid)
  );
  writeable.value = myReviewCount === 0;
}

/**
 * @type { import("vue").Ref<"complete" | "loading" | "mutating">}
 */
const loadState = ref("complete");
const lastDoc = ref(null);
const isLastPage = computed(() => {
  return reactions.value.visible.length === reactions.value.allCount;
});
// const isLastPage = ref(false);
watch(
  () => props.parent,
  async () => {
    await sync();
    setWriteable();
    // if (props.type === "review") {
    //   await setWriteable();
    // }
  },
  { immediate: true }
);
defineExpose({
  sync,
});
async function sync() {
  const { reactions: data, lastDoc: last } = await Read(
    { parent: props.parent, type: props.type },
    orderBy("time", "desc"),
    lastDoc.value ? endAt(lastDoc.value) : limit(10)
  );
  reactions.value.visible = data;
  reactions.value.allCount = await ReadReactionCount({
    parent: props.parent,
    type: props.type,
  });
  lastDoc.value = last;
}

async function readMore() {
  const { reactions: data, lastDoc: last } = await Read(
    {
      parent: props.parent,
      type: props.type,
    },
    orderBy("time", "desc"),
    startAfter(lastDoc.value),
    limit(10)
  );
  reactions.value.visible.push(...data);
  lastDoc.value = last;
}
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
const $CheckModal = ref(null);
const checkModal = ref({
  method: "",
  text: "",
  data: null,
});

async function onMutate(method, data) {
  // 일반적인 상황은 아니지만, 로그인하지 않은 상태에서 강제로 사용자가 댓글을 조작하는것을 방지
  if (!user.value) {
    return;
  }
  checkModal.value = {
    method,
    text: methodMap[method].text,
    data,
  };

  if (method === "create") {
    await applyMutate();
    return;
  }
  $CheckModal.value.show();
}

async function applyMutate() {
  const { method, data } = checkModal.value;
  loadState.value = "mutating";
  await methodMap[method].action(data);
  await sync();
  loadState.value = "complete";
  $CheckModal.value.close();
  setWriteable();
  if (method === "delete") {
    emit("delete");
  }
  // if (method !== "update" && props.once) {
  //   await setWriteable();
  // }
}

function requestTeleport(e) {
  emit("request-teleport", e);
}

const $MetaModal = ref(null);
const uid = ref(null);
function onMetaModal({ uid: _uid }) {
  uid.value = _uid;
  $MetaModal.value.show();
}

const $ReadMore = ref(null);
useIntersection($ReadMore, async () => {
  if (isLastPage.value) {
    return;
  }
  await readMore();
});
</script>

<style lang="scss" scoped>
.ReactionCombo {
  width: 100%;
  max-width: 1080px;
  position: relative;

  &__Title {
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  &__BetaLabel {
    font-size: 1.3rem;
    color: hsl(var(--theme-500));
  }
  &__Description {
    font-size: 1.3rem;
  }
  &__Write {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__TextArea {
    border-radius: calc(var(--global-radius) + 2rem);
    background-color: var(--reaction-combo-write-bg, hsl(var(--bg-200)));
    height: 0;
    transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1) allow-discrete;
    display: none;
    opacity: 0;
    border: 1px solid var(--reaction-combo-write-bg, hsl(var(--bg-200)));
    &--Show {
      height: auto;
      display: block;
      opacity: 1;
    }
    &:focus-within {
      border-color: hsl(var(--text-400));
    }
  }
  &__LoginRequired {
    padding: 2rem;
  }
  &__List {
    overflow: hidden;
    border-radius: 0 0 var(--global-radius) var(--global-radius);
    margin-top: 2rem;
  }
  &__Item {
    background-color: transparent;
    // padding: 2rem 0;
    & + & {
      border-top: 1px solid hsl(var(--bg-200));
      padding-top: 2rem;
      margin-top: 2rem;
    }
    // Remove padding from the last item
    &--Blink {
      animation: comment-blink 5s ease-out;
    }
  }

  &__End {
    display: flex;
    justify-content: center;
    padding: 2rem;
    height: 20rem;
  }
  &__MoreLoadAnimation {
    display: block;
    width: 4rem;
  }
}
@keyframes comment-blink {
  10% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  11% {
    background-color: transparent;
  }
  20% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  50% {
    background-color: hsl(var(--theme-500) / 0.15);
  }
  100% {
    background-color: transparent;
  }
}

.NativeDialog {
  position: fixed;
  z-index: 200;
  --dialog-inset: auto auto 0 0;
  --dialog-translate: 0 0;
  --dialog-max-width: 100%;
  --dialog-border-radius: calc(var(--global-radius) * 2)
    calc(var(--global-radius) * 2) 0 0;
}
.CheckModal {
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
.MetaModal {
  --dialog-padding: 2rem;
  &__Data {
    padding: 0;
  }
  &__CloseBtn {
    margin-top: 0.8rem;
    margin-left: auto;
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

@media screen and (min-width: 1080px) {
  .ReactionCombo {
    &__Title {
      font-size: 1.8rem;
    }
  }

  .NativeDialog {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: auto;
    --dialog-height: auto;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
  .CheckModal {
    --dialog-max-width: 40rem;
  }
  .MetaModal {
    --dialog-max-width: 50rem;
  }
}
</style>

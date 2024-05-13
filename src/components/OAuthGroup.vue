<template>
  <div class="OAuthGroup">
    <template v-for="({ text, icon }, key) in PROVIDERS" :key="`social-${key}`">
      <button
        class="OAuthGroup__Item"
        :class="`OAuthGroup__Item--${key}`"
        @click="showModal({ service: text, key })"
        type="button"
      >
        <IconBase>
          <component :is="icon" />
        </IconBase>
        <p class="OAuthGroup__Text">
          {{ text }}
        </p>
        <strong class="OAuthGroup__State">
          연결{{ enabled.includes(key) ? "됨" : "안됨" }}
        </strong>
      </button>
    </template>
    <NativeDialog ref="$root" class="OAuthGroupModal" shade>
      <template #title>
        <strong
          class="OAuthGroupModal__Title"
          v-if="currentModal.enabled && enabled.length === 1"
        >
          최소 한 개의 로그인 수단을 남겨야 합니다.
        </strong>
        <strong class="OAuthGroupModal__Title" v-else>
          {{ currentModal.service }}을
          <strong class="OAuthGroupModal__Important">{{
            currentModal.enabled ? "연결 해제" : "연결"
          }}</strong
          >할까요?
        </strong>
      </template>
      <template
        #content
        v-if="currentModal.key === 'Email' && !currentModal.enabled"
      >
        <div class="OAuthGroupModal__Content">
          <p class="OAuthGroupModal__Text">
            연결할 이메일과 비밀번호를 입력해주세요.
          </p>
          <UserFactory
            :hide="['nickname', 'profile']"
            submit-text="연결"
            type="connect"
          />
          <VueflixBtn
            type="button"
            component="button"
            @click="$root.close"
            class="OAuthGroupModal__Button OAuthGroupModal__Button--Wide"
          >
            <template #text>취소</template>
          </VueflixBtn>
        </div>
      </template>
      <template
        #control
        v-if="currentModal.key !== 'Email' || currentModal.enabled"
      >
        <div class="OAuthGroupModal__Control">
          <VueflixBtn
            component="button"
            type="button"
            class="OAuthGroupModal__Button OAuthGroupModal__Button--Accent"
            @click="toggleOAuth"
            v-if="!currentModal.enabled || enabled.length !== 1"
          >
            <template #text>
              {{ currentModal.enabled ? "연결 해제" : "연결" }}
            </template>
          </VueflixBtn>
          <VueflixBtn
            component="button"
            type="button"
            class="OAuthGroupModal__Button"
            @click="$root.close"
          >
            <template #text>{{
              !currentModal.enabled || enabled.length !== 1 ? "취소" : "확인"
            }}</template>
          </VueflixBtn>
        </div>
      </template>
    </NativeDialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";

import { PROVIDERS, connectedToKey } from "@/enums/OAuthProvider";

import { useAuth } from "@/store/auth";

import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import UserFactory from "@/views/UserFactory.vue";

import IconBase from "@/components/IconBase.vue";

const enabled = ref([]);
function setEnabled() {
  const auth = getAuth();
  if (!auth.currentUser) {
    enabled.value = [];
    return;
  }
  enabled.value = connectedToKey(auth.currentUser.providerData);
}
onMounted(() => {
  setEnabled();
});

const $root = ref(null);
/** @type {import("vue").Ref<{service:string, key:"Email" | "Google" | "Facebook"}>} */
const currentModal = ref({ service: "", key: "", enabled: false });
function showModal(changeTo) {
  currentModal.value = {
    ...changeTo,
    enabled: enabled.value.includes(changeTo.key),
  };
  console.log(currentModal.value.enabled);
  $root.value.show();
}

const auth = useAuth();
async function toggleOAuth() {
  if (currentModal.value.enabled) {
    await auth.disconnectAuth(currentModal.value.key);
  } else {
    await auth.connectAuth({ key: currentModal.value.key });
  }
  setEnabled();
  $root.value.close();
}
</script>

<style lang="scss" scoped>
.OAuthGroup {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  &__Item {
    flex-grow: 1;
    display: flex;
    gap: 0.8rem;
    text-wrap: nowrap;
    height: 3.6rem;
    padding: {
      left: 0.8rem;
      right: 1.2rem;
    }
    align-items: center;
    border-radius: var(--global-radius);
    color: #fff;
    box-shadow: 1px 1px 6px hsl(var(--bg-900) / 0.1);

    &--Email {
      background-color: hsl(var(--theme-500));
    }
    &--Google {
      color: hsl(var(--bg-800));
      background-color: #fff;
    }
    &--Facebook {
      background-color: #1977f3;
    }
  }
  &__State {
    color: inherit;
    margin-left: auto;
  }

  &__Text {
    color: inherit;
  }
  &Modal {
    --dialog-inset: auto auto 0 0;
    --dialog-translate: 0 0;
    --dialog-max-width: 100%;
    --dialog-border-radius: calc(var(--global-radius) * 2)
      calc(var(--global-radius) * 2) 0 0;
    &__Title {
      margin-bottom: 1.6rem;
      font-size: 2rem;
      width: 100%;
    }
    &__Content {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &__Text {
      margin-bottom: 1.8rem;
      font-size: 1.6rem;
      line-height: 1.3;
      text-wrap: pretty;
    }
    &__Important {
      color: hsl(var(--theme-500));
    }
    &__Control {
      display: flex;
      flex-direction: column;
    }
    &__Button {
      box-shadow: none;
      border-radius: calc(var(--global-radius) * 2);
      width: 100%;
      height: 4.8rem;
      &:first-child {
        background-color: hsl(var(--theme-500));
        margin-left: auto;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  .OAuthGroupModal {
    --dialog-inset: 50% auto auto 50%;
    --dialog-translate: -50% -50%;
    --dialog-starting-translate: -50% 3rem;
    --dialog-max-width: fit-content;
    --dialog-padding: 2rem;
    --dialog-border-radius: calc(var(--global-radius) * 2);
  }
}
</style>

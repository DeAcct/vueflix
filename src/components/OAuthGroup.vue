<template>
  <div class="OAuthGroup">
    <template v-for="{ key, text, icon } in PROVIDERS" :key="`social-${key}`">
      <button
        class="OAuthGroup__Item"
        :class="`OAuthGroup__Item--${key}`"
        @click="showModal({ text, key })"
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
    <NativeDialog ref="$root" class="OAuthGroup__Modal">
      <template #title>
        <strong
          class="OAuthGroup__ModalTitle"
          v-if="currentModal.enabled && enabled.length === 1"
        >
          최소 한 개의 로그인 수단을 남겨야 합니다.
        </strong>
        <strong class="OAuthGroup__ModalTitle" v-else>
          {{ currentModal.text }}을
          <strong class="OAuthGroup__Important">{{
            currentModal.enabled ? "연결 해제" : "연결"
          }}</strong
          >할까요?
        </strong>
      </template>
      <template #control>
        <div class="OAuthGroup__ModalControl">
          <VueflixBtn
            component="button"
            type="button"
            class="OAuthGroup__ModalButton OAuthGroup__ModalButton--Accent"
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
            class="OAuthGroup__ModalButton"
            @click="close"
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

import { useModal } from "@/composables/modal";
import { useAuth } from "@/store/auth";

import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";

import IconBase from "@/components/IconBase.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";

const PROVIDERS = [
  { key: "Email", text: "이메일", icon: IconEmail },
  { key: "Google", text: "구글", icon: IconGoogle },
  { key: "Facebook", text: "페이스북", icon: IconFacebook },
];

const enabled = ref([]);
function setEnabled() {
  const auth = getAuth();
  if (!auth.currentUser) {
    enabled.value = [];
    return;
  }
  const data = auth.currentUser.providerData.map((item) => {
    switch (item.providerId) {
      case "password":
        return "Email";
      case "google.com":
        return "Google";
      case "facebook.com":
        return "Facebook";
      default:
        return "Unknown";
    }
  });
  enabled.value = data;
}
onMounted(() => {
  setEnabled();
});

const { $root, show, close } = useModal();
const currentModal = ref({ text: "", key: "", enabled: false });
function showModal(changeTo) {
  currentModal.value = {
    ...changeTo,
    enabled: enabled.value.includes(changeTo.key),
  };
  show();
}

const auth = useAuth();
async function toggleOAuth() {
  if (currentModal.value.enabled) {
    await auth.disconnectOAuth(currentModal.value.key);
  } else {
    await auth.connectOAuth(currentModal.value.key);
  }
  setEnabled();
  close();
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

  &__Modal {
    --dialog-inset: auto auto 0 0;
    --dialog-translate: 0 0;
    --dialog-max-width: 100%;
    --dialog-border-radius: calc(var(--global-radius) * 2)
      calc(var(--global-radius) * 2) 0 0;
  }
  &__ModalTitle {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
  }
  &__Important {
    color: hsl(var(--theme-500));
  }
  &__ModalControl {
    display: flex;
  }
  &__ModalButton {
    box-shadow: none;
    border-radius: var(--global-radius);
    &:first-child {
      background-color: hsl(var(--theme-500));
      margin-left: auto;
      color: #fff;
    }
  }
}

@media screen and (min-width: 1080px) {
  .OAuthGroup {
    &__Modal {
      --dialog-inset: 50% auto auto 50%;
      --dialog-translate: -50% -50%;
      --dialog-starting-translate: -50% 3rem;
      --dialog-max-width: 40rem;
      --dialog-padding: 2rem;
      --dialog-border-radius: calc(var(--global-radius) * 2);
    }
  }
}
</style>

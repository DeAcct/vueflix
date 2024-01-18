<template>
  <ToggleSetting
    v-model="notification"
    @update:modelValue="toggleNotification"
    :value="['켜기', '끄기']"
    class="Notification"
  >
    <template #title>알림</template>
    <template #description>새로운 애니가 올라오면 알려드려요!</template>
    <template #content>
      <NativeDialog ref="dialog" class="Notification__Request">
        <template #title>
          <strong class="Notification__RequestTitle"
            >알림을 허용해 주세요!</strong
          >
        </template>
        <template #content>
          <p class="Notification__Message">
            새 애니 업로드 알림을 받으려면 브라우저에서 알림 권한을
            허용해야해요. 아래와 비슷한 대화 상자가 뜨면 허용을 눌러주세요!
          </p>
          <img
            :src="NotificationImg"
            alt="알림이 차단되어 허용할지를 묻는 대화상자가 담겨 있는 스크린샷"
            class="Notification__InfoImage"
            loading="lazy"
          />
        </template>
        <template #control>
          <div class="Notification__Control">
            <VueflixBtn
              component="button"
              class="Notification__Button Notification__Button--Request"
              @click="openPermission"
            >
              <template #text>권한 허용 창 열기</template>
            </VueflixBtn>
            <VueflixBtn
              class="Notification__Button Notification__Button--Cancel"
              component="button"
              @click="exitNotification"
            >
              <template #text>뒤로가기</template>
            </VueflixBtn>
          </div>
        </template>
      </NativeDialog>
    </template>
  </ToggleSetting>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getToken } from "firebase/messaging";
import { messaging } from "@/utility/firebase";

import ToggleSetting from "@/layout/ToggleSetting.layout.vue";
import NativeDialog from "@/components/NativeDialog.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";

import NotificationImg from "@/assets/notification.png";

const notification = ref(false);

const dialog = ref(null);
onMounted(() => {
  if (Notification.permission !== "granted") {
    dialog.value.dialogRoot.showModal();
  }
});

async function toggleNotification(e) {
  if (e) {
    const token = await getToken(messaging, {
      vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu",
    });
  }
}

async function openPermission() {
  await Notification.requestPermission();
}
const router = useRouter();
function exitNotification() {
  router.back();
}
</script>

<style lang="scss" scoped>
.Notification {
  ::backdrop {
    background-color: hsla(0 0% 0% / 0.2);
    backdrop-filter: blur(4px);
  }
  &__RequestTitle {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__Message {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
  &__InfoImage {
    border-radius: var(--global-radius);
    margin-bottom: 1rem;
  }
  &__Control {
    display: flex;
    justify-content: flex-end;
    gap: 0.4rem;
  }
  &__Button {
    box-shadow: none;
    font-size: 1.2rem;
    border-radius: var(--global-radius);
    &--Request {
      background-color: hsl(var(--theme-500));
      color: #fff;
    }
    &--Cancel {
      background-color: hsl(0, 0%, 100%);
    }
  }
}
</style>

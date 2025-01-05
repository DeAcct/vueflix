<template>
  <section class="StatCard">
    <div class="StatCard__Info">
      <h2 class="StatCard__Nickname" :class="{ 'loading-target': loading }">
        {{ data?.nickname || "아직 로그인하지 않았어요" }}
      </h2>
      <p class="StatCard__Email" :class="{ 'loading-target': loading }">
        {{ email }}
      </p>
      <HistoryInfo :uid :loading :data />
    </div>
    <OptimizedMedia
      :src="data?.profileImg.name"
      :alt="`${data?.nickname} 프로필 사진`"
      class="StatCard__Image"
      skelleton
    />

    <MembershipCard :data class="StatCard__Level" />
  </section>
</template>

<script setup>
import { watch, ref, computed } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import HistoryInfo from "@/components/HistoryInfo.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import MembershipCard from "@/components/membership/MembershipCard.vue";

const props = defineProps({
  uid: {
    type: String,
  },
});

const data = ref(null);
const loading = ref(true);

const email = computed(() => {
  if (!data.value) {
    return;
  }
  if (data.value.email.length < 30) {
    return data.value.email;
  }
  const [id, domain] = data.value.email.split("@");
  return `${id.slice(0, 5)}...@${domain}`;
});
watch(
  () => props.uid,
  async () => {
    if (!props.uid) {
      loading.value = false;
      return;
    }

    const docRef = doc(db, "user", props.uid);
    const user = await getDoc(docRef);
    if (!user.exists()) return;

    data.value = user.data();
    loading.value = false;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.StatCard {
  padding: calc(var(--inner-padding) * 1.5) var(--inner-padding)
    var(--inner-padding);
  row-gap: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__Nickname {
    width: auto;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 900;
    &.loading-target {
      width: 12dvw;
      height: 2rem;
      text-overflow: hidden;
      color: transparent;
    }
  }
  &__Info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  &__Image {
    --aspect-ratio: 100%;
    --radius: 50%;
    width: 8rem;
    height: 8rem;
  }
  &__Email {
    line-height: 1.3;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 50dvw;
    &.loading-target {
      width: 35dvw;
      height: 2rem;
      color: transparent;
    }
  }

  &__Level {
    flex-basis: 100%;
    background-color: hsl(var(--bg-200));
    border-radius: calc(var(--global-radius) + 2rem);
    color: hsl(var(--text-700));
  }
}
</style>

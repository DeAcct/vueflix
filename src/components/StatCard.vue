<template>
  <div class="StatCard">
    <div class="StatCard__Info">
      <h2 class="StatCard__Nickname" :class="{ 'loading-target': loading }">
        {{ data?.nickname || "아직 로그인하지 않았어요" }}
      </h2>
      <p class="StatCard__Email" :class="{ 'loading-target': loading }">
        {{ data?.email }}
      </p>
      <ul class="StatCard__Stat">
        <li class="StatCard__StatItem" :class="{ 'loading-target': loading }">
          <h3 class="StatCard__StatName">보고싶다</h3>
          <p class="StatCard__StatValue">{{ data?.wannaSee.length }}개</p>
        </li>
        <li class="StatCard__StatItem" :class="{ 'loading-target': loading }">
          <h3 class="StatCard__StatName">리뷰</h3>
          <p class="StatCard__StatValue">{{ data?.reaction.length }}개</p>
        </li>
      </ul>
    </div>
    <OptimizedMedia
      :src="data?.profileImg"
      :alt="`${data?.nickname} 프로필 사진`"
      class="StatCard__Image"
    />
    <LevelRenderer
      :init-date="data?.membership?.initDate"
      to="/my/level"
      class="StatCard__Level"
      :class="{ 'loading-target': loading }"
    />
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import LevelRenderer from "@/components/LevelRenderer.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../utility/firebase";

const props = defineProps({
  uid: {
    type: String,
  },
});

const data = ref(null);
const loading = ref(true);
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
  &__Nickname {
    font-size: 2rem;
    font-weight: 900;
    &.loading-target {
      width: 12rem;
      height: 2rem;
      text-overflow: hidden;
      color: transparent;
    }
  }
  &__Email {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: auto;
    &.loading-target {
      width: 24rem;
      height: 2rem;
      text-overflow: hidden;
      color: transparent;
    }
  }
  &__Stat {
    display: flex;
    gap: 1.2rem;
  }
  &__StatItem {
    display: flex;
    gap: 0.4rem;
    text-align: center;
    &.loading-target {
      width: 8rem;
      height: 2rem;
      text-overflow: hidden;
      color: transparent;
    }
  }
  &__StatName {
    font-size: 1.6rem;
    font-weight: 500;
    color: inherit;
  }
  &__StatValue {
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
  }
  &__Level {
    width: 100%;
    height: 6rem;
    border-radius: var(--global-radius);
    &.loading-target {
      --level-renderer: transparent;
    }
  }
}
</style>

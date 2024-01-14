<template>
  <div class="StatCard">
    <div class="StatCard__Info">
      <h2 class="StatCard__Nickname">
        {{ data?.nickname }}
      </h2>
      <p class="StatCard__Email">{{ data?.email }}</p>
      <ul class="StatCard__Stat">
        <li class="StatCard__StatItem">
          <h3 class="StatCard__StatName">보고싶다</h3>
          <p class="StatCard__StatValue">{{ data?.wannaSee.length }}개</p>
        </li>
        <li class="StatCard__StatItem">
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
    <LevelRenderer to="/my/level" class="StatCard__Level" />
  </div>
</template>

<script setup>
import LevelRenderer from "@/components/LevelRenderer.vue";
import OptimizedMedia from "@/components/OptimizedMedia.vue";

const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.StatCard {
  padding: calc(var(--inner-padding) * 1.5) var(--inner-padding)
    var(--inner-padding);
  gap: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__Info {
    flex: 1;
    display: flex;
    flex-direction: column;
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
  }
  &__Email {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0.4rem 0 auto;
  }
  &__Stat {
    display: flex;
    gap: 1.2rem;
  }
  &__StatItem {
    display: flex;
    gap: 0.4rem;
    text-align: center;
  }
  &__StatName {
    font-size: 1.6rem;
    font-weight: 500;
  }
  &__StatValue {
    font-size: 1.6rem;
    font-weight: 700;
  }
  &__Level {
    width: 100%;
    height: 6rem;
    border-radius: var(--global-radius);
  }
}
</style>

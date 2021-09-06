<template>
  <div class="inner">
    <div class="service-noti-box" v-if="notiItems">
      <h2>서비스 안내</h2>
      <ul class="service-noti-items">
        <li v-for="item in notiItems" :key="item" class="service-noti-item">
          {{ item.noti }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceNotiBox",
  props: {
    notiItems: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.service-noti-box {
  background-color: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 1.5rem;
    color: var(--theme-500);
  }
  .service-noti-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1.8rem;
    .service-noti-item {
      list-style: disc;
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }
}
</style>

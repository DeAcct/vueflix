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
  background-color: var(--bg-100);
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.2rem 0.4rem var(--bg-200);
  h2 {
    font-size: 1.5rem;
    color: var(--theme-500);
    margin-bottom: 1rem;
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
@media screen and (min-width: 1300px) {
  .service-noti-box {
    h2 {
      font-size: 1.8rem;
    }
    .service-noti-items .service-noti-item {
      font-size: 1.5rem;
    }
  }
}
</style>

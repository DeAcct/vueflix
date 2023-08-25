<template>
  <router-link class="ArrowBtnWidget">
    <div class="col-left">
      <i class="icon" v-if="icon">
        <icon-base>
          <slot name="icon"></slot>
        </icon-base>
      </i>
      <span>
        <slot name="text"></slot>
      </span>
    </div>
    <div class="col-right">
      <i class="icon">
        <icon-base>
          <icon-arrow-next />
        </icon-base>
      </i>
    </div>
  </router-link>
</template>

<script setup>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";

defineProps({
  icon: {
    type: [Boolean, String],
  },
});
</script>

<style lang="scss" scoped>
.ArrowBtnWidget {
  padding: 1.8rem var(--inner-padding);
  display: flex;
  justify-content: space-between;
  background-color: var(--top-item);
  .icon {
    display: flex;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;
  }
  .col-left {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 0.8rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  .col-right {
    display: flex;
    align-items: center;
  }
}
@media screen and (min-width: 768px) {
  .my-cards .my-card .col-left span {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1080px) {
  .arrow-link-btn {
    .icon {
      width: 2rem;
      height: 2rem;
    }
    .col-left {
      span {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

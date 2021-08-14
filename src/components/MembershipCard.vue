<template>
  <router-link to="#none" class="membership-card" :style="style">
    <div class="row-top">
      <div class="row-top-left">
        <strong class="info">{{ cardCompany }}</strong>
        <p class="info">{{ cardNumber }}</p>
      </div>
      <div class="row-top-right">
        <i class="icon">
          <icon-base>
            <icon-arrow-next />
          </icon-base>
        </i>
      </div>
    </div>
    <div class="row-bottom">
      <strong class="info">다음 결제일</strong>
      <p class="info">{{ nextPayment }}</p>
    </div>
  </router-link>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
export default {
  name: "MembershipCard",
  props: {
    cardCompany: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    nextPayment: {
      type: String,
    },
    isActivated: {
      type: Boolean,
    },
  },
  components: {
    IconBase,
    IconArrowNext,
  },
  data() {
    return {
      style: {
        transform: "none",
      },
    };
  },
  methods: {
    cardInteraction(e) {
      this.style = {
        transform: `
          perspective(3px) 
          rotateX(${(e.beta - 0.2) * 0.001}deg)
          rotateY(${e.gamma * 0.001}deg)  
        `,
      };
    },
  },
  mounted() {
    window.addEventListener("deviceorientation", this.cardInteraction);
  },
  unmounted() {
    window.removeEventListener("deviceorientation", this.cardInteraction);
  },
};
</script>

<style lang="scss" scoped>
.membership-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 37.5rem;
  aspect-ratio: 1.58/1;
  background-color: var(--text-500);
  padding: 2rem 3.5rem;
  border-radius: 0.3rem;
  transition: transform 150ms ease-out;
  .info {
    color: #fff;
    font-size: 1.5rem;
  }
  .row-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .row-top-left {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        font-weight: 300;
      }
    }
    .row-top-right .icon {
      color: #fff;
    }
  }
  .row-bottom {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 900;
    }
  }
}
</style>

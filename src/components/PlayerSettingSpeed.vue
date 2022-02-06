<template>
  <div class="player-setting-speed">
    <player-sub-setting-top @setting-replace="playerChangeEmit('main')">
      재생 속도
    </player-sub-setting-top>
    <ul class="speed-list">
      <li
        v-for="(item, index) in speedList"
        :key="item"
        class="item"
        @click="changeSpeed(index)"
      >
        <input
          type="radio"
          name="speed"
          class="blind"
          :checked="index === speed"
          :id="`speed-${index}`"
        />
        <label :for="`speed-${index}`">
          {{ item.toFixed(2) }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { playerChangeEmit } from "../mixins/playerChangeEmit";
import PlayerSubSettingTop from "./PlayerSubSettingTop.vue";

export default {
  name: "PlayerSettingSpeed",
  mixins: [playerChangeEmit],
  props: {
    speed: {
      type: Number,
    },
  },
  methods: {
    changeSpeed(targetIndex) {
      this.$emit("speed-change", targetIndex + 1);
    },
  },
  components: {
    PlayerSubSettingTop,
  },
  data() {
    return {
      speedList: [0.5, 1.0, 1.5, 2.0],
    };
  },
};
</script>

<style lang="scss" scoped>
.player-setting-speed {
  display: flex;
  flex-direction: column;
  .row-top {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  &__back-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    .icon {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: #fff;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__text {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .speed-list .item {
    padding: 1.5rem 0;
    label {
      font-size: 1.4rem;
      font-weight: 500;
      color: #fff;
    }
    input:checked + label {
      color: var(--theme-500);
    }
    input:focus + labe {
      color: var(--theme-300);
    }
  }
}
</style>

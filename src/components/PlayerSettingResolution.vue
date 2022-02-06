<template>
  <div class="player-setting-resolution">
    <player-sub-setting-top @setting-replace="playerChangeEmit('main')">
      화질 선택
    </player-sub-setting-top>
    <ul class="resolution-list">
      <li
        v-for="item in resolutionList"
        :key="item"
        class="item"
        @click="changeResolution(item)"
      >
        <input
          type="radio"
          :id="`resolution-${item}`"
          :checked="resolution === item"
          name="resolution"
          class="blind"
        />
        <label :for="`resolution-${item}`">
          {{ item }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { playerChangeEmit } from "../mixins/playerChangeEmit";
import PlayerSubSettingTop from "./PlayerSubSettingTop.vue";

export default {
  name: "PlayerSettingResolution",
  mixins: [playerChangeEmit],
  data() {
    return {
      resolutionList: ["1080p", "720p", "480p"],
    };
  },
  props: {
    resolution: {
      type: String,
    },
  },
  components: {
    PlayerSubSettingTop,
  },
  methods: {
    changeResolution(item) {
      this.$emit("resolution-change", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-setting-resolution {
  display: flex;
  flex-direction: column;
  .resolution-list .item {
    padding: 1.5rem 0;
    label {
      font-size: 1.4rem;
      font-weight: 500;
      color: #fff;
    }
    input:checked + label {
      color: var(--theme-500);
    }
  }
}
</style>

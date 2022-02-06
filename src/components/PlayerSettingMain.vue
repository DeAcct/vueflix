<template>
  <div class="player-setting-main">
    <ul class="setting-list">
      <li v-for="item in settingItems" :key="item.text">
        <button @click="playerChangeEmit(item.componentTo)">
          <span class="setting-list__text">{{ item.text }}</span>
          <i class="setting-list__icon">
            <icon-base>
              <icon-arrow-next />
            </icon-base>
          </i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import { playerChangeEmit } from "../mixins/playerChangeEmit";
export default {
  name: "PlayerSettingMain",
  components: {
    IconBase,
    IconArrowNext,
  },
  data() {
    return {
      settingItems: [
        {
          componentTo: "resolution",
          text: "화질 선택",
        },
        {
          componentTo: "speed",
          text: "재생 속도",
        },
        {
          componentTo: "auto-skip",
          text: "오프닝/엔딩 자동스킵",
        },
        {
          componentTo: "auto-play",
          text: "에피소드 자동재생",
        },
      ],
    };
  },
  mixins: [playerChangeEmit],
};
</script>

<style lang="scss" scoped>
.player-setting-main {
  .setting-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    &__text {
      color: #fff;
      font-size: 1.4rem;
      font-weight: 500;
    }
    &__icon {
      color: #fff;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

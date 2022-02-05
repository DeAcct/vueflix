<template>
  <aside class="player-setting">
    <button class="player-setting__close-btn">
      <i class="icon">
        <icon-base icon-name="플레이어 설정 닫기">
          <icon-close />
        </icon-base>
      </i>
    </button>
    <ul class="setting-list">
      <li v-for="item in settingItems" :key="item.text">
        <button>
          <span class="setting-list__text">{{ item.text }}</span>
          <i class="setting-list__icon">
            <icon-base>
              <icon-arrow-next />
            </icon-base>
          </i>
        </button>
      </li>
    </ul>
  </aside>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconArrowNext from "./icons/IconArrowNext.vue";
import IconClose from "./icons/IconClose.vue";

export default {
  name: "PlayerSetting",
  components: {
    IconBase,
    IconArrowNext,
    IconClose,
  },
  data() {
    return {
      settingItems: [
        {
          method: "",
          text: "화질 선택",
        },
        {
          method: "",
          text: "재생 속도",
        },
        {
          method: "",
          text: "오프닝/엔딩 자동 스킵",
        },
        {
          method: "",
          text: "에피소드 자동재생",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.player-setting {
  display: flex;
  flex-direction: column;
  background-color: var(--player-setting-bg);
  height: 100%;
  padding: 1rem 3rem;
  &__close-btn {
    align-self: flex-end;
    margin-bottom: 1rem;
    .icon {
      color: #fff;
      width: 3.6rem;
      height: 3.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .setting-list {
    display: flex;
    flex-direction: column;
    button {
      display: flex;
      width: 20vw;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }
    &__text {
      color: #fff;
      font-size: 1.1rem;
    }
    &__icon {
      color: #fff;
      width: 1.8rem;
      height: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
}
</style>

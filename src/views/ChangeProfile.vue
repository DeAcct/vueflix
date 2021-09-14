<template>
  <main class="change-profile">
    <h2>{{ infoString }}</h2>
    <ul class="alert">
      <li>4개 이하의 프로필만 만들 수 있어요.</li>
      <li>최소 1개의 프로필이 있어야 해요.</li>
      <li>닉네임은 8글자보다 짧아야 해요.</li>
    </ul>
    <div class="profiles">
      <ul class="profile-items">
        <li
          class="profile-item"
          v-for="(profile, index) in profiles"
          :key="profile.name"
          :class="{ selected: isEditMode && profile.isSelected }"
          @click="toggleSelected(index)"
        >
          <profile />
          <span>{{ profile.name }}</span>
        </li>
      </ul>
      <div
        class="btn-area"
        :class="{
          center: isNewProfileMode || isEditMode || profiles.length > 3,
        }"
      >
        <vueflix-func-btn
          class="new"
          border="1px solid var(--bg-200)"
          v-if="!isEditMode && profiles.length <= 3"
          @click="newProfile"
        >
          <i class="icon">
            <icon-base>
              <icon-plus />
            </icon-base>
          </i>
          {{ newBtnString }}
        </vueflix-func-btn>
        <vueflix-func-btn
          bg="var(--theme-500)"
          border="1px solid var(--theme-500)"
          v-if="!isNewProfileMode"
          @click="editProfile"
          textColor="var(--top-item)"
        >
          <i class="icon">
            <icon-base>
              <icon-remove />
            </icon-base>
          </i>
          {{ editBtnString }}
        </vueflix-func-btn>
      </div>
      <input
        type="text"
        v-model="newProfileName"
        v-show="isNewProfileMode"
        placeholder="새 프로필 이름을 입력하세요"
        class="profile-name-input"
        ref="profileNameInput"
      />
    </div>
  </main>
</template>

<script>
import Profile from "../components/Profile.vue";
import VueflixFuncBtn from "../components/VueflixFuncBtn.vue";
import IconBase from "../components/IconBase.vue";
import IconPlus from "../components/icons/IconPlus.vue";
import IconRemove from "../components/icons/IconRemove.vue";
export default {
  name: "ChangeProfile",
  components: {
    Profile,
    VueflixFuncBtn,
    IconBase,
    IconPlus,
    IconRemove,
  },
  data() {
    return {
      profiles: [
        { name: "미야조노 카오리", isSelected: false },
        { name: "시이나 마시로", isSelected: false },
        { name: "짱구", isSelected: false },
      ],
      notSelected: [],
      editBtnString: "편집",
      infoString: "사용할 프로필을 선택하세요",
      newBtnString: "새 프로필",
      isEditMode: false,
      newProfileName: "",
      isNewProfileMode: false,
    };
  },
  methods: {
    editProfile() {
      this.isEditMode = !this.isEditMode;
      this.editBtnString = this.isEditMode ? "삭제" : "편집";
      this.infoString = this.isEditMode
        ? "삭제할 프로필을 선택하세요"
        : "사용할 프로필을 선택하세요";
      if (!this.isEditMode && this.notSelected.length >= 1) {
        this.profiles = this.notSelected;
      }
    },
    toggleSelected(index) {
      if (this.isEditMode) {
        this.profiles[index].isSelected = !this.profiles[index].isSelected;
      }
      this.notSelected = this.profiles.filter(
        profile => profile.isSelected === false,
      );
    },
    newProfile() {
      this.$refs.profileNameInput.focus();
      this.infoString = this.isNewProfileMode
        ? "사용할 프로필을 선택하세요"
        : "새로 만들 프로필의 이름을 입력하세요";
      if (this.profiles.length <= 3) {
        this.isNewProfileMode = !this.isNewProfileMode;
        this.newBtnString = this.isNewProfileMode ? "추가" : "새 프로필";
        if (
          !this.isNewProfileMode &&
          this.newProfileName.length > 0 &&
          this.newProfileName.length <= 8
        ) {
          this.profiles.push({
            name: this.newProfileName,
            isSelected: false,
          });
        }
        this.newProfileName = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.change-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12rem 2rem 5.6rem;
  min-height: 100vh;
  h2 {
    font-weight: 700;
  }
  .alert {
    margin-top: 1rem;
    text-align: center;
    li {
      line-height: 1.3;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .profiles {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .profile-items {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
      width: 16.4rem;
      flex-wrap: wrap;
      .profile-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 12rem;
        &:nth-child(2n) {
          margin-left: 2rem;
        }
        &:nth-child(3),
        &:nth-child(4) {
          margin-top: 2rem;
        }
        .profile {
          border: 2px solid transparent;
          transition: 150ms ease-out;
        }
        &.selected .profile {
          border-color: var(--theme-500);
        }
      }
      .profile {
        width: 7.2rem;
        margin-bottom: 1rem;
      }
      span {
        width: 5.5rem;
        text-align: center;
        line-height: 1.3;
        font-weight: 500;
        font-size: 1.5rem;
        word-break: break-all;
      }
    }
    .btn-area {
      display: flex;
      width: 21rem;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      &.center {
        justify-content: center;
      }

      .icon {
        color: var(--top-item);
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1rem;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      .new {
        .icon {
          color: var(--text-900);
        }
      }
    }
    .profile-name-input {
      width: 21rem;
      border: 1px solid var(--bg-200);
      border-radius: 0.3rem;
      padding: 1rem 1.5rem;
      color: var(--text-900);
      &:focus {
        border-color: var(--theme-500);
      }
    }
  }
}
@keyframes shake-animation {
  33% {
    transform: translateX(-2rem);
  }
  66% {
    transform: translateX(2rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

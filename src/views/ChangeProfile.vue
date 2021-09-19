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
          :class="{ selected: isDeleteMode && profile.isSelected }"
          @click="toggleSelected(index)"
        >
          <profile />
          <span>{{ profile.name }}</span>
        </li>
      </ul>
      <div
        class="btn-area"
        :class="{
          center: isNewProfileMode || isDeleteMode || profiles.length > 3,
        }"
      >
        <vueflix-func-btn
          class="new"
          border="1px solid var(--bg-200)"
          v-if="!isDeleteMode && profiles.length <= 3"
          @click="newProfile"
          ref="newBtn"
        >
          <i class="icon">
            <icon-base>
              <icon-plus />
            </icon-base>
          </i>
          {{ newBtnString }}
        </vueflix-func-btn>

        <vueflix-func-btn
          class="cancel"
          border="1px solid var(--bg-200)"
          v-if="isDeleteMode || isNewProfileMode"
          @click="cancel"
        >
          취소
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
        v-show="isNewProfileMode"
        placeholder="새 프로필 이름을 입력하세요"
        class="profile-name-input"
        ref="nameInput"
        @keyup="lengthCheck($event)"
      />
      <span v-if="isWrongLength && isNewProfileMode" class="warning">
        너무 길어요
      </span>
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
      profiles: [{ name: "미야조노 카오리", isSelected: false }],
      notSelected: [],
      editBtnString: "편집",
      infoString: "사용할 프로필을 선택하세요",
      newBtnString: "새 프로필",
      isDeleteMode: false,
      isWrongLength: false,
      isNewProfileMode: false,
      newProfileName: "",
    };
  },
  methods: {
    editProfile() {
      this.isDeleteMode = true;
      this.editBtnString = "삭제";
      this.infoString = "삭제할 프로필을 선택하세요";
      if (!this.isDeleteMode && this.notSelected.length >= 1) {
        this.profiles = this.notSelected;
      }
    },
    toggleSelected(index) {
      if (this.isDeleteMode) {
        this.profiles[index].isSelected = !this.profiles[index].isSelected;
      }
      this.notSelected = this.profiles.filter(
        profile => profile.isSelected === false,
      );
    },
    newProfile() {
      this.isNewProfileMode = true;
      this.$refs.nameInput.focus();
      this.infoString = "새로 만들 프로필의 이름을 입력하세요";
      if (this.profiles.length <= 3) {
        this.newBtnString = "추가";
        if (!this.isNewProfileMode && !this.isWrongLength) {
          this.profiles.push({
            name: this.newProfileName,
            isSelected: false,
          });
        }
      } else {
        return;
      }
    },
    cancel() {
      if (this.isDeleteMode) {
        this.infoString = "사용할 프로필을 선택하세요";
        this.editBtnString = "편집";
        this.isDeleteMode = false;
        this.profiles = this.profiles.map(profile => ({
          ...profile,
          isSelected: false,
        }));
      } else {
        this.infoString = "사용할 프로필을 선택하세요";
        this.newBtnString = "새 프로필";
        this.isNewProfileMode = false;
        this.$refs.nameInput.value = "";
        this.newProfileName = "";
        this.isWrongLength = false;
      }
    },
    lengthCheck(e) {
      const value = e.currentTarget.value;
      this.newProfileName = value;
      this.isWrongLength = value.length > 8 || value.length < 0;
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
      width: 100%;
      flex-wrap: wrap;
      .profile-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 12rem;
        &:not(:last-child) {
          margin-right: 2rem;
        }
        .profile {
          border: 2px solid transparent;
          transition: 150ms ease-out;
          width: 7.2rem;
          margin-bottom: 1rem;
        }
        &.selected .profile {
          border-color: var(--theme-500);
        }
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
      justify-content: center;
      width: 21rem;
      .func-btn {
        transition: none;
      }
      button:not(:last-child) {
        margin-right: 1rem;
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
      .new,
      .cancel {
        .icon {
          color: var(--text-900);
        }
      }
    }
    .profile-name-input {
      width: 21rem;
      border: 1px solid var(--bg-200);
      font-size: 1.3rem;
      border-radius: 0.3rem;
      padding: 1rem 1.5rem;
      color: var(--text-900);
      margin-top: 1.5rem;
      transition: 150ms ease-out;
      &:focus {
        box-shadow: 0 0.3rem 0.6rem var(--bg-200);
      }
    }
    .warning {
      color: var(--theme-500);
      animation: 300ms ease-in-out 2 alternate shake;
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  .change-profile {
    padding-bottom: 0;
    h2 {
      font-size: 2rem;
    }
    .alert {
      margin-top: 1.5rem;
      li {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
    .profiles {
      .profile-items {
        .profile-item {
          height: 18rem;
          .profile {
            width: 9rem;
          }
        }
        span {
          font-size: 1.5rem;
        }
      }

      .btn-area {
        width: 28rem;
        .icon {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      .profile-name-input {
        width: 28rem;
        font-size: 2rem;
        padding: 1.5rem 2rem;
      }
    }
  }
}

@keyframes shake {
  33% {
    transform: translateX(-1rem);
  }
  66% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

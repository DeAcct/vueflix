<template>
  <main class="change-profile">
    <h2>{{ infoString }}</h2>
    <ul class="alert">
      <li>4개 이하의 프로필만 만들 수 있어요.</li>
      <li>최소 1개의 프로필이 있어야 해요.</li>
      <li>닉네임은 8글자보다 짧아야 해요.</li>
    </ul>
    <form class="profiles" @submit.prevent="newProfile">
      <ul class="profile-items">
        <li
          class="profile-item"
          v-for="(profile, index) in profiles"
          :key="profile.name"
          :class="{ selected: isEditProfileMode && profile.isSelected }"
          @click="toggle(index)"
        >
          <profile />
          <span>{{ profile.name }}</span>
        </li>
      </ul>
      <div class="btn-area">
        <vueflix-func-btn
          class="new"
          border="1px solid var(--bg-200)"
          v-if="!isEditProfileMode && profiles.length < 4"
          @click="newProfile"
          ref="newBtn"
          type="button"
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
          v-if="isNewProfileMode || isEditProfileMode"
          @click="cancel"
          type="button"
        >
          취소
        </vueflix-func-btn>

        <vueflix-func-btn
          bg="var(--theme-500)"
          border="1px solid var(--theme-500)"
          v-if="!isNewProfileMode && profiles.length > 1"
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
        v-model="newProfileName"
        @keyup="lengthCheck"
        placeholder="새 프로필 이름"
        class="profile-name-input"
        ref="nameInput"
      />
      <span v-if="isOverflow && isNewProfileMode" class="warning">
        너무 길어요
      </span>
      <span v-if="isSameName && isNewProfileMode" class="warning">
        다른 프로필과 같은 이름이에요
      </span>
    </form>
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
      infoString: "사용할 프로필을 선택하세요",
      profiles: [{ name: "미야조노 카오리", isSelected: false }],
      selected: [],
      editBtnString: "편집",
      newBtnString: "새 프로필",
      newProfileName: "",
      isNewProfileMode: false,
      isWrongLength: true,
      isSameName: false,
      isOverflow: false,
      isEditProfileMode: false,
    };
  },
  methods: {
    newProfile() {
      this.isNewProfileMode = !this.isNewProfileMode;
      this.infoString = this.isNewProfileMode
        ? "새 프로필 이름을 입력하세요"
        : this.infoString;
      this.newBtnString = this.isNewProfileMode ? "추가" : "새 프로필";
      if (!this.isNewProfileMode) {
        this.lengthCheck();
      }
      if (!this.isNewProfileMode && !this.isWrongLength) {
        this.profiles.forEach((profile) => {
          this.isSameName = profile.name === this.newProfileName;
        });
        if (!this.isSameName) {
          this.profiles.push({
            name: this.newProfileName,
            isSelected: false,
          });
          this.newProfileName = "";
        } else {
          this.isNewProfileMode = true;
        }
      } else if (this.isWrongLength) {
        this.isNewProfileMode = true;
      }
    },
    editProfile() {
      this.isEditProfileMode = !this.isEditProfileMode;
      this.editBtnString = this.isEditProfileMode ? "삭제" : "편집";
      if (
        !this.isEditProfileMode &&
        this.profiles.length > this.selected.length
      ) {
        this.profiles = this.profiles.filter((profile) => !profile.isSelected);
        this.isEditProfileMode = false;
      }
    },
    toggle(index) {
      if (this.isEditProfileMode) {
        this.profiles[index].isSelected = !this.profiles[index].isSelected;
        console.log(this.profiles[index]);
        this.selected = this.profiles.filter((profile) => profile.isSelected);
      }
    },
    lengthCheck() {
      this.isOverflow = this.newProfileName.length > 8;
      this.isWrongLength = this.isOverflow || this.newProfileName.length === 0;
    },
    cancel() {
      if (this.isNewProfileMode) {
        if (this.newProfileName) {
          this.lengthCheck();
        }
        this.isNewProfileMode = false;
        this.newProfileName = "";
        this.infoString = "사용할 프로필을 선택하세요";
        this.newBtnString = "새 프로필";
        this.isSameName = false;
      } else {
        this.isEditProfileMode = false;
        this.editBtnString = "편집";
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

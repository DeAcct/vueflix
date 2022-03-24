<template>
  <form class="account-setting" @submit.prevent="syncToFirebase">
    <div class="app-bar inner">
      <router-link to="/my">
        <i class="icon">
          <icon-base>
            <icon-arrow-prev />
          </icon-base>
        </i>
      </router-link>
    </div>
    <div class="profile-change">
      <div class="profile-box">
        <profile-img
          :input-profile="
            profilePreview
              ? profilePreview
              : user
              ? user.profileImgSrc
              : undefined
          "
          class="profile-change__view"
        />
        <label class="profile-change__input-img" data-pointer="true">
          <i class="icon">
            <icon-base>
              <icon-screenshot />
            </icon-base>
          </i>
          <span class="blind">프로필 사진 열기</span>
          <input type="file" class="blind" @change="fileChange" />
        </label>
      </div>
      <input
        type="text"
        v-model="nickname"
        class="nickname-change"
        placeholder="새 닉네임을 입력하세요"
        autofocus
      />
    </div>
    <div class="widget gender inner">
      <h2 class="heading">성별</h2>
      <div class="select-area">
        <label class="gender__selection male" data-pointer="true">
          <input
            type="radio"
            name="gender"
            value="male"
            class="blind"
            v-model="gender"
          />
          <i class="icon">
            <icon-base>
              <icon-male />
            </icon-base>
          </i>
          <span>남자</span>
        </label>
        <label class="gender__selection female" data-pointer="true">
          <input
            type="radio"
            name="gender"
            value="female"
            class="blind"
            v-model="gender"
          />
          <i class="icon">
            <icon-base>
              <icon-female />
            </icon-base>
          </i>
          <span>여자</span>
        </label>
      </div>
    </div>
    <div class="widget birthday inner">
      <h2 class="heading">생일</h2>
      <datepicker
        class="birthday__selection"
        inputClassName="birthday__selection_input"
        :modelValue="
          birthday
            ? `${birthday.year}/${birthday.month}/${birthday.date}`
            : undefined
        "
        @update:modelValue="setBirthday"
        :enableTimePicker="false"
        format="yyyy/MM/dd"
        locale="ko-KR"
        placeholder="생일을 선택하세요"
        no-today
        auto-apply
      />
    </div>
    <vueflix-btn
      type="submit"
      component="button"
      :icon="false"
      :class="{ 'btn--saving': inProgress }"
    >
      <template v-slot:text>저장{{ inProgress ? "중..." : "" }}</template>
    </vueflix-btn>
  </form>
</template>

<script>
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/src/Vue3DatePicker/style/main.scss";

import { mapState } from "vuex";
import ProfileImg from "../components/ProfileImg.vue";
import IconBase from "../components/IconBase.vue";
import IconScreenshot from "../components/icons/IconScreenshot.vue";
import IconArrowPrev from "../components/icons/IconArrowPrev.vue";
import IconMale from "../components/icons/IconMale.vue";
import IconFemale from "../components/icons/IconFemale.vue";
import VueflixBtn from "../components/VueflixBtn.vue";
export default {
  name: "AccountSetting",
  components: {
    ProfileImg,
    IconBase,
    IconScreenshot,
    IconArrowPrev,
    IconMale,
    IconFemale,
    VueflixBtn,
    Datepicker,
  },
  unmounted() {
    if (this.profilePreview) {
      URL.revokeObjectURL(this.profileImg);
    }
  },
  mounted() {
    if (this.user) {
      this.nickname = this.user.nickname;
      this.gender = this.user.gender;
      this.birthday = this.user.birthday;
    }
  },
  data() {
    return {
      nickname: "",
      gender: "",
      birthday: "",
      profileImg: "",
      profilePreview: "",
      inProgress: "",
    };
  },
  methods: {
    fileChange(e) {
      const files = e.currentTarget.files;
      if (files) {
        this.profileImg = files[0];
        this.profilePreview = URL.createObjectURL(this.profileImg);
      }
    },
    setBirthday(e) {
      this.birthday = {
        year: e.getFullYear(),
        month: e.getMonth() + 1,
        date: e.getDate(),
      };
    },
    async syncToFirebase() {
      if (!this.inProgress) {
        this.inProgress = true;

        const db = getFirestore();
        const storage = getStorage();
        const storageRef = ref(storage, `user/${this.user.uid}/profile.png`);
        await uploadBytes(storageRef, this.profileImg);
        const profileURL = await getDownloadURL(storageRef);

        const submitObj = {
          nickname: this.nickname,
          gender: this.gender ? this.gender : "",
          birthday: this.birthday ? this.birthday : "",
          profileImgSrc: this.profileImg ? profileURL : this.user.profileImgSrc,
        };

        await setDoc(doc(db, "user", this.user.uid), submitObj, {
          merge: true,
        });
        this.$store.commit("auth/mergeUser", submitObj);
        this.inProgress = false;
        this.$router.back();
      } else {
        return;
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    isSubmitAble() {
      return (
        !!this.nickname || !!this.gender || !!this.birthday || !!this.profileImg
      );
    },
  },
  watch: {
    user() {
      this.nickname = this.user.nickname;
      this.gender = this.user.gender;
      this.birthday = this.user.birthday;
    },
  },
};
</script>

<style lang="scss" scoped>
.account-setting {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  .app-bar {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    height: 6.4rem;
    display: flex;
    align-items: center;
  }
  .profile-change {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0 4rem;
    .profile-box {
      position: relative;
      width: 8rem;
      height: 8rem;
      margin-bottom: 2rem;
    }
    &__view {
      width: 8rem;
      height: 8rem;
    }
    &__input-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 8rem;
      height: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      .icon {
        color: #fff;
      }
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
    .nickname-change {
      background-color: transparent;
      padding: 0.5rem;
      border-bottom: 1px solid var(--bg-400);
      text-align: center;
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--text-800);
    }
  }
  .widget {
    width: 100%;
    max-width: 1080px;
    background-color: var(--top-item);
    border-radius: 0.6rem;
    padding: {
      top: 1.8rem;
      bottom: 1.8rem;
    }
    box-shadow: var(--box-shadow);
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    .heading {
      display: flex;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
  .gender {
    .select-area {
      display: flex;
      justify-content: center;
    }
    &__selection {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6rem;
        height: 6rem;
        margin-bottom: 0.75rem;
        border-radius: 50%;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
      span {
        font-size: 1.3rem;
      }
      &.male input:checked + .icon {
        background-color: var(--gender-male);
      }
      &.female input:checked + .icon {
        background-color: var(--gender-female);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .birthday {
    &__selection {
      width: 100%;
      height: 3rem;
      background-color: transparent;
      font-size: 1.3rem;
      --dp-text-color: var(--text-800);
      --dp-background-color: transparent;
      --dp-border-color: var(--bg-400);
      --dp-border-color-hover: var(--theme-500);
    }
  }

  .btn {
    background-color: var(--theme-500);
    border-radius: 9999px;
    color: #fff;
    &:disabled {
      background-color: var(--theme-300);
    }
    &--saving {
      background-color: transparent;
    }
  }
}

@media screen and (min-width: 1080px) {
  .account-setting {
    .app-bar {
      display: none;
    }
  }
}
</style>

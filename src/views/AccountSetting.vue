<template>
  <form class="AccountSetting" @submit.prevent="syncToFirebase">
    <div class="profile-change">
      <div class="profile-box">
        <ProfileImg class="profile-change__view" />
        <label class="profile-change__input-img" data-pointer="true">
          <i class="icon">
            <IconBase>
              <IconScreenshot />
            </IconBase>
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
            <IconBase>
              <IconMale />
            </IconBase>
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
            <IconBase>
              <IconFemale />
            </IconBase>
          </i>
          <span>여자</span>
        </label>
      </div>
    </div>
    <div class="widget birthday inner">
      <h2 class="heading">생일</h2>
      <label for="date" class="birthday__selection">
        생일을 입력하세요
        <input type="date" v-model="birthday" id="date" />
      </label>
    </div>
    <VueflixBtn
      type="submit"
      component="button"
      :icon="false"
      :class="{ 'btn--saving': inProgress }"
    >
      <template v-slot:text>저장{{ inProgress ? "중..." : "" }}</template>
    </VueflixBtn>
  </form>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { mapState } from "vuex";
import ProfileImg from "@/components/ProfileImg.vue";
import IconBase from "@/components/IconBase.vue";
import IconScreenshot from "@/components/icons/IconScreenshot.vue";
import IconArrowPrev from "@/components/icons/IconArrowPrev.vue";
import IconMale from "@/components/icons/IconMale.vue";
import IconFemale from "@/components/icons/IconFemale.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
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
  },
  unmounted() {
    if (this.profilePreview) {
      URL.revokeObjectURL(this.profileImg);
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
    // setBirthday(e) {
    //   this.birthday = {
    //     year: e.getFullYear(),
    //     month: e.getMonth() + 1,
    //     date: e.getDate(),
    //   };
    // },
    async syncToFirebase() {
      if (!this.inProgress) {
        this.inProgress = true;

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
      this.birthday = `${this.user.birthday.year}-${this.user.birthday.month}-${this.user.birthday.date}`;
      console.log(this.birthday);
    },
    birthday() {
      if (typeof this.birthday === "string") {
        // 파이어베이스에 object 형태로 저장하므로 split을 수행할 수 없음.
        // 타입이 string으로 변했다는 것은 수정이 이루어졌다는 것이다.
        console.log(this.birthday.split("-"));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.AccountSetting {
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
      border-bottom: 1px solid hsl(var(--bg-400));
      text-align: center;
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--text-800);
    }
  }
  .widget {
    width: 100%;
    max-width: 768px;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 4.8rem;
      background-color: hsl(var(--bg-300));
      border-radius: 0.3rem;
      font-size: 1.3rem;
      padding: 0 1rem;
      ::-webkit-calendar-picker-indicator {
        width: 2.4rem;
        height: 2.4rem;
        filter: var(--calendar-picker-indicator-invert);
      }
      input {
        background-color: transparent;
      }
    }
  }

  .btn {
    background-color: hsl(var(--theme-500));
    border-radius: 9999px;
    color: #fff;
    &:disabled {
      background-color: hsl(var(--theme-300));
    }
    &--saving {
      background-color: transparent;
    }
  }
}

@media screen and (min-width: 1080px) {
  .AccountSetting {
    .app-bar {
      display: none;
    }
  }
}
</style>

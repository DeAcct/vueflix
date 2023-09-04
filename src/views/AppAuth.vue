<template>
  <main class="AppAuth">
    <LoadingSpinner
      v-if="isLoginWaiting"
      :is-loading="isLoginWaiting"
      class="AppAuth__LoadingSpinner"
    />
    <div class="AppAuth__Visual">
      <div class="AppAuth__Logo">
        <VueflixLogo />
      </div>
      <p class="AppAuth__CopyText">
        <span class="AppAuth__CopyLine"
          >이번 분기 화제작부터 고전 명작까지</span
        >
        <span class="AppAuth__CopyLine">한 곳에서 즐겨보세요!</span>
      </p>
    </div>
    <div class="AppAuth__CTAs">
      <VueflixBtn
        component="button"
        :icon="true"
        type="button"
        to="/auth/by-email"
        class="AppAuth__CTAItem AppAuth__CTAItem--Google"
        @click="googleContinue"
      >
        <template v-slot:icon>
          <IconBase>
            <IconGoogle />
          </IconBase>
        </template>
        <template v-slot:text>Google 계정으로 계속하기</template>
      </VueflixBtn>
    </div>
  </main>
</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/utility/firebase";

import VueflixLogo from "@/components/VueflixLogo.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import IconBase from "@/components/IconBase.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const user = computed(() => store.state.auth.user);
onMounted(() => {
  if (user.value) {
    router.back();
  }
});

const isLoginWaiting = ref(false);
async function googleContinue() {
  isLoginWaiting.value = true;
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);

    const docSnap = await getDoc(doc(db, "user", auth.currentUser.uid));
    if (!docSnap.exists()) {
      await setDoc(doc(db, "user", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        nickname: auth.currentUser.displayName,
        profileImgSrc: auth.currentUser.photoURL,
        email: auth.currentUser.email,
        recentWatched: [],
        wannaSee: [],
        reviews: 0,
        keywordReview: [],
        maratonWatch: [],
        purchased: [],
        membership: {
          initDate: new Date(),
        },
      });
    }
    store.commit("auth/setUser", docSnap.data());
    router.back();
  } catch {
    isLoginWaiting.value = false;
  }
}
</script>

<style lang="scss" scoped>
.AppAuth {
  position: relative;
  height: 100vh;
  background-color: hsl(var(--promotion-bg));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: {
    top: 10rem;
    bottom: 8rem;
  }
  &__LoadingSpinner {
    position: absolute;
    z-index: 100;
    width: 2.4rem;
    height: 2.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-3.2rem, -3.2rem);
  }
  &__Visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
  }
  &__Logo {
    width: 15rem;
    margin-bottom: 3rem;
    fill: hsl(var(--theme-500));
  }
  &__CopyText {
    text-align: center;
    margin-bottom: 2rem;
  }
  &__CopyLine {
    display: block;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.7rem;
    color: #fff;
  }
  &__CTAs {
    width: 100%;
    max-width: 37.5rem;
    box-shadow: none;
  }
  &__CTAItem {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 4rem;
    justify-content: space-between;
    box-shadow: none;
    border-radius: var(--global-radius);
    color: var(--google-login-text);
  }
}

@media screen and (min-width: 1080px) {
  .AppAuth {
    justify-content: center;

    &__Logo {
      display: none;
    }
    &__CopyText {
      margin-bottom: 10rem;
    }
    &__CopyLine {
      font-size: 5rem;
      font-weight: 900;
      background-image: linear-gradient(
        90deg,
        hsl(340, 100%, 54%),
        hsl(73, 100%, 53%)
      );
      background-position-x: left;
      background-size: 200%;
      background-clip: text;
      -webkit-background-clip: text;
      animation: text-animation 3000ms ease-in-out infinite alternate;
      color: transparent;
    }
  }
}

@keyframes text-animation {
  to {
    background-position-x: right;
  }
}
</style>

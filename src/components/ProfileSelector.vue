<template>
  <div class="ProfileSelector">
    <div class="ProfileSelector__Defaults">
      <p class="ProfileSelector__Type">기본 프로필 사진</p>
      <ImageSelector
        class="ProfileSelector__DefaultSelector"
        :src-list="PROFILE_KEYS"
        name="default-profiles"
        v-model="profileImg"
      />
    </div>
    <div class="ProfileSelector__My">
      <VueflixBtn
        type="button"
        component="button"
        class="ProfileSelector__OpenLocalFileBtn"
        @click="openFileModal"
      >
        <template #text>사진 다시 고르기</template>
      </VueflixBtn>
      <i
        class="ProfileSelector__PreviewHolder"
        :class="{
          'ProfileSelector__PreviewHolder--Selected':
            profileImg.type === 'custom',
        }"
      >
        <Transition name="preview-fade">
          <IconBase v-if="!previewSrc">
            <IconScreenshot />
          </IconBase>
          <img v-else :src="previewSrc" class="ProfileSelector__Preview" />
        </Transition>
      </i>
      <input
        type="file"
        class="blind"
        ref="$fileOpenBtn"
        @change="fileChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import ImageSelector from "../components/ImageSelector.vue";
import VueflixBtn from "@/components/VueflixBtn.vue";
import IconScreenshot from "@/components/icons/IconScreenshot.vue";
import IconBase from "./IconBase.vue";

const PROFILE_KEYS = [
  "profiles/hakari.jpg",
  "profiles/karane.jpg",
  "profiles/tortureHime.png",
  "profiles/eru.jpg",
  "profiles/himmel.webp",
];

const $fileOpenBtn = ref(null);
function openFileModal() {
  $fileOpenBtn.value.click();
}
function fileChange(e) {
  const [file] = e.target.files;
  profileImg.value = { type: "custom", file };
  fileToActualImg(file);
}

function fileToActualImg(target) {
  if (!FileReader) {
    throw new Error("파일을 불러오는데 실패했습니다.");
  }
  const reader = new FileReader();
  reader.onload = () => {
    previewSrc.value = reader.result;
  };
  reader.readAsDataURL(target);
}

const previewSrc = ref("");

const profileImg = defineModel();
</script>

<style lang="scss" scoped>
.ProfileSelector {
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(var(--bg-300));
  border-radius: var(--global-radius);
  padding: 1.4rem 1.4rem 0;

  &__Type {
    font-size: 1.4rem;
    width: 100%;
  }
  &__DefaultSelector {
    --preview-size: 4.8rem;
  }
  &__Defaults {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.4rem;
  }
  &__ProfileImage {
    width: 4.8rem;
    height: 4.8rem;
  }
  &__OpenSelector {
    font-size: 1.4rem;
  }
  &__My {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid hsl(var(--bg-200));
  }
  &__OpenLocalFileBtn {
    box-shadow: none;
    padding: {
      left: 0;
      right: 0;
    }
  }
  &__PreviewHolder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 2px solid hsl(var(--bg-100));
    border-radius: 50%;
    background-color: hsl(var(--bg-200));
    overflow: hidden;
    &--Selected {
      border-color: hsl(var(--theme-500));
    }
  }
  &__Preview {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: opacity 150ms ease;
}

.preview-fade-enter-from,
.preview-fade-leave-to {
  opacity: 0;
}
</style>

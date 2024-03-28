<template>
  <div class="QuickTimeMove">
    <ToolTip class="QuickTimeMove__Item" align="flex-start">
      <template #content
        ><div class="QuickTimeMove__Text">5초 앞으로</div></template
      >
      <template #trigger>
        <button
          class="QuickTimeMove__Trigger"
          @click="secAction.before"
          type="button"
        >
          <IconBase>
            <IconPrevFiveSec />
          </IconBase>
        </button>
      </template>
    </ToolTip>
    <ToolTip class="QuickTimeMove__Item" align="flex-start">
      <template #content>
        <div class="QuickTimeMove__Text">5초 뒤로</div>
      </template>
      <template #trigger>
        <button
          class="QuickTimeMove__Trigger"
          @click="secAction.after"
          type="button"
        >
          <IconBase>
            <IconNextFiveSec />
          </IconBase>
        </button>
      </template>
    </ToolTip>
  </div>
</template>

<script setup>
import ToolTip from "@/components/ToolTip.vue";

import IconBase from "@/components/IconBase.vue";
import IconPrevFiveSec from "@/components/icons/IconPrevFiveSec.vue";
import IconNextFiveSec from "@/components/icons/IconNextFiveSec.vue";

const props = defineProps({
  secAction: {
    type: Object,
    required: true,
    default: {
      before: () => {},
      after: () => {},
    },
  },
});
</script>

<style lang="scss" scoped>
.QuickTimeMove {
  display: flex;
  gap: 1.2rem;
  &__Item {
    height: 2.4rem;
  }
  &__Text {
    padding: 1.6rem;
    background-color: hsl(var(--bg-100));
    border-radius: calc(var(--global-radius) + 1rem);
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-wrap: nowrap;
  }
  &__Trigger {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }
}
</style>

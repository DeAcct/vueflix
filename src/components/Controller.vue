<template>
  <div class="controller" :class="{ open: isOpen }">
    <div class="top-row">
      <span class="swipe-indi"></span>
      <strong>선택된 태그</strong>
    </div>
    <div class="bottom-row">
      <div class="tags-container selected">
        <i class="icon">
          <icon-base iconName="선택된 태그"><icon-selected /></icon-base>
        </i>
        <ul class="tags">
          <tag-item>로맨스</tag-item>
        </ul>
      </div>
      <div class="tags-container excluded">
        <i class="icon">
          <icon-base iconName="제외된 태그"><icon-excluded/></icon-base>
        </i>
        <ul class="tags">
          <tag-item>특촬물</tag-item>
        </ul>
      </div>
    </div>
    <div class="selector-container">
      <ul class="general-selector">
        <selector-item label="멤버십에 포함됨" />
        <selector-item label="라프텔에서 감상 가능" />
      </ul>
      <ul class="selectors">
        <selector-accordion 
          v-for="selector in selectors" 
          :key="selector.name"
          :selectorItems="selector.selectorItem"
        >{{selector.name}}</selector-accordion>
      </ul>
    </div>
  </div>
</template>
<script>
import IconBase from "./IconBase.vue";
import IconExcluded from "./icons/IconExcluded.vue";
import IconSelected from "./icons/IconSelected.vue";
import TagItem from "./TagItem.vue";
import SelectorAccordion from "./SelectorAccordion.vue";
import SelectorItem from "./SelectorItem.vue";
export default {
  name: "Controller",
  components: {
    IconBase,
    IconExcluded,
    IconSelected,
    TagItem,
    SelectorAccordion,
    SelectorItem
  },
  data() {
    return {
      isOpen: false,
      selectors: [
        {
          name: "장르",
          selectorItem: [
            "BL", 
            "GL 백합", 
            "SF", 
            "개그", 
            "공포", 
            "드라마", 
            "로맨스", 
            "모험",
            "무협", 
            "미스터리", 
            "범죄",
            "성인",
            "스릴러",
            "스포츠",
            "시대물",
            "아동",
            "아이돌",
            "액션",
            "음식",
            "일상",
            "재난",
            "추리",
            "특촬",
            "판타지",
            "하렘"        
          ]
        }
      ]
      
    };
  },
};
</script>
<style lang="scss" scoped>
.controller {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1rem 2rem 7.5rem;
  background-color: var(--text-100);
  border-radius: 0.6rem 0.6rem 0 0;
  .top-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    .swipe-indi {
      width: 5rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      background-color: var(--text-300);
    }
    strong {
      font-size: 2rem;
    }
  }

  .bottom-row{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--text-300);
    padding-bottom: 2rem;
    gap: 1rem;
    .tags-container{
      display: flex;
      gap: 0.5rem;
      &.selected .icon{
        color: var(--toggle-true);
      }
      &.excluded .icon{
        color: var(--toggle-mixed)
      }
      .tags{
        display:flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }
    }
  }  
  .general-selector{
    display:flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--text-200);
    margin-bottom: 2rem;
  }
}
</style>

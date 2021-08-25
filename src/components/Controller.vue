<template>
  <form class="controller" :class="{ open: isOpen }">
    <div class="top-row" @touchstart="touchStart($event)" @touchmove="touchMove($event)">
      <span class="swipe-indi" ref="swipeIndi"></span>
      <strong>태그 선택</strong>
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
      <fieldset>
        <legend class="blind">일반 태그</legend>
        <ul class="general-selector">
          <triple-checkbox label="멤버십에 포함됨" />
          <triple-checkbox label="뷰플릭스에서 감상 가능" />
        </ul>
      </fieldset>
      <fieldset class="year-quarter-selector">
        <legend class="blind">방영 시기</legend>
        <label for="year">
          년도
          <select name="year" id="year">
            <option v-for="year in years" :key="year">{{year}}년</option>
          </select>
        </label>
        <label for="quarter">
          분기
          <select name="quarter" id="quarter">
            <option v-for="quarter in 4" :key="`${quarter}분기`">{{quarter}}분기</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend class="blind">세부 태그</legend>
        <ul class="selectors">
          <selector-accordion 
            v-for="selector in selectors" 
            :key="selector.name"
            :selectorItems="selector.selectorItem"
          >{{selector.name}}</selector-accordion>
        </ul>
      </fieldset>
    </div>
  </form>
</template>
<script>
import IconBase from "./IconBase.vue";
import IconExcluded from "./icons/IconExcluded.vue";
import IconSelected from "./icons/IconSelected.vue";
import TagItem from "./TagItem.vue";
import SelectorAccordion from "./SelectorAccordion.vue";
import TripleCheckbox from "./TripleCheckbox.vue";
export default {
  name: "Controller",
  components: {
    IconBase,
    IconExcluded,
    IconSelected,
    TagItem,
    SelectorAccordion,
    TripleCheckbox
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
        },
        {
          name: "태그",
          selectorItem: [
            "가족",
            "감동",
            "게임",
            "동물",
            "동양풍",
            "두뇌싸움",
            "로봇",
            "루프물",
            "마법소녀",
            "먼치킨",
            "배틀",
            "뱀파이어",
            "복수",
            "삼각관계",
            "서양풍",
            "선생님",
            "성장",
            "슬픔",
            "시간여행",
            "역하렘",
            "연예인",
            "열혈",
            "오타쿠",
            "요괴 및 괴물",
            "육아",
            "이세계",
            "정치",
            "좀비",
            "주체적 여성",
            "짝사랑",
            "철학",
            "퇴마",
            "학교"
          ]
        },
        {
          name: "방영",
          selectorItem: [
            "방영중",
            "완결",
          ]
        },
        {
          name: "제작사",
          selectorItem: [
            "본즈",
            "쿄토애니메이션",
            "매드하우스",
            "A-1Pictures",
            "유포테이블",
            "WIT Studio",
            "프로덕션 I.G",
            "P.A.Works",
            "J.C.Staff",
            "샤프트",
            "동화공방",
            "스튜디오 딘",
            "실버 링크",
            "스튜디오 피에로",
            "MAPPA",
            "화이트폭스",
            "라르케",
            "트리거",
            "폴리곤 픽쳐스",
            "사테라이트",
          ]
        },
        {
          name: "출시타입",
          selectorItem: [
            "TVA",
            "극장판",
            "OVA",
          ]
        },
        {
          name: "브랜드",
          selectorItem: [
            "애니맥스 플러스",
            "애니플러스",
            "KTH",
            "대원",
            "기타",
          ]
        },
      ],
      oldTouch: null,
    };
  },
  computed: {
    years(){
      const current = new Date();
      const origin = current.getFullYear();
      const yearList = [];
      for(let input=origin;input>=1990;input--){
        yearList.push(input)
      }
      return yearList;
    }
  },
  methods: {
    touchStart(e){
      this.oldTouch = e.touches[0].clientY
    },
    touchMove(e){
      if(this.oldTouch > e.touches[0].clientY && !this.isOpen){
        console.log("위로 올림")
        this.isOpen = true
      }
      else if(this.oldTouch <= e.touches[0].clientY && this.isOpen){
        console.log("아래로 내림")
        this.isOpen = false
      }
    }
  }
  /*
  },
  mounted(){
    const hammer = new Hammer.Manager(this.$refs.swipeIndi);
    const swipe = new Hammer.Swipe();
    hammer.add(swipe);
    hammer.on("swipeup", function(){
      this.isOpen = true
    })
    hammer.on("swipedown", function(){
      this.isOpen = false
      console.log(this.isOpen)
    })
  },
  mounted(){
    this.$refs.swipeIndi.addEventListener("touchstart", this.touchStart, false);
    this.$refs.swipeIndi.addEventListener("touchmove", this.touchMove, false)
  },
  beforeUnmount(){
    this.$refs.swipeIndi.removeEventListener("touchstart", this.touchStart, false);
    this.$refs.swipeIndi.removeEventListener("touchmove", this.touchMove, false)
  },
  */
};
</script>
<style lang="scss" scoped>
.controller {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 0 2rem 7.5rem;
  background-color: var(--text-100);
  border-radius: 0.6rem 0.6rem 0 0;
  max-height: calc(100vh - 11.6rem);
  overflow-y: scroll;
  user-select: none;
  bottom: calc(-1 * (100vh - 30rem));
  animation: 300ms ease-in-out 6 alternate gesture-hint;
  transition: 300ms ease-out;
  &.open{
    bottom: 0;
  }
  .top-row {
    position:sticky;
    z-index: 10;
    padding: 1rem 0;
    background-color: var(--text-100);
    top: 0;
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
      width: 100%;
      text-align: center;
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
  }
  fieldset:not(:last-child){
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--text-200);
    margin-bottom: 2rem;
  }
  .year-quarter-selector{
    display: flex;
    justify-content: space-between;

    label{
      display: flex;
      align-items: center;
      gap: 0.8rem;
      width: 48%;
      font-size: 1.5rem;
      font-weight: 700;
      select{
        flex: 1;
        text-align: center;
        height: 3rem;
        border: 0;
        border-radius: 0.3rem;
        padding: 0 0.5rem;
        background-color: transparent;
        border: 1px solid var(--text-300);
      }
    }
  }
  .selectors{
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
}
@media screen and (min-width: 769px) {
  .controller{
    padding: 0 4.7rem 0;
    .top-row{
     padding-top: 5rem;
     .swipe-indi{
       display: none;
     }
     strong {
       text-align: left;
     }
    }
    &::-webkit-scrollbar{
      display: block;
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: var(--text-300);
      border-radius: 0.25rem;
    }
  }
}

@keyframes gesture-hint{
  to{
    transform: translateY(-1rem);
  }
}
</style>

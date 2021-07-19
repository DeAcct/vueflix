<template>
  <section class="slide">
    <h2 class="blind">애니 추천 슬라이드</h2>
    <div class="slide-hold">
      <ul class="slide-wrap">
        <li v-for="slide in slides" :key="slide.anime" class="slide-item">
          <img :src="slide.bg" :alt="slide.anime" class="bg" />
          <div class="slide-info">
            <h3>
              <img
                :src="slide.aniLogo"
                :alt="`${slide.anime} 로고`"
                class="ani-logo"
              />
            </h3>
            <strong>{{ slide.copy }}</strong>
            <slide-link>{{ slide.button }}</slide-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="slide-remote">
      <button class="prev">
        <span class="blind">이전</span>
      </button>
      <button class="next">
        <span class="blind">다음</span>
      </button>
    </div>
    <div class="slide-indi">
      <button v-for="(slide, index) in slides" :key="index">
        <span class="blind">{{ slide.anime }}</span>
      </button>
    </div>
  </section>
</template>

<script>
import SlideLink from "./SlideLink.vue";
export default {
  components: { SlideLink },
  name: "Slide",
  data() {
    return {
      slides: [
        {
          anime: "코바야시네 메이드래곤 S",
          //bgSet: "https://image.laftel.net/carousel/carousel_tokyo_revengers_w.jpg?Expires=1626685125&Signature=ECdgVrI8luxNjsk7V93Q1oY0dcA1MXVfLXcUSSAIxyWMAsD7Xn4PDvPp-41~iU56fpi~m2BzrjXX~iVn1rgfSDckErwnHKx0rWNq4bRofcEfMeYRFo-M3-x8-z0rydPZOD7zn7QC4-QcWc8vKdyzGEUKPz8EFgwSyCK~fPuMOgatvSuL74UuXQd4azgnSTnoZJv4XmDt0FQLJ9WUIw0FMM~3n~WzaXkV851OwxNcAvrudWvDwAMjq2gPfvzGq7KJOnWMuWPz4Ba2SdoNr~l2kMdzLVzK1WTd-b0m5VsbXg3Y2Rpcyqa~cs-AbsA~u~uCwvKaBN9egiQDb-gBtbiJsQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
          aniLogo: "/img/kobayashi.4f809d9c.png",
          copy: "다시 돌아온 일상 명작",
          button: "보러가기",
        },
        {
          anime: "사신 도련님과 검은 메이드",
          //bgSet: "https://image.laftel.net/carousel/carousel_hero_sonnyboy_w.jpg?Expires=1626685125&Signature=Mcn369uN68uzu79bVEa5c1BXfcf8izzqJX2zb1BofW2-iPp8FtHPLpTzpUnbOdujHyKgcuPxvDIuGyb8mpBWOmFXTOY-wUrCswYrD0ioW12t-rJ86CkQ2UajF4uI8yLrTgVji85W5Mtq9ngHdW9MSHl9QKKHjTNAHurMZ0G7438TMkfsT3AAPwj8c8uBzzOhcfaVUySyBmSiRL17bvfs7HMkrd3bK6ujVt~R2QRKizorplYIf6YF2GT8cT49Q7hPjbPRqF6c~7EVukLUufogE8~wgQ386BZ-TbAmOaacqjLTIiuA0D2Icy83Iow4F1hiMvnQZoVI5MPGCFuz-MbitA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
          copy: "가장 가까이 있지만 닿을 수 없는 연인의 이야기",
          button: "보러가기",
        },
        {
          anime: "하얀 모래의 아쿠아톱",
          //bgSet: "https://image.laftel.net/carousel/carousel_hero_SMR_w.jpg?Expires=1626685125&Signature=b80kyVG5Ub2pxLXBmIkgffQHuXobQXkrSWwOVgD3jbft-cgxu80yra7PMc6PPCdNV6HSKPhEsI6QDyiJbRHuioKe6~WO3AJmfErK10wpdavVUNelh4ld6AO68LQ-uuP19mPDARO56F7mqY20JBYyF1E1nuPCA2hNsZbnDmWvWqlPdJ5jP6TEd3z7-rYYOMKb2UA5YoQYzKZwArL8av6c~pnLTmi5jhNU-p~k0DAkmAECLXVObdIhSjNCVSgX~KO8zl4R~HeVX51R6kH0JcpF39BM2e2ZrePujCUpFSsNknfeprI1qUBGlp4Xktpx0XSKrSo2Gf9jmfbzfidIZb6OJw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
          copy: "여름방학, 방구석에서 푸른 바다를 보고싶다면?",
          button: "보러가기",
        },
        {
          anime: "그녀도 여친",
          //bgSet: "https://image.laftel.net/carousel/carousel_hero_machikado_w.jpg?Expires=1626685125&Signature=nWAagyAFxmgJn1jlhQqXOSaGqCwshJSflRvL4pvfkXNC-UyOOEzPM0lKpbaRkGR6Pu4JsoKs9gI~Es2TI0Q4VNpAp7hIhgyGWNsckUtai7NX6Q0Tz3Ju2dxC8J0flboZTzgr2WCHIZUFz7HoZocBD~kEonik8aRKbsd2Db5Q7yFz9wEsmTQjgWPXGeb44IkMWmm0dAN-1klgvMxS93FernMeaHgCTCzumR2aomx6jru7ISJcENxGqIPj5CZo9EgT1KmERXBEW27FCRIm30qSJU4-ctgtkY2HgwTS9idp~gBz2-sHfHOVDnMn-kk5fdZUg5mhayLM3Endp8bLuDVnrg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
          copy: "그녀도 여친? 그녀도, 여친.",
          button: "보러가기",
        },
        {
          anime: "우리들의 리메이크",
          //bgSet: "https://image.laftel.net/carousel/carousel_hero_machikado_w.jpg?Expires=1626685125&Signature=nWAagyAFxmgJn1jlhQqXOSaGqCwshJSflRvL4pvfkXNC-UyOOEzPM0lKpbaRkGR6Pu4JsoKs9gI~Es2TI0Q4VNpAp7hIhgyGWNsckUtai7NX6Q0Tz3Ju2dxC8J0flboZTzgr2WCHIZUFz7HoZocBD~kEonik8aRKbsd2Db5Q7yFz9wEsmTQjgWPXGeb44IkMWmm0dAN-1klgvMxS93FernMeaHgCTCzumR2aomx6jru7ISJcENxGqIPj5CZo9EgT1KmERXBEW27FCRIm30qSJU4-ctgtkY2HgwTS9idp~gBz2-sHfHOVDnMn-kk5fdZUg5mhayLM3Endp8bLuDVnrg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
          copy: "10년 전으로 돌아간다면 어떤 걸 하고싶으세요?",
          button: "보러가기",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  .slide-hold {
    /*ui 자체*/
    width: 100vw;
    height: fit-content;
    background-color: #000;
    overflow: hidden;
    .slide-wrap {
      /*슬라이드 감싸기*/
      display: flex;
      width: fit-content;
      height: fit-content;
      .slide-item {
        position: relative;
        .bg {
          display: block;
          width: 100vw;
          aspect-ratio: 131/55;
        }
        .slide-info {
          position: absolute;
          left: 5rem;
          bottom: 6rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
          font-size: 1.7rem;
          text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .slide-remote {
    position: absolute;
  }
  .slide-indi {
    position: absolute;
  }
}
</style>

const state = {
  recentAnime: [
    {
      title: "쟈히님은 기죽지 않아",
      episode: "1화",
      img: require("@/assets/carousel_thumbnail_jahisama.jpg"),
      url: "#none",
      isMovie: false,
      progress: "100%",
    },
    {
      title: "그날 본 꽃의 이름을 우리는 아직 모른다",
      episode: "11화",
      img: require("@/assets/carousel_thumbnail_anohana.jpg"),
      url: "#none",
      isMovie: false,
      progress: "90%",
    },
    {
      title: "카구야 님은 고백받고 싶어 ~천재들의 연애 두뇌전~ 2기",
      episode: "12화",
      img: require("@/assets/carousel_thumbnail_kaguya.jpg"),
      url: "#none",
      isMovie: false,
      progress: "50%",
    },
    {
      title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
      episode: "1화",
      img: require("@/assets/carousel_thumbnail_tenslime.webp"),
      url: "#none",
      isMovie: false,
      progress: "30%",
    },
    {
      title: "이 멋진 세계에 축복을! 붉은 전설",
      episode: "없음",
      img: require("@/assets/carousel_thumbnail_konosubaRed.jpg"),
      url: "#none",
      isMovie: true,
      progress: "10%",
    },
    {
      title: "역시 내 청춘 러브코메디는 잘못됐다.",
      episode: "1화",
      img: require("@/assets/carousel_thumbnail_necheongko.webp"),
      url: "#none",
      isMovie: false,
      progress: "95%",
    },
  ],
  recommendAnime: [
    {
      recommendTitle: "방황하는 이 시대의 청춘들에게 바칩니다",
      list: [
        {
          title: "4월은 너의 거짓말",
          img: require("@/assets/carousel_thumbnail_kimiuso.jpg"),
          url: "#none",
        },
        {
          title: "SHIROBAKO",
          img: require("@/assets/carousel_thumbnail_shirobako.jpg"),
          url: "#none",
        },
        {
          title: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
          img: require("@/assets/carousel_thumbnail_butayarou.jpg"),
          url: "#none",
        },
        {
          title: "역시 내 청춘 러브코미디는 잘못됐다",
          img: require("@/assets/carousel_thumbnail_necheongko_title.jpg"),
          url: "#none",
        },
        {
          title: "후르츠 바스켓 1기",
          img: require("@/assets/carousel_thumbnail_fruitbasket.webp"),
          url: "#none",
        },
        {
          title: "바라카몬",
          img: require("@/assets/carousel_thumbnail_barakamon.webp"),
          url: "#none",
        },
      ],
    },
    {
      recommendTitle: "가슴이 웅장해지는 메카닉",
      list: [
        {
          title: "SSSS.GRIDMAN",
          img: require("@/assets/carousel_thumbnail_gridman.webp"),
          url: "#none",
        },
        {
          title: "플래닛 위드",
          img: require("@/assets/carousel_thumbnail_planetwith.webp"),
          url: "#none",
        },
        {
          title: "기동전사 건담 디 오리진 1 : 푸른 눈의 캬스발",
          img: require("@/assets/carousel_thumbnail_gundam.webp"),
          url: "#none",
        },
        {
          title: "달링 인 더 프랑키스",
          img: require("@/assets/carousel_thumbnail_dalinginthefranxx.webp"),
          url: "#none",
        },
        {
          title: "(무삭제) 미소의 대가",
          img: require("@/assets/carousel_thumbnail_smile.webp"),
          url: "#none",
        },
      ],
    },
  ],
  slides: [
    {
      anime: "코바야시네 메이드래곤 S",
      bgSet: {
        webp: require("@/assets/kobayashi_banner.webp"),
        jpeg: require("@/assets/kobayashi_banner.jpeg"),
        webpMobile: require("@/assets/kobayashi_banner_m.webp"),
        jpegMobile: require("@/assets/kobayashi_banner_m.jpeg"),
      },
      aniLogo: require("@/assets/kobayashi.png"),
      /*
       서버가 아닌 로컬의 이미지 로고를 바인딩할 때는,
       경로만 넣을 경우 "경로 텍스트 그 자체"가 꽂히게 된다.
       require를 넣으면 바르게 들어간다
      */
      copy: "다시 돌아온 일상물 다크호스",
      button: "보러가기",
      link: "/anime/코바야시네 메이드래곤 S",
    },
    {
      anime: "사신 도련님과 검은 메이드",
      bgSet: {
        webp: require("@/assets/blackmaid_banner.webp"),
        jpeg: require("@/assets/blackmaid_banner.jpeg"),
        webpMobile: require("@/assets/blackmaid_banner_m.webp"),
        jpegMobile: require("@/assets/blackmaid_banner_m.jpeg"),
      },
      aniLogo: require("@/assets/blackmaid.png"),
      copy: "사회적 거리두기의 모범",
      button: "보러가기",
      link: "/anime/사신 도련님과 검은 메이드",
    },
    {
      anime: "하얀 모래의 아쿠아톱 part 1",
      bgSet: {
        webp: require("@/assets/aquatop_banner.webp"),
        jpeg: require("@/assets/aquatop_banner.jpeg"),
        webpMobile: require("@/assets/aquatop_banner_m.webp"),
        jpegMobile: require("@/assets/aquatop_banner_m.jpeg"),
      },
      aniLogo: require("@/assets/aquatop.png"),
      copy: "방구석 바캉스인 줄 알았더니 미생 애니판",
      button: "보러가기",
      link: "/anime/하얀 모래의 아쿠아톱 part 1",
    },
    {
      anime: "그녀도 여친",
      bgSet: {
        webp: require("@/assets/kanokano_banner.webp"),
        jpeg: require("@/assets/kanokano_banner.jpeg"),
        webpMobile: require("@/assets/kanokano_banner_m.webp"),
        jpegMobile: require("@/assets/kanokano_banner_m.jpeg"),
      },
      aniLogo: require("@/assets/kanokano.png"),
      copy: "뇌를 정지합니다! 정지하겠습니다!",
      button: "보러가기",
      link: "/anime/그녀도 여친",
    },
    {
      anime: "우리들의 리메이크",
      bgSet: {
        webp: require("@/assets/bokutachi_banner.webp"),
        jpeg: require("@/assets/bokutachi_banner.jpeg"),
        webpMobile: require("@/assets/bokutachi_banner_m.webp"),
        jpegMobile: require("@/assets/bokutachi_banner_m.jpeg"),
      },
      aniLogo: require("@/assets/bokutachi.png"),
      copy: "10년 전으로 돌아간다면",
      button: "보러가기",
      link: "/anime/우리들의 리메이크",
    },
  ],
};

export default {
  namespaced: true,
  state,
};

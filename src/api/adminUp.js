import { db } from "@/utility/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function animeUpload() {
  const animeRef = doc(db, "anime", mockData.name);
  await setDoc(animeRef, mockData);
}

const mockData = {
  slideCopy: "패배해도 당당히 나아가는 히로인",
  release: ["2024년 3분기"],
  updateTime: "01:30:00",
  parts: [
    {
      episodes: [
        {
          date: "2024.07.14",
          title: "프로 소꿉친구 야나미 안나의 패배 방식",
          comment: [],
          index: "1화",
          thumbnail: "MakeineSr1Ep1.jpg",
        },
        {
          comment: [],
          date: "2024.07.21",
          thumbnail: "MakeineSr1Ep2.jpg",
          index: "2화",
          title: "약속된 패배를 너에게",
        },
        {
          index: "3화",
          comment: [],
          thumbnail: "MakeineSr1Ep3.jpg",
          date: "2017.07.28",
          title: "싸우기 전에 패배했다",
        },
        {
          title:
            "패배 히로인을 들여다볼 때 패배 히로인도 역시 당신을 들여다본다",
          index: "4화",
          thumbnail: "MakeineSr1Ep4.jpg",
          comment: [],
          date: "2024.08.04",
        },
        {
          title: "아사구모 치하야는 헷갈리게 한다",
          index: "5화",
          thumbnail: "MakeineSr1Ep5.jpg",
          date: "2024.08.11",
          comment: [],
        },
        {
          thumbnail: "MakeineSr1Ep6.jpg",
          index: "6화",
          date: "2024.08.18",
          title: "차인 적 없는 사람만이 패배 히로인에게 돌을 던져라",
          comment: [],
        },
        {
          index: "7화",
          thumbnail: "MakeineSr1Ep7.jpg",
          date: "2024.08.25",
          comment: [],
          title: "해피 엔딩의 애프터",
        },
        {
          comment: [],
          thumbnail: "MakeineSr1Ep8.jpg",
          date: "2024.09.01",
          title: "곤란하실 땐 컨설턴트에게",
          index: "8화",
        },
        {
          date: "2024.09.08",
          title: "선생님은 천장의 얼룩이라 생각하고 계속해 주시죠",
          index: "9화",
          comment: [],
          thumbnail: "MakeineSr1Ep9.jpg",
        },
        {
          comment: [],
          index: "10화",
          thumbnail: "MakeineSr1Ep10.jpg",
          date: "2024.09.15",
          title: "헤어지기엔 너무 이르다",
        },
        {
          index: "11화",
          title: "무과실책임에 대해 이야기해 볼까?",
          comment: [],
          thumbnail: "MakeineSr1Ep11.jpg",
          date: "2024.09.22",
        },
        {
          title: "마지막화에서 패배 히로인 곁에 있는 애송이 단역 캐릭터인가",
          thumbnail: "MakeineSr1Ep12.jpg",
          comment: [],
          date: "2024.10.02",
          index: "12화",
        },
      ],
      part: "1기",
      maxIndex: 12,
    },
  ],
  isEnd: true,
  director: "키타무라 쇼타로",
  summary: "조금은 안타까운 패배 히로인의 이야기",
  type: "TVA",
  poster: "makeine.png",
  shortName: "makeine",
  genre: ["학원", "청춘", "러브 코미디"],
  day: "일",
  keywordReview: {
    sakuga: {
      value: 0,
      keyword: "작화(움직임)",
    },
    bgm: {
      keyword: "배경음악",
      value: 0,
    },
    voice: {
      keyword: "성우 연기",
      value: 0,
    },
    story: {
      keyword: "스토리",
      value: 0,
    },
    directing: {
      value: 0,
      keyword: "연출",
    },
    drawing: {
      value: 0,
      keyword: "그림체",
    },
    character: {
      value: 0,
      keyword: "캐릭터",
    },
  },
  reviews: [],
  idNumber: 6,
  name: "패배 히로인이 너무 많아!",
  madeBy: ["A-1 Pictures"],
  price: 900,
  rating: "15세 이용가",
};

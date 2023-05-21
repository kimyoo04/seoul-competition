// chartData.ts

// 자유게시판 최다조회 데이터
export const rankPostData = [
  {
    id: 5,
    title:
      "안녕하세요? 최근 웰빙에 관심이 생겨 함께 웰빙 교양 과목을 들을 분을 구합니다.",
    hits: 10,
    commentsCount: 5,
  },
  {
    id: 4,
    title: "00구에서 진행했던 교양 과목 들으시는 분 있나요?",
    hits: 9,
    commentsCount: 0,
  },
  {
    id: 3,
    title: "제가 재미있는 걸 발견했네요",
    hits: 6,
    commentsCount: 0,
  },
  {
    id: 2,
    title: "요즘 손주들 돌봐주기 넘 힘들어요",
    hits: 5,
    commentsCount: 0,
  },
  {
    id: 1,
    title: "다들 노후 자금 어떻게 마련하셨나요?",
    hits: 4,
    commentsCount: 0,
  },
];

// 교육게시판 최다조회 데이터 : User 정보 포함
export const rankEducationUserData = {
  data: [
    {
      id: 72,
      name: "프레시매니저양성과정3기(야쿠르트매니저)",
      status: "수강신청중",
      price: "0",
      capacity: 10,
      registerStart: "2023.05.17",
      registerEnd: "2023.06.15",
      educationStart: "2023.06.16",
      educationEnd: "2023.06.23",
      url: "https://50plus.or.kr/education-detail.do?id=32931832",
      hits: 0,
      reviewsCount: 0,
    },
    {
      id: 57,
      name: "MBTI 유형별 의사소통방법과 나만의 스트레스 관리법!",
      status: "수강신청중",
      price: "0",
      capacity: 20,
      registerStart: "2023.05.17",
      registerEnd: "2023.06.21",
      educationStart: "2023.06.22",
      educationEnd: "2023.06.22",
      url: "https://50plus.or.kr/education-detail.do?id=32925399",
      hits: 0,
      reviewsCount: 0,
    },
    {
      id: 58,
      name: "홈바리스타 핸드드립 과정",
      status: "수강신청중",
      price: "50,000",
      capacity: 10,
      registerStart: "2023.05.17",
      registerEnd: "2023.06.27",
      educationStart: "2023.06.28",
      educationEnd: "2023.08.16",
      url: "https://50plus.or.kr/education-detail.do?id=32929721",
      hits: 0,
      reviewsCount: 0,
    },
    {
      id: 66,
      name: "삶이 편해지는 스마트폰 생활  - 카카오톡 파헤치기",
      status: "수강신청중",
      price: "20,000",
      capacity: 18,
      registerStart: "2023.05.17",
      registerEnd: "2023.06.07",
      educationStart: "2023.06.08",
      educationEnd: "2023.06.29",
      url: "https://50plus.or.kr/education-detail.do?id=32919998",
      hits: 0,
      reviewsCount: 0,
    },
    {
      id: 67,
      name: "[열린교육]반려동물 드로잉",
      status: "수강신청중",
      price: "10,000",
      capacity: 18,
      registerStart: "2023.05.17",
      registerEnd: "2023.06.07",
      educationStart: "2023.06.08",
      educationEnd: "2023.07.13",
      url: "https://50plus.or.kr/education-detail.do?id=32956650",
      hits: 0,
      reviewsCount: 0,
    },
  ],
  user: true,
};

/// 교육게시판 최다 검색 키워드 : User 정보 포함

export const rankEducationUserKeywords = {
  data: [
    { keyword: "건강", hits: 50 },
    { keyword: "취업", hits: 30 },
    { keyword: "생애설계", hits: 30 },
    { keyword: "교육", hits: 20 },
    { keyword: "인문학", hits: 10 },
  ],
  user: true,
};

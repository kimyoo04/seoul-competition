export const posts = [
  {
    id: 1,
    nickname: "킹슬리코망",
    title: "첫 번째 글입니다.",
    content: "네!! ㅎㅎㅎ이제 바로 board 들어가시나요?...",
    createdAt: "2023-04-18T09:00:00Z",
    hits: 5,
    comments_num: 2,
  },
  {
    id: 2,
    nickname: "불꽃민호",
    title: "두 번째 글입니다.",
    content: "유님께서 도와주신 덕분에 금방 할 수 있었어요 감사해요...",
    createdAt: "2023-04-18T09:00:00Z",
    hits: 3,
    comments_num: 2,
  },
  {
    id: 3,
    nickname: "킹슬리코망",
    title: "첫 번째 글입니다.",
    content: "네!! ㅎㅎㅎ이제 바로 board 들어가시나요?...",
    createdAt: "2023-04-18T09:00:00Z",
    hits: 5,
    comments_num: 2,
  },
  {
    id: 4,
    nickname: "킹슬리코망",
    title: "첫 번째 글입니다.",
    content: "네!! ㅎㅎㅎ이제 바로 board 들어가시나요?...",
    createdAt: "2023-04-18T09:00:00Z",
    hits: 5,
    comments_num: 2,
  },
  {
    id: 5,
    nickname: "킹슬리코망",
    title: "첫 번째 글입니다.",
    content: "네!! ㅎㅎㅎ이제 바로 board 들어가시나요?...",
    createdAt: "2023-04-18T09:00:00Z",
    hits: 5,
    comments_num: 2,
  },
];

export const postDetail1 = {
  id: 1,
  nickname: "킹슬리코망",
  title: "첫 번째 글입니다.",
  content:
    "네!! ㅎㅎㅎ이제 바로 board 들어가시나요? 유님께서 도와주신 덕분에 금방 할 수 있었어요 감사해요...",
  createdAt: "2023-04-18T09:00:00Z",
  hits: 5,
  comments: [
    {
      id: 1,
      post_id: 1,
      nickname: "John",
      content: "Nice post!",
      createdAt: "2023-04-19T12:01:00Z",
    },
    {
      id: 2,
      post_id: 1,
      nickname: "Jane",
      content: "I disagree with your opinion.",
      createdAt: "2023-04-19T12:02:00Z",
    },
  ],
};

export const postDetail2 = {
  id: 2,
  nickname: "불꽃민호",
  title: "두 번째 글입니다.",
  content: "네!! ㅎㅎㅎ이제 바로 board 들어가시나요?...",
  createdAt: "2023-04-18T09:00:00Z",
  hits: 3,
  comments: [
    {
      id: 4,
      post_id: 2,
      nickname: "Peter",
      content: "Thanks for sharing!",
      createdAt: "2023-04-20T12:01:00Z",
    },
    {
      id: 6,
      post_id: 2,
      nickname: "Mary",
      content: "I like your writing style.",
      createdAt: "2023-04-20T12:02:00Z",
    },
  ],
};



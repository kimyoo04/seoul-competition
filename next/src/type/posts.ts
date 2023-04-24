// 게시판 인피니티 스크롤 데이터
export interface IPost {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  hits: number;
  comments_num: number;
}

// 게시판 State
export interface IPostsState {
  posts: IPost[];
  status: "idle" | "loading" | "failed";
  error: string | null;
  page: number;
  hasMore: boolean;
}
// 1개 게시글 모든 정보

export interface IPostDetail {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  count: string;
  comment: IPostComment[];
}

export interface IPostComment {
  id: number;
  post_id: string;
  nickname: string;
  content: string;
}

export interface IPostDetailState {
  data: IPostDetail;
  status: "idle" | "loading" | "failed";
  error: string | null;
  page: number;
  hasMore: boolean;
}

// 게시판 인피니티 스크롤 데이터

export interface IPost {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  count: string;
  comment_num: number;
}

export interface IPostState {
  data: IPost[];
  status: "idle" | "loading" | "failed";
  error: string | null;
  page: number;
  hasMore: boolean;
}

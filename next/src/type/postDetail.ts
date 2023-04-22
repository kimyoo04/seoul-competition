// 게시글 데이터
export interface IPostDetail {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  count: string;
  comments: IPostComment[];
}

// 게시글의 댓글
export interface IPostComment {
  id: number;
  post_id: string;
  nickname: string;
  content: string;
}

// 게시글 State
export interface IPostDetailState {
  post: IPostDetail;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

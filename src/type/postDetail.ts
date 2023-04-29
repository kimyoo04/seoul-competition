// 게시글 데이터
export interface IPostDetail {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  hits: number;
  comments: IPostComment[];
}

// 게시글의 댓글
export interface IPostComment {
  id: number;
  postId: string;
  nickname: string;
  content: string;
  createdAt: string;
}

// 게시글 State
export interface IPostDetailState {
  post: IPostDetail;
  status: "idle" | "loading" | "failed";
  error: string | null;
}
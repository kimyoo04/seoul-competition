import { IComment } from "./comments";

// 게시글 데이터
export interface IPostDetail {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  hits: number;
  comments: IComment[];
}

// 게시글 State
export interface IPostDetailState {
  post: IPostDetail;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

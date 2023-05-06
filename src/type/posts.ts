import { TDate } from "./filter";

// 자유게시판 데이터
export interface IPostData {
  id: TId;
  nickname: TNickname;
  title: TPassword;
  content: TTitle;
  createdAt: TContent;
  hits: THits;
  commentsCount: TCommentsCount;
}

// 자유게시판 인피니티 스크롤 데이터
// readPosts.ts에 사용
export interface IPostsDataPerPage {
  data: IPostData[];
  totalPages: number;
  currentPage: number;
}

// readPosts.ts에 사용
export interface IPostsQueryParams {
  page: number;
  name?: string;
  startDate?: TDate;
  endDate?: TDate;
}

//게시글 업로드 폼
export interface IPostForm {
  nickname: TNickname;
  password: TPassword;
  title: TTitle;
  content: TContent;
}
//게시글 업데이트 폼
export interface IUpdatePostForm {
  postId: TPostId;
  nickname: TNickname;
  password: TPassword;
  title: TTitle;
  content: TContent;
}

// 게시글 비밀번호 확인 시 전송할 데이터
export interface IUpdatePostCheck {
  postId: TPostId;
  password: TPassword;
}
// 게시글 비밀번호 확인 폼
export interface IUpdatePostCheckForm {
  password: TPassword;
}

export type TId = number;
export type TPostId = string;
export type TNickname = string;
export type TPassword = string;
export type TTitle = string;
export type TContent = string;
export type THits = number;
export type TCommentsCount = number;

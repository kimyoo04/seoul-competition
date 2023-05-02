import { TDate } from "./filter";

// 자유게시판 데이터
export interface IPostData {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  hits: number;
  commentsCount: number;
}

// 자유게시판 인피니티 스크롤 데이터
// fetchPosts.ts에 사용
export interface IPostsDataPerPage {
  data: IPostData[];
  totalPages: number;
  currentPage: number;
}

// fetchPosts.ts에 사용
export interface IPostsQueryParams {
  page: number;
  name?: string;
  startDate?: TDate;
  endDate?: TDate;
}

// 게시판 인피니티 스크롤 데이터
export interface IPostData {
  id: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  hits: number;
  commentsCount: number;
}

// 게시판 데이터 페이지별 타입 설정
export interface IPostsDataPerPage {
  data: IPostData[];
  totalPages: number;
  currentPage: number;
}

import { TAges, TAgesStr, TInterest } from "./userForm";

// 자유게시판 최다 조회 랭킹 데이터 : 전체
export interface IRankPostData {
  id: number;
  title: string;
  hits: number;
  commentsCount: number;
}

// 자유게시판 최다 조회 랭킹 데이터 : 유저 정보 포함
export interface IRankPostUserData {
  data: IRankPostData[];
  user: boolean;
}

// 교육 정보 최다 조회 랭킹 데이터 : 전체
export interface IRankEducationData {
  id: number;
  name: string;
  status: string;
  price: string;
  capacity: number;
  registerStart: string;
  registerEnd: string;
  educationStart: string;
  educationEnd: string;
  url: string;
  hits: number;
  reviewsCount: number;
}

// 교육 정보 최다 조회 랭킹 데이터 : 유저 정보 포함
export interface IRankEducationUserData {
  data: IRankEducationData[];
  user: boolean;
}

// 교육 정보 최다 검색 랭킹 데이터 : 전체
export interface IRankKeywordsData {
  id: number;
  keyword: string;
  hits: number;
}

// 교육 정보 최다 검색 랭킹 데이터 : 유저 정보 포함
export interface IRankKeywordsUserData {
  data: IRankKeywordsData[];
  user: boolean;
}

// AgesState
export interface IAgesState {
  isOpen: boolean;
  selectedAgesStr: TAgesStr | "";
  selectedAges: TAges | "";
}

// InterestState
export interface IInterestState {
  isOpen: boolean;
  selectedInterest: TInterest | "";
}

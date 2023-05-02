import { TDate, TPrice, TStatus } from "./filter";

// 교육 정보 데이터
export interface IEducationData {
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

// 교육 정보 인피니티 스크롤 데이터
// fetchEducation.ts에 사용
export interface IEducationsDataPerPage {
  data: IEducationData[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

// fetchEducation.ts에 사용
export interface IEducationsQueryParams {
  page: number;
  name?: string;
  status?: TStatus;
  startDate?: TDate;
  endDate?: TDate;
  minPrice?: TPrice;
  maxPrice?: TPrice;
}

import { IComment } from "./comments";

// 교육 정보 데이터
export interface IEducationDetail {
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
  reviews: IComment[];
}

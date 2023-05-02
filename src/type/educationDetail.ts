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
  reviews: IEducationReview[];
}

// 교육 정보의 댓글
export interface IEducationReview {
  id: number;
  educationId: string;
  nickname: string;
  content: string;
  createdAt: string;
}

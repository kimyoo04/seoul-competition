// 교육 정보 데이터
export interface IEducationDetail {
  id: number;
  name: string;
  status: string;
  price: number;
  capacity: number;
  registerStart: string;
  registerEnd: string;
  educationStart: string;
  educationEnd: string;
  url: string;
  hits: number;
  comments: IEducationComment[];
}

// 교육 정보의 댓글
export interface IEducationComment {
  id: number;
  post_id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

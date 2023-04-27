export interface IEducationData {
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
  // hits: number;
  // commentsCount: number;
}

export interface IEducationDataPerPage {
  data: IEducationData[];
  totalPages: number;
  currentPage: number;
}

export interface IEducationCard {
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
}

export interface IEducationstate {
  educations: IEducationCard[];
  status: "idle" | "loading" | "failed";
  error: string | null;
  page: number;
  hasMore: boolean;
}

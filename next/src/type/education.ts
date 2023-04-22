export interface IEducationCard {
  id: number;
  name: string;
  registerStart: string;
  registerEnd: string;
  educationStart: string;
  educationEnd: string;
  capacity: number;
  status: string;
  price: number;
  link: string;
}

export interface IEducationstate {
  educations: IEducationCard[];
  status: "idle" | "loading" | "failed";
  error: string | null;
  page: number;
  hasMore: boolean;
}

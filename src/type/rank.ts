export interface IRankPostData {
  id: number;
  title: string;
  hits: number;
  commentsCount: number;
}

export interface IRankEducationUserData {
  data: {
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
  };
  user: boolean;
}

export interface IRankEducationUserKeywords {
  data: {
    keywords: string;
    hits: number;
  };
  user: boolean;
}

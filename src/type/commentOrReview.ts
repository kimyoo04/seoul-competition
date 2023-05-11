export type TId = number;
export type TPostId = string | number;
export type TEducationId = string | number;
export type TNickname = string;
export type TPassword = string;
export type TContent = string;
export type TCreatedAt = string;

// 댓글과 리뷰 유니온 타입
export type ICommentOrReview = IComment | IReview;

// 댓글의 read 요청 타입
export interface IComment extends ICommentOrReviewForm {
  id: TId;
  postId: TPostId;
  createdAt: TCreatedAt;
}

// 리뷰의 read 요청 타입
export interface IReview extends ICommentOrReviewForm {
  id: TId;
  educationId: TEducationId;
  createdAt: TCreatedAt;
}

// 댓글과 리뷰의 create 요청 유니온 타입
export type ICreateCommentOrReview = ICreateComment | ICreateReview;

// 댓글의 create 요청 유니온 타입
export interface ICreateComment extends ICommentOrReviewForm {
  postId: TPostId;
}

// 리뷰의 create 요청 유니온 타입
export interface ICreateReview extends ICommentOrReviewForm {
  educationId: TEducationId;
}

// 댓글과 리뷰의 폼데이터
export interface ICommentOrReviewForm {
  nickname: TNickname;
  password: TPassword;
  content: TContent;
}

// 댓글과 리뷰의 update 요청 유니온 타입
export interface IUpdateCommentOrReview {
  id: TId;
  nickname?: TNickname;
  password?: TPassword;
  content?: TContent;
}

// 댓글과 리뷰의 delete 요청 유니온 타입
export interface IDeleteCommentOrReview {
  id: TId;
  password: TPassword;
}

// 댓글과 리뷰의 matchCheck 요청 유니온 타입
export interface IMatchCheckCommentOrReview {
  id: TId;
  password: TPassword;
}

// 댓글과 리뷰의 matchCheck 요청 Form 유니온 타입
export interface IMatchCheckCommentOrReviewForm {
  password: TPassword;
}

// 댓글
export interface IComment {
  id: TId;
  postId?: TPostId;
  educationId?: TEducationId;
  nickname: TNickname;
  content: TContent;
  createdAt: TCreatedAt;
}

export interface ICreateComment {
  postId: TPostId;
  nickname: TNickname;
  password: TPassword;
  content: TContent;
}

export interface ICreateCommentForm {
  nickname: TNickname;
  password: TPassword;
  content: TContent;
}

export interface IUpdateComment {
  nickname: TNickname;
  password: TPassword;
  content: TContent;
}

export interface IDeleteComment {
  password: TPassword;
}

export type TId = number;
export type TPostId = number;
export type TEducationId = number;
export type TNickname = string;
export type TPassword = string;
export type TContent = string;
export type TCreatedAt = string;

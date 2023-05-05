// 댓글
export interface IComment {
  id: number;
  postId?: number;
  educationId?: number;
  nickname: string;
  content: string;
  createdAt: string;
}

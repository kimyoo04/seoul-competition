import { IPost } from "@type/post";

export default function Item({ post }: { post: IPost }) {
  return (
    <div>
      <div>{post.id}</div>

      {/* 닉네임 */}
      <div>{post.nickname}</div>

      {/* 글 제목 */}
      <div>{post.title}</div>

      {/* 일부 내용 */}
      <div>{post.content}</div>

      {/* 업로드 날짜 */}
      <div>{post.createdAt}</div>

      {/* 조회 수 */}
      <div>{post.count}</div>

      {/* 댓글 수 */}
      <div>{post.comment_num}</div>
    </div>
  );
}

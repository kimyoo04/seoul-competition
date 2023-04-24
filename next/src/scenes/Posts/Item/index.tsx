import { IPost } from "@type/posts";
import Link from "next/link";

export default function Item({ post }: { post: IPost }) {
  return (
    // postDetail로 링크
    <Link
      href={`/posts/${post.id}`}
      className="flex flex-col w-full gap-4 p-4 bg-white shadow-md rounded-2xl"
    >
      {/* 작성자명과 작성일자 */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-500">{post.nickname}</div>
      </div>

      {/* 제목과 내용 */}
      <div>
        <div className="font-bold text-lg mb-2">{post.title}</div>
        <div className="text-gray-800">{post.content}</div>
      </div>

      {/* 조회와 댓글 */}
      <div className="flex justify-between mt-4">
        <div className="text-sm text-gray-500">
          조회 {post.hits} · 댓글 {post.commentsCount}
        </div>
        <div className="text-sm text-gray-500">{post.createdAt}</div>
      </div>
    </Link>
  );
}

// 큰 단위로 끊어서 주석 달기

// <div>
//   <div>{post.id}</div>

//   {/* 닉네임 */}
//   <div>{post.nickname}</div>

//   {/* 글 제목 */}
//   <div>{post.title}</div>

//   {/* 일부 내용 */}
//   <div>{post.content}</div>

//   {/* 업로드 날짜 */}
//   <div>{post.createdAt}</div>

//   {/* 조회 수 */}
//   <div>{post.hits}</div>

//   {/* 댓글 수 */}
//   <div>{post.comments_num}</div>
// </div>

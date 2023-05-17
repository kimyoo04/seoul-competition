import { IPostData } from "@type/posts";
import Link from "next/link";

export default function TopPostItem({ post }: { post: IPostData }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className=" border-y">
        {/* 제목과 내용 */}
        {/* 조회수와 댓글수 */}
        <div className="flex justify-between">
          <div className="text-sm">{post.title}</div>
          <div className=" text-xs text-gray-500">
            조회 {post.hits} · 댓글 {post.commentsCount}
          </div>
        </div>
      </div>
    </Link>
  );
}

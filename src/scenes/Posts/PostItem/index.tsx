import { IPostData } from "@type/posts";
import Link from "next/link";

export default function PostItem({ post }: { post: IPostData }) {
  // Intl API 활용
  function timeSince(date: string) {
    // 9시간 더해주기 (UTC - 한국 시간)
    const koreaTimezoneOffset = 9 * 60;

    // 현재 시각 - 댓글이 쓰인 시각 (초 단위)
    const seconds = Math.floor(
      (new Date().getTime() -
        new Date(date).getTime() -
        koreaTimezoneOffset * 60 * 1000) /
        1000
    );

    // RelativeTimeFormat(): "long" 스타일로 상대적 시간을 표현해줌
    const rtf = new Intl.RelativeTimeFormat("ko", {
      style: "long",
    });

    // 시간 경과 정도에 따라 상대적 시간 표기
    if (seconds > 604800) {
      const weeks = Math.floor(seconds / 604800);
      return rtf.format(-weeks, "week");
    } else if (seconds > 86400) {
      const days = Math.floor(seconds / 86400);
      return rtf.format(-days, "day");
    } else if (seconds > 3600) {
      const hours = Math.floor(seconds / 3600);
      return rtf.format(-hours, "hour");
    } else if (seconds > 60) {
      const minutes = Math.floor(seconds / 60);
      return rtf.format(-minutes, "minute");
    } else {
      return rtf.format(-seconds, "second");
    }
  }

  return (
    // postDetail로 링크
    <Link
      href={`/posts/${post.id}`}
      className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 shadow-md"
    >
      {/* 작성자명과 작성일자 */}
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm text-gray-500">{post.nickname}</div>
      </div>

      {/* 제목과 내용 */}
      <div>
        <div className="mb-2 text-lg font-bold">{post.title}</div>
        <div className="text-gray-800">{post.content}</div>
      </div>

      {/* 조회와 댓글 */}
      <div className="mt-4 flex justify-between">
        <div className="text-sm text-gray-500">
          조회 {post.hits} · 댓글 {post.commentsCount}
        </div>
        <div className="text-sm text-gray-500">{timeSince(post.createdAt)}</div>
      </div>
    </Link>
  );
}

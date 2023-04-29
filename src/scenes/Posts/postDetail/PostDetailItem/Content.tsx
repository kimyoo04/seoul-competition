import React from "react";
import { IPostDetail } from "@type/postDetail";
import UpDelButtons from "./UpDelButtons";

interface IContentProps {
  data: IPostDetail;
}

export default function Content({ data }: IContentProps) {
  // 상대적 시간 표시 함수
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
    <>
      {/* 게시글 영역 */}
      <div>
        <div className="mb-2 flex flex-wrap justify-between">
          {/* 게시글 제목 */}
          <h2 className="text-2xl font-bold">{data.title}</h2>

          {/* 수정, 삭제 버튼 */}
          <UpDelButtons />
        </div>

        {/* 작성자, 작성일, 조회수 */}
        <div className="mb-8 text-sm ">
          <span className="text-gray-500 ">작성자: {data.nickname}</span>
          <span className="mx-2 text-gray-500">|</span>
          <span className="text-gray-500 ">
            작성일: {timeSince(data.createdAt)}
          </span>
          <span className="mx-2 text-gray-500">|</span>
          <span className="text-gray-500 ">조회수: {data.hits}</span>
        </div>

        {/* 내용 영역*/}
        <div className="mb-16 text-gray-800 ">{data.content}</div>
      </div>
    </>
  );
}

import React from "react";
import { IPostDetail } from "@type/postDetail";
import UpDelButtons from "./UpDelButtons";

interface ICommentsProps {
  data: IPostDetail;
}

export default function Comments({ data }: ICommentsProps) {
  // 작성일(연, 월, 일) 표시 함수
  function timeYmd(date: string) {
    const ymdDate = new Intl.DateTimeFormat("ko-KR").format(new Date(date));

    return ymdDate;
  }

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
      {data.comments &&
        data.comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 rounded-lg bg-gray_4 px-4 py-2 "
          >
            <div className="flex flex-wrap justify-between">
              <div className="my-2 text-sm text-gray_2">
                {/* 댓글 작성자 닉네임, 작성일, 상대적 시간 */}
                <span>{comment.nickname}</span>
                <span className="mx-2 ">|</span>
                <span>{timeYmd(comment.createdAt)}</span>
                <span className="mx-2">|</span>
                <span>{timeSince(comment.createdAt)}</span>
              </div>

              {/* 수정, 삭제 버튼 */}
              <UpDelButtons />
            </div>

            <div className="mx-2 mb-2 text-font_black ">{comment.content}</div>
          </div>
        ))}
    </>
  );
}

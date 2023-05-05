import React from "react";
import { timeSince, timeYmd } from "@util/dateTime";
import CommentUpDelButtons from "./CommentUpDelButtons";
import { IComment } from "@type/comments";

interface ICommentProps {
  data: IComment;
}

export default function CommentItem({ data }: ICommentProps) {
  return (
    <div key={data.id} className="mb-4 rounded-lg bg-gray_4 px-4 py-2 ">
      <div className="flex flex-wrap justify-between">
        <div className="my-2 text-sm text-gray_2">
          {/* 댓글 작성자 닉네임, 작성일, 상대적 시간 */}
          <span>{data.nickname}</span>
          <span className="mx-2 ">|</span>
          <span>{timeYmd(data.createdAt)}</span>
          <span className="mx-2">|</span>
          <span>{timeSince(data.createdAt)}</span>
        </div>

        {/* 수정, 삭제 버튼 */}
        <CommentUpDelButtons />
      </div>

      <div className="mx-2 mb-2 text-font_black ">{data.content}</div>
    </div>
  );
}

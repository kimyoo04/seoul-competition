import React from "react";
import { timeYmd } from "@util/dateTime";
import CommentUpDelButtons from "./CommentUpDelButtons";
import { IComment } from "@type/comments";

interface ICommentProps {
  data: IComment;
  index: number;
}
const color = ["bg-[#FBFBFB]", "bg-[#F5F5F5}"];

export default function CommentItem({ data, index }: ICommentProps) {
  return (
    <div key={data.id} className={`p-4 ${color[Math.round(index % 2)]}`}>
      <div className="flex flex-wrap justify-between">
        <div className="my-2 text-sm">
          {/* 댓글 작성자 닉네임, 작성일, 상대적 시간 */}
          <span>{data.nickname}</span>
          <span className="mx-2 text-xs">|</span>
          <span>{timeYmd(data.createdAt)}</span>
        </div>

        {/* 수정, 삭제 버튼 */}
        <CommentUpDelButtons />
      </div>

      <div className="text-font_black ">{data.content}</div>
    </div>
  );
}

import React from "react";
import { IPostDetail } from "@type/postDetail";
import { timeSince, timeYmd } from "@util/dateTime";
import CommentUpDelButtons from "./CommentUpDelButtons";

interface ICommentsProps {
  data: IPostDetail;
}

export default function Comments({ data }: ICommentsProps) {
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
              <CommentUpDelButtons />
            </div>

            <div className="mx-2 mb-2 text-font_black ">{comment.content}</div>
          </div>
        ))}
    </>
  );
}

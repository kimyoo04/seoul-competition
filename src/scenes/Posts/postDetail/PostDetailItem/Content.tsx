import React from "react";
import { IPostDetail } from "@type/postDetail";
import UpDelButtons from "./UpDelButtons";
import { timeYmd } from "@util/dateTime";

interface IContentProps {
  data: IPostDetail;
}

export default function Content({ data }: IContentProps) {
  return (
    <>
      {/* 게시글 영역 */}
      <div>
        <div className="mb-2 flex flex-wrap justify-between">
          {/* 게시글 제목 */}
          <h2 className="text-2xl font-bold">{data.title}</h2>

          {/* 수정, 삭제 버튼 */}
          <UpDelButtons id={data.id} />
        </div>

        {/* 작성자, 작성일, 조회수 */}
        <div className="mb-8 text-sm text-gray_2">
          <span>작성자: {data.nickname}</span>
          <span className="mx-2">|</span>
          <span>작성일: {timeYmd(data.createdAt)}</span>
          <span className="mx-2">|</span>
          <span>조회수: {data.hits}</span>
        </div>

        {/* 내용 영역*/}
        <div className="mb-16 text-font_black ">{data.content}</div>
      </div>
    </>
  );
}

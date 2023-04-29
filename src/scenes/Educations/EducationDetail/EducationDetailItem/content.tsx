import React from "react";
import { IEducationDetail } from "@type/educationDetail";

interface IContentProps {
  data: IEducationDetail;
}

export default function Content({ data }: IContentProps) {
  return (
    <>
      {/* 교육 정보 영역 */}
      <div>
        <div className="mb-2 flex flex-wrap justify-between">
          {/* 교육 정보 제목 */}
          <h2 className="text-2xl font-bold">{data.name}</h2>
        </div>

        {/* 내용 영역*/}
        {/* <div className="mb-16 text-gray-800 ">{data.content}</div> */}
      </div>
    </>
  );
}

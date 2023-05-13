import React from "react";
import { timeYmd } from "@util/dateTime";
import { ICommentOrReview } from "@type/commentOrReview";
import CommentDelButton from "./CommentDelButton";
import CommentUpdatePwd from "./CommentUpdatePwd";
import { useAppSelector } from "@toolkit/hook";
import { updateComment } from "@api/comment/updateComment";
import { SubmitHandler, useForm } from "react-hook-form";

interface ICommentProps {
  data: ICommentOrReview;
  index: number;
}
const color = ["bg-[#FBFBFB]", "bg-[#F5F5F5}"];

export default function CommentItem({ data, index }: ICommentProps) {
  const updatePwd = useAppSelector((state) => state.button.updatePwd);

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const onvalid = async () => {
    // 업데이트 요청
    await updateComment({ id: data.id, password: data.password });
  };

  return (
    <>
      {updatePwd ? (
        <form key={data.id} className={`p-4 ${color[Math.round(index % 2)]}`}>
          <div className="flex flex-wrap justify-between">
            <div className="my-2 text-sm">
              {/* 댓글 작성자 닉네임, 작성일, 상대적 시간 */}
              <span>{data.nickname}</span>
              <span className="mx-2 text-xs">|</span>
              <span>{timeYmd(data.createdAt)}</span>
            </div>

            {/* 수정, 삭제 버튼 */}
            <div className="row-center">
              <CommentUpdatePwd data={data} />
              <CommentDelButton id={data.id} />
            </div>
          </div>

          <div className="text-font_black ">{data.content}</div>
        </form>
      ) : (
        <div key={data.id} className={`p-4 ${color[Math.round(index % 2)]}`}>
          <div className="flex flex-wrap justify-between">
            <div className="my-2 text-sm">
              {/* 댓글 작성자 닉네임, 작성일, 상대적 시간 */}
              <span>{data.nickname}</span>
              <span className="mx-2 text-xs">|</span>
              <span>{timeYmd(data.createdAt)}</span>
            </div>

            {/* 수정, 삭제 버튼 */}
            <div className="row-center">
              <CommentUpdatePwd data={data} />
              <CommentDelButton id={data.id} />
            </div>
          </div>

          <div className="text-font_black ">{data.content}</div>
        </div>
      )}
    </>
  );
}

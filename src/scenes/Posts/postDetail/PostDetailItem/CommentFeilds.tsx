import React, { useState } from "react";
import { IPostDetail } from "@type/postDetail";
import ButtonWrapper from "@components/Animation/ButtonWrapper";

export default function CommentFields() {
  return (
    <div className="mb-2 mt-8 rounded-xl bg-blue-100 p-2 ">
      <form>
        <div className="flex flex-wrap gap-4">
          {/* 닉네임 필드 */}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="닉네임"
            autoComplete="off"
            className="h-8 w-32 rounded-lg"
          ></input>

          {/* 비밀번호 필드 */}
          <input
            id="pwd"
            name="password"
            type="password"
            placeholder="비밀번호"
            autoComplete="off"
            className="h-8 w-32 rounded-lg"
          ></input>
        </div>

        {/* 댓글 필드 */}
        <div className="my-2 flex flex-col">
          <textarea
            id="comment"
            name="comment"
            rows={2}
            className="rounded-lg bg-white px-4 py-2 shadow-sm shadow-gray_3 transition-all duration-300"
            placeholder="댓글을 작성해 보세요."
            maxLength={500}
          />
        </div>
        <div className="flex justify-end">
          <ButtonWrapper>
            <button
              type="submit"
              className="rounded-lg border bg-main_color px-2 py-1 text-sm text-font_white "
            >
              제출
            </button>
          </ButtonWrapper>
        </div>
      </form>
    </div>
  );
}

import axios from "@api/axiosInstance";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import ScrollButton from "@components/ScrollButton";

import { SubmitHandler, useForm } from "react-hook-form";
import { IPostForm, IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useUpdateMutation } from "@api/posts/updatePostDetail";
import ErrorMsg from "@components/TextField/ErrorMsg";
import Loading from "@components/Loading";
import PostUpdatePwd from "./PostUpdatePwd";
import { useState } from "react";

export default function EditPost({ id }: { id: string }) {

  // pwdChecked 상태 지정
  const [pwdChecked, setPwdChecked] = useState(true);

  

  // router 선언
  const router = useRouter();

  // 게시글 데이터 불러오기
  const { data: oldPost, isLoading: isReadLoading } = useQuery(
    ["postDetail", id],
    async () => {
      const response = await axios.get(`/posts/${id}`);
      return response.data;
    }
  );

  console.log(oldPost);

  // useUpdateMutation 커스텀 훅 가져오기 (구조분해 할당)
  const { data, isLoading, mutate, mutateAsync } = useUpdateMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    control,
  } = useForm<IPostForm>({
    defaultValues: {
      nickname: oldPost?.nickname || "",
      title: oldPost?.title || "",
      content: oldPost?.content || "",
    },
  });

  const onValid: SubmitHandler<IPostForm> = async (data) => {
    if (!data.nickname || !data.title || !data.content) {
      const errMsg: { [key: string]: string } = {};

      if (!data.nickname) errMsg.nickname = "이름 또는 닉네임을 입력해 주세요.";
      if (!data.title) errMsg.title = "제목을 입력해 주세요.";
      if (!data.content) errMsg.content = "내용을 입력해 주세요.";
      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          setError(key as "nickname" | "title" | "content", {
            message: value,
            type: "required",
          });
        });
      };
      setErrors(errMsg);
      return;
    }

    const updateData: IUpdatePostForm = {
      postId: id as string,
      ...data,
    };
    await mutateAsync(updateData);
    router.push("/posts");
  };

  return (
    <>
      {isReadLoading && <Loading />}
      {pwdChecked ? (
        <PostUpdatePwd id={id} />
      ) : (
        oldPost && (
          <div className="w-full px-4">
            <div className="mx-auto my-8 max-w-screen-md rounded-2xl bg-white p-4 shadow-lg">
              <form onSubmit={handleSubmit(onValid)}>
                {/* nickname textfield */}
                <div className="col-start mb-2 w-44 gap-1">
                  <label htmlFor="nickname" className="font-bold">
                    작성자 *
                  </label>
                  <input
                    {...register("nickname", {
                      minLength: {
                        value: 2,
                        message: "최소 2 글자 이상 입력해주세요.",
                      },
                      maxLength: {
                        value: 10,
                        message: "최대 10 글자까지 입력 가능합니다.",
                      },
                    })}
                    id="nickname"
                    type="text"
                    name="nickname"
                    autoComplete="off"
                    placeholder="이름 / 별명"
                    maxLength={11}
                    className="textfield w-full rounded-md"
                  />
                  <ErrorMsg>{errors?.nickname?.message}</ErrorMsg>
                </div>

                {/* title textfield */}
                <div className="col-start mb-4  gap-1">
                  <label htmlFor="title" className="font-bold ">
                    제목 *
                  </label>
                  <input
                    {...register("title", {
                      minLength: {
                        value: 2,
                        message: "최소 2 글자 이상 입력해주세요.",
                      },
                      maxLength: {
                        value: 50,
                        message: "최대 50 글자까지 입력 가능합니다.",
                      },
                    })}
                    id="title"
                    type="text"
                    name="title"
                    autoComplete="off"
                    placeholder="제목을 입력해주세요."
                    maxLength={51}
                    className="textfield w-full rounded-md"
                  />
                  <ErrorMsg>{errors?.title?.message}</ErrorMsg>
                </div>

                {/* content textarea */}
                <div className=" col-start  mb-4 gap-1">
                  <label htmlFor="content" className="font-bold ">
                    내용 *
                  </label>
                  <textarea
                    {...register("content", {
                      minLength: {
                        value: 4,
                        message: "최소 4 글자 이상 입력해주세요.",
                      },
                      maxLength: {
                        value: 1000,
                        message: "최대 1000 글자까지 입력 가능합니다.",
                      },
                    })}
                    id="content"
                    typeof="text"
                    name="content"
                    placeholder="자유롭게 글을 작성해 보세요."
                    maxLength={1001}
                    className="textfield h-48 w-full rounded-md px-3 py-1 leading-8 placeholder:pt-1"
                  />
                  <ErrorMsg>{errors?.content?.message}</ErrorMsg>
                </div>

                {/* submit button */}
                <div className="col-center mb-3 mt-4">
                  <ButtonWrapper>
                    <button
                      type="submit"
                      className="rounded-lg bg-main_color px-2 py-1 text-font_white"
                    >
                      작성 완료
                    </button>
                  </ButtonWrapper>
                </div>
              </form>
            </div>
            {/* 최상단 이동 버튼 */}
            <ScrollButton />
          </div>
        )
      )}
    </>
  );
}

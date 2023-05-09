import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useCreateCommentMutation } from "@api/comment/createComment";
import { useCreateReviewMutation } from "@api/review/createReview";

import { ICommentOrReviewForm } from "@type/commentOrReview";
import Loading from "@components/Loading";

export default function CommentInput() {
  const router = useRouter();
  const { mutateAsync: commentMutationAsync, isLoading: isCommentLoading } =
    useCreateCommentMutation();
  const { mutateAsync: reviewMutationAsync, isLoading: isReviewLoading } =
    useCreateReviewMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    reset,
  } = useForm<ICommentOrReviewForm>({
    // 초기값 지정
    defaultValues: { nickname: "", password: "", content: "" },
  });

  const onValid: SubmitHandler<ICommentOrReviewForm> = async (data) => {
    //  폼 데이터 유효성 검사
    if (!data.nickname || !data.password || !data.content) {
      const errMsg: { [key: string]: string } = {};

      if (!data.nickname) errMsg.nickname = "이름 또는 닉네임을 입력해 주세요.";
      if (!data.password) errMsg.password = "비밀번호를 입력해 주세요.";
      if (!data.content) errMsg.content = "내용을 입력해 주세요.";
      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          // 폼 구성 요소 이름 및 에러 메시지 전달
          setError(key as "nickname" | "password" | "content", {
            message: value,
            type: "required",
          });
        });
      };
      // 데이터가 유효하지 않을 경우의 에러 메시지 설정
      setErrors(errMsg);
      return;
    }

    if (router.pathname.split("/")[1] === "posts") {
      // 데이터 생성
      const commentData = {
        postId: router.query.id as string,
        ...data,
      };

      // 자유게시판의 댓글 생성
      await commentMutationAsync(commentData);
      reset({ nickname: "", password: "", content: "" });
    } else {
      // 데이터 생성
      const reviewData = {
        educationId: router.query.id as string,
        ...data,
      };

      // 교육 정보의 리뷰 생성
      await reviewMutationAsync(reviewData);
      reset({ nickname: "", password: "", content: "" });
    }
  };

  return (
    <>
      {isCommentLoading || (isReviewLoading && <Loading />)}
      <div className="mb-2 mt-8 rounded-xl bg-blue-100 p-4 ">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="row-start w-full gap-4">
            {/* 닉네임 필드 */}
            <div className="col-start w-full">
              <label htmlFor="nickname" className="mb-1 font-bold">
                닉네임
              </label>

              <input
                {...register("nickname", {
                  required: "이름이 필요해요.",
                  minLength: {
                    value: 2,
                    message: "최소 두 글자 이상 입력해 주세요.",
                  },
                  maxLength: {
                    value: 10,
                    message: "최대 10 글자까지 입력할 수 있어요.",
                  },
                })}
                id="nickname"
                type="text"
                name="nickname"
                autoComplete="off"
                placeholder="별명"
                maxLength={11}
                className="h-8 w-full rounded-lg placeholder:text-sm"
              />

              <span className="mt-1 text-xs font-bold text-red-500">
                {errors?.nickname?.message}
              </span>
            </div>

            {/* 비밀번호 필드 */}
            <div className="col-start w-full">
              <label htmlFor="password" className="mb-1 font-bold">
                비밀번호
              </label>

              <input
                {...register("password", {
                  required: "비밀번호가 필요해요.",
                  minLength: {
                    value: 4,
                    message: "최소 네 글자 이상 입력해 주세요.",
                  },
                  maxLength: {
                    value: 12,
                    message: "최대 12 글자까지 입력할 수 있어요.",
                  },
                })}
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="4 자 이상"
                maxLength={13}
                className="h-8 w-full rounded-lg placeholder:text-sm"
              />

              <span className="mt-1 text-xs font-bold text-red-500">
                {errors?.password?.message}
              </span>
            </div>
          </div>

          {/* 댓글 필드 */}
          <div className="my-2 flex flex-col">
            <Controller
              {...register("content", {
                required: "댓글을 작성해 주세요.",
                minLength: {
                  value: 3,
                  message: "최소 세 글자 이상 입력해 주세요.",
                },
                maxLength: {
                  value: 500,
                  message: "최대 500 글자까지 입력할 수 있어요.",
                },
              })}
              name="content"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="content"
                  name="content"
                  rows={2}
                  className="resize-none rounded-lg bg-white px-4 py-2 shadow-sm shadow-gray_3 transition-all duration-300 placeholder:text-sm"
                  placeholder="자유롭게 댓글을 작성해 보세요."
                  maxLength={501}
                />
              )}
            />

            <span className="mt-1 text-xs font-bold text-red-500">
              {errors?.content?.message}
            </span>
          </div>
          <div className="col-center">
            <button type="submit" className="create_btn h-8 w-full">
              댓글 작성
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import { ICreateCommentForm } from "@type/comments";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CommentInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<ICreateCommentForm>({
    defaultValues: {},
  });
  const onValid: SubmitHandler<ICreateCommentForm> = async (data) => {};

  return (
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
              })}
              id="nickname"
              name="nickname"
              placeholder="별명"
              type="text"
              autoComplete="off"
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
              })}
              id="password"
              name="password"
              type="password"
              placeholder="4자 이상"
              autoComplete="off"
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
              required: "댓글을 작성해주세요.",
              minLength: {
                value: 3,
                message: "최소 세글자 이상 입력해주세요.",
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
                placeholder="댓글 내용"
                maxLength={500}
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
  );
}

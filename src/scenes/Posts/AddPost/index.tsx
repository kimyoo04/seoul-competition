import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateMutation } from "@api/posts/createPostDetail";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import ScrollButton from "@components/ScrollButton";
import { IPostForm } from "@type/posts";

// 게시물 Create 페이지
export default function AddPost() {
  const { data, isLoading, mutate, mutateAsync } = useCreateMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<IPostForm>({
    defaultValues: { nickname: "", password: "", title: "", content: "" },
  });

  const onValid: SubmitHandler<IPostForm> = (data) => {
    if (!data) return;
    mutate(data);
    reset({ nickname: "", password: "", title: "", content: "" });
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 max-w-screen-lg"></div>
      <div className="rounded-2xl bg-white p-4 shadow-lg">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="mb-2 flex gap-4">
            {/* nickname textfield */}
            <div className="w-1/2">
              <label htmlFor="nickname" className="p-1 text-sm font-bold">
                작성자 *
              </label>
              <input
                {...register("nickname")}
                id="nickname"
                type="text"
                name="nickname"
                autoComplete="off"
                placeholder="이름 / 별명"
                maxLength={10}
                className="textfield w-full rounded-md"
              />
            </div>

            {/* password textfield */}
            <div className="w-1/2">
              <label htmlFor="password" className="p-1 text-sm font-bold ">
                비밀번호 *
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="비밀번호"
                maxLength={320}
                className="textfield w-full rounded-md"
              />
            </div>
          </div>

          {/* title textfield */}
          <div className="mb-4">
            <label htmlFor="title" className="p-1 text-sm font-bold ">
              제목 *
            </label>
            <input
              {...register("title")}
              id="title"
              type="text"
              name="title"
              autoComplete="off"
              placeholder="제목을 입력해주세요."
              maxLength={50}
              className="textfield w-full rounded-md"
            />
          </div>

          {/* content textarea */}
          <div className="mb-4">
            <label htmlFor="content" className="p-1 text-sm font-bold ">
              내용 *
            </label>
            <textarea
              {...register("content")}
              id="content"
              typeof="text"
              name="content"
              placeholder="자유롭게 글을 작성해 보세요."
              className="textfield h-48 w-full rounded-md px-3 py-1 leading-8 placeholder:pt-1"
            />
          </div>

          {/* submit button */}
          <div className="col-center mt-4">
            <ButtonWrapper>
              <button
                type="submit"
                className="rounded-lg  bg-main_color px-2 py-1 text-font_white"
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
  );
}

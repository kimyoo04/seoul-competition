import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@api/createPost";
import { IPostForm } from "@type/postForm";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import ScrollButton from "@components/ScrollButton";

// 함수를 props로 받으면 어려워짐
// 모든 타입들이 파악이 되어있다면 좋지만, 현 상황에서는 비추하는 방식
// 빈 문자열일수도 있다면서 계속 에러가 날 수 있고, 이 경우 계속 조건문을 지정해줘야 함
// react hook form을 활용하는 게 좋을 듯

export default function AddPost() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data, isLoading, mutate, mutateAsync } = useMutation({
    mutationFn: createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["post"] });
      reset({ nickname: "", password: "", title: "", content: "" });
      router.push("/posts");
    },
    onError: (err) => {
      console.error(err);
    },
    onSettled: () => {
      console.log("완료");
    },
  });

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

  const onValid: SubmitHandler<IPostForm> = (postData) => {
    if (!postData) return;
    mutate(postData);
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

import axios from "@api/axiosInstance";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import ScrollButton from "@components/ScrollButton";

import { SubmitHandler, useForm } from "react-hook-form";
import { IPostForm, IUpdatePostForm } from "@type/posts";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useUpdateMutation } from "@api/posts/updatePostDetail";

export default function EditPost() {
  // router 선언
  const router = useRouter();

  // 게시글 데이터 불러오기
  const { data: oldPost } = useQuery(
    ["oldpost", router.query.id],
    async () => {
      const response = await axios.get(`/posts/${router.query.id}`);
      return response.data;
    },
    { enabled: !!router.query.id }
  );

  console.log(router.query.id);

  // useUpdateMutation 커스텀 훅 가져오기 (구조분해 할당)
  const { data, isLoading, mutate, mutateAsync } = useUpdateMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm<IPostForm>({
    defaultValues: {
      nickname: oldPost?.nickname || "",
      title: oldPost?.title || "",
      content: oldPost?.content || "",
    },
  });

  const onValid: SubmitHandler<IPostForm> = async (data) => {
    if (!data) return;
    const updateData: IUpdatePostForm = {
      postId: router.query.id as string,
      ...data,
    };
    await mutateAsync(updateData);
    router.push("/posts");
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto my-8 max-w-screen-md rounded-2xl bg-white p-4 shadow-lg">
        <form onSubmit={handleSubmit(onValid)}>
          {/* nickname textfield */}
          <div className="col-start mb-2 flex w-40">
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

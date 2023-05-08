import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateMutation } from "@api/posts/createPostDetail";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import ScrollButton from "@components/ScrollButton";
import { IPostForm } from "@type/posts";
import ErrorMsg from "@components/TextField/ErrorMsg";

// 게시물 Create 페이지
export default function AddPost() {
  const { data, isLoading, mutate, mutateAsync } = useCreateMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IPostForm>({
    // 초기값으로 빈 문자열 지정
    defaultValues: { nickname: "", password: "", title: "", content: "" },
  });

  //  handleSubmit에서 호출할 onValid 함수 선언
  const onValid: SubmitHandler<IPostForm> = (data) => {
    // 폼 데이터 유효성 검사
    if (!data.nickname || !data.password || !data.title || !data.content) {
      const errMsg: { [key: string]: string } = {};

      if (!data.nickname) errMsg.nickname = "이름 또는 닉네임을 입력해 주세요.";
      if (!data.password) errMsg.password = "비밀번호를 입력해 주세요.";
      if (!data.title) errMsg.title = "제목을 입력해 주세요.";
      if (!data.content) errMsg.content = "내용을 입력해 주세요.";
      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          // 폼 구성 요소 이름 및 에러 메시지 전달
          setError(key as "nickname" | "password" | "title" | "content", {
            message: value,
            type: "required",
          });
        });
      };
      // 데이터가 유효하지 않을 경우의 에러 메시지 설정
      setErrors(errMsg);
      return;
    }
    // 서버에 데이터 전송 후 폼 데이터 reset
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
                placeholder="이름 / 닉네임"
                maxLength={11}
                className="textfield w-full rounded-md"
              />
              <span>
                <ErrorMsg>{errors?.nickname?.message}</ErrorMsg>
              </span>
            </div>

            {/* password textfield */}
            <div className="w-1/2">
              <label htmlFor="password" className="p-1 text-sm font-bold ">
                비밀번호 *
              </label>
              <input
                {...register("password", {
                  minLength: {
                    value: 4,
                    message: "최소 4 글자 이상 입력해주세요.",
                  },
                  maxLength: {
                    value: 12,
                    message: "최대 12 글자까지 입력 가능합니다.",
                  },
                })}
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="비밀번호"
                maxLength={13}
                className="textfield w-full rounded-md"
              />
              <span>
                <ErrorMsg>{errors?.password?.message}</ErrorMsg>
              </span>
            </div>
          </div>

          {/* title textfield */}
          <div className="mb-4">
            <label htmlFor="title" className="p-1 text-sm font-bold ">
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
            <span>
              <ErrorMsg>{errors?.title?.message}</ErrorMsg>
            </span>
          </div>

          {/* content textarea */}
          <div className="mb-4">
            <label htmlFor="content" className="p-1 text-sm font-bold ">
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
            <span>
              <ErrorMsg>{errors?.content?.message}</ErrorMsg>
            </span>
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

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import { IPostForm } from "@type/postForm";
import { useState } from "react";


// 함수를 props로 받으면 어려워짐
// 모든 타입들이 파악이 되어있다면 좋지만, 현 상황에서는 비추하는 방식
// 빈 문자열일수도 있다면서 계속 에러가 날 수 있고, 이 경우 계속 조건문을 지정해줘야 함
// react hook form을 활용하는 게 좋을 듯


export default function PostForm({ onSubmit, initialValue }: IPostForm) {
  const [post, setPost] = useState({
    nickname: initialValue.nickname || "",
    password: initialValue.password || "",
    title: initialValue.title || "",
    content: initialValue.content || "",
  });

  // 리액트 훅 폼을 활용하면 코드가 더 깔끔하고, 통일감도 있을 것!
  const handleChangeInput = (e: { target: { name: string; value: any } }) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      nickname: "",
      password: "",
      title: "",
      content: "",
    });
  };
  return (
    <div className="rounded-2xl bg-white p-4 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-2 flex gap-4">
          {/* nickname textfield */}
          <div className="w-1/2">
            <label htmlFor="nickname" className="p-1 text-sm font-bold">
              작성자 *
            </label>
            <input
              onChange={handleChangeInput}
              id="nickname"
              type="text"
              name="nickname"
              value={post["nickname"]}
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
              onChange={handleChangeInput}
              id="password"
              type="password"
              name="password"
              value={post["password"]}
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
            onChange={handleChangeInput}
            id="title"
            type="text"
            name="title"
            value={post["title"]}
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
            onChange={handleChangeInput}
            id="content"
            typeof="text"
            name="content"
            value={post["content"]}
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
  );
}

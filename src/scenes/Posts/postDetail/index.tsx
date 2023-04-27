import { useEffect } from "react";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchPostDetail } from "@api/fetchPostDetail";

import { postDetail1 } from "public/data/postData";

// Intl API 활용
function timeSince(date: string) {
  // 현재 시각 - 댓글이 쓰인 시각 (초 단위)
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );

  // RelativeTimeFormat(): "long" 스타일로 상대적 시간을 표현해줌
  const rtf = new Intl.RelativeTimeFormat("ko", {
    style: "long",
  });

  // 시간 경과 정도에 따라 상대적 시간 표기
  if (seconds > 604800) {
    const weeks = Math.floor(seconds / 604800);
    return rtf.format(-weeks, "week");
  } else if (seconds > 86400) {
    const days = Math.floor(seconds / 86400);
    return rtf.format(-days, "day");
  } else if (seconds > 3600) {
    const hours = Math.floor(seconds / 3600);
    return rtf.format(-hours, "hour");
  } else if (seconds > 60) {
    const minutes = Math.floor(seconds / 60);
    return rtf.format(-minutes, "minute");
  } else {
    return rtf.format(-seconds, "second");
  }
}

export default function PostDetail({ id }: { id: string }) {
  // const dispatch = useAppDispatch();
  // const { post, error, status } = useAppSelector((state) => state.postDetail);

  // // 최소 게시글 디테일 API 요청
  // useEffect(() => {
  //   dispatch(fetchPostDetail(id));
  // }, []);

  return (
    <div className="px-4 bg-gray-100 shadow-md rounded-2xl">
      <div className="max-w-screen-lg mx-auto my-8">
        <div className="p-8 bg-white shadow-lg rounded-2xl">
          {/* 게시글 영역 */}
          <div>
            <div className="flex flex-wrap justify-between">
              {/* 게시글 제목 */}
              <h2 className="mb-2 text-2xl font-bold">{postDetail1.title}</h2>

              {/* 수정, 삭제 버튼 */}
              <div className="w-24 my-2 text-sm">
                <button className="m-0.5 rounded-lg bg-blue-400 px-2 py-1 text-font_white">
                  수정
                </button>
                <button className="m-0.5 rounded-lg bg-red-400 px-2 py-1 text-font_white">
                  삭제
                </button>
              </div>
            </div>

            {/* 작성자, 작성일, 조회수 */}
            <div className="mb-8 text-sm ">
              <span className="text-gray-500 ">
                작성자: {postDetail1.nickname}
              </span>
              <span className="mx-2 text-gray-500">|</span>
              <span className="text-gray-500 ">
                작성일: {postDetail1.createdAt.slice(0, 10)}
              </span>
              <span className="mx-2 text-gray-500">|</span>
              <span className="text-gray-500 ">조회수: {postDetail1.hits}</span>
            </div>

            {/* 내용 영역*/}
            <div className="mb-16 text-gray-800 ">{postDetail1.content}</div>
          </div>

          {/* 댓글 영역 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">댓글</h3>
            {postDetail1.comments.map((comment) => (
              <div
                key={comment.id}
                className="px-4 py-2 mb-4 bg-gray-100 rounded-lg "
              >
                <div className="flex flex-wrap justify-between">
                  <div className="my-2 text-sm">
                    <span className="text-gray-500 ">{comment.nickname}</span>
                    <span className="mx-2 text-gray-500 ">|</span>
                    <span className="text-gray-500 ">{comment.createdAt}</span>
                    <span className="mx-2 text-gray-500 ">|</span>
                    <span className="text-gray-500 ">
                      {timeSince(comment.createdAt)}
                    </span>
                  </div>

                  {/* 수정, 삭제 버튼 */}
                  <div className="w-24 my-2 text-sm">
                    <button className="m-0.5 rounded-lg bg-blue-400 px-2 py-1 text-font_white">
                      수정
                    </button>
                    <button className="m-0.5 rounded-lg bg-red-400 px-2 py-1 text-font_white">
                      삭제
                    </button>
                  </div>
                </div>

                <div className="mx-2 mb-2 text-gray-800 ">
                  {comment.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

// {status == "loading" ? (
//   // loading 화면 출력
//   <Loading />
// ) : status == "failed" ? (
//   // failed 화면 출력
//   error && <p className="text-alert_danger">{error}</p>
// ) : (
//   // fetch 성공 화면 출력
//   <div>
// {/* 게시글 내용 영역 */}
//     <div>{post.id}</div>
//     <div>{post.nickname}</div>
//     <div>{post.title}</div>
//     <div>{post.content}</div>
//     <div>{post.createdAt}</div>
//     <div>{post.hits}</div>

// {/* 댓글 영역 */}
//     <div>
//       {post.comments.map((comment) => (
//         <div>
//           <div>{comment.id}</div>
//           <div>{comment.post_id}</div>
//           <div>{comment.nickname}</div>
//           <div>{comment.content}</div>
//           <div>{comment.createdAt}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

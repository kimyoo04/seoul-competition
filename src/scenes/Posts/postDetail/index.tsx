import { useEffect } from "react";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchPostDetail } from "@api/fetchPostDetail";

import { postDetail1 } from "public/data/postData";

function timeSince(date: string) {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "년 전";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "개월 전";
  }
  interval = seconds / 86500;
  if (interval > 1) {
    return Math.floor(interval) + "일 전";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "시간 전";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "분 전";
  }
  return Math.floor(seconds) + "초 전";
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
                <button className="m-0.5 px-2 py-1 rounded-lg bg-blue-400 text-font_white">
                  수정
                </button>
                <button className="m-0.5 px-2 py-1 rounded-lg bg-red-400 text-font_white">
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
              <span className="text-gray-500 ">
                조회수: {postDetail1.hits}
              </span>
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
                    <button className="m-0.5 px-2 py-1 rounded-lg bg-blue-400 text-font_white">
                      수정
                    </button>
                    <button className="m-0.5 px-2 py-1 rounded-lg bg-red-400 text-font_white">
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

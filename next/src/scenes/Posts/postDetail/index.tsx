import { useEffect } from "react";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchPostDetail } from "@api/fetchPostDetail";

import { postDetail1 } from "public/data/postData";

function timeSince(date: string) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "년 전";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "개월 전";
  }
  interval = seconds / 86400;
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
    <div className="px-4 rounded-2xl shadow-md bg-gray-100">
      <div className="max-w-screen-lg mx-auto my-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">{postDetail1.title}</h2>
          <div className="text-gray-500 mb-4">
            <span>작성자: {postDetail1.nickname}</span>
            <span className="mx-2">|</span>
            <span>작성일: {postDetail1.createdAt.slice(0, 10)}</span>
            <span className="mx-2">|</span>
            <span>조회수: {postDetail1.hits}</span>
          </div>
          <div className="text-gray-800 mb-8">{postDetail1.content}</div>
          <h3 className="text-lg font-semibold mb-4">댓글</h3>
          {postDetail1.comments.map((comment) => (
            <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="text-gray-500 mb-2">
                <span>{comment.nickname}</span>
                <span className="mx-2">|</span>
                <span>{comment.createdAt.slice(0, 10)}</span>
                <span className="mx-2">|</span>
                <span>{timeSince(comment.createdAt)}</span>
              </div>
              <div className="text-gray-800">{comment.content}</div>
            </div>
          ))}
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
//     {/* 게시글 내용 영역 */}
//     <div>{post.id}</div>
//     <div>{post.nickname}</div>
//     <div>{post.title}</div>
//     <div>{post.content}</div>
//     <div>{post.createdAt}</div>
//     <div>{post.hits}</div>

//     {/* 댓글 영역 */}
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

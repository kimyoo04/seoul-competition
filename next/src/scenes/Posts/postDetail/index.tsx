import { useEffect } from "react";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchPostDetail } from "@api/fetchPostDetail";

export default function PostDetail({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const { post, error, status } = useAppSelector((state) => state.postDetail);

  // 최소 게시글 디테일 API 요청
  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, []);

  return (
    <div className="w-screen h-screen px-4 bg-gray_4">
      {status == "loading" ? (
        // loading 화면 출력
        <Loading />
      ) : status == "failed" ? (
        // failed 화면 출력
        error && <p className="text-alert_danger">{error}</p>
      ) : (
        // fetch 성공 화면 출력
        <div>
          {/* 게시글 내용 영역 */}
          <div>{post.id}</div>
          <div>{post.nickname}</div>
          <div>{post.title}</div>
          <div>{post.content}</div>
          <div>{post.createdAt}</div>
          <div>{post.count}</div>

          {/* 댓글 영역 */}
          <div>
            {post.comments.map((comment) => (
              <div>
                <div>{comment.id}</div>
                <div>{comment.post_id}</div>
                <div>{comment.nickname}</div>
                <div>{comment.content}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}

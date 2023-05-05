import { useQuery } from "@tanstack/react-query";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { readPostDetail } from "@api/posts/readPostDetail";
import { IPostDetail } from "@type/postDetail";
import Content from "./PostDetailItem/Content";
import Comments from "@components/Comment/Comments";
import CommentInput from "@components/Comment/CommentInput";
import Header from "./PostDetailItem/Header";

export default function PostDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery<IPostDetail>(
    ["postDetail", id],
    () => readPostDetail(id)
  );
  return (
    <>
      {/* 로딩 시 로딩 화면 표시 */}
      {isLoading && <Loading />}

      {/* 에러 발생 시 에러 메시지 표시 */}
      {error && <p className="text-alert_danger">문제가 발생했습니다.</p>}

      {/* 데이터가 있을 경우 화면 표시 */}
      {data && (
        <div className="w-full px-4">
          <div className="mx-auto my-8 max-w-screen-lg">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              {/* 게시글 해더 */}
              <Header data={data} />

              {/* 게시글 내용 */}
              <Content data={data.content} />

              {/* 댓글 영역 */}
              <div>
                {/* 댓글 입력 필드 */}
                <CommentInput />

                {/* 댓글 목록 */}
                <Comments data={data.comments} />
              </div>
            </div>
          </div>
          {/* 최상단 이동 버튼 */}
          <ScrollButton />
        </div>
      )}
    </>
  );
}

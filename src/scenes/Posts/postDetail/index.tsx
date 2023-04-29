import { useQuery } from "@tanstack/react-query";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { fetchPostDetail } from "@api/fetchPostDetail";
import { IPostDetail } from "@type/postDetail";

export default function PostDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery<IPostDetail>(
    ["postDetail", id],
    () => fetchPostDetail(id)
  );

  // 작성일(연, 월, 일) 표시 함수
  function timeYmd(date: string) {
    const ymdDate = new Intl.DateTimeFormat("ko-KR").format(new Date(date));

    return ymdDate;
  }

  // 상대적 시간 표시 함수
  function timeSince(date: string) {
    // 9시간 더해주기 (UTC - 한국 시간)
    const koreaTimezoneOffset = 9 * 60;

    // 현재 시각 - 댓글이 쓰인 시각 (초 단위)
    const seconds = Math.floor(
      (new Date().getTime() -
        new Date(date).getTime() -
        koreaTimezoneOffset * 60 * 1000) /
        1000
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

  return (
    <>
      {isLoading && <Loading />}
      {error && <p className="text-alert_danger">문제가 발생했습니다.</p>}
      {data && (
        <div className="w-full px-4">
          <div className="mx-auto my-8 max-w-screen-lg">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              {/* 게시글 영역 */}
              <div>
                <div className="flex flex-wrap justify-between">
                  {/* 게시글 제목 */}
                  <h2 className="mb-2 text-2xl font-bold">{data.title}</h2>

                  {/* 수정, 삭제 버튼 */}
                  <div className="my-2 w-24 text-sm">
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
                    작성자: {data.nickname}
                  </span>
                  <span className="mx-2 text-gray-500">|</span>
                  <span className="text-gray-500 ">
                    작성일: {timeSince(data.createdAt)}
                  </span>
                  <span className="mx-2 text-gray-500">|</span>
                  <span className="text-gray-500 ">조회수: {data.hits}</span>
                </div>

                {/* 내용 영역*/}
                <div className="mb-16 text-gray-800 ">{data.content}</div>
              </div>

              {/* 댓글 영역 */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">댓글</h3>
                {data.comments &&
                  data.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="mb-4 rounded-lg bg-gray-100 px-4 py-2 "
                    >
                      <div className="flex flex-wrap justify-between">
                        <div className="my-2 text-sm">
                          <span className="text-gray-500 ">
                            {comment.nickname}
                          </span>
                          <span className="mx-2 text-gray-500 ">|</span>
                          <span className="text-gray-500 ">
                            {timeYmd(comment.createdAt)}
                          </span>
                          <span className="mx-2 text-gray-500 ">|</span>
                          <span className="text-gray-500 ">
                            {timeSince(comment.createdAt)}
                          </span>
                        </div>

                        {/* 수정, 삭제 버튼 */}
                        <div className="my-2 w-24 text-sm">
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
          {/* 최상단 이동 버튼 */}
          <ScrollButton />
        </div>
      )}
    </>
  );
}

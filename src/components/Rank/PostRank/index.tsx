import { useReadPostRank } from "@api/rank/readPostRank";
import PostRankList from "./PostRankList";

export default function PostRank() {
  const { data, isLoading, isError } = useReadPostRank();

  return (
    <section className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      <h3 className="mb-4 text-center text-lg font-medium">
        지난주에 가장 인기 있던 게시글이에요.
      </h3>

      {/* //! 자유게시판 최다조회 게시글 Top 5 */}
      {isLoading ? (
        <div></div>
      ) : isError ? (
        <div>에러가 발생했습니다.</div>
      ) : (
        data && (
          <>
            {data.data.length > 0 ? (
              <PostRankList data={data.data} />
            ) : (
              <div>지난주 기록이 없습니다.</div>
            )}
          </>
        )
      )}
    </section>
  );
}

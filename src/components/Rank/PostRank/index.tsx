import { rankPostData } from "public/data/rankingData";
import PostRankList from "./PostRankList";

export default function PostRank() {
  // 더미 데이터
  const data = rankPostData;

  return (
    <section className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      <h3 className="mb-4 text-center text-lg font-medium">
        지난주에 가장 인기 있던 게시글이에요.
      </h3>

      {/* 자유게시판 최다조회 게시글 Top5 리스트 */}
      <PostRankList data={data} />
    </section>
  );
}

import PostRankList from "./PostRankList";

export default function PostRank() {
  return (
    <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      <div className="mb-4 text-center text-lg font-medium">
        지난주에 가장 인기 있던 게시글이에요.
      </div>

      {/* 자유게시판 최다조회 게시글 Top5 리스트 */}
      <PostRankList />
    </div>
  );
}

import EducationRankList from "./EducationRankList";

export default function EducationRank() {
  return (
    <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      {/* 교육정보 최다조회 게시글 Top5 */}
      <div className="mb-4 text-center text-lg font-medium">
        지난주에 가장 인기 있던 교육 정보예요.
      </div>
      <EducationRankList />
    </div>
  );
}

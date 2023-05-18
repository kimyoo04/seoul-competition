import PieChart from "./PieChart";

export default function KeywordRank() {
  return (
    <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      {/* 교육정보 최다 검색 키워드 Top5 */}
      <div className="mb-4 text-center text-lg font-medium">
        지난주에 가장 많이 검색된 단어예요.
      </div>
      <PieChart />
    </div>
  );
}

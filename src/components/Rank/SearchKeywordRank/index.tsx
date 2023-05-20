import { rankEducationUserKeywords } from "public/data/rankingData";
import SearchKeywordRankList from "./SearchKeywordRankList";

export default function SearchKeywordRank() {
  const data = rankEducationUserKeywords;

  return (
    <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
      {/* 교육정보 최다 검색 키워드 Top5 */}
      <div className="mb-4 text-center text-xl font-medium">
        이런 검색어는 어떠세요?
      </div>

      {/* 리스트 */}
      <SearchKeywordRankList data={data.data} />
    </div>
  );
}

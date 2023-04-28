import { useEffect } from "react";
import { animate, stagger } from "framer-motion";

import SearchHistory from "./SearchHistory";
import SearchRanking from "./SearchRanking";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { useAppSelector } from "@toolkit/hook";
import ChooseCategory from "./ChooseCategory";

export default function Search() {
  const searchName = useAppSelector((state) => state.search.searchName);
  // stagger 정의
  const staggerSearchItems = stagger(0.3, { startDelay: 0.3 });

  // li 태그를 기준으로 stagger 애니메이션 실행
  useEffect(() => {
    animate(
      "section",
      { opacity: [0, 1], y: [100, 0] },
      { duration: 0.3, delay: staggerSearchItems }
    );
  }, []);

  return (
    <div className="grid-col-1 grid h-full w-full gap-4 py-4">
      {/* 검색 바 */}
      <SearchBar />

      {/* 카테고리 선택 */}
      <ChooseCategory />

      {/* 검색 기록 */}
      <SearchHistory />

      {/* 검색을 하는 경우 검색 결과 출력 */}
      {searchName !== "" && <SearchResult />}

      {/* 검색 랭킹 */}
      <SearchRanking />
    </div>
  );
}

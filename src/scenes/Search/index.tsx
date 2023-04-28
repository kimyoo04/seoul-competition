import { useEffect } from "react";
import { animate, stagger } from "framer-motion";
import { useAppSelector } from "@toolkit/hook";

import ChooseCategory from "./ChooseCategory";
import SearchBar from "./SearchBar";
import SearchKeywordsModal from "./SearchKeywordsModal";
import SearchResult from "./SearchResult";
import SearchRanking from "./SearchRanking";

export default function Search() {
  const { isFocus, searchKeyword } = useAppSelector((state) => state.search);
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
    <div className="col-start relative h-full w-full gap-4 py-4">
      {/* 카테고리 선택 */}
      <ChooseCategory />

      {/* 검색바 */}
      <SearchBar />

      {/* 검색기록모달창 오버레이*/}
      {isFocus && <SearchKeywordsModal />}

      {/* 검색을 하는 경우 검색 결과 출력 */}
      <SearchResult />

      {/* 검색 랭킹 */}
      <SearchRanking />
    </div>
  );
}

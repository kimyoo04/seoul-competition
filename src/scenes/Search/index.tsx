import { useEffect } from "react";

import { animate, stagger } from "framer-motion";

import SearchHistory from "./SearchHistory";
import SearchRanking from "./SearchRanking";
import { useAppSelector } from "@toolkit/hook";
import SearchBar from "./SearchBar";
import ChooseCategory from "./ChooseCategory";

export default function Search() {
  const searchCategory = useAppSelector((state) => state.search.searchCategory);

  // stagger 정의
  const staggerSearchItems = stagger(0.3, { startDelay: 0.3 });

  // 애니메이션 실행
  useEffect(() => {
    animate(
      "li",
      { opacity: [0, 1], y: [100, 0] },
      { duration: 0.3, delay: staggerSearchItems }
    );
  }, []);

  return (
    <ul className="grid w-full h-full gap-4 py-4 grid-col-1">
      {/* 텍스트 입력 검색 영역 */}
      <li>
        <SearchBar category={searchCategory} />
        <ChooseCategory />
      </li>

      {/* 검색 기록 */}
      <li>
        <SearchHistory />
      </li>
      <li>
        <SearchRanking />
      </li>
    </ul>
  );
}

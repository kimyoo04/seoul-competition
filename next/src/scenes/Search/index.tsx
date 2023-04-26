import { useEffect } from "react";

import { animate, motion, stagger } from "framer-motion";

import SearchBar from "@components/SearchBar";
import SearchHistory from "./SearchHistory";
import SearchRanking from "./SearchRanking";

export default function Search() {
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
    <div className="grid w-full h-full gap-4 grid-col-1">
      {/* 텍스트 입력 검색 영역 */}
      <li>
        <SearchBar />
      </li>

      {/* 검색 기록 */}
      <li>
        <SearchHistory />
      </li>
      <li>
        <SearchRanking />
      </li>
    </div>
  );
}

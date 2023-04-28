import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@util/variants";
import SearchKeywordsItem from "./SearchKeywordsItem/SearchKeywordsItem";
import SearchKeywordsHeader from "./SearchKeywordsItem/SearchKeywordsHeader";

export default function SearchKeywordsModal() {
  const dispatch = useAppDispatch();
  const { keywords } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchActions.getAllKeywords());
  }, []);

  return (
    <>
      {/* 오버레이 */}
      <div
        className="fixed left-0 top-0 h-screen w-screen"
        onClick={() => dispatch(searchActions.onBlur())}
      ></div>

      {/* 최근 검색어 영역 */}
      <motion.section
        variants={fadeIn("down", "easeInOut", 0, 0.4, 20)}
        initial="hidden"
        animate="show"
        className="absolute top-28 h-96 w-full overflow-scroll rounded-2xl border border-gray_2 bg-white shadow-md"
      >
        {/* 헤더 회색 영역 */}
        <SearchKeywordsHeader />

        {/* 최근 검색어 리스트 */}
        <ul className="px-4 py-2">
          {/* 8개만 검색어 노출 */}
          {keywords.slice(0, 8).map((keyword, index) => (
            <SearchKeywordsItem keyword={keyword} index={index} />
          ))}
        </ul>
      </motion.section>
    </>

    //? 추후 연관 검색어 추천 넣기
  );
}

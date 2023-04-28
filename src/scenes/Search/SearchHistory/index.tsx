import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@util/variants";

export default function SearchHistory() {
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
        <div className="flex items-center justify-between rounded-t-2xl bg-slate-100 px-4 py-2">
          <span className="text-h4 font-bold">최근 검색어</span>
          <button
            className="font-bold text-red-600"
            onClick={() => dispatch(searchActions.deleteAllKeywords())}
          >
            전체 삭제
          </button>
        </div>

        <ul className="px-4 py-2">
          {/* 8개만 검색어 노출 */}
          {keywords.slice(0, 8).map((keyword, index) => (
            <li
              key={keyword + index}
              className="flex items-center justify-between border-b pt-1"
            >
              <button
                onClick={() =>
                  dispatch(
                    searchActions.clickKeyword({ searchKeyword: keyword })
                  )
                }
              >
                <span>{keyword}</span>
              </button>
              <button
                onClick={() => dispatch(searchActions.deleteKeyword({ index }))}
              >
                <i className="ri-close-line text-2xl text-red-600"></i>
              </button>
            </li>
          ))}
        </ul>
      </motion.section>
    </>

    //? 추후 연관 검색어 추천 넣기
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

import { useAppDispatch } from "@toolkit/hook";
import { searchActions } from "@features/search/searchSlice";

import { motion } from "framer-motion";
import { TSearchCategory } from "@type/search";

export default function SearchLink() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPath = router.pathname.substring(1);

  return (
    <>
      {currentPath !== "search" && (
        <Link
          href={"/search"}
          onClick={() => {
            // searchCategory state 변경
            if (currentPath === "posts") {
              dispatch(
                searchActions.chooseCategory({
                  searchCategory: currentPath as TSearchCategory,
                })
              );
            } else {
              dispatch(
                searchActions.chooseCategory({
                  searchCategory: "educations",
                })
              );
            }
          }}
        >
          {/* Search Bar 아이콘 */}
          <motion.button
            className="col-start fixed -right-6 bottom-6 h-40 w-16 rounded-l-2xl bg-main_color pl-2"
            whileHover={{ x: -8 }}
          >
            <i className="ri-search-line  text-2xl text-font_white"></i>
            <span className="w-6 text-lg font-bold text-font_white">검색하기</span>
          </motion.button>
        </Link>
      )}
    </>
  );
}

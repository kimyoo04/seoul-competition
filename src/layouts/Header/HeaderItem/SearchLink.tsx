import Link from "next/link";
import { useRouter } from "next/router";

import { useAppDispatch } from "@toolkit/hook";
import { searchActions } from "@features/search/searchSlice";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
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
          <ButtonWrapper>
            <motion.div>
              <button className="col-center h-8 w-8">
                <i className="ri-search-line text-3xl text-main_color"></i>
              </button>
            </motion.div>
          </ButtonWrapper>
        </Link>
      )}
    </>
  );
}

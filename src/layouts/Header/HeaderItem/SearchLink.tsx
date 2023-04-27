import Link from "next/link";
import { useRouter } from "next/router";

import { useAppDispatch } from "@toolkit/hook";
import { searchActions } from "@features/search/searchSlice";

import ButtonWrapper from "@components/Animation/ButtonWrapper";
import { motion } from "framer-motion";

export default function SearchLink() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentPath = router.pathname.substring(1);

  return (
    currentPath !== "search" && (
      <Link
        href={"/search"}
        onClick={() =>
          // searchCategory state 변경
          dispatch(
            searchActions.chooseCategory({
              searchCategory: currentPath,
            })
          )
        }
      >
        {/* Search Bar 아이콘 */}
        <ButtonWrapper>
          <motion.div
            whileHover={{
              scale: 1.1,
              type: "spring",
              transition: { duration: 0.05 },
            }}
          >
            <button className="w-8 h-8 col-center">
              <i className="text-3xl text-gray-500 ri-search-line hover:text-main_color"></i>
            </button>
          </motion.div>
        </ButtonWrapper>
      </Link>
    )
  );
}

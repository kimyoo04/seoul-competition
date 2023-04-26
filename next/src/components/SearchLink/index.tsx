import Link from "next/link";
import { TSearchCategory } from "@type/search";
import { useAppDispatch } from "@toolkit/hook";
import { searchActions } from "@features/search/searchSlice";

export default function SearchLink({
  category,
}: {
  category: TSearchCategory;
}) {
  const dispatch = useAppDispatch();

  return (
    <Link
      href={"/search"}
      onClick={() =>
        // searchCategory state 변경
        dispatch(searchActions.chooseCategory({ searchCategory: category }))
      }
    >
      <div className="relative w-full group">
        {/* Search Bar 영역 */}
        <div className="absolute w-full h-8 pl-4 transition-all bg-white border rounded-full group-hover:border-main_color"></div>

        {/* Search Bar 아이콘 */}
        <button className="absolute text-2xl font-bold right-4 col-center ">
          <i className="transition-all ri-search-line group-hover:text-main_color"></i>
        </button>

        {/* 더미 div 태그 */}
        <div className="w-full h-8 dummy"> </div>
      </div>
    </Link>
  );
}

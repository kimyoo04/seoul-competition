import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { TSearchCategory, TSearchCategoryKor } from "@type/search";
import classNames from "classnames";

export default function ChooseButton({
  children,
  categoryEng,
}: {
  children: TSearchCategoryKor;
  categoryEng: TSearchCategory;
}) {
  const dispatch = useAppDispatch();
  const searchCategory = useAppSelector((state) => state.search.category);

  // 일치하는 카테고리 css 활성화
  const activeCategory = classNames({
    "text-white font-bold bg-main_color border-main_color shadow-md shadow-main_color/20":
      searchCategory === categoryEng,
  });

  return (
    <button
      className={`rounded-full border px-3 py-1 transition-all  ${activeCategory}`}
      onClick={() =>
        dispatch(searchActions.chooseCategory({ searchCategory: categoryEng }))
      }
    >
      {children}
    </button>
  );
}

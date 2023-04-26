import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { TSearchCategory } from "@type/search";
import classNames from "classnames";

export default function ChooseButton({
  children,
}: {
  children: TSearchCategory;
}) {
  const dispatch = useAppDispatch();
  const searchCategory = useAppSelector((state) => state.search.searchCategory);

  // 일치하는 카테고리 css 활성화
  const activeCategory = classNames({
    "text-main_color": searchCategory === children,
  });

  return (
    <button
      className={` ${activeCategory}`}
      onClick={() =>
        dispatch(searchActions.chooseCategory({ searchCategory: children }))
      }
    >
      {children}
    </button>
  );
}

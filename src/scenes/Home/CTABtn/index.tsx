import ButtonWrapper from "@components/Animation/ButtonWrapper";
import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch } from "@toolkit/hook";
import { TSearchCategory } from "@type/search";
import Link from "next/link";

export default function CTABtn() {
  const dispatch = useAppDispatch();

  return (
    <div className="row-center gap-12">
      <Link
        href={"/search"}
        onClick={() => {
          // searchCategory state 변경
          dispatch(
            searchActions.chooseCategory({
              searchCategory: "educations" as TSearchCategory,
            })
          );
        }}
      >
        <ButtonWrapper>
          <button className="accent_btn_fill">교육 정보 검색</button>
        </ButtonWrapper>
      </Link>

      <Link
        href={"/search"}
        onClick={() => {
          // searchCategory state 변경
          dispatch(
            searchActions.chooseCategory({
              searchCategory: "posts" as TSearchCategory,
            })
          );
        }}
      >
        <ButtonWrapper>
          <button className="accent_btn_fill">자유게시판 검색</button>
        </ButtonWrapper>
      </Link>
    </div>
  );
}

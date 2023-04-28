import ButtonWrapper from "@components/Animation/ButtonWrapper";
import { searchActions } from "@features/search/searchSlice";
import { useAppDispatch } from "@toolkit/hook";
import { useState } from "react";

export default function SearchKeywordsHeader() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between rounded-t-2xl bg-slate-100 px-4 py-2">
      <span className="text-h4 font-bold">최근 검색어</span>
      {isClicked ? (
      <div className="row-center gap-4">
          <span className="font-bold">정말로 삭제하시겠습니까?</span>
          <ButtonWrapper>
            <button
              className="font-bold text-red-600"
              onClick={() => {
                dispatch(searchActions.deleteAllKeywords());
                setIsClicked(false);
              }}
            >
              삭제
            </button>
          </ButtonWrapper>
          <ButtonWrapper>
            <button
              className="font-bold"
              onClick={() => {
                setIsClicked(false);
              }}
            >
              취소
            </button>
          </ButtonWrapper>
        </div>
      ) : (
        <ButtonWrapper>
          <button
            className="font-bold text-red-600"
            onClick={() => setIsClicked(true)}
          >
            전체 삭제
          </button>
        </ButtonWrapper>
      )}
    </div>
  );
}

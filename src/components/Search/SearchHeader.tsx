import { useAppSelector } from "@toolkit/hook";

export default function SearchHeader() {
  const searchKeyword = useAppSelector((state) => state.search.searchKeyword);

  return (
    <>
      {searchKeyword && (
        <h2>
          "<b className="text-xl font-bold">{searchKeyword}</b>" 검색결과입니다.
        </h2>
      )}
    </>
  );
}

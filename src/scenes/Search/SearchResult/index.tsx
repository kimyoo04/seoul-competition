import { useInfiniteSearch } from "@api/fetchSearch";
import { useAppSelector } from "@toolkit/hook";
import SearchHeader from "./SearchResultItem/header";

export default function SearchResult() {
  const searchKeyword = useAppSelector((state) => state.search.searchKeyword);
  const searchCategory = useAppSelector((state) => state.search.category);

  const educationsResult = [1, 2]; //dummy
  const postsResult = [3, 4]; //dummy

  // 카테고리에 따라 검색 GET 요청
  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteSearch(searchKeyword);

  return (
    <section className="col-start w-full gap-4">
      {/* 검색 정보 헤더 */}
      <SearchHeader />

      {/* 교육정보 검색결과 무한 스크롤 영역 */}
      {searchCategory === "educations" && educationsResult && (
        <ul>
          {educationsResult.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
      )}

      {searchCategory === "posts" && postsResult && (
        <ul>
          {/* 자유게시판  */}
          {postsResult.map((post) => (
            <li key={post}>{post}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

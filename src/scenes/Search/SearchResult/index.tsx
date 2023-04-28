import { useInfiniteSearch } from "@api/fetchSearch";
import { useAppSelector } from "@toolkit/hook";

export default function SearchResult() {
  const searchName = useAppSelector((state) => state.search.searchName);

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
  } = useInfiniteSearch(searchName);

  return (
    <section>
      <div>
        <h2>교육정보</h2>
        {educationsResult &&
          educationsResult.map((education) => (
            <div key={education}>{education}</div>
          ))}
      </div>

      <div>
        <h2>자유게시판</h2>
        {postsResult && postsResult.map((post) => <div key={post}>{post}</div>)}
      </div>
    </section>
  );
}

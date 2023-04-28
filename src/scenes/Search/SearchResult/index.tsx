import { useInfiniteSearch } from "@api/fetchSearch";
import { useAppSelector } from "@toolkit/hook";

export default function SearchResult() {
  const searchKeyword = useAppSelector((state) => state.search.searchKeyword);

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
      <h2>
        <b className="text-xl font-bold">{searchKeyword}</b> 검색 결과입니다.
      </h2>

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

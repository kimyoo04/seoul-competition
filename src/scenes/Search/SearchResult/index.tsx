import { fetchSearch } from "@api/fetchSearch";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppSelector } from "@toolkit/hook";
import { IEducationDataPerPage } from "@type/education";

export default function SearchResult() {
  const { searchName, searchCategory } = useAppSelector(
    (state) => state.search
  );

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
  } = useInfiniteQuery<IEducationDataPerPage, { message: string }>({
    queryKey: ["search", searchCategory, searchName],
    queryFn: ({ pageParam = 1 }) =>
      fetchSearch(searchCategory, pageParam, searchName),
    getNextPageParam: (lastPage) => lastPage.totalPages,
  });

  return (
    <li>
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
    </li>
  );
}

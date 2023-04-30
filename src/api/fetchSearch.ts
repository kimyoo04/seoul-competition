import axios from "@api/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppSelector } from "@toolkit/hook";

import { IEducationsDataPerPage } from "@type/education";
import { IPostsDataPerPage } from "@type/posts";
import { TSearchCategory } from "@type/search";

// axios GET 요청 함수
export const fetchSearch = async (
  searchCategory: TSearchCategory,
  page: number,
  name: string
) => {
  if (name == "") return;

  // 요청 받기
  const response = await axios.get(
    `/${searchCategory}?page=${page}&name=${name}`
  );
  return response.data;
};

// 검색 결과 useInfiniteQuery 함수
export const useInfiniteSearch = (searchKeyword: string) => {
  const searchCategory = useAppSelector((state) => state.search.category);

  return useInfiniteQuery<
    IEducationsDataPerPage | IPostsDataPerPage,
    { message: string }
  >({
    enabled: searchKeyword !== "",
    queryKey: ["search", searchCategory, searchKeyword],
    queryFn: ({ pageParam = 0 }) =>
      fetchSearch(searchCategory, pageParam, searchKeyword),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      } else {
        return undefined;
      }
    },
    refetchOnMount: false, //페이지 재방문시 refetch 금지
    refetchOnWindowFocus: false, // 브라우저 포커징시 refetch 금지
  });
};

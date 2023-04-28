import axios from "@api/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppSelector } from "@toolkit/hook";

import { IEducationDataPerPage } from "@type/education";
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
export const useInfiniteSearch = (searchName: string) => {
  const searchCategory = useAppSelector((state) => state.search.category);

  return useInfiniteQuery<
    IEducationDataPerPage | IPostsDataPerPage,
    { message: string }
  >({
    enabled: searchName !== "",
    queryKey: ["search", searchCategory, searchName],
    queryFn: ({ pageParam = 1 }) =>
      fetchSearch(searchCategory, pageParam, searchName),
    getNextPageParam: (lastPage) => lastPage.totalPages,
  });
};

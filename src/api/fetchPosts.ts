import axios from "@api/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IPostsDataPerPage } from "@type/posts";

export const fetchPosts = async (pageParam = 0) => {
  const response = await axios.get(`/posts?page=${pageParam}`);
  return response.data;
};

export const useInfinitePosts = () => {
  return useInfiniteQuery<IPostsDataPerPage, { message: string }>({
    queryKey: ["infinite", "posts"],
    queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      } else {
        return undefined;
      }
    },

    cacheTime: 300000, // 5분
    staleTime: 240000, // 4분
    refetchOnMount: false, //페이지 재방문시 refetch 금지
    refetchOnWindowFocus: false, // 브라우저 포커징시 refetch 금지
  });
};

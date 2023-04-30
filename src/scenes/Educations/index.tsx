import { Fragment, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@toolkit/hook";

import EducationItem from "./EducationItem";
import Loading from "@components/Loading";
import Sidebar from "@components/Sidebar";
import FilterToggle from "@components/FilterToggle";
import ScrollButton from "@components/ScrollButton";
import ListPageHeader from "@components/Header/ListPageHeader";

import { fetchEducations } from "@api/fetchEducations";
import { IEducationsDataPerPage } from "@type/education";

export default function Educations() {
  // 사이드바
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar);

  // page 단위로 educationdata GET 요청 및 캐싱
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<IEducationsDataPerPage, { message: string }>({
    queryKey: ["educations"],
    queryFn: ({ pageParam = 0 }) => fetchEducations(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      } else {
        return undefined;
      }
    },
    cacheTime: 300000, // 5분
    staleTime: 240000, // 4분
    refetchOnMount: false, // 페이지 재방문시 refetch 금지
    refetchOnWindowFocus: false, // 브라우저 포커싱시 refetch 금지
  });

  // ref가 연결된 태그의 확인
  // { ref, inView, entry }
  const { ref, inView } = useInView();

  // 하단 페이지에 도달시 fetchNextPage 요청
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView]);

  return (
    <div className="w-full px-4">
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <>{error && <p>Error: {error.message}</p>}</>
      ) : (
        <>
          {/* 헤더 */}
          <ListPageHeader headertitle="교육 정보" headerDescription="" />

          {/* 교육 데이터 출력 영역 */}
          <div className="grid-col-1 grid gap-4">
            {data.pages.map((group, indx) => (
              <Fragment key={indx + "page"}>
                {group.data.map((education) => (
                  <EducationItem
                    key={education.id + education.name}
                    education={education}
                  />
                ))}
              </Fragment>
            ))}
          </div>

          {/* fetchNextPage 를 트리거 하기 위한 태그 */}
          <div
            ref={ref}
            className="col-center w-full rounded-full border px-4 py-1"
          >
            <span>{hasNextPage ? "더보기" : "마지막 검색 결과입니다."}</span>
          </div>

          {/* 첫 fetching 시 로딩 UI */}
          <div>{isFetching && !isFetchingNextPage ? <Loading /> : null}</div>
        </>
      )}

      {/* 최상단 이동 버튼 */}
      <ScrollButton />

      {/* 사이드바 영역 */}
      <FilterToggle />
      {isSidebar && <Sidebar />}
    </div>
  );
}

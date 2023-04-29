import { Fragment, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import Card from "./Card";
import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { fetchEducations } from "@api/fetchEducations";
import { IEducationDataPerPage } from "@type/education";

export default function Educations() {
  // page 단위로 educationdata GET 요청 및 캐싱
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<IEducationDataPerPage, { message: string }>({
    queryKey: ["educations"],
    queryFn: ({ pageParam = 1 }) => fetchEducations(pageParam),
    getNextPageParam: (lastPage) => lastPage.totalPages,
  });

  // ref가 연결된 태그의 확인
  // { ref, inView, entry }
  const { ref, inView } = useInView();

  // 하단 페이지에 도달시 fetchNextPage 요청
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView]);

  return (
    <div className="w-full px-4 bg-gray_4">
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <>{error && <p>Error: {error.message}</p>}</>
      ) : (
        <>
          {/* 교육 데이터 출력 영역 */}
          <div className="grid gap-4 grid-col-1">
            {data.pages.map((group, indx) => (
              <Fragment key={indx + "page"}>
                {group.data.map((education) => (
                  <Card key={education.id} education={education} />
                ))}
              </Fragment>
            ))}
          </div>

          {/* fetchNextPage 를 트리거 하기 위한 태그 */}
          <span ref={ref}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </span>

          {/* 첫 fetching 시 로딩 UI */}
          <div>{isFetching && !isFetchingNextPage ? <Loading /> : null}</div>
        </>
      )}

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}
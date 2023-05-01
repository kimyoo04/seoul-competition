import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "@toolkit/hook";

import EducationItem from "./EducationItem";
import Loading from "@components/Loading";
import Sidebar from "@components/Sidebar";
import FilterToggle from "@components/FilterToggle";
import ScrollButton from "@components/ScrollButton";
import ListPageHeader from "@components/Header/ListPageHeader";

import { useInfiniteEducations } from "@api/fetchEducations";
import SearchLink from "@components/SearchLink";

export default function Educations() {
  const isSidebar = useAppSelector((state) => state.sidebar.isSidebar); // 사이드바

  // page 단위로 educationdata GET 요청 및 캐싱
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteEducations();

  // ref가 연결된 태그의 확인 + 하단 페이지에 도달시 fetchNextPage 요청
  const { ref, inView } = useInView();
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
              <Fragment key={indx + "educations page"}>
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
            {hasNextPage ? (
              <span>더보기</span>
            ) : (
              <span>마지막 검색 결과입니다.</span>
            )}
          </div>

          {/* fetching 시 로딩 UI */}
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

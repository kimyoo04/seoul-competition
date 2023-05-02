import { Fragment, useEffect } from "react";
import { useAppSelector } from "@toolkit/hook";
import { useInView } from "react-intersection-observer";

import { IEducationData } from "@type/education";

import Loading from "@components/Loading";
import SearchHeader from "@components/Search/SearchHeader";
import SearchMore from "@components/Search/SearchMore";

import EducationItem from "@scenes/Educations/EducationItem";
import { useInfiniteEducations } from "@api/fetchEducations";

export default function EducationList() {
  const searchCategory = useAppSelector((state) => state.search.category);

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
    <section className="col-center w-full gap-4">
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <>{error && <p>Error: {error.message}</p>}</>
      ) : (
        <>
          {/* //! 검색 정보 헤더 */}
          <SearchHeader />

          {/* //! 교육정보 검색결과 무한 스크롤 영역 */}
          <ul className="grid w-full grid-cols-1 gap-4">
            {searchCategory === "educations" && data && (
              <>
                {data.pages.map((group, indx) => (
                  <Fragment key={indx + "page" + searchCategory}>
                    {group.data.map((education) => (
                      <EducationItem
                        key={education.id + searchCategory}
                        education={education as IEducationData}
                      />
                    ))}
                  </Fragment>
                ))}
              </>
            )}
          </ul>

          {/* //! fetchNextPage 를 트리거 하기 위한 태그 */}
          <SearchMore inViewRef={ref} hasNextPage={hasNextPage} />
        </>
      )}
    </section>
  );
}

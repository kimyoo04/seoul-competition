import { Fragment, useEffect } from "react";
import { useInfiniteSearch } from "@api/fetchSearch";
import { useAppSelector } from "@toolkit/hook";
import { useInView } from "react-intersection-observer";

import SearchHeader from "./SearchResultItem/header";
import EducationItem from "@scenes/Educations/EducationItem";
import PostItem from "@scenes/Posts/Item";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { IPostsData } from "@type/posts";
import { IEducationData } from "@type/education";

export default function SearchResult() {
  const searchKeyword = useAppSelector((state) => state.search.searchKeyword);
  const searchCategory = useAppSelector((state) => state.search.category);

  const { ref, inView } = useInView();

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

  // 하단 페이지에 도달시 fetchNextPage 요청
  useEffect(() => {
    if (inView && hasNextPage && hasNextPage && !isFetchingNextPage)
      fetchNextPage();
  }, [inView]);

  return (
    <section className="col-start w-full gap-4">
      {isFetching ? (
        <div className="col-center w-full">
          <Loading />
        </div>
      ) : status === "error" ? (
        <>{error && <p>Error: {error.message}</p>}</>
      ) : (
        <>
          {/* 검색 정보 헤더 */}
          <SearchHeader />

          <ul className="grid w-full grid-cols-1 gap-4">
            {/* 교육정보 검색결과 무한 스크롤 영역 */}
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

            {/* 자유게시판 검색결과 무한 스크롤 영역 */}
            {searchCategory === "posts" && data && (
              <>
                {data.pages.map((group, indx) => (
                  <Fragment key={indx + "page" + searchCategory}>
                    {group.data.map((post) => (
                      <PostItem
                        key={post.id + searchCategory}
                        post={post as IPostsData}
                      />
                    ))}
                  </Fragment>
                ))}
              </>
            )}
          </ul>

          {/* fetchNextPage 를 트리거 하기 위한 태그 */}
          <div
            ref={ref}
            className="col-center w-full rounded-full border px-4 py-1"
          >
            <span>
              {searchKeyword === ""
                ? "검색하신 결과가 보이는 곳입니다."
                : hasNextPage
                ? "더보기"
                : "마지막 검색 결과입니다."}
            </span>
          </div>

          {/* 최상단 이동 버튼 */}
          <ScrollButton />
        </>
      )}
    </section>
  );
}

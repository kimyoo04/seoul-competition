import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Card";
import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { fetchEducations } from "@api/fetchEducations";

export default function Educations() {
  const dispatch = useAppDispatch();
  const { educations, error, hasMore, page, status } = useAppSelector(
    (state) => state.education
  );

  // 최초 교육들 API 요청
  useEffect(() => {
    dispatch(fetchEducations(page));
  }, [dispatch]);

  // 추가 교육들 API 요청
  const fetchMoreCards = () => {
    if (hasMore) {
      dispatch(fetchEducations(page));
    }
  };

  return (
    <div className="w-screen h-screen px-4 bg-gray_4">
      {/* 교육 무한 스크롤 영역 */}
      <InfiniteScroll
        dataLength={educations.length}
        next={fetchMoreCards}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {educations.map((education) => (
            <Card key={education.id} education={education} />
          ))}
        </div>
      </InfiniteScroll>

      {/* fetch 에러 발생시 화면 출력 */}
      {error && <p className="text-alert_danger">{error}</p>}

      {/* 최상단 이동 버튼 */}
      <ScrollButton />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { readEducationDetail } from "@api/educations/readEducationDetail";
import { IEducationDetail } from "@type/educationDetail";

import Loading from "@components/Loading";
import ScrollButton from "@components/ScrollButton";

import Content from "./EducationDetailItem/content";

export default function EducationDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery<IEducationDetail>(
    ["educationDetail", id],
    () => readEducationDetail(id)
  );

  return (
    <>
      {/* 로딩 시 로딩 화면 표시 */}
      {isLoading && <Loading />}

      {/* 에러 발생 시 에러 메시지 표시 */}
      {error && <p className="text-alert_danger">문제가 발생했습니다.</p>}

      {/* 데이터가 있을 경우 화면 표시 */}
      {data && (
        <div className="w-full px-4">
          <div className="mx-auto my-8 max-w-screen-lg">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              {/* 교육 정보 영역 */}
              <Content data={data} />

              {/* 댓글 영역 */}
              <div>
                {/* 댓글 입력 필드 */}
                {/* <CommentFields /> */}

                {/* 댓글 목록 */}
                {/* <Comments data={data} /> */}
              </div>
            </div>
          </div>
          {/* 최상단 이동 버튼 */}
          <ScrollButton />
        </div>
      )}
    </>
  );
}

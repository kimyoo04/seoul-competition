import Loading from "@components/Loading";
import Content from "./EducationDetailItem/content";
import Comments from "@components/Comments";
import ScrollButton from "@components/ScrollButton";
import UserForm from "@components/UserForm";

import { useAppSelector } from "@toolkit/hook";
import { useReadEductionDetail } from "@api/educations/readEducationDetail";

export default function EducationDetail({ id }: { id: string }) {
  const showModal = useAppSelector((state) => state.userForm.showModal);

  const { data, isLoading, error } = useReadEductionDetail(id);

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
              <Comments data={data.reviews} />
            </div>
          </div>
          {/* 최상단 이동 버튼 */}
          <ScrollButton />

          {/* 유저폼 모달 */}
          {showModal && <UserForm />}
        </div>
      )}
    </>
  );
}

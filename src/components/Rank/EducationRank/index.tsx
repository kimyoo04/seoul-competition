import EducationRankList from "./EducationRankList";
import InterestDropDown from "../DropdownItems/InterestDropDown";
import { useReadEducationInterestRank } from "@api/rank/readEducationInterestRank";

export default function EducationRank() {
  const { data, isLoading, isError } = useReadEducationInterestRank();

  return (
    <section>
      {/* //! 유저 유무에 따른 연령대별 토글 버튼 */}
      {isLoading ? (
        <div></div>
      ) : isError ? (
        <div>유저 정보를 받지 못했습니다.</div>
      ) : (
        data.user && <InterestDropDown />
      )}

      {/* //! 교육정보 최다조회 게시글 Top5 */}
      <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
        <h3 className="mb-4 text-center text-lg font-medium">
          지난주에 가장 인기 있던 교육 정보예요.
        </h3>

        {isLoading ? (
          <div></div>
        ) : isError ? (
          <div>에러가 발생했습니다.</div>
        ) : (
          data && (
            <>
              {data.data.length > 0 ? (
                <EducationRankList data={data.data} />
              ) : (
                <div>지난주 기록이 없습니다.</div>
              )}
            </>
          )
        )}
      </div>
    </section>
  );
}

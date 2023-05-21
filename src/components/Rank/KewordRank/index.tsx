import PieChart from "./PieChart";
import AgeDropDown from "../DropdownItems/AgeDropDown";
import { useReadKeywordAgeRank } from "@api/rank/readKeywordAgeRank";

export default function KeywordRank() {
  const { data, isLoading, isError } = useReadKeywordAgeRank();

  return (
    <section>
      {/* //! 유저 유무에 따른 연령대별 토글 버튼 */}
      {isLoading ? (
        <div></div>
      ) : isError ? (
        <div>유저 정보를 받지 못했습니다.</div>
      ) : (
        data.user && <AgeDropDown />
      )}

      {/* //! 교육정보 최다검색 키워드 Top5 */}
      <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
        <h3 className="mb-4 text-center text-lg font-medium">
          지난주에 가장 많이 검색된 단어예요.
        </h3>

        {isLoading ? (
          <div></div>
        ) : isError ? (
          <div>에러가 발생했습니다.</div>
        ) : (
          data && (
            <>
              {data.data.length > 0 ? (
                <PieChart data={data.data} />
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

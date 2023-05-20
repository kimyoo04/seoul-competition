import PieChart from "./PieChart";
import AgeToggle from "../DropdownItems/AgeToggle";
import { rankEducationUserKeywords } from "public/data/rankingData";

export default function KeywordRank() {
  const data = rankEducationUserKeywords;
  const user = data.user;

  return (
    <>
      {/* 유저 정보가 있는 경우 */}
      {user && (
        <>
          {/* 연령대 토글 버튼 */}
          <AgeToggle />
          <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
            {/* 연령대별 교육정보 최다 검색 키워드 Top5 */}
            <div className="mb-4 text-center text-lg font-medium">
              지난주에 가장 많이 검색된 단어예요.
            </div>

            {/* 파이 차트 시각화 */}
            <PieChart data={data.data} />
          </div>
        </>
      )}

      {/* 유저 정보가 없는 경우 */}
      {!user && (
        <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
          {/* 교육정보 최다 검색 키워드 Top5 */}
          <div className="mb-4 text-center text-lg font-medium">
            지난주에 가장 많이 검색된 단어예요.
          </div>

          {/* 파이 차트 시각화 */}
          <PieChart data={data.data} />
        </div>
      )}
    </>
  );
}

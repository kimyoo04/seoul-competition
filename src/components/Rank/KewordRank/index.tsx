import PieChart from "./PieChart";
import AgeDropDown from "../DropdownItems/AgeDropDown";
import { rankEducationUserKeywords } from "public/data/rankingData";

export default function KeywordRank() {
  const data = rankEducationUserKeywords;
  const user = data.user;

  return (
    <section>
      {/* 유저 정보가 있는 경우 */}
      {user && <AgeDropDown />}

      {/* 연령대별 교육정보 최다 검색 키워드 Top5 */}
      <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
        <h3 className="mb-4 text-center text-lg font-medium">
          지난주에 가장 많이 검색된 단어예요.
        </h3>

        {/* 파이 차트 시각화 */}
        <PieChart data={data.data} />
      </div>
    </section>
  );
}

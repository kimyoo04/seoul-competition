import { rankEducationUserData } from "public/data/rankingData";
import EducationRankList from "./EducationRankList";
import InterestDropDown from "../DropdownItems/InterestDropDown";

export default function EducationRank() {
  // 더미 데이터
  const data = rankEducationUserData.data;
  const user = rankEducationUserData.user;

  return (
    <section>
      {/* //! 유저 유무에 따른 관심사 토글 버튼 */}
      {user && <InterestDropDown />}

      {/* 교육정보 최다조회 게시글 Top5 */}
      <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
        <h3 className="mb-4 text-center text-lg font-medium">
          지난주에 가장 인기 있던 교육 정보예요.
        </h3>

        {/* 교육 정보 리스트 */}
        <EducationRankList data={data} />
      </div>
    </section>
  );
}

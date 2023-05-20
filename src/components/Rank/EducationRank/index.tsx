import { rankEducationUserData } from "public/data/rankingData";
import EducationRankList from "./EducationRankList";
import InterestToggle from "../DropdownItems/InterestToggle";

export default function EducationRank() {
  // 더미 데이터
  const data = rankEducationUserData.data;
  const user = rankEducationUserData.user;

  return (
    <>
      {user && (
        <>
          {/* 관심사 토글 버튼 */}
          <InterestToggle />
          <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
            {/* 교육정보 최다조회 게시글 Top5 */}
            <div className="mb-4 text-center text-lg font-medium">
              지난주에 가장 인기 있던 교육 정보예요.
            </div>

            {/* 교육 정보 리스트 */}
            <EducationRankList data={data}/>
          </div>
        </>
      )}
      {!user && (
        <div className="mb-8 rounded-2xl bg-main_color/5 p-4 shadow-md">
          {/* 교육정보 최다조회 게시글 Top5 */}
          <div className="mb-4 text-center text-lg font-medium">
            지난주에 가장 인기 있던 교육 정보예요.
          </div>

          {/* 교육 정보 리스트 */}
          <EducationRankList data={data}/>
        </div>
      )}
    </>
  );
}

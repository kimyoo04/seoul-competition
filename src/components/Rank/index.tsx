import EducationRank from "./EducationRank";
import KeywordRank from "./KewordRank";
import PostRank from "./PostRank";

export default function Rank() {
  return (
    <div>
      {/* 자유게시판 최다조회 게시글 Top5 */}
      <PostRank />

      {/* 교육정보 최다조회 게시글 Top5 */}
      <EducationRank />

      {/* 교육정보 최다 검색 키워드 Top5 */}
      <KeywordRank />
    </div>
  );
}

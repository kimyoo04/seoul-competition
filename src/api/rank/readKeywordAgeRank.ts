import { TAge } from "@type/userForm";
import axios from "axios";

export const readKeywordAgeRank = async (age: TAge) => {
  const params: { ages?: string } = {};

  //! age로 사용되던 값이 쿼리 파람에만 ages로 요청을 보냄
  if (age) params.ages = age; // 연령대가 있을 경우 params에 추가

  // 전체 혹은 연령대별 교육 정보 최다 검색 키워드 Top5
  try {
    const response = await axios.get("/educations/topFive/keyword", { params });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("readKeywordAgeRank 오류:", error);
    return false;
  }
};

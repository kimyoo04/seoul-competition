import { IMinMax } from "@type/rank";
import axios from "axios";

// 교육정보 최다검색 키워드 Top5 : 연령대별 데이터
export const readKeywordAgeRank = async ({ minAge, maxAge }: IMinMax) => {
  try {
    const response = await axios.get(
      `/educations/topFive/keyword?minAge=${minAge}&maxAge=${maxAge}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 오류:", error);
    return false;
  }
};

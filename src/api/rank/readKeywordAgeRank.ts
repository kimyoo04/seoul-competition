import { TAge } from "@type/userForm";
import axios from "axios";

export const readKeywordAgeRank = async (age: TAge) => {
  const params: { age?: string } = {};
  if (age) params.age = age;

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

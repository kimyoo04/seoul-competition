import axios from "axios";

// 교육정보 최다 검색 키워드 Top5 : 디폴트
export const readKeywordRank = async () => {
  try {
    const response = await axios.get(`/Keywords/topFive/keyword`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 오류:", error);
    return false;
  }
};

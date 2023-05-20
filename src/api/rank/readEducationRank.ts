import axios from "axios";

// 교육정보 최다조회 게시글 Top5 : 디폴트
export const readEducationRank = async () => {
  try {
    const response = await axios.get(`/educations/topFive/hits`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 오류:", error);
    return false;
  }
};

import axios from "axios";

// 관심사별 API 호출
export const readEducationInterestRank = async (interest: string) => {
  try {
    const response = await axios.get(
      `/educations/topFive/hits?interest=${interest}`
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 오류:", error);
    return false;
  }
};

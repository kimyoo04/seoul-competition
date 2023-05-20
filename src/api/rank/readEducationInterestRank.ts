import axios from "axios";

export const readEducationInterestRank = async (
  interest: string | null = null
) => {
  const params: { interest?: string } = {};
  if (interest) params.interest = interest;

  // 전체 혹은 관심사별 교육 정보 최다 조회 게시글 Top5
  try {
    const response = await axios.get(`/educations/topFive/hits`, {
      params,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("readEducationInterestRank 오류:", error);
    return false;
  }
};

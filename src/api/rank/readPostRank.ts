import axios from "axios";

// 자유게시판 최다조회 게시글 Top5 : 디폴트
export const readPostRank = async () => {
  try {
    const response = await axios.get(`/posts/topFive/hits`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("API 호출 오류:", error);
    return false;
  }
};

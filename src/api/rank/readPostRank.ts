import axios from "axios";

export const readPostRank = async () => {
  // 전체 자유게시판 최다 조회 게시글 Top5
  try {
    const response = await axios.get(`/posts/topFive/hits`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("readPostRank 오류:", error);
    return false;
  }
};
